# Clinical intake specification — GLP-1 weight management

**Status: incomplete by design.** This document defines the *structure*
of the intake and flags what must be present. The actual clinical
content — which questions, which thresholds, which contraindications
trigger which outcome — must be authored and signed off by your Chief
Medical Officer or another licensed clinician who will carry
responsibility for it. Do not launch with anyone else's screening logic,
including logic drafted by an AI assistant or copied from a competitor's
public-facing quiz.

---

## Where this runs

Not in the marketing site repo. Everything in this document describes
questions that collect protected health information, which must be
served and stored inside your BAA-covered environment (Healthie,
Elation, or equivalent). The marketing site's job ends at the state gate
and the handoff.

## Design principle

The intake is a clinical evaluation, not a checkout flow. Concretely,
this means:

- **A "no" outcome must be reachable and must be a real endpoint.** If
  every path through the questionnaire ends in "add to cart," you have
  built a sales funnel wearing a clinical costume. This is the specific
  characterization Novo Nordisk has used in litigation against telehealth
  prescribers, and it's what a LegitScript reviewer will probe.
- **The patient does not select their medication.** They can express a
  preference; the clinician decides. A UI where the patient picks
  "Semaglutide" from a product grid before any evaluation inverts the
  clinical relationship and undercuts the "individualized prescribing"
  defense.
- **No pricing before eligibility.** Showing a price next to a drug name
  during intake reframes the encounter as a purchase.

---

## Section 1 — Identity and eligibility basics

| Field | Purpose | Notes |
|---|---|---|
| Legal name, DOB | Identity, age gate | Must verify 18+; under-18 is a hard stop, no exceptions path |
| State of residence | Licensure match | Passed in from marketing site; re-confirm here |
| Pregnancy / breastfeeding / trying to conceive | Contraindication | Hard stop per FDA labeling |
| Height, weight | BMI calculation | See "BMI and verification" below |

### BMI and verification

FDA-approved labeling for GLP-1 weight-management indications sets the
criteria at BMI ≥30, or BMI ≥27 with at least one weight-related
comorbidity. That is a regulatory fact, not a recommendation about how
your protocol should work — your CMO decides how your practice applies
it and what comorbidities count.

**Self-reported height and weight are trivially falsifiable, and people
do falsify them to obtain these drugs.** Your protocol must define how
BMI is verified: a required video visit, a scale photo, lab work, or
another mechanism your CMO specifies. A text input alone is not a
sufficient safeguard.

---

## Section 2 — Contraindication screening

Your CMO must author the complete list. At minimum it must cover the
boxed-warning and labeled contraindications for the specific agents you
prescribe, including thyroid C-cell tumor history (personal or family)
and MEN2 syndrome, pancreatitis history, and known hypersensitivity —
plus the conditions requiring caution rather than exclusion (gallbladder
disease, diabetic retinopathy, renal impairment, gastroparesis, and
concurrent medications such as insulin or sulfonylureas).

Each item needs a defined outcome: hard stop, clinician review required,
or proceed with note. Do not build a screener where every answer simply
routes forward.

---

## Section 3 — Disordered eating screening (required, not optional)

This is the section most likely to be underbuilt, and the one most
likely to hurt someone.

Weight-loss telehealth is a known access route for people with anorexia
nervosa, bulimia, and binge-eating disorder to obtain appetite
suppressants. A BMI gate does not catch this — someone with an eating
disorder can present with a BMI above your threshold, and someone
restricting severely can falsify their weight upward to qualify.

Requirements:

- Include a **validated screening instrument**, not questions you wrote
  yourself. The SCOFF questionnaire and the EAT-26 are the commonly used
  validated tools; your CMO selects and scores.
- A positive screen must route to **clinician review with an explicit
  decision**, not auto-approval with a note in the chart.
- Your clinicians need a documented protocol for what happens on a
  positive screen, including referral pathways. "Decline and move on" is
  not adequate; someone who screens positive needs to be pointed toward
  actual care.
- Train your care team that a patient's frustration at being declined is
  an expected outcome of a functioning screen, not a conversion problem
  to be solved.

---

## Section 4 — Medical history and medications

Standard fields: current medications and supplements, allergies, past
surgeries (bariatric history is relevant), relevant chronic conditions,
mental health history including current psychiatric medications, alcohol
and substance use.

## Section 5 — Goals and context

Weight history, prior weight-loss attempts, what the patient is hoping
for. Useful clinically and it surfaces unrealistic expectations that
warrant a conversation before prescribing.

## Section 6 — Consents

Telehealth consent, notice of privacy practices acknowledgment,
assignment of benefits if applicable, and — if you prescribe compounded
product — a specific, separate acknowledgment that compounded medication
is not FDA-approved and is not the branded drug. Bundling that last one
into general terms of service is precisely what has drawn regulatory and
litigation attention.

---

## Outcome states

Build all four. If your implementation only has the first, start over.

1. **Approved for clinician review** → proceed to visit
2. **Needs more information** → clinician message, additional questions,
   or labs before a decision
3. **Not clinically appropriate** → declined, with a plain-language
   explanation and, where relevant, a referral
4. **Hard stop** → age, pregnancy, or absolute contraindication; ends the
   flow with an explanation

## Analytics rule

Fire conversion events on **process** milestones only — "intake started,"
"intake completed." Never fire an event, pixel, or conversion tag on a
**clinical** outcome. "Approved for semaglutide" transmitted to an ad
platform is a health-data disclosure, and that exact pattern has produced
FTC enforcement against health companies.
