"use client";

import { useLang } from "@/context/LangContext";
import { technicalSkills, softSkills } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="border-b border-border py-[72px]">
      <SectionHeading num="02" title={{ fr: "Savoir-faire", en: "Know-how" }} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        {/* Technical */}
        <Reveal>
          <h3 className="m-0 mb-[22px] text-[21px] font-bold tracking-[-0.01em]">
            {t({ fr: "Techniques", en: "Technical" })}
          </h3>
          <div className="flex flex-col">
            {technicalSkills.map((skill, i) => (
              <div
                key={skill.value}
                className={`flex items-baseline justify-between border-t border-border py-[13px] ${
                  i === technicalSkills.length - 1 ? "border-b" : ""
                }`}
              >
                <span
                  className={`text-base ${skill.accent ? "font-semibold text-accent" : "text-ink"}`}
                >
                  {skill.value}
                </span>
                <span
                  className={`font-mono text-[11px] ${skill.accent ? "text-accent" : "text-faint"}`}
                >
                  {t(skill.label)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Management & soft skills */}
        <Reveal delay={120}>
          <h3 className="m-0 mb-[22px] text-[21px] font-bold tracking-[-0.01em]">
            {t({ fr: "Management & Savoir-être", en: "Management & Soft skills" })}
          </h3>
          <div className="flex flex-col">
            {softSkills.map((skill, i) => (
              <div
                key={skill.fr}
                className={`border-t border-border py-[13px] text-base text-ink ${
                  i === softSkills.length - 1 ? "border-b" : ""
                }`}
              >
                {t(skill)}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
