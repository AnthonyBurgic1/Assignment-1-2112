export const metadata = {
  title: "Skills | Jordan Rivera",
};

const SKILL_GROUPS = [
  {
    heading: "Languages",
    color: "bg-accent",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5 & CSS3", "SQL"],
  },
  {
    heading: "Frameworks & Libraries",
    color: "bg-accent2",
    items: ["React", "Next.js", "Node.js / Express", "Tailwind CSS", "Redux"],
  },
  {
    heading: "Tools & Platforms",
    color: "bg-ink",
    items: ["Git & GitHub", "Vercel", "Docker", "Figma", "Postman"],
  },
  {
    heading: "Concepts",
    color: "bg-accent",
    items: [
      "REST & GraphQL APIs",
      "Responsive Design",
      "Web Accessibility (a11y)",
      "Testing (Jest, React Testing Library)",
      "Agile / Scrum",
    ],
  },
];

function Icon({ label, colorClass }) {
  const initials = label
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colorClass} text-xs font-semibold text-paper`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="container-content">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Skills
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          A snapshot of the languages, frameworks, and tools I use
          regularly. I enjoy picking up new technologies quickly when a
          project calls for it.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.heading}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h2 className="font-display text-lg font-semibold text-ink">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon label={item} colorClass={group.color} />
                    <span className="text-sm text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
