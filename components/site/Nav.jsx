const LINKS = [
  { n: "01", label: "ABOUT", href: "#about" },
  { n: "02", label: "EXPERIENCE", href: "#experience", hideSm: true },
  { n: "05", label: "WORK", href: "#highlights" },
  { n: "07", label: "CONTACT", href: "#contact" },
];

const Nav = () => {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="nav-brand">
        <span data-scramble-hover>KEVIN CUI</span> <b>{"//"}</b>{" "}
        <span className="brand-role" data-scramble-hover>
          AI ENGINEER
        </span>
      </a>
      <span className="nav-status" aria-hidden="true">
        <span className="pulse" />
        SYS.ONLINE
      </span>
      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#experience">WORK</a>
        <a href="#highlights">PROJECTS</a>
        <a href="#contact">CONTACT</a>
        <a
          href="/kevincui_resume.pdf"
          target="_blank"
          rel="noopener"
          className="nav-resume"
          data-magnetic
          data-cursor="PDF"
        >
          RESUME ↓
        </a>
      </div>
    </nav>
  );
};

export default Nav;
