"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import type { Project, ProjectIcon } from "@/data/projects";
import Reveal from "@/components/Reveal";

const ICON_PATHS: Record<ProjectIcon, React.ReactNode> = {
  calendar: (
    <>
      <rect x="2" y="3" width="20" height="16" rx="2" />
      <path d="M2 8h20M7 3v5M12 3v5M17 3v5M7 13h.01M12 13h.01M17 13h.01M7 17h.01M12 17h.01M17 17h.01" />
    </>
  ),
  code: (
    <>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </>
  ),
  brain: (
    <>
      <path d="M12 2a4 4 0 014 4c0 1-.3 2-.8 2.7A4 4 0 0118 12a4 4 0 01-4 4v2M12 2a4 4 0 00-4 4c0 1 .3 2 .8 2.7A4 4 0 006 12a4 4 0 004 4v2" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="9" y1="22" x2="15" y2="22" />
      <circle cx="12" cy="5" r="1" fill="var(--accent)" />
    </>
  ),
  chess: (
    <>
      <rect x="2" y="20" width="20" height="2" rx="1" />
      <path d="M6 20V8l4-4 4 4v12" />
      <path d="M10 20v-6h4v6" />
      <circle cx="17" cy="5" r="2" />
      <path d="M19 7l2 3-2 1" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="11" y1="8" x2="11" y2="14" />
    </>
  ),
};

function ProjectIconSvg({ name }: { name: ProjectIcon }) {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
      aria-hidden
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

function Preview({ project }: { project: Project }) {
  const { preview } = project;

  if (preview.kind === "image") {
    return (
      <div className="relative mb-[18px] aspect-[3/2] overflow-hidden rounded-md bg-black">
        <Image src={preview.src} alt={preview.alt} fill className="object-cover" unoptimized />
      </div>
    );
  }

  const cream = preview.bg === "cream";

  return (
    <div
      className="mb-[18px] flex aspect-[3/2] flex-col justify-between overflow-hidden rounded-md px-5 py-[18px]"
      style={
        cream ? { background: "#f5efe4" } : { background: "#eaf7f0", border: "1px solid #b8e8d0" }
      }
    >
      <div className="font-mono text-[10px] text-faint">{preview.techLine}</div>
      <div className="flex flex-1 items-center justify-center py-2">
        <ProjectIconSvg name={preview.icon} />
      </div>
      <div>
        <div
          className={`font-mono font-bold text-ink ${
            preview.metricSize === "lg" ? "text-[42px] leading-none" : "text-[28px] leading-[1.15]"
          }`}
        >
          {preview.metric.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </div>
        <div className="mt-2 font-mono text-[11px] text-accent">{preview.caption}</div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { t } = useLang();
  const repoLabel = project.repo.replace(/^https?:\/\//, "");

  return (
    <Reveal
      as="article"
      type="card"
      delay={delay}
      className="cursor-pointer transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(31,122,77,0.13)]"
    >
      <Preview project={project} />

      <div className="mb-[6px] flex items-baseline justify-between gap-3">
        <h3 className="m-0 text-[23px] font-bold tracking-[-0.02em]">{t(project.title)}</h3>
        <span className="shrink-0 font-mono text-[11px] text-accent">{t(project.badge)}</span>
      </div>

      <p className="m-0 text-[15.5px] leading-[1.55] text-muted">{t(project.description)}</p>

      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-[10px] inline-flex items-center gap-[5px] font-mono text-[11px] text-accent no-underline"
      >
        → {repoLabel}
      </a>
    </Reveal>
  );
}
