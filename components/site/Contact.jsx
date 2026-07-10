const LINKS = [
  { n: "01", label: "GITHUB", href: "https://github.com/kevincui1034" },
  {
    n: "02",
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/kevincui-datascientist/",
  },
  { n: "03", label: "X / TWITTER", href: "https://x.com/kevincui_dev" },
  { n: "04", label: "INSTAGRAM", href: "https://www.instagram.com/aku.kevinc/" },
  { n: "05", label: "TIKTOK", href: "https://www.tiktok.com/@kevincuidev" },
  { n: "06", label: "RESUME", href: "/kevincui_resume.pdf" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact"
      data-section
      data-contact-scrub
      data-idx="07"
      data-label="CONTACT"
      aria-labelledby="contact-heading"
    >
      <p className="contact-kicker">
        07 // CONTACT — <b>SYS.READY</b>
      </p>

      <h2 id="contact-heading" className="contact-head">
        <span className="contact-line small">Have a need?</span>
        <span className="contact-line big">
          Let&rsquo;s build <em>the answer.</em>
        </span>
      </h2>

      <div className="contact-cta">
        <a
          href="mailto:kevincui1034@gmail.com"
          className="btn btn-solid btn-lg"
          data-magnetic
          data-cursor="SEND"
        >
          <span>KEVINCUI1034@GMAIL.COM →</span>
        </a>
      </div>

      <div className="contact-links">
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener">
            <sup>{l.n}</sup>
            <span data-scramble-hover>{l.label} ↗</span>
          </a>
        ))}
      </div>

      <footer className="footer-bar">
        <span>© 2026 KEVIN CUI</span>
        <span>SAN JOSE, CALIFORNIA</span>
        <span>OPEN TO FULL-TIME</span>
        <span>
          LOCAL{" "}
          <span className="clock" data-clock>
            --:--:--
          </span>
        </span>
      </footer>
    </section>
  );
};

export default Contact;
