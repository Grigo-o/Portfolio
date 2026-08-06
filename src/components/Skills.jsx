import "./Skills.css";

const GROUPS = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "OCaml"],
  },
  {
    label: "Frontend",
    items: ["React", "Redux Toolkit", "React Router", "HTML/CSS", "Vite"],
  },
  {
    label: "Systems & Data",
    items: ["PostgreSQL", "ScyllaDB / Cassandra", "MongoDB"],
  },
  {
    label: "Tooling",
    items: ["Git & GitHub", "GitHub Actions", "Docker", "ESLint"],
  },
];

export default function Skills() {
  return (
    <section id="work" className="section skills">
      <div className="section-inner">
        <p className="eyebrow">stack</p>
        <h2 className="section-title">What I build with</h2>
        <p className="section-lede">
          A fullstack toolkit, backed by coursework in the systems that sit
          underneath most of it.
        </p>

        <div className="skills__groups">
          {GROUPS.map((g) => (
            <div key={g.label} className="skills__group">
              <h3 className="skills__group-label mono">{g.label}</h3>
              <div className="skills__chips">
                {g.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
