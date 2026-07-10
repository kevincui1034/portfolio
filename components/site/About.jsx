import Image from "next/image";

const META = [
  { k: "LOCATION", v: "San Jose, California" },
  { k: "STATUS", v: "Open to full-time" },
  { k: "EDUCATION", v: "B.S. Data Science · SJSU · Dec 2025" },
];

const About = () => {
  return (
    <section id="about" className="section alt" aria-labelledby="about-heading">
      <div
        className="ghost"
        data-ghost="0.16"
        style={{ top: "2vh", right: "-3vw" }}
        aria-hidden="true"
      >
        ABOUT
      </div>
      <div className="about-grid">
        <div className="about-main reveal">
          <div className="eyebrow">( 01 ) · ABOUT</div>
          <h2 id="about-heading" className="about-head">
            A full-stack engineer who builds the AI layer: agents, agentic
            workflows, and the infrastructure that runs them.
          </h2>
          <p className="about-body">
            I work across the entire stack, React and Next.js up front with
            FastAPI, Node and Postgres behind, and specialize in what sits on
            top: autonomous agents, agentic workflows, RAG pipelines and
            multi-model orchestration, plus the billing, queueing and eval
            plumbing that makes them production-real.
          </p>
          <p className="about-body">
            Right now that&rsquo;s JanusLabs, the AI marketing platform I&rsquo;m
            building and selling direct to consumers as founding engineer.
          </p>
        </div>
        <div className="about-side reveal" style={{ transitionDelay: "150ms" }}>
          <div className="about-photo">
            <Image
              src="/headshot.png"
              alt="Kevin Cui"
              fill
              sizes="(max-width: 720px) 90vw, 440px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="meta-list">
            {META.map((m) => (
              <div key={m.k} className="meta-row">
                <span className="k">{m.k}</span>
                <span className="v">{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
