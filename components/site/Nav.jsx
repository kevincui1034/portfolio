const Nav = () => {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="brand">
        KC
      </a>
      <div className="nav-links">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
        <a
          href="/kevincui_resume.pdf"
          target="_blank"
          rel="noopener"
          className="nav-resume"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Nav;
