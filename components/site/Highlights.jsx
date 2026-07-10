import Image from "next/image";

const CASES = [
  {
    meta: "01 / 02 · FLAGSHIP · SINCE APR 2026 · SOLO",
    name: "JanusLabs",
    href: "https://januslabs.dev",
    linkLabel: "VISIT JANUSLABS.DEV ↗",
    description:
      "An AI marketing platform, built and sold direct to consumers. Around 67k lines across a 30-table Postgres schema, credit-ledger billing on idempotent Stripe webhooks, and a unified render queue that debits at enqueue and refunds on failure. It scrapes TikTok, Reels and Shorts trends, turns them into on-brand scripts, and generates AI video across a dozen image and video models.",
    tags: ["Next.js", "TypeScript", "Drizzle", "Supabase", "Stripe", "Redis"],
    image: "/januslabs.png",
    reverse: false,
  },
  {
    meta: "02 / 02 · JUL 2026 · SOLO",
    name: "ProofLoop",
    href: "https://proofloop-alpha.vercel.app/",
    linkLabel: "VISIT PROOFLOOP ↗",
    description:
      "A correctness gate for AI-written code. It wraps your deploy command and only lets it run once deterministic checks pass: missing env vars, unrun tests, hardcoded secrets, pending migrations, each with file-and-line proof. Every diagnosis is logged to memory, so the same failure is caught instantly next time. Backed by around 360 tests.",
    tags: ["Python", "Typer", "pytest", "Claude Code"],
    image: "/proofloop.png",
    reverse: true,
  },
];

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="highlights"
      aria-labelledby="highlights-heading"
    >
      <div
        className="ghost"
        data-ghost="0.15"
        style={{ top: "3vh", left: "-3vw" }}
        aria-hidden="true"
      >
        HIGHLIGHTS
      </div>

      <div className="hl-header reveal">
        <div className="hl-header-left">
          <div className="eyebrow">( 05 ) · HIGHLIGHTS</div>
          <h2 id="highlights-heading" className="hl-title">
            Selected work
          </h2>
        </div>
        <div className="hl-header-note">THE TWO I&rsquo;D SHOW FIRST</div>
      </div>

      {CASES.map((c) => (
        <div key={c.name} className={c.reverse ? "case reverse" : "case"}>
          <div className="case-text reveal">
            <div className="case-meta">{c.meta}</div>
            <h3 className="case-title">{c.name}</h3>
            <p className="case-desc">{c.description}</p>
            <div className="case-tags">
              {c.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={c.href}
              target="_blank"
              rel="noopener"
              className="case-link"
            >
              {c.linkLabel}
            </a>
          </div>
          <div className="case-media reveal" style={{ transitionDelay: "150ms" }}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener"
              className="media-frame"
              aria-label={`Visit ${c.name}`}
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Highlights;
