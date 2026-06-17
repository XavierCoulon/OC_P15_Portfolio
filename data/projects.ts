import type { Bilingual } from "@/lib/i18n";

export type ProjectIcon = "calendar" | "code" | "brain" | "chess" | "search";

type StatPreview = {
  kind: "stat";
  bg: "cream" | "green";
  techLine: string;
  icon: ProjectIcon;
  /** Big mono figure; "\n" renders as a line break. */
  metric: string;
  metricSize: "lg" | "md";
  caption: string;
};

type ImagePreview = {
  kind: "image";
  src: string;
  alt: string;
};

export type Project = {
  title: Bilingual;
  badge: Bilingual;
  description: Bilingual;
  repo: string;
  preview: StatPreview | ImagePreview;
};

export const projects: Project[] = [
  {
    title: { fr: "Atalante Movies Tracker", en: "Atalante Movies Tracker" },
    badge: { fr: "Python · Perso", en: "Python · Perso" },
    description: {
      fr: "Automatisation Python : scraping des séances de cinéma de l'Atalante, enrichissement via l'API TMDB et synchronisation vers une base Notion. Exécuté quotidiennement via GitHub Actions.",
      en: "Python automation: scrapes cinema schedules, enriches data via TMDB API and syncs to a Notion database. Scheduled daily via GitHub Actions.",
    },
    repo: "https://github.com/XavierCoulon/Atalante-Movies-Tracker",
    preview: {
      kind: "stat",
      bg: "cream",
      techLine: "Python · TMDB API · Notion",
      icon: "calendar",
      metric: "1×/jour",
      metricSize: "lg",
      caption: "GitHub Actions → Notion DB",
    },
  },
  {
    title: { fr: "Django Polls", en: "Django Polls (tutorial)" },
    badge: { fr: "Django · Apprentissage", en: "Django · Playground" },
    description: {
      fr: "Implémentation complète du tutoriel officiel Django (parties 1 à 7) : app de sondages, vues génériques, interface d'administration, tests automatisés, fichiers statiques.",
      en: "Complete implementation of the official Django tutorial (parts 1–7): polls app with public views, admin interface, generic views, auto tests and static files.",
    },
    repo: "https://github.com/XavierCoulon/Playground_Django_Tutorial",
    preview: {
      kind: "stat",
      bg: "cream",
      techLine: "Django 6.0 · Tutoriel officiel",
      icon: "code",
      metric: "from polls\nimport app",
      metricSize: "md",
      caption: "Parties 1→7 · Tests · Admin",
    },
  },
  {
    title: { fr: "Agent IA — Triage médical", en: "Medical Triage AI Agent" },
    badge: { fr: "IA · Fine-tuning LLM", en: "AI · Fine-tuning LLM" },
    description: {
      fr: "Fine-tuning Qwen3-1.7B (SFT + LoRA + DPO) pour triage médical P1/P2/P3. Modèles publiés sur HuggingFace, API FastAPI + vLLM. DPO : reward margin 0.395, ResponseRelevancy +11pts.",
      en: "Fine-tuning Qwen3-1.7B (SFT + LoRA + DPO) for P1/P2/P3 medical triage. Models published on HuggingFace, API FastAPI + vLLM. DPO: Reward margin 0.395, Response Relevancy +11pts.",
    },
    repo: "https://github.com/XavierCoulon/OC_P14_Finetunez_votre_propre_LLM",
    preview: {
      kind: "stat",
      bg: "green",
      techLine: "Qwen3-1.7B · SFT + LoRA + DPO · vLLM",
      icon: "brain",
      metric: "+11pts",
      metricSize: "lg",
      caption: "ResponseRelevancy · DPO vs SFT",
    },
  },
  {
    title: { fr: "Agent IA Échecs — FFE", en: "Chess AI Agent — FFE" },
    badge: { fr: "IA · LangGraph / RAG", en: "AI · LangGraph / RAG" },
    description: {
      fr: "Agent d'apprentissage des ouvertures aux échecs pour la FFE. FastAPI + LangGraph, Milvus, moteur Stockfish, Angular. RAG sur WikiChess, APIs Lichess + YouTube, Docker Compose.",
      en: "AI agent for chess opening learning (FFE). Stack: FastAPI + LangGraph, Milvus vector DB, Stockfish engine, Angular frontend. RAG on WikiChess, Lichess + YouTube APIs, full Docker Compose.",
    },
    repo: "https://github.com/XavierCoulon/OC_P13_Agent_IA",
    preview: {
      kind: "stat",
      bg: "green",
      techLine: "LangGraph · Milvus · Stockfish · Angular",
      icon: "chess",
      metric: "1. e4 e5\n2. Nf3",
      metricSize: "md",
      caption: "Sicilienne · Espagnole · RAG WikiChess",
    },
  },
  {
    title: {
      fr: "LunarLander — Reinforcement Learning",
      en: "LunarLander — Reinforcement Learning",
    },
    badge: { fr: "IA · DQN", en: "AI · DQN" },
    description: {
      fr: "Agent DQN entraîné à atterrir une fusée sur la Lune (Gymnasium LunarLander-v3). 8 expériences d'optimisation — meilleur score 241/200. Backend FastAPI + dashboard Streamlit.",
      en: "DQN agent trained to land a rocket on the Moon (Gymnasium LunarLander-v3). 8 hyperparameter experiments — best score 241/200. FastAPI backend + Streamlit analytics dashboard.",
    },
    repo: "https://github.com/XavierCoulon/OC_P11_Lunar_Lander_RL",
    preview: {
      kind: "image",
      src: "/demo_lunar_lander.gif",
      alt: "Agent DQN LunarLander en action",
    },
  },
  {
    title: { fr: "Système RAG — Événements", en: "RAG Events System" },
    badge: { fr: "IA · RAG / FastAPI", en: "AI · RAG / FastAPI" },
    description: {
      fr: "Système RAG production-ready pour la découverte d'événements en Pyrénées-Atlantiques. FAISS + embeddings Mistral, classification d'intent, FastAPI, Docker. 135 tests · 86% coverage · score Ragas 0.85.",
      en: "Production-ready RAG for event discovery in the Pyrénées-Atlantiques. FAISS + Mistral embeddings, intent classification, FastAPI, Docker. 135 tests · 86% coverage · Ragas score 0.85.",
    },
    repo: "https://github.com/XavierCoulon/OC_P7_POC_RAG",
    preview: {
      kind: "stat",
      bg: "green",
      techLine: "FAISS · Mistral · FastAPI · Docker",
      icon: "search",
      metric: "0.85",
      metricSize: "lg",
      caption: "Ragas · 135 tests · 86% coverage",
    },
  },
];
