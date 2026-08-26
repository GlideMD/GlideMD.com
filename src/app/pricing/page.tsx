import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — GlideMD",
  description: "Transparent, membership-based pricing for GlideMD weight care.",
};

const plans = [
  {
    name: "Membership",
    price: "$149",
    period: "/month",
    note: "Clinician visits, messaging, and care team support. Medication billed separately based on what's prescribed.",
  },
  {
    name: "Membership + medication",
    price: "From $299",
    period: "/month",
    note: "Membership plus your prescribed medication, if eligible. Exact price depends on the medication and dose your clinician recommends.",
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-display text-4xl italic mb-4">Pricing</h1>
      <p className="text-[var(--color-ink)]/70 max-w-xl mb-12">
        No hidden fees, and no charge unless a clinician determines
        treatment is right for you. Cancel anytime.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
          >
            <h2 className="font-medium mb-1">{plan.name}</h2>
            <p className="font-display text-4xl italic mb-4">
              {plan.price}
              <span className="text-base not-italic font-body text-[var(--color-ink)]/50">
                {" "}
                {plan.period}
              </span>
            </p>
            <p className="text-sm text-[var(--color-ink)]/60 leading-relaxed">{plan.note}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-[var(--color-ink)]/50 mt-8 max-w-xl">
        Pricing shown is illustrative and should be confirmed against final
        clinical, pharmacy, and payment-processor agreements before launch.
      </p>

      <Link
        href="/get-started"
        className="inline-block mt-8 rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] font-medium px-7 py-3.5 hover:bg-[var(--color-sage)] transition-colors"
      >
        Check your eligibility
      </Link>
    </div>
  );
}
