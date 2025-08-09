export default function About() {
  const bullets = [
    {
      t: "Hands-on principals",
      d: "Work directly with senior engineers and AI leads who ship and mentor in the same sprint.",
    },
    {
      t: "Outcome-first",
      d: "Every engagement is scoped to measurable outcomes: latency, accuracy, cost, adoption.",
    },
    {
      t: "Pragmatic AI",
      d: "Use the right tool: fine-tuned models, RAG, agents, or good old systems engineering.",
    },
  ];
  return (
    <section id="about" className="section container">
      <h2 className="section__title">Senior hands. Clear outcomes.</h2>
      <div className="bullets">
        {bullets.map((b) => (
          <article key={b.t} className="bullet card--glass card">
            <div className="card__shine" />
            <h3>{b.t}</h3>
            <p>{b.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
