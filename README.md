# OC_P15 — Portfolio Xavier Coulon

Portfolio web personnel **one-page**, responsive, bilingue **FR/EN** et avec **thème clair/sombre**, pour Xavier Coulon — Développeur Full-Stack & AI Engineer (AMOA/PMO).

Recréé dans une vraie codebase à partir des maquettes de référence (design « Éditorial » retenu).

> ℹ️ **Projet de formation** — ce portfolio est une **démonstration** réalisée dans le cadre du **projet P15** de la formation **AI Engineer (OpenClassrooms)**. Le contenu reflète un profil réel, mais le site est un livrable pédagogique (non indexé par les moteurs de recherche).

## Stack

|           |                                                                   |
| --------- | ----------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack)         |
| UI        | React 19 · TypeScript                                             |
| Styling   | Tailwind CSS 4 (config CSS-first, design tokens en variables CSS) |
| Fonts     | Schibsted Grotesk + JetBrains Mono (`next/font/google`)           |
| i18n      | React Context + `localStorage` (toggle FR/EN sans routing)        |
| Thème     | React Context + `localStorage` + script anti-FOUC                 |
| Qualité   | ESLint + Prettier + CI GitHub Actions                             |

## Architecture

```
app/            layout (fonts, providers, SEO), page (composition), globals.css (tokens)
components/     Nav, Hero, Experience, Skills, Projects, Education, Contact, Footer,
                ThemeToggle, LangToggle, MobileMenu, Reveal, SectionHeading
context/        ThemeContext, LangContext
data/           experience, skills, projects, education (contenu bilingue typé)
lib/            i18n (type Bilingual + helper t)
public/         Photo_CV.jpeg, demo_lunar_lander.gif
```

Le contenu est **100 % statique** : aucune base de données ni fetch. Chaque chaîne bilingue est typée `Bilingual = { fr: string; en: string }` et résolue selon la langue active.

## Lancer en local

```bash
npm install
npm run dev          # http://localhost:3000
```

Autres scripts :

```bash
npm run build        # build de production
npm run start        # sert le build
npm run lint         # ESLint
npm run format       # Prettier --write
npm run format:check # Prettier --check (utilisé par la CI)
```

## Déploiement

### Vercel

1. Importer le dépôt sur [vercel.com/new](https://vercel.com/new).
2. Framework détecté automatiquement (Next.js). Aucune variable d'environnement requise.
3. Déploiement à chaque push. La directive `output: "standalone"` est ignorée par Vercel.

### VPS (Docker + Nginx)

Le projet build en mode `standalone` ; un `Dockerfile` multi-stage est fourni.

```bash
docker build -t oc-p15-portfolio .
docker run -d --name portfolio -p 3000:3000 oc-p15-portfolio
```

Exemple de reverse proxy Nginx :

```nginx
server {
    server_name xaviercoulon.dev;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Alternative sans Docker, avec PM2 :

```bash
npm ci && npm run build
PORT=3000 pm2 start node --name portfolio -- .next/standalone/server.js
```

## Intégration continue

`.github/workflows/ci.yml` exécute, sur chaque push et PR vers `main` : `format:check` → `lint` → `build`.

---

© 2026 Xavier Coulon
