const TAGS = ["AI AGENTS", "AGENTIC WORKFLOWS", "RAG", "LLM INFRASTRUCTURE"];

const Hero = () => {
  return (
    <header id="top" className="hero">
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-name" data-hero-name>
        <span>Kevin Cui</span>
      </div>

      <div className="hero-inner" data-hero-inner>
        <div className="hero-loc">
          <span className="dot" aria-hidden="true" />
          <span>SAN JOSE, CA · OPEN TO FULL-TIME</span>
        </div>
        <h1 className="hero-title">
          <span className="line">Full-Stack</span>
          <span className="line-italic">AI Engineer</span>
        </h1>
        <div className="hero-lower">
          <div className="hero-lower-left">
            <p className="hero-lead">
              I design and ship AI products end to end: autonomous agents,
              agentic workflows, RAG pipelines and the LLM infrastructure
              underneath.
            </p>
            <div className="hero-tags">
              {TAGS.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="scroll-line">
              <span />
            </div>
            <div className="scroll-label">SCROLL</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
