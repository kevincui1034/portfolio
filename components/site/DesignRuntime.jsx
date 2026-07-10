"use client";

import { useEffect } from "react";

/*
  DesignRuntime — the only client component.

  Renders the fixed visual layers (WebGL particle terrain, noise, viewport
  frame + telemetry, scroll progress, custom cursor, boot intro) and runs a
  single requestAnimationFrame loop that drives every runtime behavior:

  - reveal-on-scroll (.reveal -> .in via IntersectionObserver)
  - text scramble decode ([data-scramble], hover re-scramble on [data-scramble-hover])
  - custom crosshair cursor with contextual labels ([data-cursor])
  - magnetic pull on [data-magnetic]
  - 3D tilt + pointer spotlight on [data-tilt]
  - velocity-reactive marquee ([data-marquee] > [data-mq-track])
  - sticky-stack cover scaling ([data-stack-panel])
  - experience timeline draw ([data-timeline]) and node lighting ([data-tl-item])
  - scroll progress, section telemetry, live clock
  - hero letter parallax ([data-hero-name] with per-letter --d depths)
  - Three.js terrain (dynamically imported; failure is swallowed — decorative)

  Bails out entirely under prefers-reduced-motion (everything revealed, fx
  layers hidden via html.reduced) and disables the cursor on coarse pointers.
*/

const BOOT_LINES = [
  "/// KC.SYS — INITIALIZING",
  "/// LOADING: AGENTS ............ OK",
  "/// LOADING: RAG PIPELINE ...... OK",
  "/// LOADING: RENDER QUEUE ...... OK",
  "/// ENV: SAN_JOSE_CA",
  "/// STATUS: OPEN_TO_FULL_TIME",
];

const SCRAMBLE_CHARS = "█▓▒░<>/|=+*#01";

export default function DesignRuntime() {
  useEffect(() => {
    const doc = document.documentElement;
    const disposers = [];
    const on = (t, ev, fn, opts) => {
      t.addEventListener(ev, fn, opts);
      disposers.push(() => t.removeEventListener(ev, fn, opts));
    };

    const startClock = () => {
      const tick = () => {
        const t = new Date();
        const pad = (n) => String(n).padStart(2, "0");
        const s = `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
        document
          .querySelectorAll("[data-clock]")
          .forEach((el) => (el.textContent = s));
      };
      tick();
      const iv = setInterval(tick, 1000);
      disposers.push(() => clearInterval(iv));
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---------- reduced motion: reveal everything, animate nothing ---------- */
    if (reduced) {
      doc.classList.add("reduced", "intro-done");
      doc.classList.remove("intro-pending");
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("in"));
      document
        .querySelectorAll("[data-tl-item]")
        .forEach((el) => el.classList.add("lit"));
      document
        .querySelectorAll("[data-timeline]")
        .forEach((el) => el.style.setProperty("--tl", "1"));
      startClock();
      return () => disposers.forEach((d) => d());
    }

    /* ---------- shared state ---------- */
    const fine = window.matchMedia("(pointer: fine)").matches;
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let scrollY = window.scrollY;
    let lastScrollY = scrollY;
    let smoothVel = 0;
    let px = vw / 2; // raw pointer (viewport px)
    let py = vh / 2;
    let cx = px; // dot, fast lerp
    let cy = py;
    let ringX = px; // ring, slow lerp
    let ringY = py;
    let nx = 0; // normalized pointer -1..1, smoothed (parallax / camera)
    let ny = 0;
    let tnx = 0;
    let tny = 0;
    let rafId = 0;
    let lastT = performance.now();
    let running = true;

    /* ---------- element handles ---------- */
    const fxBg = document.querySelector("[data-fx-bg]");
    const canvas = document.querySelector("[data-fx-canvas]");
    const progressEl = document.querySelector("[data-progress-root]");
    const roScroll = document.querySelector("[data-ro-scroll]");
    const roSection = document.querySelector("[data-ro-section]");
    const dotWrap = document.querySelector("[data-cursor-dot]");
    const ringWrap = document.querySelector("[data-cursor-ring]");
    const cursorLabel = document.querySelector("[data-cursor-label-el]");
    const heroName = document.querySelector("[data-hero-name]");
    const timeline = document.querySelector("[data-timeline]");
    const stackPanels = Array.from(
      document.querySelectorAll("[data-stack-panel]")
    );
    const magnets = Array.from(
      document.querySelectorAll("[data-magnetic]")
    ).map((el) => ({ el, x: 0, y: 0 }));
    const marquees = Array.from(
      document.querySelectorAll("[data-marquee]")
    ).map((row) => ({
      row,
      track: row.querySelector("[data-mq-track]"),
      dir: Number(row.dataset.dir || -1),
      speed: Number(row.dataset.speed || 60),
      offset: 0,
      period: 0,
    }));
    const navLinks = Array.from(
      document.querySelectorAll('.nav-links a[href^="#"]')
    );

    const measureMarquees = () => {
      marquees.forEach((m) => {
        if (!m.track) return;
        const first = m.track.querySelector("span");
        m.period = first ? first.offsetWidth : m.track.scrollWidth / 2;
      });
    };
    measureMarquees();

    startClock();

    /* ---------- text scramble ---------- */
    const scramble = (el, duration = 950) => {
      if (el.__scrambling) return;
      if (!el.dataset.text) el.dataset.text = el.textContent;
      const text = el.dataset.text;
      const len = text.length;
      el.__scrambling = true;
      const start = performance.now();
      const step = (now) => {
        if (!running) {
          el.textContent = text;
          el.__scrambling = false;
          return;
        }
        const p = Math.min(1, (now - start) / duration);
        const solid = Math.floor(p * len);
        let out = text.slice(0, solid);
        for (let i = solid; i < len; i++) {
          const ch = text[i];
          out +=
            ch === " "
              ? " "
              : SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0];
        }
        el.textContent = out;
        if (p < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = text;
          el.__scrambling = false;
        }
      };
      requestAnimationFrame(step);
    };

    document.querySelectorAll("[data-scramble-hover]").forEach((el) => {
      on(el, "pointerenter", () => scramble(el, 500));
    });

    /* ---------- reveal on scroll ---------- */
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          entry.target
            .querySelectorAll("[data-scramble]")
            .forEach((s) => scramble(s));
          if (entry.target.matches("[data-scramble]")) scramble(entry.target);
          revealIO.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));
    disposers.push(() => revealIO.disconnect());

    /* ---------- timeline nodes ---------- */
    const nodeIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("lit");
            nodeIO.unobserve(e.target);
          }
        }),
      { rootMargin: "-30% 0px -30% 0px" }
    );
    document
      .querySelectorAll("[data-tl-item]")
      .forEach((el) => nodeIO.observe(el));
    disposers.push(() => nodeIO.disconnect());

    /* ---------- section telemetry + nav active ---------- */
    const sections = Array.from(document.querySelectorAll("[data-section]"));
    const sectionIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (roSection) {
            roSection.textContent = `${el.dataset.idx || "00"} // ${
              el.dataset.label || el.id.toUpperCase()
            }`;
          }
          const target = el.dataset.nav || `#${el.id}`;
          navLinks.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === target);
          });
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    sections.forEach((s) => sectionIO.observe(s));
    disposers.push(() => sectionIO.disconnect());

    /* ---------- pointer tracking + cursor hover states ---------- */
    if (fine) doc.classList.add("has-cursor");

    on(document, "pointermove", (e) => {
      px = e.clientX;
      py = e.clientY;
      tnx = (e.clientX / vw) * 2 - 1;
      tny = (e.clientY / vh) * 2 - 1;
      if (fine) doc.classList.add("cursor-on");
    });

    on(document, "pointerout", (e) => {
      if (!e.relatedTarget) doc.classList.remove("cursor-on");
    });

    if (fine) {
      on(document, "pointerover", (e) => {
        const hit =
          e.target instanceof Element
            ? e.target.closest("a, button, [data-cursor]")
            : null;
        doc.classList.toggle("cursor-hover", !!hit);
        const label = hit ? hit.getAttribute("data-cursor") : "";
        if (label && cursorLabel) {
          cursorLabel.textContent = label;
          doc.classList.add("cursor-label-on");
        } else {
          doc.classList.remove("cursor-label-on");
        }
      });
    }

    /* ---------- tilt cards ---------- */
    const tilts = Array.from(document.querySelectorAll("[data-tilt]")).map(
      (el) => ({ el, rx: 0, ry: 0, trx: 0, tryy: 0, active: false })
    );
    tilts.forEach((t) => {
      const max = Number(t.el.dataset.tilt || 4.5);
      on(t.el, "pointermove", (e) => {
        const r = t.el.getBoundingClientRect();
        const ex = (e.clientX - r.left) / Math.max(r.width, 1);
        const ey = (e.clientY - r.top) / Math.max(r.height, 1);
        t.trx = (0.5 - ey) * max * 2;
        t.tryy = (ex - 0.5) * max * 2;
        t.active = true;
        t.el.style.setProperty("--mx", `${(ex * 100).toFixed(1)}%`);
        t.el.style.setProperty("--my", `${(ey * 100).toFixed(1)}%`);
      });
      on(t.el, "pointerleave", () => {
        t.trx = 0;
        t.tryy = 0;
      });
    });

    /* ---------- intro boot ---------- */
    if (doc.classList.contains("intro-pending")) {
      const logEl = document.querySelector("[data-intro-log]");
      const countEl = document.querySelector("[data-intro-count]");
      const barEl = document.querySelector("[data-intro-bar-root]");
      const t0 = performance.now();
      const DURATION = 1350;
      let lineIdx = 0;
      const bootStep = (now) => {
        if (!running) return;
        const p = Math.min(1, (now - t0) / DURATION);
        const eased = 1 - Math.pow(1 - p, 3);
        if (countEl) countEl.textContent = String(Math.round(eased * 100));
        if (barEl) barEl.style.setProperty("--ib", eased.toFixed(3));
        const wantLines = Math.min(
          BOOT_LINES.length,
          Math.floor(p * (BOOT_LINES.length + 1))
        );
        while (logEl && lineIdx < wantLines) {
          const div = document.createElement("div");
          div.textContent = BOOT_LINES[lineIdx];
          if (BOOT_LINES[lineIdx].includes("OK")) div.className = "ok";
          logEl.appendChild(div);
          lineIdx += 1;
        }
        if (p < 1) {
          requestAnimationFrame(bootStep);
        } else {
          try {
            sessionStorage.setItem("kc-boot", "1");
          } catch {}
          doc.classList.add("intro-leaving");
          setTimeout(() => {
            doc.classList.remove("intro-pending", "intro-leaving");
            doc.classList.add("intro-done");
          }, 730);
        }
      };
      requestAnimationFrame(bootStep);
    } else {
      const id = setTimeout(() => doc.classList.add("intro-done"), 80);
      disposers.push(() => clearTimeout(id));
    }

    /* ---------- three.js terrain (decorative; failures swallowed) ---------- */
    let three = null;
    let disposed = false;
    (async () => {
      try {
        if (!canvas) return;
        const THREE = await import("three");
        if (disposed) return;

        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.setSize(vw, vh, false);
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(58, vw / vh, 0.1, 140);
        camera.position.set(0, 7.2, 26);
        camera.lookAt(0, 0.4, -6);

        const COLS = 190;
        const ROWS = 120;
        const W = 88;
        const D = 56;
        const positions = new Float32Array(COLS * ROWS * 3);
        let i = 0;
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            positions[i++] = (c / (COLS - 1) - 0.5) * W;
            positions[i++] = 0;
            positions[i++] = (r / (ROWS - 1) - 0.5) * D - 8;
          }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const uniforms = {
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uVel: { value: 0 },
          uPR: { value: Math.min(window.devicePixelRatio || 1, 1.75) },
          uColA: { value: new THREE.Color(0.3, 0.35, 0.33) },
          uColB: { value: new THREE.Color(0.784, 0.961, 0.259) },
        };

        const mat = new THREE.ShaderMaterial({
          uniforms,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          vertexShader: `
            uniform float uTime;
            uniform vec2 uMouse;
            uniform float uVel;
            uniform float uPR;
            varying float vE;
            varying float vI;
            varying float vFog;

            vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
            float snoise(vec2 v){
              const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                                  -0.577350269189626, 0.024390243902439);
              vec2 i  = floor(v + dot(v, C.yy));
              vec2 x0 = v - i + dot(i, C.xx);
              vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
              vec4 x12 = x0.xyxy + C.xxzz;
              x12.xy -= i1;
              i = mod(i, 289.0);
              vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                       + i.x + vec3(0.0, i1.x, 1.0));
              vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                       dot(x12.zw,x12.zw)), 0.0);
              m = m*m;
              m = m*m;
              vec3 x = 2.0 * fract(p * C.www) - 1.0;
              vec3 h = abs(x) - 0.5;
              vec3 ox = floor(x + 0.5);
              vec3 a0 = x - ox;
              m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
              vec3 g;
              g.x  = a0.x  * x0.x  + h.x  * x0.y;
              g.yz = a0.yz * x12.xz + h.yz * x12.yw;
              return 130.0 * dot(m, g);
            }

            void main() {
              vec3 p = position;
              float t = uTime * 0.16;
              float n = snoise(p.xz * 0.05 + vec2(t, -t * 0.7));
              n += 0.55 * snoise(p.xz * 0.11 - vec2(t * 0.8, t * 0.5));
              n += 0.28 * snoise(p.xz * 0.24 + vec2(0.0, t * 1.4));
              float amp = 2.1 + uVel * 2.6;
              p.y += n * amp;
              float d = distance(p.xz, uMouse);
              float inf = smoothstep(8.5, 0.0, d);
              p.y += inf * (2.0 + 0.7 * sin(uTime * 3.2 - d * 1.4));
              vE = p.y;
              vI = inf;
              vec4 mv = modelViewMatrix * vec4(p, 1.0);
              gl_Position = projectionMatrix * mv;
              float size = 1.05 + max(p.y, 0.0) * 0.5 + inf * 1.6;
              gl_PointSize = min(size * uPR * (150.0 / -mv.z), 26.0 * uPR);
              vFog = smoothstep(-72.0, -13.0, mv.z) * smoothstep(-4.5, -9.5, mv.z);
            }
          `,
          fragmentShader: `
            precision mediump float;
            uniform vec3 uColA;
            uniform vec3 uColB;
            varying float vE;
            varying float vI;
            varying float vFog;
            void main() {
              vec2 c = gl_PointCoord - 0.5;
              float m = smoothstep(0.5, 0.06, length(c));
              float e = smoothstep(-2.4, 3.6, vE);
              vec3 col = mix(uColA, uColB, clamp(e * 0.8 + vI * 0.6, 0.0, 1.0));
              float a = m * vFog * (0.14 + e * 0.5 + vI * 0.55);
              if (a < 0.012) discard;
              gl_FragColor = vec4(col, a);
            }
          `,
        });

        const points = new THREE.Points(geo, mat);
        scene.add(points);

        three = {
          renderer,
          scene,
          camera,
          uniforms,
          geo,
          mat,
          rayV: new THREE.Vector3(),
          rayDir: new THREE.Vector3(),
        };
      } catch {
        /* decorative — never break the page over it */
      }
    })();

    /* ---------- resize / visibility ---------- */
    const onResize = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      measureMarquees();
      if (three) {
        three.camera.aspect = vw / vh;
        three.camera.updateProjectionMatrix();
        three.renderer.setSize(vw, vh, false);
      }
    };
    on(window, "resize", onResize);

    let hidden = false;
    on(document, "visibilitychange", () => {
      hidden = document.hidden;
      lastT = performance.now();
    });

    /* ---------- master loop ---------- */
    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp01 = (v) => Math.min(1, Math.max(0, v));
    let lastRoScroll = -1;
    let time = 0;

    const frame = (now) => {
      if (!running) return;
      rafId = requestAnimationFrame(frame);
      if (hidden) return;
      const dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;
      time += dt;

      scrollY = window.scrollY;
      const rawVel = (scrollY - lastScrollY) / Math.max(dt, 0.001); // px/s
      lastScrollY = scrollY;
      smoothVel = lerp(smoothVel, rawVel, Math.min(1, dt * 7));

      /* scroll progress + readout + canvas dim */
      const docH = document.documentElement.scrollHeight - vh;
      const sp = docH > 0 ? clamp01(scrollY / docH) : 0;
      if (progressEl) progressEl.style.setProperty("--sp", sp.toFixed(4));
      const pct = Math.round(sp * 100);
      if (roScroll && pct !== lastRoScroll) {
        lastRoScroll = pct;
        roScroll.textContent = String(pct).padStart(3, "0");
      }
      if (fxBg) {
        const dim = Math.max(0.32, 1 - (scrollY / Math.max(vh, 1)) * 0.8);
        fxBg.style.setProperty("--fxo", dim.toFixed(3));
      }

      /* cursor */
      if (fine) {
        cx = lerp(cx, px, Math.min(1, dt * 24));
        cy = lerp(cy, py, Math.min(1, dt * 24));
        ringX = lerp(ringX, px, Math.min(1, dt * 11));
        ringY = lerp(ringY, py, Math.min(1, dt * 11));
        if (dotWrap) {
          dotWrap.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
        }
        if (ringWrap) {
          ringWrap.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0)`;
        }
      }

      /* hero letter parallax */
      nx = lerp(nx, tnx, Math.min(1, dt * 5));
      ny = lerp(ny, tny, Math.min(1, dt * 5));
      if (heroName && scrollY < vh) {
        heroName.style.setProperty("--nx", nx.toFixed(3));
        heroName.style.setProperty("--ny", ny.toFixed(3));
      }

      /* magnetic */
      magnets.forEach((m) => {
        const r = m.el.getBoundingClientRect();
        const mxc = r.left + r.width / 2;
        const myc = r.top + r.height / 2;
        const dx = px - mxc;
        const dy = py - myc;
        const dist = Math.hypot(dx, dy);
        const radius = Math.max(r.width, r.height) * 1.4;
        let tx = 0;
        let ty = 0;
        if (fine && dist < radius) {
          const pull = (1 - dist / radius) * 0.42;
          tx = dx * pull;
          ty = dy * pull;
        }
        m.x = lerp(m.x, tx, Math.min(1, dt * 10));
        m.y = lerp(m.y, ty, Math.min(1, dt * 10));
        if (Math.abs(m.x) > 0.05 || Math.abs(m.y) > 0.05) {
          m.el.style.transform = `translate3d(${m.x.toFixed(1)}px, ${m.y.toFixed(1)}px, 0)`;
        } else if (m.el.style.transform) {
          m.el.style.transform = "";
        }
      });

      /* tilt */
      tilts.forEach((t) => {
        if (!t.active) return;
        t.rx = lerp(t.rx, t.trx, Math.min(1, dt * 12));
        t.ry = lerp(t.ry, t.tryy, Math.min(1, dt * 12));
        t.el.style.setProperty("--rx", `${t.rx.toFixed(2)}deg`);
        t.el.style.setProperty("--ry", `${t.ry.toFixed(2)}deg`);
        if (
          Math.abs(t.rx) < 0.02 &&
          Math.abs(t.ry) < 0.02 &&
          t.trx === 0 &&
          t.tryy === 0
        ) {
          t.active = false;
        }
      });

      /* marquee */
      const skew = Math.max(-9, Math.min(9, smoothVel * 0.008));
      marquees.forEach((m) => {
        if (!m.track || !m.period) return;
        m.offset += (m.speed + Math.min(Math.abs(smoothVel) * 0.14, 340)) * dt;
        const o = m.offset % m.period;
        m.track.style.transform = `translate3d(${(m.dir * o).toFixed(1)}px, 0, 0) skewX(${skew.toFixed(2)}deg)`;
      });

      /* sticky stack cover */
      for (let s = 0; s < stackPanels.length - 1; s++) {
        const nextRect = stackPanels[s + 1].getBoundingClientRect();
        const cover = clamp01(1 - nextRect.top / Math.max(vh, 1));
        stackPanels[s].style.setProperty("--cover", cover.toFixed(3));
      }

      /* timeline draw */
      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const prog = clamp01((vh * 0.72 - r.top) / Math.max(r.height, 1));
        timeline.style.setProperty("--tl", prog.toFixed(3));
      }

      /* three.js */
      if (three) {
        const u = three.uniforms;
        u.uTime.value = time;
        u.uVel.value = lerp(
          u.uVel.value,
          Math.min(Math.abs(smoothVel) / 2600, 1.1),
          Math.min(1, dt * 4)
        );
        // pointer -> world point on the y=0 plane
        const v = three.rayV.set(tnx, -tny, 0.5).unproject(three.camera);
        const dir = three.rayDir
          .copy(v)
          .sub(three.camera.position)
          .normalize();
        if (dir.y < -0.001) {
          const tHit = -three.camera.position.y / dir.y;
          const hx = three.camera.position.x + dir.x * tHit;
          const hz = three.camera.position.z + dir.z * tHit;
          u.uMouse.value.x = lerp(u.uMouse.value.x, hx, Math.min(1, dt * 6));
          u.uMouse.value.y = lerp(u.uMouse.value.y, hz, Math.min(1, dt * 6));
        }
        three.camera.position.x = lerp(
          three.camera.position.x,
          nx * 1.6,
          Math.min(1, dt * 3)
        );
        three.camera.position.y = 7.2 + clamp01(scrollY / Math.max(vh, 1)) * 2.4;
        three.camera.lookAt(0, 0.4, -6);
        three.renderer.render(three.scene, three.camera);
      }
    };
    rafId = requestAnimationFrame(frame);

    /* ---------- cleanup ---------- */
    return () => {
      running = false;
      disposed = true;
      cancelAnimationFrame(rafId);
      disposers.forEach((d) => d());
      if (three) {
        three.geo.dispose();
        three.mat.dispose();
        three.renderer.dispose();
      }
      doc.classList.remove(
        "has-cursor",
        "cursor-on",
        "cursor-hover",
        "cursor-label-on"
      );
    };
  }, []);

  return (
    <>
      <div className="fx-bg" data-fx-bg aria-hidden="true">
        <canvas data-fx-canvas />
      </div>
      <div className="fx-vignette" aria-hidden="true" />
      <div className="fx-noise" aria-hidden="true" />

      <div className="fx-frame" aria-hidden="true">
        <span className="tick tl" />
        <span className="tick tr" />
        <span className="tick bl" />
        <span className="tick br" />
        <span className="ro ro-scroll">
          SCR <b data-ro-scroll>000</b>%
        </span>
        <span className="ro ro-section" data-ro-section>
          00 // HERO
        </span>
        <span className="ro ro-coords">
          37.3382°N / 121.8863°W — SAN JOSE, CA
        </span>
        <span className="ro ro-clockside">
          LOCAL <b data-clock>--:--:--</b> / PORTFOLIO V2.026
        </span>
      </div>

      <div className="fx-progress" data-progress-root aria-hidden="true">
        <span />
      </div>

      <div className="cursor" aria-hidden="true">
        <div className="cursor-p" data-cursor-dot>
          <span className="cursor-dot" />
        </div>
        <div className="cursor-p" data-cursor-ring>
          <span className="cursor-ring">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="cursor-label" data-cursor-label-el />
        </div>
      </div>

      <div className="intro" aria-hidden="true">
        <div className="intro-inner">
          <div className="intro-log" data-intro-log />
          <div className="intro-count">
            <span data-intro-count>0</span>
          </div>
        </div>
        <div className="intro-bar" data-intro-bar-root>
          <span />
        </div>
      </div>
    </>
  );
}
