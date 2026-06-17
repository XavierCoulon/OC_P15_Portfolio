"use client";

import { useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { navLinks } from "@/components/nav-links";
import ThemeToggle from "@/components/ThemeToggle";
import LangToggle from "@/components/LangToggle";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();

  // Lock body scroll and allow Escape to close while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-10 bg-bg">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer le menu"
        className="absolute top-6 right-6 cursor-pointer border-none bg-transparent p-2 text-ink"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="2" y1="2" x2="20" y2="20" />
          <line x1="20" y1="2" x2="2" y2="20" />
        </svg>
      </button>

      <nav className="flex flex-col items-center gap-7 font-mono text-lg tracking-[0.06em] uppercase">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={onClose} className="text-ink no-underline">
            {t(link.label)}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[18px] border-t border-border pt-6">
        <ThemeToggle className="text-lg" />
        <LangToggle className="text-sm" />
      </div>
    </div>
  );
}
