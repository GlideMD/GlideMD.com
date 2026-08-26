import Link from "next/link";
import GlideArc from "@/components/GlideArc";

const steps = [
  {
    title: "Answer a few questions",
    body: "A short health assessment tells us whether GlideMD is likely to be a fit — no account required to start.",
  },
  {
    title: "Meet your clinician",
    body: "A licensed doctor or nurse practitioner in your state reviews your history and decides on a plan with you.",
  },
  {
    title: "Treatment ships to you",
    body: "If prescribed, your medication is dispensed by a licensed pharmacy and shipped directly to your door.",
  },
  {
    title: "Stay supported",
    body: "Message your care team anytime, with regular check-ins to adjust your plan as you go.",
  },
];

const meds = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    note: "Once-weekly GLP-1 injection.",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    note: "Once-weekly dual GIP/GLP-1 injection.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-[var(--color-sage)] mb-4">
              LICENSED CLINICIANS · US-BASED CARE
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] italic">
              Weight care that meets you where you are.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink)]/70 leading-relaxed max-w-xl">
              GlideMD connects you with a licensed clinician who reviews your
              health history and, if appropriate, prescribes GLP-1 treatment
              — shipped from a licensed pharmacy straight to your door.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/get-started"
                className="rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] font-medium px-7 py-3.5 hover:bg-[var(--color-sage)] transition-colors"
              >
                Check your eligibility
              </Link>
              <span className="text-sm text-[var(--color-ink)]/50">
                Takes about 4 minutes
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-4">
          <GlideArc className="w-full h-auto" />
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-[var(--color-ink)]/60">
          <div>
            <p className="font-display text-2xl text-[var(--color-ink)] not-italic">50 states</p>
            <p>Licensed clinician network</p>
          </div>
          <div>
            <p className="font-display text-2xl text-[var(--color-ink)] not-italic">Real evaluation</p>
            <p>Every prescription is clinician-reviewed</p>
          </div>
          <div>
            <p className="font-display text-2xl text-[var(--color-ink)] not-italic">Licensed pharmacy</p>
            <p>Dispensed and shipped to you directly</p>
          </div>
          <div>
            <p className="font-display text-2xl text-[var(--color-ink)] not-italic">Ongoing care</p>
            <p>Message your care team anytime</p>
          </div>
        </div>
      </section>

      {/* How it works — reuses the glide path as a threading device */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl italic mb-2">How GlideMD works</h2>
        <p className="text-[var(--color-ink)]/60 mb-12 max-w-xl">
          The same path from first question to ongoing care — four stops,
          one continuous process.
        </p>

        <ol className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-display italic text-sm mb-4"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-gold)",
                  color: "var(--color-ink)",
                }}
              >
                {i + 1}
              </div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--color-ink)]/60 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Medications */}
      <section className="bg-[var(--color-ink)] text-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-display text-3xl italic mb-2">Treatment options</h2>
          <p className="text-[var(--color-mist)]/60 mb-12 max-w-xl">
            Your clinician will recommend a medication based on your health
            history and goals.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {meds.map((med) => (
              <Link
                key={med.slug}
                href={`/medications/${med.slug}`}
                className="block rounded-2xl border border-white/15 p-8 hover:border-[var(--color-gold)] transition-colors"
              >
                <h3 className="font-display text-2xl italic mb-2">{med.name}</h3>
                <p className="text-[var(--color-mist)]/60 text-sm">{med.note}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-gold)]">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl italic max-w-2xl mx-auto">
          See if GlideMD is right for you.
        </h2>
        <p className="mt-4 text-[var(--color-ink)]/60">
          No commitment to start — just a short health assessment.
        </p>
        <Link
          href="/get-started"
          className="inline-block mt-8 rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] font-medium px-8 py-4 hover:bg-[var(--color-sage)] transition-colors"
        >
          Check your eligibility
        </Link>
      </section>
    </>
  );
}
