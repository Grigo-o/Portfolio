import "./Education.css";

const ENTRIES = [
  {
    org: "Technologies School Mziuri",
    program: "Python",
    note: "1-year program.",
  },
  {
    org: "Technologies School Mziuri",
    program: "Web Development",
    note: "2-year program.",
  },
  {
    org: "Kutaisi International University",
    program: "B.S. Computer Science",
    note: "2023-2027.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <p className="eyebrow">education</p>
        <h2 className="section-title">Where it started</h2>

        <ol className="education__list">
          {ENTRIES.map((e, i) => (
            <li key={i} className="education__item">
              <span className="education__marker" aria-hidden="true" />
              <div>
                <h3 className="education__program">{e.program}</h3>
                <p className="education__org mono">{e.org}</p>
                <p className="education__note">{e.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
