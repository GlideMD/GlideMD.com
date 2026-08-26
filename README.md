# GlideMD marketing site

Public marketing site for GlideMD — Next.js (App Router) + TypeScript +
Tailwind v4, ready to deploy on Vercel. **No patient health information
should ever be stored or processed in this app** — see the "PHI boundary"
note below.

## Local setup

```bash
nvm use          # or install Node 22+ manually
npm install
npm run dev       # http://localhost:3000
```

## Design system

Concept: the moment a glider catches a thermal at dawn. The signature
element (`src/components/GlideArc.tsx`) is a single continuous arc that
opens the hero and reappears, unbroken, threading through the "how it
works" steps — representing the whole patient journey as one smooth path
rather than a decorative flourish.

- **Colors** — defined as CSS variables in `src/app/globals.css`:
  `--color-ink` (deep indigo, text), `--color-mist` (background),
  `--color-clay` and `--color-gold` (warm accents), `--color-sage`
  (clinical-trust accent).
- **Type** — Newsreader (italic, display headlines) + Manrope (body/UI),
  loaded via `next/font/google` in `src/app/layout.tsx`. These fetch from
  Google Fonts at build time — if you build in a network-restricted
  environment, that step will fail; it works normally on Vercel and on a
  standard local machine.

## What's real content vs. placeholder

Marked inline with comments, but the main ones:

- `src/components/Footer.tsx` — the "Care entities" column has bracketed
  placeholders for your MSO / professional-corporation / pharmacy names
  once the legal structure (roadmap step 2) is finalized.
- `src/app/get-started/page.tsx` — intentionally a shell. Do **not** build
  a real intake quiz here (see below).
- `src/app/about/page.tsx` — needs real clinician bios once your clinical
  network (Wheel / SteadyMD) contracts are signed.
- `src/app/pricing/page.tsx` — pricing is illustrative, confirm against
  real pharmacy and payment-processor agreements.
- `src/app/{privacy,terms,notice-of-privacy-practices,accessibility}` —
  placeholder pages so footer links resolve; need counsel-drafted content
  before launch.

## The PHI boundary — read this before adding anything to `/get-started`

This site is fine for public, unauthenticated content because no PHI ever
touches it. The moment a visitor starts answering health questions,
you're in PHI territory and this Vercel-hosted app is the wrong place for
it. Route the actual intake quiz, patient messaging, and clinical records
through your EHR vendor's compliant environment (Healthie or Elation
Health) instead — either by redirecting to their hosted flow or embedding
their widget. Don't build a custom quiz backend in this repo.

## Deploying

1. Push this repo to GitHub.
2. In Vercel: New Project → import the repo → deploy (build settings are
   auto-detected).
3. Add your domain in Vercel under Settings → Domains and point
   glidemd.com's DNS at it.
4. Every push to `main` auto-deploys; every PR gets its own preview URL.

## Content architecture note

`src/app/medications/[slug]` is a dynamic route driven by
`src/app/medications/data.ts` — add a new medication object there and a
statically-generated, SEO-indexable page is created automatically at
`/medications/<slug>`. This mirrors the pattern used across the
competitor sites researched for this project: keep the drug names off
the core brand, but give each medication its own indexable page.
