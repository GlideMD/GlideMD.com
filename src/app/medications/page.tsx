import Link from "next/link";
import type { Metadata } from "next";
import { medications } from "./data";

export const metadata: Metadata = {
  title: "GLP-1 Medications — GlideMD",
  description:
    "Learn how semaglutide and tirzepatide work, what to expect, and how GlideMD clinicians decide what's right for you.",
};

export default function MedicationsIndex() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-display text-4xl italic mb-4">Medications</h1>
      <p className="text-[var(--color-ink)]/70 max-w-xl mb-12">
        GlideMD clinicians prescribe based on your health history, goals,
        and what you tell them during your evaluation — not the other way
        around. Here's what's available today.
      </p>

      <div className="grid gap-6">
        {medications.map((med) => (
          <Link
            key={med.slug}
            href={`/medications/${med.slug}`}
            className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 hover:border-[var(--color-gold)] transition-colors"
          >
            <h2 className="font-display text-2xl italic mb-2">{med.name}</h2>
            <p className="text-[var(--color-ink)]/60">{med.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
