import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — GlideMD",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-4xl italic mb-6">Get in touch</h1>
      <p className="text-[var(--color-ink)]/70 leading-relaxed mb-8">
        Existing patients: message your care team directly from your
        account for the fastest response. For everything else, reach us
        at{" "}
        <a href="mailto:support@glidemd.com" className="text-[var(--color-sage)]">
          support@glidemd.com
        </a>
        .
      </p>
    </div>
  );
}
