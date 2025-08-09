export default function Process() {
  const steps = [
    {
      t: "Discovery",
      d: "Goals, constraints, and success metrics in a 60–90 min session.",
    },
    {
      t: "Plan",
      d: "Crisp proposal with milestones, risks, and an execution path.",
    },
    {
      t: "Build",
      d: "Iterate in short cycles with demos, evals, and instrumentation.",
    },
    {
      t: "Handoff",
      d: "Documentation, training, and support to make it yours.",
    },
  ];
  return (
    <section className="section container section--contrast">
      <div className="panel">
        <div className="panel__glare" />
        <h2 className="section__title">How we work</h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.t}>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
