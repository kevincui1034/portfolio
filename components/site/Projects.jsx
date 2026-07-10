import Image from "next/image";

// The two flagships (JanusLabs, ProofLoop) live in Highlights; this grid holds
// the other ten, newest to oldest. The two published Claude Code skills have no
// live site, so they render a branded placeholder instead of a screenshot.
const PROJECTS = [
  {
    name: "Preflight",
    href: "https://preflight.butterbase.dev/",
    date: "JUL 2026 · HACKWITHBAY 3.0, SOLO IN A DAY",
    description:
      "A deploy-review agent that traverses a Neo4j code property graph, checking blast radius, load-bearing hubs and missing prod env vars, then runs your tests in a sandbox for real evidence.",
    stack: "PYTHON · FASTAPI · NEO4J · DAYTONA",
    image: "/preflight.png",
  },
  {
    name: "Parallax",
    href: "https://parallax-tawny-xi.vercel.app/",
    date: "JUN 2026 · 4-HOUR HACKATHON SPRINT",
    description:
      "Upload a product photo and an agent turns it into an interactive exploded-parts 3D diagram it drives itself, through a strict Pydantic-validated action protocol: explode, highlight, isolate, focus.",
    stack: "FASTAPI · THREE.JS · PYDANTIC · GMI CLOUD",
    image: "/parallax.png",
  },
  {
    name: "kyujin",
    href: "https://kyujin.dev/",
    date: "MAY — JUN 2026 · SOLO",
    description:
      "Gmail-native job-application tracker. A hybrid classifier sorts application, interview, rejection and offer email before spending an LLM call. Web plus native iOS, dual Stripe/Apple billing.",
    stack: "NEXT.JS · DRIZZLE · SUPABASE · GEMINI · SWIFTUI",
    image: "/kyujin.png",
  },
  {
    name: "preprod-check",
    href: "https://github.com/kevincui1034/preprod-check",
    date: "JUN 2026 · PUBLISHED SKILL",
    description:
      "A Claude Code skill that audits a codebase for production readiness across 14 categories — auth, injection, billing, rate limits, SSRF, secrets — and returns a severity-ranked report with drafted patches.",
    stack: "CLAUDE CODE · PLUGIN · SECURITY",
    placeholder: "PUBLISHED CLAUDE CODE SKILL",
  },
  {
    name: "cost-analysis",
    href: "https://github.com/kevincui1034/cost-analysis",
    date: "JUN 2026 · PUBLISHED SKILL",
    description:
      "A Claude Code skill that inventories every paid API, SDK and service in a project, attaches per-unit rates, and computes per-plan margins — flagging the paths that quietly lose money.",
    stack: "CLAUDE CODE · PLUGIN · FINOPS",
    placeholder: "PUBLISHED CLAUDE CODE SKILL",
  },
  {
    name: "Reunion",
    href: "https://vacaylog.vercel.app/",
    date: "JUN 2026 · AGENTIC AI SF, 6-PERSON",
    description:
      "An iMessage-native group-travel agent that reads travel intent from a group chat and drafts a plan. An on-device gate classifies messages locally with Apple Foundation Models — nothing leaves the Mac.",
    stack: "TYPESCRIPT · NEXT.JS · APPLE FM · SWIFT",
    image: "/reunion.png",
  },
  {
    name: "Tutor Me",
    href: "https://tutor-me-tau.vercel.app",
    date: "APR 2026",
    description:
      "A browser-based social AI classroom. Learners share a live 3D space with persona tutors grounded in web research, backed by pgvector memory and a semantic cache.",
    stack: "NEXT.JS · REACT THREE FIBER · PARTYKIT · VAPI · PGVECTOR",
    image: "/tutorme.png",
  },
  {
    name: "MiniMed",
    href: "https://mini-med.vercel.app",
    date: "APR 2026",
    description:
      "Plain-language medical guidance as a seven-phase intake state machine, each step constrained by its own JSON schema, ending in a four-level care recommendation. Voice in and out via ElevenLabs.",
    stack: "NEXT.JS · MINIMAX · ELEVENLABS",
    image: "/minimed.jpg",
  },
  {
    name: "Next Boba",
    href: "https://nextboba.vercel.app",
    date: "MAR — APR 2026",
    description:
      "Search a phrase like “matcha” and rank Bay Area boba shops by sentiment. Built on a RoBERTa classifier fine-tuned on the ~5 GB Yelp dataset, run across millions of reviews via a streaming ETL.",
    stack: "PYTORCH · ROBERTA · FASTAPI · SUPABASE",
    image: "/nextboba.jpg",
  },
  {
    name: "Pokémon Predictor",
    href: "https://pokemon-recommendation.vercel.app/",
    date: "JAN — MAY 2025 · 4-PERSON TEAM",
    description:
      "A competitive-metagame study built with a four-person team. Python pipelines scrape Smogon usage stats across three annual snapshots, feeding a Random Forest that recommends the best move for a matchup.",
    stack: "PYTHON · SCIKIT-LEARN · DASH · GCP",
    image: "/pokemon.png",
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="section"
      data-section
      data-idx="06"
      data-label="PROJECTS"
      data-nav="#highlights"
      aria-labelledby="work-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal">
          <span className="sec-index" aria-hidden="true">
            06
          </span>
          <h2 id="work-heading" className="sec-title">
            Projects
          </h2>
          <span className="sec-note" aria-hidden="true">
            03–12 · TWELVE SHIPPED
          </span>
        </header>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="p-card reveal"
              data-tilt
              data-cursor="OPEN"
              style={{ "--i": i % 2 }}
            >
              <div className="p-media">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 720px) 100vw, 640px"
                  />
                ) : (
                  <div className="p-placeholder">
                    <span className="ph-name">{p.name}</span>
                    <span className="ph-label">{p.placeholder}</span>
                  </div>
                )}
                <span className="p-idx" aria-hidden="true">
                  {String(i + 3).padStart(2, "0")}
                </span>
              </div>
              <div className="p-body">
                <div className="p-head">
                  <h3 className="p-title">{p.name}</h3>
                  <span className="p-date">{p.date}</span>
                </div>
                <p className="p-desc">{p.description}</p>
                <p className="p-stack">{p.stack}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
