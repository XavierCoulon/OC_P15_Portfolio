"use client";

import { useLang } from "@/context/LangContext";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[5px] border border-border px-2 py-[3px] font-mono text-[11px] text-faint">
      {children}
    </span>
  );
}

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="exp" className="border-b border-border py-[72px]">
      <SectionHeading num="01" title={{ fr: "Parcours professionnel", en: "Career path" }} />

      {experiences.map((exp, i) => (
        <Reveal
          key={exp.company}
          type="slide"
          className={`grid grid-cols-1 gap-4 border-t border-border py-[30px] md:grid-cols-[200px_1fr] md:gap-10 ${
            i === experiences.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="flex items-baseline gap-3 md:block">
            <div className="font-mono text-[12.5px] text-faint">{t(exp.dates)}</div>
            <div className="font-mono text-[11px] text-faint md:mt-1">{t(exp.location)}</div>
          </div>

          <div>
            <h3 className="m-0 mb-1 text-[27px] font-bold tracking-[-0.02em]">{t(exp.title)}</h3>
            <div className="mb-[14px] font-mono text-[15px] text-accent">{exp.company}</div>

            {exp.description && (
              <p className="m-0 mb-[14px] max-w-[52ch] text-[17px] leading-[1.6] text-muted">
                {t(exp.description)}
              </p>
            )}

            {exp.subRoles && (
              <div className="flex flex-col gap-[14px]">
                {exp.subRoles.map((sub) => (
                  <div key={sub.title.fr} className="border-l-2 border-border pl-4">
                    <div className="mb-[3px] font-mono text-[11px] text-faint">{t(sub.period)}</div>
                    <div className="text-base font-semibold text-ink">{t(sub.title)}</div>
                    <div className="mt-1 text-[15px] text-muted">{t(sub.description)}</div>
                  </div>
                ))}
              </div>
            )}

            {exp.tags && (
              <div className={`flex flex-wrap gap-[7px] ${exp.subRoles ? "mt-4" : ""}`}>
                {exp.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
