import Image from "next/image";

const selectedProjects = [
  {
    featured: true,
    num: "01 · Featured",
    date: "Since April 2026",
    name: "JanusLabs",
    nameItalic: "Labs",
    namePrefix: "Janus",
    href: "https://januslabs.dev",
    description:
      "An AI marketing platform I'm building and selling to consumers. Started as a GTM Hackathon finalist; rebuilt post-hack with an Apify-cached scraping pipeline, multi-provider AI rendering, and Stripe billing. Scrapes TikTok, Reels, and Shorts trends, turns them into on-brand scripts, generates AI video. Still small but actively shipping.",
    stackGroups: [
      {
        label: "Stack",
        items: ["Next.js", "Apify", "Supabase", "Redis", "Stripe"],
      },
      {
        label: "Models",
        items: [
          "Gemini",
          "DeepSeek",
          "Nano Banana Pro",
          "Nano Banana 2",
          "GPT Image 2",
          "Seedream",
          "Seedance",
          "Kling",
          "More to come...",
        ],
      },
    ],
    image: "/januslabs.png",
    imageAlt:
      "JanusLabs marketing platform dashboard with brand panels and trending content cards.",
  },
  {
    span: "lg",
    num: "02",
    date: "April 2026",
    name: "Tutor Me",
    href: "https://tutor-me-tau.vercel.app",
    description:
      "A browser-based social AI classroom. Learners move through a shared 3D space, talk to persona-based tutors that can be shared or duplicated, and join the same live room with a code. Agent flows use reinforcement learning with Redis-backed memory.",
    stack: ["Next.js", "React", "Three.js", "VAPI", "ElevenLabs", "Redis"],
    image: "/tutorme.png",
    imageAlt:
      "Tutor Me browser-based 3D classroom interface with persona-tutor cards.",
  },
  {
    span: "sm",
    num: "03",
    date: "April 2026",
    name: "MiniMed",
    href: "https://mini-med.vercel.app",
    description:
      "Plain-language medical guidance with voice transcription and optional TTS, wiring multipart and JSON flows through Next.js App Routes. MiniMax powers selectable prompts for the user to choose from.",
    stack: ["Next.js", "Tailwind", "ElevenLabs", "MiniMax"],
    image: "/minimed.jpg",
    imageAlt:
      "MiniMed plain-language medical guidance interface.",
  },
];

const otherProjects = [
  {
    num: "04",
    date: "Jan to Mar 2026",
    name: "Next Boba",
    href: "https://nextboba.vercel.app",
    description:
      "Sentiment analysis for bubble tea shops, fine-tuned on 6M+ Yelp reviews. PostgreSQL model with sentiment scores, labels, and indexes for sub-200ms loads. Frontend on Vercel, backend on Railway.",
    stack: ["FastAPI", "PostgreSQL", "Supabase", "Vercel", "Railway"],
  },
  {
    num: "05",
    date: "Jan to May 2025",
    name: "Pokémon Predictor",
    href: "https://pokemon-recommendation.vercel.app",
    description:
      "Dash + Flask on GCP, built in a 2-person team. Python pipelines scraped and processed 100+ competitive battle files across 10+ years. A Random Forest model recommends movesets with ~70% accuracy.",
    stack: ["Python", "scikit-learn", "GCP", "Dash", "Flask"],
  },
  {
    num: "06",
    date: "Jan to May 2025",
    name: "Money Maestro",
    href: "https://github.com/CCLDArjun/personal-budgeting-app",
    description:
      "Cloud-hosted finance tracker (Flask + Dash). User auth and persistent data in Google Cloud Storage, real-time Plotly dashboards, and exception handling for stable runtime.",
    stack: ["Flask", "Dash", "GCP", "Plotly"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="section-head">
        <div className="left">
          <div className="section-label">
            <span className="line" />
            <span className="num">02</span>
            <span>Selected Work</span>
          </div>
          <h2 id="projects-heading" className="section-title">
            My <em>projects.</em>
          </h2>
        </div>
        <div className="right">All live; click any card to visit.</div>
      </div>

      <div className="proj-grid">
        {selectedProjects.map((p) => {
          const cls = [
            "proj",
            "reveal",
            p.featured && "feat",
            p.span && `sel-${p.span}`,
            !p.image && "no-img",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener"
              className={cls}
            >
              {p.featured ? (
                <>
                  <div className="body">
                    <div className="proj-meta">
                      <span className="num">{p.num}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3>
                      {p.namePrefix}
                      <em>{p.nameItalic}</em>
                    </h3>
                    <p>{p.description}</p>
                    {p.stackGroups ? (
                      <div className="stack-groups">
                        {p.stackGroups.map((g) => (
                          <div key={g.label} className="stack-group">
                            <span className="stack-group-label">
                              {g.label}
                            </span>
                            <div className="stack">
                              {g.items.map((s) => (
                                <span key={s}>{s}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="stack">
                        {p.stack.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="img-wrap">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.imageAlt || p.name}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div className="placeholder-img">{p.name}</div>
                    )}
                  </div>
                  <div className="arrow" aria-hidden="true">↗</div>
                </>
              ) : (
                <>
                  {p.image ? (
                    <div className="img-wrap">
                      <Image
                        src={p.image}
                        alt={p.imageAlt || p.name}
                        fill
                        sizes={
                          p.span === "lg"
                            ? "(max-width: 900px) 100vw, 66vw"
                            : "(max-width: 900px) 100vw, 33vw"
                        }
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : null}
                  <div className="body">
                    <div className="proj-meta">
                      <span className="num">{p.num}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="stack">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="arrow" aria-hidden="true">↗</div>
                </>
              )}
            </a>
          );
        })}
      </div>

      <div className="proj-tier-label">
        <span>Other work</span>
        <span className="line" aria-hidden="true" />
      </div>

      <div className="proj-list">
        {otherProjects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener"
            className="proj-row reveal"
          >
            <div className="proj-row-meta">
              <span className="num">{p.num}</span>
              <span>{p.date}</span>
            </div>
            <div className="proj-row-content">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="proj-row-arrow" aria-hidden="true">
              View ↗
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
