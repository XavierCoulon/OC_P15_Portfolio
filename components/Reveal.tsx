"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type RevealType = "default" | "slide" | "card";

const ANIM: Record<RevealType, { hidden: string; transition: string }> = {
  default: {
    hidden: "opacity-0 translate-y-9",
    transition: "transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.2,.7,.2,1)]",
  },
  slide: {
    hidden: "opacity-0 -translate-x-14",
    transition: "transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.15,.75,.2,1)]",
  },
  card: {
    hidden: "opacity-0 translate-y-11 scale-[0.93] blur-[10px]",
    transition:
      "transition-[opacity,transform,filter] duration-[850ms] ease-[cubic-bezier(.2,.7,.2,1)]",
  },
};

type RevealProps<T extends ElementType> = {
  as?: T;
  type?: RevealType;
  /** Delay in ms before the element animates in. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "type" | "children" | "className">;

/**
 * Wraps content and reveals it when it scrolls into view, mirroring the
 * IntersectionObserver behaviour of the reference mockup (threshold 0.12,
 * rootMargin -8%, re-hides on exit). Honors prefers-reduced-motion.
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  type = "default",
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      // No animation possible/wanted: reveal immediately. This reads a
      // browser-only capability so it can't be resolved during render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) setTimeout(() => setVisible(true), delay);
          else setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const anim = ANIM[type];
  const state = visible ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0" : anim.hidden;

  return (
    <Tag ref={ref} className={`${anim.transition} ${state} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
