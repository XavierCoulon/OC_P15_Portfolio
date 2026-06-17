"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="border-b border-border pt-24 pb-20">
      <Reveal className="mb-[30px] font-mono text-[13px] tracking-[0.04em] text-accent">
        — {t({ fr: "Portfolio · 2026", en: "Portfolio · 2026" })}
      </Reveal>

      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-10">
        <Reveal
          as="h1"
          className="m-0 mb-7 min-w-0 flex-1 text-[clamp(28px,9vw,52px)] leading-[1.0] font-extrabold tracking-[-0.035em] md:text-[clamp(32px,4.8vw,62px)]"
        >
          {t({ fr: "Développeur Full Stack ", en: "Full Stack Developer " })}
          <span className="text-accent">&amp;</span>
          {t({ fr: " Gestion de projets", en: " Project Management" })}
        </Reveal>

        <Reveal delay={80} className="shrink-0">
          <div className="inline-block rounded-lg bg-accent p-[3px]">
            <Image
              src="/Photo_CV.jpeg"
              alt="Xavier Coulon"
              width={164}
              height={200}
              priority
              className="block rounded-md object-cover object-top grayscale"
              style={{ width: 164, height: 200 }}
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-[14px] grid grid-cols-1 items-end gap-5 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <Reveal as="p" delay={120} className="m-0 max-w-[38ch] text-lg leading-[1.6] text-muted">
          {t({
            fr: "Développeur Full-Stack depuis 3 ans, spécialisé JS/Python, avec 15 ans de gestion de projets SI, AMOA et PMO. Formation AI Engineer en cours.",
            en: "Full-Stack Developer (3+ yrs, JS/Python) with 15+ years in IT project management, AMOA and PMO. Studying AI Engineering in parallel. I code, I architect, and I lead.",
          })}
        </Reveal>

        <Reveal
          delay={180}
          className="flex flex-col gap-[10px] font-mono text-[12.5px] text-muted2"
        >
          <div className="flex justify-between border-b border-border pb-2">
            <span>{t({ fr: "Statut", en: "Status" })}</span>
            <span className="text-accent">
              {t({ fr: "Ouvert aux opportunités", en: "Open to opportunities" })}
            </span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span>{t({ fr: "Basé à", en: "Based in" })}</span>
            <span className="text-ink">Bayonne, Nouvelle-Aquitaine</span>
          </div>
          <div className="flex justify-between">
            <span>Focus</span>
            <span className="text-ink">IA · Full Stack · AMOA</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
