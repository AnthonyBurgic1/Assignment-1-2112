import Image from "next/image";

export const metadata = {
  title: "Projects | Anthony Burgic",
};

const PROJECTS = [
  {
    title: "TaskFlow — Team Task Manager",
    image: "/project-taskflow.jpg",
    stack: "React, Next.js, PostgreSQL, Tailwind CSS",
    description:
      "A collaborative task-management app that lets small teams create boards, assign tasks, and track progress in real time. I built the drag-and-drop board UI, the REST API for task updates, and role-based access so managers and contributors see different views.",
    link: "https://github.com/AnthonyBurgic1",
  },
  {
    title: "RecipeBox — Recipe Organizer",
    image: "/project-recipebox.jpg",
    stack: "Next.js, MongoDB, NextAuth",
    description:
      "A recipe-saving app where users can import recipes from a URL, tag them, and generate a shopping list automatically. The trickiest part was writing a parser that could pull structured ingredient data out of messy, inconsistently formatted web pages.",
    link: "https://github.com/AnthonyBurgic1",
  },
  {
    title: "Metrics Dashboard",
    image: "/project-metrics.jpg",
    stack: "React, Node.js, Chart.js, Express",
    description:
      "An internal analytics dashboard that visualizes product usage data for a small SaaS tool. I focused on making dense data genuinely readable, with responsive charts, saved filter views, and a caching layer that cut load times significantly.",
    link: "https://github.com/AnthonyBurgic1",
  },
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container-content">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          A few projects inposive enjoyed building. Each one taught me
          something different about product thinking, performance, or
          working with real users.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.image}
                  alt={`Preview graphic for ${project.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-lg font-semibold text-ink">
                  {project.title}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
                  {project.stack}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-semibold text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  View repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
