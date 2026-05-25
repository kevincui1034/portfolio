"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["xp", "projects", "skills", "contact"];

const links = [
  { label: "Experience", href: "#xp", id: "xp" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Stack", href: "#skills", id: "skills" },
];

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

const Nav = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (inView[0]) setActive(inView[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="nav-top" aria-label="Primary">
      <div className="brand">Kevin</div>
      <ul>
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => smoothScroll(e, l.href)}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "true" : undefined}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
      <a
        href="#contact"
        className={`cta${active === "contact" ? " active" : ""}`}
        onClick={(e) => smoothScroll(e, "#contact")}
        aria-current={active === "contact" ? "true" : undefined}
      >
        <span className="cta-long">Get in touch</span>
        <span className="cta-short">Contact</span>
      </a>
    </nav>
  );
};

export default Nav;
