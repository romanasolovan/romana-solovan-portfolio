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

  // NOTE: Determine which projects to display - featured or all
  const displayProjects = limitProjects
    ? getFeaturedProjects(limitProjects)
    : projects;

  // NOTE: Intersection Observer - triggers animations when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // NOTE: Animation is now handled by CSS staggered animations
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 } // NOTE: Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section--dark" // NOTE: Using global section class for consistent margins
    >
      <div className="containerWide">
        {" "}
        {/* NOTE: Using global containerWide for portfolio grid */}
        {/* ========== HEADER ========== */}
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
        {/* ========== PROJECT GRID ========== */}
        {/* NOTE: ProjectList handles the grid layout and individual cards */}
        <ProjectList
          projects={displayProjects}
          columns={showViewMore ? 2 : 3} // NOTE: 2 cols on homepage, 3 cols on portfolio page
        />
        {/* ========== VIEW ALL BUTTON ========== */}
        {/* NOTE: Only shown on homepage to link to full portfolio page */}
        {showViewMore && (
          <div className={css.viewMoreContainer}>
            <Link href="/portfolio" className={css.viewMoreButton}>
              View All Projects
              <svg
                className={css.viewMoreIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true" // NOTE: Decorative icon
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
