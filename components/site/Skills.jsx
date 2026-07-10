const COLUMNS = [
  {
    label: "LANGUAGES",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "R", "Bash"],
  },
  {
    label: "FRONTEND",
    items: ["React", "Next.js", "Three.js", "Tailwind", "shadcn/ui", "Vite"],
  },
  {
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
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div
        className="ghost"
        data-ghost="0.12"
        style={{ bottom: "6vh", right: "-2vw" }}
        aria-hidden="true"
      >
        STACK
      </div>
      <div className="sect-inner">
        <div className="eyebrow reveal" id="skills-heading">
          ( 04 ) · STACK
        </div>
        <div className="stack-grid reveal" style={{ transitionDelay: "100ms" }}>
          {COLUMNS.map((c) => (
            <div key={c.label} className="stack-col">
              <div className="stack-col-label">{c.label}</div>
              <div className="stack-col-items">
                {c.items.map((i, idx) => (
                  <span key={i}>
                    {i}
                    {idx < c.items.length - 1 ? <br /> : null}
                  </span>
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
