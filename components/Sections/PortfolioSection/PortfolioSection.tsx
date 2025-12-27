"use client";
import React, { useEffect, useRef } from "react";
import css from "./PortfolioSection.module.css";

const projects = [
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

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="portfolio"
      ref={sectionRef}
      className={`section section-dark ${css.portfolio}`}
    >
      <div className="section-container-wide">
        <div className={css.header}>
          <h2 className={css.title}>Featured Projects</h2>
          <p className={css.subtitle}>
            A collection of my recent work and side projects
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
      </div>
    </section>
  );
}
