const links = [
  {
    label: "Email",
    value: "kevincui1034@gmail.com",
    href: "mailto:kevincui1034@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "@kevincui1034",
    href: "https://github.com/kevincui1034",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "kevincui-datascientist",
    href: "https://www.linkedin.com/in/kevincui-datascientist/",
    external: true,
  },
  {
    label: "X / Twitter",
    value: "@kevincui_ai",
    href: "https://x.com/kevincui_ai",
    external: true,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-card reveal">
        <div className="section-label" style={{ marginBottom: "18px" }}>
          <span className="num">04</span>
          <span>Contact</span>
        </div>
        <h2 id="contact-heading">
          Let&rsquo;s build <em>something cool.</em>
        </h2>
        <p>
          Always up for a conversation about thoughtful software, AI products,
          data systems, or any project where the model and the interface have
          to think as one piece.
        </p>
        <div className="contact-list">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noopener" }
                : {})}
            >
              <div className="lbl">{l.label}</div>
              <div className="val">
                <span>{l.value}</span>
                <span className="arr" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
