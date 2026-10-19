const display = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };
const body = { fontFamily: "'Hanken Grotesk', system-ui, sans-serif" };

const skills = [
  {
    category: "Front-End",
    techs: ["React", "React Native", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Back-End",
    techs: ["Node.js", "Express", "Java", "Spring", "API RESTful"],
  },
  {
    category: "Bases de datos",
    techs: ["MySQL", "SQLite", "MongoDB", "Supabase"],
  },
  {
    category: "Herramientas",
    techs: ["Git/GitHub", "Docker", "Vite", "Next.js"],
  },
  {
    category: "Colaboración y gestión",
    techs: ["Slack", "Trello", "Notion", "ClickUp", "GitHub Backlog"],
  },
  {
    category: "Metodologías ágiles",
    techs: ["SCRUM"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={body}
      className="border-t border-slate-800 bg-slate-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <header className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2
                style={display}
                className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-50 sm:text-5xl"
              >
                Stack tecnológico
              </h2>
              <p className="mt-5 max-w-xs text-lg leading-relaxed text-slate-400">
                Las herramientas que uso para construir y entregar.
              </p>
            </div>
          </header>

          <dl className="border-b border-slate-800 lg:col-span-8">
            {skills.map(({ category, techs }) => (
              <div
                key={category}
                className="grid gap-x-8 gap-y-2 border-t border-slate-800 py-6 sm:grid-cols-[13rem_1fr]"
              >
                <dt
                  style={display}
                  className="text-lg font-medium text-slate-50"
                >
                  {category}
                </dt>
                <dd className="text-lg leading-relaxed text-slate-300">
                  {techs.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
