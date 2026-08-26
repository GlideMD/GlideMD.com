"use client";

import { useEffect, useState } from "react";
import { ALL_STATES, isServiceable } from "@/lib/states";
import { persistAttribution, buildHandoffParams } from "@/lib/attribution";

/**
 * Where your EHR vendor's hosted clinical intake lives. Set this via
 * NEXT_PUBLIC_INTAKE_URL once your Healthie / Elation environment is
 * provisioned. Everything after this redirect is PHI and is their
 * responsibility to store, encrypt, and audit under your BAA.
 */
const INTAKE_URL = process.env.NEXT_PUBLIC_INTAKE_URL ?? "";

type Status = "asking" | "covered" | "not-covered";

export default function StateGate() {
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState<Status>("asking");

  // Capture campaign metadata on mount, before any navigation.
  useEffect(() => {
    persistAttribution();
  }, []);

  function handleContinue() {
    if (!selected) return;
    setStatus(isServiceable(selected) ? "covered" : "not-covered");
  }

  function handleStartIntake() {
    if (!INTAKE_URL) {
      // eslint-disable-next-line no-console
      console.warn(
        "NEXT_PUBLIC_INTAKE_URL is not set — point this at your EHR vendor's hosted intake flow."
      );
      return;
    }
    const separator = INTAKE_URL.includes("?") ? "&" : "?";
    window.location.href = `${INTAKE_URL}${separator}${buildHandoffParams(selected)}`;
  }

  if (status === "covered") {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-left">
        <p className="font-display text-2xl italic mb-3">
          Good news — we can see patients in your state.
        </p>
        <p className="text-[var(--color-ink)]/60 leading-relaxed mb-6">
          Next you&rsquo;ll complete your health assessment. A licensed
          clinician reviews every answer before any treatment is
          considered, and your information is handled under our{" "}
          <a href="/notice-of-privacy-practices" className="text-[var(--color-sage)] underline">
            notice of privacy practices
          </a>
          .
        </p>
        <button
          onClick={handleStartIntake}
          className="rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] font-medium px-7 py-3.5 hover:bg-[var(--color-sage)] transition-colors"
        >
          Start my health assessment
        </button>
      </div>
    );
  }

  if (status === "not-covered") {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-left">
        <p className="font-display text-2xl italic mb-3">
          We&rsquo;re not treating patients in your state yet.
        </p>
        <p className="text-[var(--color-ink)]/60 leading-relaxed mb-6">
          GlideMD clinicians can only treat patients in states where
          they&rsquo;re licensed. We&rsquo;re adding states over time — leave
          your email and we&rsquo;ll let you know when yours opens.
        </p>
        {/*
          Waitlist capture: an email address plus a state is not PHI, so
          it can be collected here. Do NOT add health questions to this
          form — the moment you ask why they want treatment, it becomes
          PHI and belongs behind the BAA.
        */}
        <div className="rounded-xl border border-dashed border-[var(--color-border)] p-6 text-sm text-[var(--color-ink)]/50">
          Wire up a waitlist form here (email + state only). A plain
          transactional email provider is fine for this — no BAA needed,
          because no health information is involved.
        </div>
        <button
          onClick={() => setStatus("asking")}
          className="mt-6 text-sm text-[var(--color-sage)] underline"
        >
          Choose a different state
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-left">
      <label htmlFor="state" className="block font-medium mb-2">
        Where do you live?
      </label>
      <p className="text-sm text-[var(--color-ink)]/60 mb-5">
        Clinicians can only treat patients in states where they hold a
        license, so this is the first thing we check.
      </p>

      <select
        id="state"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-mist)] px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
      >
        <option value="">Select your state</option>
        {ALL_STATES.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleContinue}
        disabled={!selected}
        className="rounded-full bg-[var(--color-ink)] text-[var(--color-mist)] font-medium px-7 py-3.5 hover:bg-[var(--color-sage)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}
