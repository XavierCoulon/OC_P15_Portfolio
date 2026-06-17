export type Lang = "fr" | "en";

/** A piece of content available in both supported languages. */
export type Bilingual = { fr: string; en: string };

/** Pick the right language variant from a Bilingual value. */
export function t(value: Bilingual, lang: Lang): string {
  return value[lang];
}
