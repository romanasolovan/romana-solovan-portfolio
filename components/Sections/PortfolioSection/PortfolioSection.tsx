// src/components/Sections/PortfolioSection/PortfolioSection.tsx

"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { projects, getFeaturedProjects } from "@/data/projects";
import ProjectList from "@/components/Projects/ProjectList/ProjectList";
import css from "./PortfolioSection.module.css";

interface PortfolioSectionProps {
  showViewMore?: boolean;
  limitProjects?: number;
}

export default function PortfolioSection({
  showViewMore = false,
  limitProjects,
}: PortfolioSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Get limited or all projects
  const displayProjects = limitProjects
    ? getFeaturedProjects(limitProjects)
    : projects;

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

        {/* Use the new ProjectList component */}
        <ProjectList
          projects={displayProjects}
          columns={showViewMore ? 2 : 3}
        />

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
