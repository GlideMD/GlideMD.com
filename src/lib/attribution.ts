/**
 * Marketing attribution capture.
 *
 * IMPORTANT — the one rule that matters here: attribution flows OUTWARD
 * only. You may pass a campaign ID into your clinical platform so you can
 * later ask "how many patients came from campaign X." You must never pull
 * health data back out into your ad platforms, and you must never put
 * health information into a URL parameter, pixel, or client-side analytics
 * event.
 *
 * Sending health data to Meta/Google pixels via a marketing site is
 * exactly the pattern that has produced FTC enforcement actions against
 * other telehealth and health companies. Keep conversion tracking
 * server-side and fire it on non-clinical milestones only (e.g. "intake
 * started"), never on clinical outcomes (e.g. "approved for semaglutide").
 */

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "adgroup_id",
  "ad_id",
  "placement",
] as const;

export type Attribution = Partial<Record<(typeof ATTRIBUTION_KEYS)[number], string>> & {
  landing_path?: string;
  referrer?: string;
};

/** Read attribution from the current URL. Safe to call client-side only. */
export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) attribution[key] = value.slice(0, 200);
  }

  attribution.landing_path = window.location.pathname;
  if (document.referrer) attribution.referrer = document.referrer.slice(0, 300);

  return attribution;
}

const STORAGE_KEY = "glidemd_attribution";

/**
 * Persist first-touch attribution for the session so it survives
 * navigation between marketing pages before the handoff.
 *
 * sessionStorage is appropriate here precisely BECAUSE this contains no
 * health information — it is campaign metadata only. Never extend this to
 * store answers to health questions.
 */
export function persistAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing) return JSON.parse(existing) as Attribution;

    const fresh = readAttribution();
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    return fresh;
  } catch {
    return readAttribution();
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Attribution) : {};
  } catch {
    return {};
  }
}

/**
 * Build the query string handed to your EHR vendor's hosted intake flow.
 * Carries campaign metadata and state only — no health information.
 */
export function buildHandoffParams(stateCode: string): string {
  const attribution = getAttribution();
  const params = new URLSearchParams();

  params.set("state", stateCode);
  for (const [key, value] of Object.entries(attribution)) {
    if (value) params.set(key, value);
  }

  return params.toString();
}
