import Image from "next/image";

const META = [
  { k: "LOCATION", v: "San Jose, California" },
  { k: "STATUS", v: "Open to full-time" },
  { k: "EDUCATION", v: "B.S. Data Science · SJSU · Dec 2025" },
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
      data-section
      data-idx="01"
      data-label="ABOUT"
      aria-labelledby="about-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal" data-sec-scrub>
          <span className="sec-index" aria-hidden="true">
            01
          </span>
          <h2 id="about-heading" className="sec-title">
            About
          </h2>
          <span className="sec-note" aria-hidden="true">
            PROFILE // STATEMENT
          </span>
        </header>

        <div className="about-grid">
          <div className="about-main reveal">
            <p className="about-statement">
              A full-stack engineer who builds <em>the AI layer</em>: agents,
              agentic workflows, and the infrastructure that runs them.
            </p>
            <div className="about-body">
              <p>
                I work across the entire stack, React and Next.js up front with
                FastAPI, Node and Postgres behind, and specialize in what sits
                on top: autonomous agents, agentic workflows, RAG pipelines and
                multi-model orchestration, plus the billing, queueing and eval
                plumbing that makes them production-real.
              </p>
              <p>
                Right now that&rsquo;s <strong>JanusLabs</strong>, the AI
                marketing platform I&rsquo;m building and selling direct to
                consumers as founding engineer.
              </p>
            </div>
          </div>

          <div className="about-side reveal" style={{ "--i": 2 }}>
            <div className="about-photo" data-cursor="HELLO">
              <Image
                src="/headshot.png"
                alt="Kevin Cui"
                fill
                sizes="(max-width: 720px) 90vw, 440px"
              />
              <span className="ph-tag" aria-hidden="true">
                HEADSHOT.RAW // SJ_CA
              </span>
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
      </div>
    </section>
  );
};

export default About;
