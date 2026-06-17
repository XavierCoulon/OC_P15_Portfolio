"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="pt-24 pb-[110px]">
      <div className="relative mb-1 h-20">
        <span
          aria-hidden
          className="pointer-events-none absolute top-[-28px] left-[-8px] text-[120px] leading-none font-extrabold text-accent opacity-5 select-none"
        >
          06
        </span>
        <Reveal className="relative pt-4 font-mono text-[13px] text-accent">06 — Contact</Reveal>
      </div>

      <Reveal
        as="h2"
        className="m-0 mb-9 max-w-[14ch] text-[clamp(40px,6.5vw,80px)] leading-[0.96] font-extrabold tracking-[-0.04em]"
      >
        {t({ fr: "Construisons quelque chose.", en: "Let's build something." })}
      </Reveal>

      <Reveal delay={120} className="flex flex-wrap items-center gap-[14px]">
        <a
          href="mailto:xcoulon.mail@gmail.com"
          className="rounded-full bg-ink px-[26px] py-[15px] text-[17px] font-medium text-bg no-underline"
        >
          xcoulon.mail@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/coulonxavier/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-[22px] py-[15px] text-[17px] text-ink no-underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/XavierCoulon"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-[22px] py-[15px] text-[17px] text-ink no-underline"
        >
          GitHub
        </a>
      </Reveal>
    </section>
  );
}
