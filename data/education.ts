import type { Bilingual } from "@/lib/i18n";

export type Education = {
  title: Bilingual;
  year: Bilingual;
  school: string;
  /** Highlights the year with the accent color (in-progress degree). */
  accent?: boolean;
};

export const education: Education[] = [
  {
    title: { fr: "AI Engineer — RNCP Niveau 7", en: "AI Engineer — RNCP Level 7" },
    year: { fr: "En cours · 2026", en: "In progress · 2026" },
    school: "Openclassrooms",
    accent: true,
  },
  {
    title: {
      fr: "Développeur Web & Web Mobile — RNCP Niveau 5",
      en: "Développeur Web & Web Mobile — RNCP Level 5",
    },
    year: { fr: "2023", en: "2023" },
    school: "Wild Code School",
  },
  {
    title: {
      fr: "Développeur d'app. Python — RNCP Niveau 6",
      en: "Python App Developer — RNCP Level 6",
    },
    year: { fr: "2022", en: "2022" },
    school: "Openclassrooms",
  },
  {
    title: { fr: "Master Bac+5", en: "Master Bac+5" },
    year: { fr: "2001 · Management", en: "2001 · Management" },
    school: "Grenoble École de Management",
  },
];

export const interests: Bilingual[] = [
  { fr: "Ultra trails", en: "Ultra trail running" },
  { fr: "Lecture — Philosophie & sciences", en: "Reading — Philosophy & science" },
  { fr: "Voyages — Tour du monde solo (2020)", en: "Travel — solo world tour (2020)" },
];
