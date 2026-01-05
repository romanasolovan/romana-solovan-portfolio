"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import css from "./SkillsSection.module.css";

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

const hardSkills = [
  "Build responsive, mobile-first UI from designs (semantic HTML, reusable components)",
  "Develop React/Next.js apps with clean component architecture and predictable state flow",
  "TypeScript-first development: typed props, data models, safer refactors",
  "API integration: async/await, error handling, loading states, pagination",
  "UI behavior: modals, galleries/lightboxes, forms, validation, user feedback/toasts",
  "Performance-minded UI: avoiding unnecessary re-renders, optimizing assets and rendering",
  "Version control workflow: branches, PR-ready commits, collaboration in GitHub",
];

const softSkills = [
  "Strong communication: explain decisions clearly, ask the right questions, align with team goals",
  "Highly organized and reliable: plan tasks, break down features, follow through to completion",
  "Patient, user-focused mindset: designing with empathy and accessibility in mind",
  "Team collaboration: receptive to feedback, comfortable in pair work and code reviews",
  "Problem-solving & debugging: persistent, systematic approach to finding and fixing issues",
  "Adaptable learner: fast at picking up new tools and patterns (career switch + freelance experience)",
];

interface SkillsSectionProps {
  showViewMore?: boolean;
}

export default function SkillsSection({
  showViewMore = false,
}: SkillsSectionProps) {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section section-darker ${css.skills}`}
    >
      <div className="section-container">
        {/* HOME PAGE VERSION - Technical Skills Overview Only */}
        {showViewMore && (
          <>
            <div className={css.header}>
              <h2 className={css.title}>Skills Overview</h2>
              <p className={css.subtitle}>
                Technologies and tools I use to build real products
              </p>
            </div>

            {/* Technical Skills with Progress Bars */}
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
                            <span className={css.skillLevel}>
                              {skill.level}%
                            </span>
                          </div>
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

            {/* View All Skills Button */}
            <div className={css.viewMoreContainer}>
              <Link href="/skills" className={css.viewMoreButton}>
                View All Skills
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
          </>
        )}

        {/* FULL SKILLS PAGE VERSION - About Me + Hard & Soft Skills */}
        {!showViewMore && (
          <>
            {/* About My Skills */}
            <div className={css.aboutSkills}>
              <h2 className={css.sectionHeading}>
                <span className={css.headingIcon}>💡</span>
                About My Skills
              </h2>
              <p className={css.aboutText}>
                I bring a unique blend of technical expertise and people skills
                to every project. My background in early childhood education
                taught me patience, clear communication, and how to break down
                complex problems into simple, understandable pieces. Now I apply
                that same mindset to building user-friendly interfaces that
                people actually enjoy using.
              </p>
              <p className={css.aboutText}>
                I am a hands-on developer who cares deeply about code quality,
                accessibility, and the end-user experience. Whether it is
                writing clean TypeScript, debugging a tricky layout issue, or
                collaborating with a team, I approach every challenge with
                curiosity and determination.
              </p>
            </div>

            {/* Hard Skills */}
            <div className={css.skillsBlock}>
              <h2 className={css.sectionHeading}>
                <span className={css.headingIcon}>💻</span>
                Hard Skills
              </h2>
              <ul className={css.skillsListBlock}>
                {hardSkills.map((item, idx) => (
                  <li key={idx} className={css.skillItem}>
                    <span className={css.bullet}>→</span>
                    <span className={css.skillText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className={css.skillsBlock}>
              <h2 className={css.sectionHeading}>
                <span className={css.headingIcon}>🤝</span>
                Soft Skills
              </h2>
              <ul className={css.skillsListBlock}>
                {softSkills.map((item, idx) => (
                  <li key={idx} className={css.skillItem}>
                    <span className={css.bullet}>→</span>
                    <span className={css.skillText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
