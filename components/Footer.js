import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-content flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold">Anthony Burgic</p>
          <p className="mt-1 text-sm text-paper/60">
            Frontend-leaning full-stack developer, based in Ontario, Canada.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/80 underline-offset-4 hover:text-white hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AnthonyBurgic1?tab=stars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/80 underline-offset-4 hover:text-white hover:underline"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="text-paper/80 underline-offset-4 hover:text-white hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} Anthony Burgic. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
