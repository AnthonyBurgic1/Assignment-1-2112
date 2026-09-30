import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Me | Anthony Burgic",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-content max-w-xl">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Contact Me
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Have an opportunity, a question, or just want to say hello? Fill
          out the form below and I&apos;ll get back to you as soon as I can.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
