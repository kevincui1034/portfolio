import Image from "next/image";

const projects = [
  {
    featured: true,
    num: "01 · Featured · In progress",
    date: "April 2026",
    name: "AdLabs",
    nameItalic: "Labs",
    namePrefix: "Ad",
    href: "https://adlabs.vercel.app",
    description:
      "GTM Hackathon finalist, currently in active development. AI marketing platform that scrapes TikTok, Reels, and Shorts metadata, turns trends into on-brand scripts, and generates AI video. Post-hackathon rebuild cut infra cost by roughly 90%.",
    stack: ["Next.js", "React", "Auth.js", "Apify", "Supabase", "Seedance"],
    image: "/adlabs.png",
  },
  {
    num: "02",
    date: "April 2026",
    name: "Tutor Me",
    href: "https://tutor-me-tau.vercel.app",
    description:
      "A browser-based social AI classroom. Learners move through a shared 3D space, talk to persona-based tutors that can be shared or duplicated, and join the same live room with a code. Agent flows use reinforcement learning with Redis-backed memory.",
    stack: ["Next.js", "React", "Three.js", "VAPI", "ElevenLabs", "Redis"],
    image: "/tutorme.png",
  },
  {
    num: "03",
    date: "April 2026",
    name: "MiniMed",
    href: "https://mini-med.vercel.app",
    description:
      "Plain-language medical guidance with voice transcription and optional TTS, wiring multipart and JSON flows through Next.js App Routes. MiniMax powers selectable prompts for the user to choose from.",
    stack: ["Next.js", "Tailwind", "ElevenLabs", "MiniMax"],
    image: "/minimed.jpg",
  },
  {
    num: "04",
    date: "Jan to Mar 2026",
    name: "Next Boba",
    href: "https://nextboba.vercel.app",
    description:
      "Sentiment analysis for bubble tea shops, fine-tuned on 6M+ Yelp reviews. PostgreSQL model with sentiment scores, labels, and indexes for sub-200ms loads. Frontend on Vercel, backend on Railway.",
    stack: ["FastAPI", "PostgreSQL", "Supabase", "Vercel", "Railway"],
    image: "/nextboba.jpg",
  },
  {
    num: "05",
    date: "Jan to May 2025",
    name: "Pokémon Predictor",
    href: "https://pokemon-recommendation.vercel.app",
    description:
      "Dash + Flask on GCP, built in a 2-person team. Python pipelines scraped and processed 100+ competitive battle files across 10+ years. A Random Forest model recommends movesets with ~70% accuracy.",
    stack: ["Python", "scikit-learn", "GCP", "Dash", "Flask"],
    image: "/pokemon.png",
  },
  {
    num: "06",
    date: "Jan to May 2025",
    name: "Money Maestro",
    href: "https://github.com/CCLDArjun/personal-budgeting-app",
    description:
      "Cloud-hosted finance tracker (Flask + Dash). User auth and persistent data in Google Cloud Storage, real-time Plotly dashboards, and exception handling for stable runtime.",
    stack: ["Flask", "Dash", "GCP", "Plotly"],
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <div className="left">
          <div className="section-label">
            <span className="line" />
            <span className="num">02</span>
            <span>Selected Work</span>
          </div>
          <h2 className="section-title">
            My <em>projects.</em>
          </h2>
        </div>
        <div className="right">
          All live; click any card to visit.
        </div>
      </div>
      <div className="proj-grid">
        {projects.map((p) => {
          const cls = `proj reveal${p.featured ? " feat" : ""}${
            !p.image ? " no-img" : ""
          }`;
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
                    <div className="stack">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="img-wrap">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div className="placeholder-img">{p.name}</div>
                    )}
                  </div>
                  <div className="arrow">↗</div>
                </>
              ) : (
                <>
                  {p.image ? (
                    <div className="img-wrap">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
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
                  <div className="arrow">↗</div>
                </>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
