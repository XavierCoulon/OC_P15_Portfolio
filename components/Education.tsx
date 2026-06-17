"use client";

import { useLang } from "@/context/LangContext";
import { education, interests } from "@/data/education";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Education() {
  const { t } = useLang();

  return (
    <section
      id="edu"
      className="grid grid-cols-1 gap-10 border-b border-border py-[72px] md:grid-cols-2 md:gap-16"
    >
      {/* 04 — Education */}
      <div>
        <SectionHeading num="04" title={{ fr: "Formation", en: "Education" }} compact />
        <Reveal className="flex flex-col">
          {education.map((edu, i) => (
            <div
              key={edu.title.fr}
              className={`border-t border-border py-4 ${
                i === education.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="text-lg font-semibold">{t(edu.title)}</div>
              <div
                className={`mt-[3px] font-mono text-xs ${edu.accent ? "text-accent" : "text-faint"}`}
              >
                {t(edu.year)}
              </div>
              <div className="mt-[2px] font-mono text-[11px] text-faint">{edu.school}</div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* 05 — Interests */}
      <div>
        <SectionHeading num="05" title={{ fr: "Centres d'intérêt", en: "Interests" }} compact />
        <Reveal className="flex flex-wrap gap-[10px]">
          {interests.map((interest) => (
            <span
              key={interest.fr}
              className="rounded-full border border-border px-4 py-[9px] text-[15px] text-ink"
            >
              {t(interest)}
            </span>
          ))}
        </Reveal>

        <Reveal delay={120} className="mt-8 rounded-xl border border-border bg-bg p-[22px]">
          <div className="mb-[10px] font-mono text-[11px] text-faint">
            {t({ fr: "Liens rapides", en: "Quick links" })}
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/XavierCoulon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[15px] text-accent no-underline"
            >
              <span className="font-mono text-xs text-faint">→</span> github.com/XavierCoulon
            </a>
            <a
              href="https://www.linkedin.com/in/coulonxavier/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[15px] text-accent no-underline"
            >
              <span className="font-mono text-xs text-faint">→</span> linkedin.com/in/coulonxavier
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
