import type { Bilingual } from "@/lib/i18n";

export type TechnicalSkill = {
  value: string;
  label: Bilingual;
  /** Highlights the row with the accent color (used for the AI line). */
  accent?: boolean;
};

export const technicalSkills: TechnicalSkill[] = [
  { value: "Python · TypeScript · JavaScript", label: { fr: "Langages", en: "Languages" } },
  { value: "React · Next.js · Tailwind · Redux", label: { fr: "Frontend", en: "Frontend" } },
  { value: "FastAPI · Django · Node · Nest.js", label: { fr: "Backend", en: "Backend" } },
  { value: "PostgreSQL · MongoDB · MySQL", label: { fr: "Data", en: "Data" } },
  {
    value: "LLMs · RAG · ML · Computer Vision",
    label: { fr: "IA", en: "AI" },
    accent: true,
  },
  { value: "Docker · CI/CD · Azure · GitHub", label: { fr: "DevOps", en: "DevOps" } },
];

export const softSkills: Bilingual[] = [
  { fr: "AMOA · PMO · Pilotage de projet", en: "AMOA · PMO · Project steering" },
  {
    fr: "Management d'équipe (10 CPO + prestataires)",
    en: "Team management (10 PMs + contractors)",
  },
  {
    fr: "Rédaction de specs fonctionnelles & cadrage",
    en: "Functional specifications & needs framing",
  },
  {
    fr: "Communication & transversalité",
    en: "Communication & cross-functional alignment",
  },
  { fr: "Anglais C1 · Agile · Scrum", en: "English C1 · Agile · Scrum" },
  {
    fr: "Adaptabilité · Curiosité · Veille tech",
    en: "Adaptability · Curiosity · Tech watch",
  },
];
