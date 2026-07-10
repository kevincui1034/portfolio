const LINKS = [
  { label: "GITHUB ↗", href: "https://github.com/kevincui1034" },
  {
    label: "LINKEDIN ↗",
    href: "https://www.linkedin.com/in/kevincui-datascientist/",
  },
  { label: "X / TWITTER ↗", href: "https://x.com/kevincui_dev" },
  { label: "INSTAGRAM ↗", href: "https://www.instagram.com/aku.kevinc/" },
  { label: "TIKTOK ↗", href: "https://www.tiktok.com/@kevincuidev" },
  { label: "RESUME ↓", href: "/kevincui_resume.pdf" },
];

const Contact = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div
        className="ghost"
        data-ghost="0.12"
        style={{ bottom: "12vh", right: "-2vw" }}
        aria-hidden="true"
      >
        CONTACT
      </div>
      <div className="contact-inner reveal">
        <div className="eyebrow">( 07 ) · CONTACT</div>
        <h2 id="contact-heading" className="contact-head">
          Have a need? Let&rsquo;s build the answer.
        </h2>
        <a href="mailto:kevincui1034@gmail.com" className="contact-email">
          kevincui1034@gmail.com
        </a>
        <div className="contact-links">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bar">
        <span>© 2026 KEVIN CUI</span>
        <span>SAN JOSE, CALIFORNIA</span>
        <span>OPEN TO FULL-TIME</span>
      </div>
    </section>
  );
};

export default Contact;
