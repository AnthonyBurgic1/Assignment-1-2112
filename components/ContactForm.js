"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialForm = { fullName: "", phone: "", message: "" };

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
  }

  function handleContinue() {
    router.push("/about");
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8">
        <h2 className="font-display text-xl font-semibold text-ink">
          Thanks, {submitted.fullName || "there"}!
        </h2>
        <p className="mt-2 text-sm text-muted">
          Here&apos;s a confirmation of what you sent:
        </p>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              Full Name
            </dt>
            <dd className="mt-1 text-sm text-ink">{submitted.fullName}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              Contact Number
            </dt>
            <dd className="mt-1 text-sm text-ink">{submitted.phone}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              Message
            </dt>
            <dd className="mt-1 whitespace-pre-wrap text-sm text-ink">
              {submitted.message}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={handleContinue}
          className="mt-8 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          Continue to About Me
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-8">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-ink">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={form.fullName}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          placeholder="Jane Doe"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          Contact Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Short Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          placeholder="What would you like to say?"
        />
      </div>

      <button
        type="submit"
        className="mt-6 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
      >
        Submit
      </button>
    </form>
  );
}
