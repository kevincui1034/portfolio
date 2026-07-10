"use client";

import { useEffect, useRef } from "react";

/**
 * Ported from the Claude Design "Kevin Cui Portfolio" runtime.
 * Renders the fixed visual layers (Three.js wireframe terrain, ambient
 * particle field, scroll-progress bar, custom cursor) and drives:
 *  - reveal-on-scroll for every `.reveal` element (IntersectionObserver)
 *  - ghost section-title parallax (`[data-ghost]`)
 *  - hero content parallax + fade (`[data-hero-inner]`, `[data-hero-name]`)
 * Everything bails out under prefers-reduced-motion / touch pointers.
 */
const DesignRuntime = () => {
  const terrainRef = useRef(null);
  const particlesRef = useRef(null);
  const progressRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reveal-on-scroll works regardless of motion pref; under reduced motion
    // we simply mark everything visible immediately.
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (reduce) {
      revealEls.forEach((el) => el.classList.add("in"));
      return; // no terrain / particles / cursor / parallax
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));

    // ---- shared pointer / scroll state (refs, not React state) ----
    const finePointer =
      !!window.matchMedia && window.matchMedia("(pointer:fine)").matches;
    const state = {
      mouse: { x: 0, y: 0 },
      mousePx: { x: -100, y: -100 },
      ringPos: { x: -100, y: -100 },
      hover: false,
      seen: false,
      scrollY: window.scrollY || 0,
    };

    const onMove = (e) => {
      state.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      state.mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      state.mousePx.x = e.clientX;
      state.mousePx.y = e.clientY;
      state.seen = true;
    };
    const onScroll = () => {
      state.scrollY = window.scrollY;
    };
    const onOver = (e) => {
      state.hover = !!(e.target.closest && e.target.closest("a, button"));
    };
    const onLeaveDoc = () => {
      state.seen = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeaveDoc);

    // hide the native cursor on fine pointers only
    let cursorStyleEl = null;
    if (finePointer) {
      cursorStyleEl = document.createElement("style");
      cursorStyleEl.textContent =
        "@media (pointer:fine){*{cursor:none !important}}";
      document.head.appendChild(cursorStyleEl);
    }

    const ghostEls = Array.from(document.querySelectorAll("[data-ghost]"));
    const heroInner = document.querySelector("[data-hero-inner]");
    const heroName = document.querySelector("[data-hero-name]");

    // ---- ambient particle field (2D canvas) ----
    const pc = particlesRef.current;
    let pctx = null;
    let parts = null;
    if (pc) {
      pctx = pc.getContext("2d");
      pc.width = window.innerWidth;
      pc.height = window.innerHeight;
      parts = [];
      for (let i = 0; i < 150; i++) {
        parts.push({
          x: Math.random(),
          y: Math.random(),
          r: 0.7 + Math.random() * 1.7,
          d: 0.3 + Math.random() * 0.7,
          tw: Math.random() * Math.PI * 2,
        });
      }
    }

    // ---- Three.js terrain (loaded async; tick guards on readiness) ----
    let alive = true;
    let raf = 0;
    let renderer = null;
    let three = null;
    let mesh = null;
    let mat = null;
    let pos = null;
    let base = null;
    let scene = null;
    let camera = null;

    const onResize = () => {
      if (renderer && camera) {
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      if (pc) {
        pc.width = window.innerWidth;
        pc.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", onResize);

    import("three")
      .then((THREE) => {
        if (!alive || !terrainRef.current) return;
        three = THREE;
        renderer = new THREE.WebGLRenderer({
          canvas: terrainRef.current,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505);
        scene.fog = new THREE.Fog(0x050505, 8, 42);
        camera = new THREE.PerspectiveCamera(
          60,
          window.innerWidth / window.innerHeight,
          0.1,
          100
        );
        camera.position.set(0, 5.2, 15);

        const geo = new THREE.PlaneGeometry(70, 70, 110, 110);
        geo.rotateX(-Math.PI / 2);
        pos = geo.attributes.position;
        base = pos.array.slice();
        mat = new THREE.MeshBasicMaterial({
          color: 0xdedee2,
          wireframe: true,
          transparent: true,
          opacity: 0.35,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.position.y = -1.4;
        scene.add(mesh);
      })
      .catch(() => {
        /* terrain is decorative — ignore load failures */
      });

    const noise = (x, z, t) =>
      Math.sin(x * 0.32 + t * 0.9) * 0.55 +
      Math.sin(z * 0.28 + t * 0.6) * 0.5 +
      Math.sin((x + z) * 0.14 + t * 0.35) * 1.1 +
      Math.sin(Math.sqrt(x * x + z * z) * 0.35 - t * 0.8) * 0.45;

    const start = performance.now();

    const updateCursor = () => {
      const dot = cursorDotRef.current;
      const ring = cursorRingRef.current;
      if (!dot || !ring) return;
      if (!finePointer || !state.seen) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        return;
      }
      const x = state.mousePx.x;
      const y = state.mousePx.y;
      state.ringPos.x += (x - state.ringPos.x) * 0.16;
      state.ringPos.y += (y - state.ringPos.y) * 0.16;
      const scale = state.hover ? 1.9 : 1;
      dot.style.opacity = state.hover ? "0" : "1";
      dot.style.transform =
        "translate3d(" + x + "px," + y + "px,0) translate(-50%,-50%)";
      ring.style.opacity = "1";
      ring.style.transform =
        "translate3d(" +
        state.ringPos.x +
        "px," +
        state.ringPos.y +
        "px,0) translate(-50%,-50%) scale(" +
        scale +
        ")";
      ring.style.background = state.hover
        ? "rgba(255,255,255,.12)"
        : "transparent";
    };

    const tick = () => {
      if (!alive) return;
      raf = requestAnimationFrame(tick);
      const t = (performance.now() - start) / 1000;
      const vh = window.innerHeight || 800;
      const p = Math.min(state.scrollY / vh, 1.4);

      updateCursor();

      // ghost section titles — slow parallax against their own section
      for (const g of ghostEls) {
        const par = g.parentElement;
        if (!par) continue;
        const rect = par.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > vh + 80) continue;
        const f = parseFloat(g.getAttribute("data-ghost")) || 0.15;
        g.style.transform =
          "translateY(" +
          ((rect.top + rect.height / 2 - vh / 2) * f).toFixed(1) +
          "px)";
      }

      // ambient particles — fade in past the hero, drift + scroll parallax
      if (pctx && pc) {
        const w = pc.width;
        const h = pc.height;
        const vis = Math.max(0, Math.min(1, (state.scrollY / vh - 0.45) * 2));
        pc.style.opacity = String(vis);
        if (vis > 0.01) {
          pctx.clearRect(0, 0, w, h);
          pctx.fillStyle = "#ffffff";
          for (const q of parts) {
            const yy =
              (((q.y * h - state.scrollY * q.d * 0.18 - t * 6 * q.d) % h) + h) %
              h;
            const xx = q.x * w + Math.sin(t * 0.22 + q.tw) * 34 * q.d;
            pctx.globalAlpha =
              (0.24 + 0.36 * q.d) * (0.7 + 0.3 * Math.sin(t * 0.9 + q.tw));
            pctx.beginPath();
            pctx.arc(xx, yy, q.r, 0, 6.2832);
            pctx.fill();
          }
          pctx.globalAlpha = 1;
        }
      }

      // scroll-progress bar
      if (progressRef.current) {
        const doc = document.documentElement;
        const total = doc.scrollHeight - vh;
        progressRef.current.style.width =
          (total > 0 ? (state.scrollY / total) * 100 : 0) + "%";
      }

      // hero content parallax + fade
      if (heroInner) {
        heroInner.style.transform =
          "translateY(" + state.scrollY * 0.22 + "px)";
        heroInner.style.opacity = String(Math.max(0, 1 - p * 1.25));
      }
      if (heroName) {
        heroName.style.transform = "translateY(" + state.scrollY * 0.12 + "px)";
        heroName.style.opacity = String(Math.max(0, 1 - p * 1.25));
      }

      // terrain — fade out past hero; skip render when invisible
      const terrain = terrainRef.current;
      if (terrain) {
        const fade = Math.max(0, 1 - p * 0.85);
        terrain.style.opacity = String(fade);
        if (fade > 0.01 && renderer && three && pos && mesh && camera) {
          mat.opacity = 0.35;
          const amp = 1.0 + Math.sin(t * 0.25) * 0.35 + p * 1.6;
          const arr = pos.array;
          for (let i = 0; i < arr.length; i += 3) {
            arr[i + 1] = noise(base[i], base[i + 2], t) * amp;
          }
          pos.needsUpdate = true;

          camera.position.x += (state.mouse.x * 2.2 - camera.position.x) * 0.04;
          const targetY = 5.2 - state.mouse.y * 1.2 + p * 4.5;
          camera.position.y += (targetY - camera.position.y) * 0.06;
          camera.position.z = 15 - p * 3.5;
          camera.lookAt(0, 0.5 - p * 2, -6);
          renderer.render(scene, camera);
        }
      }
    };
    tick();

    return () => {
      alive = false;
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveDoc);
      if (cursorStyleEl) cursorStyleEl.remove();
      if (raf) cancelAnimationFrame(raf);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={terrainRef} className="dc-terrain" aria-hidden="true" />
      <canvas ref={particlesRef} className="dc-particles" aria-hidden="true" />
      <div ref={progressRef} className="dc-progress" aria-hidden="true" />
      <div ref={cursorRingRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default DesignRuntime;
