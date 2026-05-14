const categories = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "R", "Bash"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Three.js", "Tailwind", "shadcn/ui", "Vite"],
  },
  {
    title: "Backend / Data",
    items: [
      "FastAPI",
      "Node / Express",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Redis",
      "GCP",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "HF Transformers",
      "VAPI",
      "ElevenLabs",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <div className="left">
          <div className="section-label">
            <span className="line" />
            <span className="num">03</span>
            <span>Stack</span>
          </div>
          <h2 className="section-title">
            Tools, <em>by layer.</em>
          </h2>
        </div>
        <div className="right">
          Languages, libraries, and services I'm comfortable shipping with.
        </div>
      </div>
      <div className="skills-grid">
        {categories.map((c) => (
          <div key={c.title} className="skill-cat reveal">
            <h4>{c.title}</h4>
            <ul>
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
