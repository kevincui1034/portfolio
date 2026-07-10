const PHRASE =
  "AGENTIC WORKFLOWS  ·  RAG PIPELINES  ·  LLM INFRASTRUCTURE  ·  FULL-STACK ENGINEERING  ·  AI PRODUCTS  ·  SHIPPED, NOT DEMOED  ·";

const Marquee = () => {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{PHRASE}</span>
        <span>{PHRASE}</span>
      </div>
    </div>
  );
};

export default Marquee;
