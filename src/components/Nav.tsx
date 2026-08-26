import Link from "next/link";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/medications", label: "Medications" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Our doctors" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-mist)]/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight">
          Glide<span className="text-[var(--color-sage)]">MD</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-ink)]/70 hover:text-[var(--color-ink)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-started"
          className="rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] text-sm font-medium px-5 py-2.5 hover:bg-[var(--color-sage)] transition-colors"
        >
          Check eligibility
        </Link>
      </div>
    </header>
  );
}
