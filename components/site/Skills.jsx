const COLUMNS = [
  {
    n: "A",
    label: "LANGUAGES",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "R", "Bash"],
  },
  {
    n: "B",
    label: "FRONTEND",
    items: ["React", "Next.js", "Three.js", "Tailwind", "shadcn/ui", "Vite"],
  },
  {
    n: "C",
    label: "BACKEND / DATA",
    items: [
      "FastAPI",
      "Node / Express",
      "PostgreSQL",
      "Drizzle · Supabase",
      "Redis · Stripe",
      "GCP",
    ],
  },
  {
    n: "D",
    label: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "HF Transformers",
      "Vercel AI SDK",
      "VAPI · ElevenLabs",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section"
      data-section
      data-idx="04"
      data-label="STACK"
      aria-labelledby="skills-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal" data-sec-scrub>
          <span className="sec-index" aria-hidden="true">
            04
          </span>
          <h2 id="skills-heading" className="sec-title">
            Stack
          </h2>
          <span className="sec-note" aria-hidden="true">
            TOOLS OF CHOICE
          </span>
        </header>

        <div className="stack-grid reveal" style={{ "--i": 1 }}>
          {COLUMNS.map((c) => (
            <div key={c.label} className="stack-cell">
              <p className="stack-cell-label">
                <b>{c.n}/</b> {c.label}
              </p>
              <div className="stack-chips">
                {c.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
