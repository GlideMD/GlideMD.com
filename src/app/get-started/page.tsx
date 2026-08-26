import type { Metadata } from "next";
import StateGate from "@/components/intake/StateGate";

export const metadata: Metadata = {
  title: "Check Your Eligibility — GlideMD",
  description:
    "See whether GlideMD treats patients in your state, then start your health assessment.",
  // Keep the funnel out of the index — you don't want search engines
  // ranking a half-finished intake step above your real content pages.
  robots: { index: false, follow: true },
};

export default function GetStarted() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="font-display text-4xl italic mb-4 text-center">
        Let&rsquo;s see if GlideMD is a fit.
      </h1>
      <p className="text-[var(--color-ink)]/60 mb-10 text-center max-w-md mx-auto">
        Two quick steps: we check that we can treat you where you live,
        then a clinician reviews your health history.
      </p>

      <StateGate />

      <p className="text-xs text-[var(--color-ink)]/50 mt-8 text-center leading-relaxed max-w-md mx-auto">
        Completing an assessment does not guarantee treatment. A licensed
        clinician decides whether medication is appropriate for you, and
        may determine that it isn&rsquo;t.
      </p>
    </div>
  );
}
