export default function Services() {
  const items = [
    {
      title: "AI Strategy & Delivery",
      desc: "From PoC to production: model selection, evals, guardrails, and ROI tracking.",
    },
    {
      title: "Senior Engineering",
      desc: "Hands-on architecture, performance tuning, platform foundations, DX.",
    },
    {
      title: "Data & MLOps",
      desc: "Pipelines, feature stores, vector DBs, observability, cost control.",
    },
  ];
  return (
    <section id="services" className="section container">
      <h2 className="section__title">What we do</h2>
      <div className="cards">
        {items.map((it) => (
          <article key={it.title} className="card card--glass">
            <div className="card__shine" />
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
            <a href="#contact" className="link">
              Engage →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
