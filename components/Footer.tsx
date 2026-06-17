"use client";

import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-[26px] font-mono text-xs text-faint md:px-10">
        <span>© 2026 Xavier Coulon</span>
        <span>{t({ fr: "Next.js · déployé sur VPS", en: "Next.js · deployed on VPS" })}</span>
      </div>
    </footer>
  );
}
