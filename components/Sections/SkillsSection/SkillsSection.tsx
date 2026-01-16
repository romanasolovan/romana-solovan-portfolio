"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import css from "./SkillsSection.module.css";

// NOTE: Technical skills with proficiency percentages - only for homepage
const skillCategories = [
  {
    category: "💻  Hard Skills",
    skills: [
      { name: "React / Next.js (App Router)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "REST APIs (Axios / Fetch)", level: 82 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
  {
    category: "🤝  Soft Skills",
    skills: [
      { name: "Communication & Team Work", level: 85 },
      { name: "Creativity & Innovation", level: 95 },
      { name: "Responsive & Mobile-first UI", level: 92 },
      { name: "Accessibility (a11y) basics", level: 78 },
      { name: "Adaptability & Problem Solving", level: 88 },
      { name: "Patience", level: 88 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // NOTE: Intersection Observer - triggers animations when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in"); // NOTE: Triggers progress bar animations
          }
        });
      },
      { threshold: 0.2 } // NOTE: Trigger when 20% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section--darker" // NOTE: Using global section class for consistent margins
    >
      <div className="container">
        {" "}
        {/* NOTE: Using global container for consistent padding */}
        {/* ========================================
            HEADER
            ======================================== */}
        <div className={css.header}>
          <h2 className={css.title}>Skills Overview</h2>
          <p className={css.subtitle}>
            Technologies and tools I use to build real products
          </p>
        </div>
        {/* ========================================
            TECHNICAL SKILLS WITH PROGRESS BARS
            ======================================== */}
        <div className={css.technicalSkills}>
          <div className={css.grid}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className={css.category}>
                <h3 className={css.categoryTitle}>{cat.category}</h3>
                <div className={css.skillsList}>
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className={css.skill}>
                      <div className={css.skillHeader}>
                        <span className={css.skillName}>{skill.name}</span>
                        <span className={css.skillLevel}>{skill.level}%</span>
                      </div>
                      {/* NOTE: Progress bar animates when section becomes visible */}
                      <div className={css.progressBar}>
                        <div
                          className={css.progressFill}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ========================================
            VIEW ALL SKILLS BUTTON
            ======================================== */}
        <div className={css.viewMoreContainer}>
          <Link href="/skills" className={css.viewMoreButton}>
            View All Skills
            <svg
              className={css.viewMoreIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
      </div>
    </section>
  );
}
