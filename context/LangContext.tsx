"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Bilingual, Lang } from "@/lib/i18n";
import { t as translate } from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  /** Resolve a Bilingual value for the current language. */
  t: (value: Bilingual) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  // Hydrate from localStorage after mount. The default stays "fr" for the SSR
  // markup (server can't read localStorage), so this sync must happen post-mount.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "fr" || stored === "en") setLang(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  const t = useCallback((value: Bilingual) => translate(value, lang), [lang]);

  return <LangContext value={{ lang, toggleLang, t }}>{children}</LangContext>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
