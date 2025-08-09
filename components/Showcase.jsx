export default function Showcase() {
  const rows = [
    {
      k: "Velocity",
      v: "Ship in weeks, not quarters. Proven delivery patterns and reusable accelerators.",
    },
    {
      k: "Quality",
      v: "Strong typing, tests, observability, and zero-regret architecture.",
    },
    {
      k: "Security",
      v: "Least privilege, secret hygiene, threat modeling, compliance-ready.",
    },
    {
      k: "Scale",
      v: "From first user to millions. Perf budgets and cost-aware design.",
    },
  ];
  return (
    <section id="work" className="section container section--contrast">
      <div className="panel">
        <div className="panel__glare" />
        <h2 className="section__title">Craft that compounds</h2>
        <ul className="kv">
          {rows.map((r) => (
            <li key={r.k}>
              <span>{r.k}</span>
              <b>{r.v}</b>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
