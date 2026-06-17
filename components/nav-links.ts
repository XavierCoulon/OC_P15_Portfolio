import type { Bilingual } from "@/lib/i18n";

export const navLinks: { href: string; label: Bilingual }[] = [
  { href: "#exp", label: { fr: "Parcours", en: "Work" } },
  { href: "#skills", label: { fr: "Savoir-faire", en: "Skills" } },
  { href: "#projects", label: { fr: "Projets", en: "Projects" } },
  { href: "#edu", label: { fr: "Formation", en: "Education" } },
  { href: "#contact", label: { fr: "Contact", en: "Contact" } },
];
