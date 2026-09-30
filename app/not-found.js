import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-content text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you are looking for doesn't exist !
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-accent"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
