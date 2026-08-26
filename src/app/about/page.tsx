import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors — GlideMD",
  description: "Meet the licensed clinicians and medical leadership behind GlideMD.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl italic mb-6">Our clinicians</h1>
      <p className="text-[var(--color-ink)]/70 leading-relaxed mb-10 max-w-xl">
        Every GlideMD patient is evaluated and treated by a physician or
        nurse practitioner licensed in their state. Our clinical team is
        overseen by a Chief Medical Officer who sets our treatment
        protocols and reviews outcomes.
      </p>

      {/* Placeholder — replace with real clinician bios, headshots, and
          license numbers once the professional corporation and clinician
          network (Wheel / SteadyMD) contracts are in place. */}
      <div className="rounded-2xl border border-dashed border-[var(--color-border)] p-10 text-center text-[var(--color-ink)]/50">
        Clinical leadership bios go here — name, credentials, state
        license number, and headshot for your Chief Medical Officer and
        any named founding clinicians.
      </div>
    </div>
  );
}
