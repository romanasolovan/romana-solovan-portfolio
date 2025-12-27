"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import css from "./PortfolioSection.module.css";

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and admin dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    icon: "🛍️",
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative workspace for teams with real-time updates",
    tech: ["React", "Node.js", "MongoDB"],
    icon: "✓",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern portfolio site with smooth animations and interactions",
    tech: ["Next.js", "Framer Motion", "CSS"],
    icon: "🎨",
    link: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather data with interactive maps and forecasts",
    tech: ["React", "API Integration", "Charts"],
    icon: "🌤️",
    link: "#",
  },
];

interface PortfolioSectionProps {
  showViewMore?: boolean;
  limitProjects?: number;
}

export default function PortfolioSection({
  showViewMore = false,
  limitProjects,
}: PortfolioSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const projects = limitProjects
    ? allProjects.slice(0, limitProjects)
    : allProjects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section section-dark ${css.portfolio}`}
    >
      <div className="section-container-wide">
        <div className={css.header}>
          <h2 className={css.title}>
            {showViewMore ? "Featured Projects" : "All Projects"}
          </h2>
          <p className={css.subtitle}>
            {showViewMore
              ? "A glimpse of my recent work"
              : "A comprehensive collection of my work and side projects"}
          </p>
        </div>

        <div className={css.grid}>
          {projects.map((project) => (
            <div key={project.id} className={css.card}>
              <div className={css.cardImage}>{project.icon}</div>
              <div className={css.cardContent}>
                <h3 className={css.cardTitle}>{project.title}</h3>
                <p className={css.cardDescription}>{project.description}</p>
                <div className={css.techTags}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={css.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className={css.projectLink}>
                  View Project <span className={css.arrow}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {showViewMore && (
          <div className={css.viewMoreContainer}>
            <Link href="/portfolio" className={css.viewMoreButton}>
              View All Projects
              <svg
                className={css.viewMoreIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
