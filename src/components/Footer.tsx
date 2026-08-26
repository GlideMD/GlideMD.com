import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-1">
          <p className="font-display text-lg mb-3">
            Glide<span className="text-[var(--color-sage)]">MD</span>
          </p>
          <p className="text-[var(--color-ink)]/60 leading-relaxed">
            Physician-guided weight care, prescribed after a real medical
            evaluation. Available where GlideMD is licensed to practice.
          </p>
        </div>

        <div>
          <p className="font-medium mb-3">Company</p>
          <ul className="space-y-2 text-[var(--color-ink)]/60">
            <li><Link href="/how-it-works" className="hover:text-[var(--color-ink)]">How it works</Link></li>
            <li><Link href="/medications" className="hover:text-[var(--color-ink)]">Medications</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-ink)]">Our doctors</Link></li>
            <li><Link href="/faq" className="hover:text-[var(--color-ink)]">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium mb-3">Legal</p>
          <ul className="space-y-2 text-[var(--color-ink)]/60">
            <li><Link href="/privacy" className="hover:text-[var(--color-ink)]">Privacy policy</Link></li>
            <li><Link href="/notice-of-privacy-practices" className="hover:text-[var(--color-ink)]">HIPAA notice of privacy practices</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--color-ink)]">Terms of service</Link></li>
            <li><Link href="/accessibility" className="hover:text-[var(--color-ink)]">Accessibility</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium mb-3">Care entities</p>
          {/*
            Placeholder pattern for the MSO + professional-corporation
            disclosure seen on Felix / MyRocky footers — replace with the
            real registered entity names, states of formation, and pharmacy
            NABP/license numbers once the legal structure is finalized.
          */}
          <ul className="space-y-2 text-[var(--color-ink)]/60 leading-relaxed">
            <li>GlideMD Health, Inc. — marketing &amp; technology</li>
            <li>[GlideMD Medical Group, P.C.] — clinical services</li>
            <li>[Pharmacy partner name] — NABP #[pending]</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-[var(--color-ink)]/50 leading-relaxed space-y-2">
          <p>
            GlideMD is not a pharmacy or drug manufacturer and does not
            guarantee any specific weight-loss outcome. Compounded
            medications, when prescribed, are not FDA-approved and are not
            Ozempic&reg;, Wegovy&reg;, Mounjaro&reg;, or Zepbound&reg;.
            Treatment is only provided after a licensed clinician determines
            it is clinically appropriate.
          </p>
          <p>&copy; {year} GlideMD Health, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
