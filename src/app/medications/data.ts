export type Medication = {
  slug: string;
  name: string;
  summary: string;
  mechanism: string;
  schedule: string;
  disclosure: string;
};

/*
  Each medication gets its own indexable page — the pattern used across
  every major competitor site (medication-specific pages capture branded
  search volume for terms like "semaglutide cost" without putting a drug
  name in the company brand itself).
*/
export const medications: Medication[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    summary: "A once-weekly GLP-1 receptor agonist used for weight management.",
    mechanism:
      "Semaglutide mimics a hormone called GLP-1 that your body releases after eating. It slows digestion and signals fullness to your brain, which can reduce appetite and food intake over time.",
    schedule: "One injection per week, with the dose adjusted gradually under clinician supervision.",
    disclosure:
      "Semaglutide is the active ingredient in the FDA-approved brand-name medications Ozempic® and Wegovy®. GlideMD clinicians may also prescribe compounded semaglutide when clinically appropriate and permitted by law; compounded medications are not FDA-approved and are not Ozempic® or Wegovy®.",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    summary: "A once-weekly dual GIP/GLP-1 receptor agonist used for weight management.",
    mechanism:
      "Tirzepatide acts on two gut hormone pathways, GIP and GLP-1, to reduce appetite and slow digestion, which can lead to greater and more consistent weight loss for some patients.",
    schedule: "One injection per week, with the dose adjusted gradually under clinician supervision.",
    disclosure:
      "Tirzepatide is the active ingredient in the FDA-approved brand-name medications Mounjaro® and Zepbound®. GlideMD clinicians may also prescribe compounded tirzepatide when clinically appropriate and permitted by law; compounded medications are not FDA-approved and are not Mounjaro® or Zepbound®.",
  },
];
