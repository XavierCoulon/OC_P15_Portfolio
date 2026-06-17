import type { Bilingual } from "@/lib/i18n";

export type SubRole = {
  period: Bilingual;
  title: Bilingual;
  description: Bilingual;
};

export type Experience = {
  dates: Bilingual;
  location: Bilingual;
  title: Bilingual;
  company: string;
  description?: Bilingual;
  subRoles?: SubRole[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    dates: { fr: "fév. 2023 — présent", en: "Feb 2023 — present" },
    location: { fr: "Sport · Bidart", en: "Sport · Bidart" },
    title: { fr: "Développeur Full-Stack", en: "Full-Stack Developer" },
    company: "AIA Sports",
    description: {
      fr: "Conception et développement de solutions d'analyse de performance sportive (AIA Rugby, AIA Software). Lecteur vidéo live multi-vues from scratch — React, serveur Python d'ingestion flux vidéo, APIs FastAPI + Node.js, Clean Code, DevOps du besoin au déploiement.",
      en: "Design and development of sports performance analysis solutions (AIA Rugby, AIA Software). Built a live multi-view video player from scratch — React frontend, Python server for video ingestion, FastAPI + Node.js APIs, clean code practices, full DevOps from specs to deployment.",
    },
    tags: ["Python", "TypeScript", "React", "Next.js", "FastAPI", "Docker / CI·CD", "Azure"],
  },
  {
    dates: { fr: "2008 — 2022", en: "2008 — 2022" },
    location: { fr: "Jeux / Loterie", en: "Lottery / Gaming" },
    title: { fr: "Plusieurs rôles — 14 ans", en: "Multiple roles — 14 years" },
    company: "FDJ – Française des Jeux",
    subRoles: [
      {
        period: {
          fr: "2020 — 2022 · Entité pilotage commercial",
          en: "2020 — 2022 · Commercial strategy division",
        },
        title: {
          fr: "Project Management Officer (PMO)",
          en: "Project Management Officer (PMO)",
        },
        description: {
          fr: "Structuration, suivi transversal et assistance au pilotage des projets.",
          en: "Transversal oversight and assistance for projects and workstreams.",
        },
      },
      {
        period: { fr: "2020 · FDJ Gaming Solutions", en: "2020 · FDJ Gaming Solutions" },
        title: { fr: "Directeur de projet informatique", en: "IT Project Director" },
        description: {
          fr: "Déploiement d'une offre de pronostics sportifs pour la loterie d'Ontario — pilotage digital (QCD, comités, KPI).",
          en: "Deployment of a sports betting offer for the Ontario lottery — digital project steering (QCD, steering committees, KPIs).",
        },
      },
      {
        period: {
          fr: "2015 — 2019 · Commercial · Anglet",
          en: "2015 — 2019 · Commercial · Anglet",
        },
        title: { fr: "Responsable secteur (600 PDV)", en: "Regional Manager (600 POS)" },
        description: {
          fr: "Création et pilotage d'un centre de profit from scratch : 600 PDV, 2 sites, 3 départements, 15 collaborateurs. Développement commercial et relations institutionnelles.",
          en: "Created and led a profit center from scratch: 600 points of sale, 2 sites, 3 departments, 15 employees, 4 business lines. Commercial development and institutional relations.",
        },
      },
      {
        period: {
          fr: "2008 — 2015 · DSI · Boulogne-Billancourt",
          en: "2008 — 2015 · IT division · Boulogne-Billancourt",
        },
        title: {
          fr: "Chef de Projet AMOA → Responsable AMOA",
          en: "AMOA Project Manager → Head of AMOA",
        },
        description: {
          fr: "Du CP au management de 10 chefs de projets AMOA + 12 prestataires. Périmètre : Marketing, Digital, BI, RH. Projets : ParionsSport PDV, Live Betting ParionsWeb.",
          en: "From CP to managing 10 AMOA PMs + 12 contractors. Scope: Marketing (lottery, sports betting), Digital (web, mobile), BI, HR. Projects: ParionsSport POS, Live Betting ParionsWeb.",
        },
      },
    ],
    tags: ["AMOA", "PMO", "Management", "MS Project", "Cycle en V", "KPI"],
  },
  {
    dates: { fr: "2001 — 2011", en: "2001 — 2011" },
    location: { fr: "Conseil / SI", en: "Consulting / IT" },
    title: { fr: "Consultant SI / Chef de Projet AMOA", en: "IT Consultant / AMOA PM" },
    company: "Altran · ALTEN · LVS",
    description: {
      fr: "10 ans de conseil, missions AMOA/CP SI chez de grands comptes. Altran (2001→2005) : missions PSA Peugeot Citroën et IBM Ireland (e-business). ALTEN (2005→2008) : missions AMOA FDJ et Renault. LVS (2010→2011) : account manager IT pour la FDJ, propositions commerciales et reporting financier.",
      en: "10 years of consulting, driving AMOA missions at major accounts. Altran (2001→2005): missions at PSA Peugeot Citroën and IBM Ireland (e-business). ALTEN (2005→2008): AMOA missions at FDJ and Renault. LVS (2010→2011): IT account manager for FDJ, commercial proposals and financial reporting.",
    },
    tags: ["AMOA", "Gestion de projet", "Cycle en V"],
  },
  {
    dates: { fr: "1999 — 2001", en: "1999 — 2001" },
    location: { fr: "Télécom · Alternance", en: "Telecom · Work-study" },
    title: { fr: "Webmaster (MOA & MOE)", en: "Webmaster (MOA & MOE)" },
    company: "Orange",
    description: {
      fr: "En alternance : MOA & MOE dans l'implémentation d'une market place partenaires et d'intranets au sein de la filiale partenariats d'Orange.",
      en: "Work-study: MOA & MOE for a partner marketplace and intranets within Orange's partnerships subsidiary.",
    },
  },
];
