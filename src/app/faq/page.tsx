import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — GlideMD",
  description: "Common questions about eligibility, medication, and how GlideMD works.",
};

const faqs = [
  {
    q: "Am I eligible for treatment?",
    a: "Eligibility depends on your health history, current medications, and your clinician's evaluation. Completing the assessment is the fastest way to find out — it does not guarantee treatment.",
  },
  {
    q: "Is this the same as Ozempic or Wegovy?",
    a: "Ozempic® and Wegovy® are FDA-approved brand-name medications made by Novo Nordisk. Depending on your state and clinical situation, your GlideMD clinician may prescribe the brand-name medication or, where legally permitted, a compounded version containing the same active ingredient. Compounded medications are not FDA-approved and are not Ozempic® or Wegovy®.",
  },
  {
    q: "How fast will I hear back from a clinician?",
    a: "Most patients hear back within one to two business days of completing their assessment.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There's no long-term contract — you can cancel your membership at any time from your account.",
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl italic mb-10">Frequently asked questions</h1>
      <dl className="space-y-8">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-[var(--color-border)] pb-8">
            <dt className="font-medium mb-2">{item.q}</dt>
            <dd className="text-[var(--color-ink)]/60 leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
