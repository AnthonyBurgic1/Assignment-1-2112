import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Me | Anthony Burgic ",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-content grid gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <div className="overflow-hidden rounded-2xl border border-line">
            <Image
              src="/profile-placeholder.jpg"
              alt="Portrait of Anthony Burgic"
              width={560}
              height={560}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-muted">
            Replace this with a recent photo of yourself before publishing.
          </p>
        </div>

        <div>
          <h1 className="font-display text-3xl font-semibold text-ink">
            About Me
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            I&apos;m Anthony Burgic, a full-stack developer with a focus on
            building clean, usable web applications. I got into programming
            because i liked the immediacy of it writing a few lines of
            code and watching something come to life on screen and that
            curiosity has stuck with me through every project since.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted">
            My personal mission is simple: build things that are honest
            about what they do, easy for people to use, and easy for other
            developers to pick up and maintain. I care as much about the
            experience of the person reading my code as I do about the
            person using the final product.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted">
            Outside of formal projects, I spend time contributing to small
            open source tools, experimenting with new frameworks, and
            reading about software design. I'm the most energized when
            i'm solving a problem that has a real person on the other
            end of it, and i'm always open to new opportunities to do
            exactly that.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
