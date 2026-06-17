import type { Metadata } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { themeInitScript } from "@/context/ThemeContext";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xaviercoulon.dev"),
  title: "Xavier Coulon — Développeur Full Stack & Gestion de projets",
  description:
    "Portfolio de Xavier Coulon, développeur Full-Stack (JS/Python) et AI Engineer, fort de 15 ans en gestion de projets SI, AMOA et PMO. Basé à Bayonne.",
  keywords: [
    "Xavier Coulon",
    "Développeur Full-Stack",
    "AI Engineer",
    "AMOA",
    "PMO",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Xavier Coulon", url: "https://github.com/XavierCoulon" }],
  openGraph: {
    title: "Xavier Coulon — Développeur Full Stack & Gestion de projets",
    description:
      "Développeur Full-Stack & AI Engineer, 15 ans en gestion de projets SI / AMOA / PMO.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="light" className={`${schibsted.variable} ${jetbrains.variable}`}>
      <head>
        {/* Apply persisted theme before paint to avoid a flash of wrong colors. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
