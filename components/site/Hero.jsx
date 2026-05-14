"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const smoothScroll = (e, href) => {
  if (!href || !href.startsWith("#")) return;
  const t = document.querySelector(href);
  if (!t) return;
  e.preventDefault();
  window.scrollTo({
    top: t.getBoundingClientRect().top + window.scrollY - 32,
    behavior: "smooth",
  });
};

const useMagnetic = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px,${y * 0.4}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
};

const Hero = () => {
  const heroRef = useRef(null);
  const portraitRef = useRef(null);
  const ctaPrimaryRef = useRef(null);
  const ctaGhostRef = useRef(null);

  useMagnetic(ctaPrimaryRef);
  useMagnetic(ctaGhostRef);

  useEffect(() => {
    const hero = heroRef.current;
    const p = portraitRef.current;
    if (!hero || !p) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      p.style.transform = `perspective(1200px) rotateY(${
        -2 + x * -6
      }deg) rotateX(${1 + y * 5}deg) translate(${x * 8}px,${y * 6}px)`;
    };
    const onLeave = () => {
      p.style.transform = "";
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <div className="hero-grid">
        <div className="portrait reveal" ref={portraitRef}>
          <Image
            src="/headshot.png"
            alt="Kevin Cui"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <div className="stick">
            <span className="dot" />
            San Jose · CA
          </div>
          <div className="frame-meta">
            <span>KEVIN CUI</span>
            <span></span>
          </div>
        </div>

        <div className="hero-text reveal">
          <div className="small-mast">
            <span className="line" />
            <span>Portfolio · v.2026</span>
          </div>
          <h1>
            Kevin <span className="it">Cui</span>
          </h1>
          <p className="tagline">
            Full-stack software engineer.
            <br />
            Building <em>thoughtful</em> products with intelligence quietly
            inside.
          </p>
          <div className="meta-row">
            <div className="l">Role</div>
            <div className="v">Full-stack SWE · AI / Data</div>
            <div className="l">Based</div>
            <div className="v">San Jose, California</div>
            <div className="l">Degree</div>
            <div className="v">B.S. Data Science · Dec 2025</div>
            <div className="l">Currently</div>
            <div className="v">Open to conversation</div>
          </div>
          <div className="ctas">
            <a
              href="#projects"
              className="btn btn-primary magnetic"
              ref={ctaPrimaryRef}
              onClick={(e) => smoothScroll(e, "#projects")}
            >
              See selected work →
            </a>
            <a
              href="/kevincui_resume_swe.pdf"
              target="_blank"
              rel="noopener"
              className="btn btn-ghost magnetic"
              ref={ctaGhostRef}
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
