"use client";
import React, { useEffect, useRef } from "react";
import css from "./SkillsSection.module.css";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "REST APIs", level: 80 },
      { name: "Performance", level: 75 },
    ],
  },
];

export default function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className={`section section-darker ${css.skills}`}
    >
      <div className="section-container">
        <div className={css.header}>
          <h2 className={css.title}>Skills & Expertise</h2>
          <p className={css.subtitle}>Technologies and tools I work with</p>
        </div>

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
    </section>
  );
}
