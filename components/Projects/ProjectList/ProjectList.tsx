import React from "react";
import { Project } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import css from "./ProjectList.module.css";

interface ProjectListProps {
  projects: Project[];
  columns?: 2 | 3;
}

export default function ProjectList({
  projects,
  columns = 2,
}: ProjectListProps) {
  // NOTE: Handle empty state gracefully
  if (projects.length === 0) {
    return (
      <div className={css.emptyState}>
        <p className={css.emptyText}>
          No projects to display yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${css.grid} ${columns === 3 ? css.gridThreeCol : css.gridTwoCol}`}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
