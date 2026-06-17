"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { navLinks } from "@/components/nav-links";
import ThemeToggle from "@/components/ThemeToggle";
import LangToggle from "@/components/LangToggle";
import MobileMenu from "@/components/MobileMenu";

export default function Nav() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ background: "var(--header-bg)", borderColor: "var(--header-border)" }}
      >
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-6 px-5 py-[18px] md:px-10">
          <a href="#top" className="text-base font-bold tracking-[-0.02em] text-ink no-underline">
            Xavier Coulon
          </a>

          <nav className="hidden items-center gap-[30px] font-mono text-xs tracking-[0.06em] uppercase md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted2 no-underline hover:text-ink"
              >
                {t(link.label)}
              </a>
            ))}
            <ThemeToggle className="text-sm" />
            <LangToggle className="text-xs" />
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex cursor-pointer items-center justify-center border-none bg-transparent p-[6px] text-ink md:hidden"
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="1" y1="2" x2="21" y2="2" />
              <line x1="1" y1="9" x2="21" y2="9" />
              <line x1="1" y1="16" x2="21" y2="16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
