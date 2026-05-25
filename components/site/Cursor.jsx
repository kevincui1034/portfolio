"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = 'a, button, .proj, .magnetic, [data-cursor="big"]';

const Cursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    if (reduce || noHover) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let tx = 0;
    let ty = 0;
    let rx = 0;
    let ry = 0;
    let lastTrailAt = 0;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
      const now = performance.now();
      if (now - lastTrailAt > 28) {
        lastTrailAt = now;
        const t = document.createElement("div");
        t.className = "cur-trail";
        t.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
        document.body.appendChild(t);
        requestAnimationFrame(() => {
          t.style.transition = "opacity .7s, transform .7s";
          t.style.opacity = "0";
          t.style.transform = `${t.style.transform} scale(.2)`;
        });
        setTimeout(() => t.remove(), 800);
      }
    };

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => ring.classList.add("hover");
    const onLeave = () => ring.classList.remove("hover");

    const attachHovers = () => {
      const els = document.querySelectorAll(HOVER_SELECTOR);
      els.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return els;
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    let hoverEls = attachHovers();

    const isTrailNode = (node) =>
      node.nodeType === 1 && node.classList?.contains("cur-trail");
    const mo = new MutationObserver((mutations) => {
      const hasRealChange = mutations.some((m) => {
        for (const n of m.addedNodes) if (!isTrailNode(n)) return true;
        for (const n of m.removedNodes) if (!isTrailNode(n)) return true;
        return false;
      });
      if (!hasRealChange) return;
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      hoverEls = attachHovers();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cur-ring" ref={ringRef} aria-hidden="true" />
      <div className="cur-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
};

export default Cursor;
