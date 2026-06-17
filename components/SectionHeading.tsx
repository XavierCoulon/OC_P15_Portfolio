"use client";

import { useLang } from "@/context/LangContext";
import type { Bilingual } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

/**
 * Numbered section header with the oversized watermark digit behind it.
 * `compact` is used inside the two-column Education/Interests block.
 */
export default function SectionHeading({
  num,
  title,
  compact = false,
}: {
  num: string;
  title: Bilingual;
  compact?: boolean;
}) {
  const { t } = useLang();

  return (
    <Reveal
      className={`relative flex items-baseline gap-[18px] overflow-hidden ${
        compact ? "mb-9 pt-2" : "mb-[46px] pt-4"
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute left-[-8px] z-0 leading-none font-extrabold text-accent opacity-[0.09] select-none ${
          compact ? "top-[-30px] text-[140px]" : "top-[-40px] text-[180px]"
        }`}
      >
        {num}
      </span>
      <span className="relative z-[1] font-mono text-[13px] text-accent">{num}</span>
      <h2
        className={`relative z-[1] m-0 font-bold tracking-[-0.02em] text-ink ${
          compact ? "text-[26px]" : "text-[30px]"
        }`}
      >
        {t(title)}
      </h2>
    </Reveal>
  );
}
