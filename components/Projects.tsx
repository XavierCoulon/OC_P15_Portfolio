"use client";

import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border py-[72px]">
      <SectionHeading num="03" title={{ fr: "Projets sélectionnés", en: "Selected projects" }} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {projects.map((project, i) => (
          // Stagger the right-hand column like the mockup (data-delay 100).
          <ProjectCard key={project.repo} project={project} delay={i % 2 === 1 ? 100 : 0} />
        ))}
      </div>
    </section>
  );
}
