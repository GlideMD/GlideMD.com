import Link from "next/link";
import type { Metadata } from "next";
import GlideArc from "@/components/GlideArc";

export const metadata: Metadata = {
  title: "How It Works — GlideMD",
  description: "From health assessment to ongoing care — what to expect from GlideMD.",
};

const steps = [
  {
    title: "Tell us about your health",
    body: "Complete a short assessment covering your medical history, current medications, and goals. It takes about 4 minutes and nothing is shared until you submit it.",
  },
  {
    title: "A licensed clinician reviews your case",
    body: "A doctor or nurse practitioner licensed in your state reviews your assessment. If they need more information, they'll message you directly.",
  },
  {
    title: "Get a plan, not just a prescription",
    body: "If treatment is appropriate, your clinician explains the options, sets your starting dose, and answers your questions before anything is prescribed.",
  },
  {
    title: "Your medication ships to your door",
    body: "Prescriptions are sent to a licensed pharmacy, which dispenses and ships your treatment with clear instructions.",
  },
  {
    title: "Check in and adjust as you go",
    body: "Regular check-ins let your clinician track your progress and adjust your plan, dose, or medication if needed.",
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl italic mb-6">How GlideMD works</h1>
      <GlideArc className="w-full h-auto mb-12" showMarker={false} />

      <ol className="space-y-10">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-5">
            <span className="font-display italic text-2xl text-[var(--color-gold)] shrink-0 w-8">
              {i + 1}
            </span>
            <div>
              <h2 className="font-medium mb-1">{step.title}</h2>
              <p className="text-[var(--color-ink)]/60 leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <Link
        href="/get-started"
        className="inline-block mt-12 rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] font-medium px-7 py-3.5 hover:bg-[var(--color-sage)] transition-colors"
      >
        Start your assessment
      </Link>
    </div>
  );
}
