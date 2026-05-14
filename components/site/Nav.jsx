"use client";

const links = [
  { label: "Experience", href: "#xp" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
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
  return (
    <nav className="nav-top">
      <div className="brand">Kevin</div>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => smoothScroll(e, l.href)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="cta"
        onClick={(e) => smoothScroll(e, "#contact")}
      >
        <span className="cta-long">Get in touch</span>
        <span className="cta-short">Contact</span>
      </a>
    </nav>
  );
};

export default Nav;
