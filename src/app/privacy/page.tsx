import type { Metadata } from "next";

export const metadata: Metadata = { title: "Placeholder — GlideMD" };

/*
  Placeholder legal page. Do not launch with this content — have counsel
  draft the real privacy policy, terms of service, HIPAA notice of
  privacy practices, and accessibility statement before go-live.
*/
export default function Placeholder() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl italic mb-4">
        This page needs real legal content
      </h1>
      <p className="text-[var(--color-ink)]/60 leading-relaxed">
        Replace this placeholder with counsel-drafted content before launch.
      </p>
    </div>
  );
}
