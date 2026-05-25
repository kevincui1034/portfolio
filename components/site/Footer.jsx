"use client";

const Footer = () => {
  const handleTop = (e) => {
    e.preventDefault();
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="site-footer">
      <span>© 2026 · Kevin Cui · San Jose, CA</span>
      <button type="button" className="back-to-top" onClick={handleTop}>
        <span>Return to top</span>
        <span className="arr" aria-hidden="true">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
