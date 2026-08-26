import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { medications } from "../data";

export function generateStaticParams() {
  return medications.map((med) => ({ slug: med.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const med = medications.find((m) => m.slug === slug);
  if (!med) return {};
  return {
    title: `${med.name} for Weight Loss — GlideMD`,
    description: med.summary,
  };
}

export default async function MedicationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const med = medications.find((m) => m.slug === slug);
  if (!med) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/medications" className="text-sm text-[var(--color-sage)]">
        ← All medications
      </Link>

      <h1 className="font-display text-4xl italic mt-4 mb-6">{med.name}</h1>

      <div className="space-y-8 text-[var(--color-ink)]/80 leading-relaxed">
        <section>
          <h2 className="font-medium text-[var(--color-ink)] mb-2">How it works</h2>
          <p>{med.mechanism}</p>
        </section>
        <section>
          <h2 className="font-medium text-[var(--color-ink)] mb-2">Dosing schedule</h2>
          <p>{med.schedule}</p>
        </section>
        <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-ink)]/60">
          {med.disclosure}
        </section>
      </div>

      <Link
        href="/get-started"
        className="inline-block mt-10 rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] font-medium px-7 py-3.5 hover:bg-[var(--color-sage)] transition-colors"
      >
        Check your eligibility
      </Link>
    </div>
  );
}
