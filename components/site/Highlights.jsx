import Image from "next/image";

const CASES = [
  {
    meta: (
      <>
        CASE 01/02 · <b>FLAGSHIP</b> · SINCE APR 2026 · SOLO
      </>
    ),
    name: "JanusLabs",
    href: "https://januslabs.dev",
    linkLabel: "VISIT JANUSLABS.DEV ↗",
    description:
      "An AI marketing platform, built and sold direct to consumers. Around 67k lines across a 30-table Postgres schema, credit-ledger billing on idempotent Stripe webhooks, and a unified render queue that debits at enqueue and refunds on failure. It scrapes TikTok, Reels and Shorts trends, turns them into on-brand scripts, and generates AI video across a dozen image and video models.",
    tags: ["Next.js", "TypeScript", "Drizzle", "Supabase", "Stripe", "Redis"],
    image: "/januslabs.png",
    hud: "CASE_01 // LIVE",
    reverse: false,
  },
  {
    meta: (
      <>
        CASE 02/02 · <b>JUL 2026</b> · SOLO
      </>
    ),
    name: "ProofLoop",
    href: "https://proofloop-alpha.vercel.app/",
    linkLabel: "VISIT PROOFLOOP ↗",
    description:
      "A correctness gate for AI-written code. It wraps your deploy command and only lets it run once deterministic checks pass: missing env vars, unrun tests, hardcoded secrets, pending migrations, each with file-and-line proof. Every diagnosis is logged to memory, so the same failure is caught instantly next time. Backed by around 360 tests.",
    tags: ["Python", "Typer", "pytest", "Claude Code"],
    image: "/proofloop.png",
    hud: "CASE_02 // LIVE",
    reverse: true,
  },
];

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="hl"
      data-section
      data-idx="05"
      data-label="HIGHLIGHTS"
      aria-labelledby="highlights-heading"
    >
      <div className="section hl-head-sec">
        <div className="section-inner">
          <header className="sec-head reveal" data-sec-scrub>
            <span className="sec-index" aria-hidden="true">
              05
            </span>
            <h2 id="highlights-heading" className="sec-title">
              Selected Work
            </h2>
            <span className="sec-note" aria-hidden="true">
              THE TWO I&rsquo;D SHOW FIRST
            </span>
          </header>
        </div>
      </div>

      <div className="hl-stack">
        {CASES.map((c) => (
          <article
            key={c.name}
            className={c.reverse ? "hl-panel rev" : "hl-panel"}
            data-stack-panel
          >
            <div className="hl-panel-inner">
              <div className="hl-text">
                <p className="hl-meta">{c.meta}</p>
                <h3 className="hl-name">{c.name}</h3>
                <p className="hl-desc">{c.description}</p>
                <div className="hl-tags">
                  {c.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="hl-cta">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                    className="btn"
                    data-magnetic
                    data-cursor="VISIT"
                  >
                    <span>{c.linkLabel}</span>
                  </a>
                </div>
              </div>
              <div className="hl-media">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className="hl-frame"
                  data-tilt="2.5"
                  data-cursor="VISIT"
                  aria-label={`Visit ${c.name}`}
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <span className="hud tl" aria-hidden="true">
                    {c.hud}
                  </span>
                  <span className="hud br" aria-hidden="true">
                    16:10 // CAPTURE
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
