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
        compact ? "mb-9" : "mb-[46px]"
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute left-[-8px] z-0 leading-none font-extrabold text-accent opacity-5 select-none ${
          compact ? "top-[-36px] text-[120px]" : "top-[-48px] text-[160px]"
        }`}
      >
        {num}
      </span>
      <span className="relative z-[1] font-mono text-[13px] text-accent">{num}</span>
      <h2 className="relative z-[1] m-0 font-mono text-[15px] font-medium tracking-[0.08em] text-ink uppercase">
        {t(title)}
      </h2>
    </Reveal>
  );
}
