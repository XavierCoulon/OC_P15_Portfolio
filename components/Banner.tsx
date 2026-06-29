"use client";

import { useLang } from "@/context/LangContext";

/**
 * Slim notice under the nav clarifying this is a training-project demo
 * (OpenClassrooms AI Engineer · P15), not a commercial site.
 */
export default function Banner() {
  const { t } = useLang();

  return (
    <div
      className="border-b border-border px-5 py-2 text-center font-mono text-[11px] text-muted2 md:px-10"
      style={{ background: "color-mix(in srgb, var(--accent) 9%, var(--bg))" }}
    >
      <span className="text-accent">●</span>{" "}
      {t({
        fr: "Démo — portfolio réalisé dans le cadre de la formation AI Engineer (OpenClassrooms · projet P15).",
        en: "Demo — portfolio built as part of the AI Engineer track (OpenClassrooms · P15 project).",
      })}
    </div>
  );
}
