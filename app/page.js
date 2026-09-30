import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container-content grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              Full-Stack Developer
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Hi, I'm Anthony Burgic. I can create fast, accessible web
              applications that solve real problems today in our world.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Welcome to my portfolio. I'm a junior software developer focused
              on React, Next.js, and clean, maintainable code. Here you can
              read about my background, browse a few projects that i'm proud
              of, and see the tools I work with day to day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-md bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
              >
                Learn more about me
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                View My Projects
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
              These are the things that i'm currently working on
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Building accessible, responsive interfaces with React
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent2" />
                Here are my apps built with Next.js and REST/APIs
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                I can provide clean, well-tested, maintainable code
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-surface">
        <div className="container-content max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Here's My Mission
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            My mission is to build software that is genuinely useful,
            approachable, and built to last. I believe that good engineering
            means respecting the people who use what I build and the
            teammates who maintain it after me. I'm also always looking to
            grow my skills, take on challenging problems, and contribute to
            teams that care about craftsmanship as much as shipping speed.
          </p>
        </div>
      </section>
    </>
  );
}
