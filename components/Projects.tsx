"use client";

import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border py-[72px]">
      <SectionHeading num="03" title={{ fr: "Projets sélectionnés", en: "Selected projects" }} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {projects.map((project, i) => {
          // Featured card spans a full row; for the rest, stagger the
          // right-hand column like the mockup (data-delay 100). Account for
          // the full-width featured card so column parity stays correct.
          const featuredBefore = projects.slice(0, i).filter((p) => p.featured).length;
          const delay = !project.featured && (i - featuredBefore) % 2 === 1 ? 100 : 0;
          return <ProjectCard key={project.repo} project={project} delay={delay} />;
        })}
      </div>
    </section>
  );
}
