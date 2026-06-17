"use client";

import { useLang } from "@/context/LangContext";

export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang } = useLang();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
      className={`inline-flex cursor-pointer items-center gap-[5px] border-none bg-transparent p-0 font-mono tracking-[0.06em] text-ink ${className}`}
    >
      <span className={lang === "fr" ? "font-semibold text-accent" : "text-faint"}>FR</span>
      <span className="text-faint">·</span>
      <span className={lang === "en" ? "font-semibold text-accent" : "text-faint"}>EN</span>
    </button>
  );
}
