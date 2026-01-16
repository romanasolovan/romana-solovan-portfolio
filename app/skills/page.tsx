"use client";

import React from "react";
import css from "./SkillsPage.module.css";

const hardSkills = [
  "Build responsive, mobile-first interfaces using semantic HTML and CSS Modules",
  "Develop React and Next.js applications with clean, reusable component structure",
  "TypeScript-first development with typed props, data models, and safer refactoring",
  "Integrate REST APIs using async/await, loading states, and error handling",
  "Implement interactive UI patterns: modals, galleries, forms, and user feedback",
  "Work with authentication flows and protected routes at a basic level",
  "Use Git and GitHub for version control, collaboration, and structured commits",
];

const softSkills = [
  "Clear and thoughtful communication with team members and stakeholders",
  "Strong organization: breaking down tasks, planning features, and following through",
  "User-focused thinking shaped by a background in education and teaching",
  "Comfortable receiving feedback and collaborating in team environments",
  "Patient and systematic problem-solving when debugging complex issues",
  "Adaptable learner with experience switching careers and learning new tools quickly",
];

const currentlyLearning = [
  "MySQL fundamentals and relational database concepts",
  "Algorithms and data structures to strengthen problem-solving skills",
  "Postman for deeper API testing, environments, and request workflows",
  "SASS preprocessor for scalable and maintainable styling",
  "Next.js best practices: routing, data fetching, and structuring larger applications",
];

// type ToggleKey = "hard" | "soft" | "learning";

export default function SkillsPage() {
  const [openHard, setOpenHard] = React.useState(false);
  const [openSoft, setOpenSoft] = React.useState(false);
  const [openLearning, setOpenLearning] = React.useState(false);

  return (
    <div className={css.pageContainer}>
      <header className={css.pageHeader}>
        <h1 className={css.pageTitle}>Skills & Expertise</h1>
        <p className={css.pageSubtitle}>
          What I bring to the table as a developer
        </p>
      </header>

      <section className={css.pageContent}>
        <div className={css.pageInner}>
          <div className={css.togglesRow}>
            {/* Hard Skills */}
            <div className={css.toggleCard}>
              <button
                type="button"
                className={css.toggleHeader}
                onClick={() => setOpenHard((v) => !v)}
                aria-expanded={openHard}
                aria-controls="skills-hard-panel"
              >
                <span className={css.toggleTitle}>
                  <span aria-hidden="true">💻</span> Hard Skills
                </span>

                <span
                  className={`${css.toggleIcon} ${openHard ? css.toggleIconActive : ""}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              <div
                id="skills-hard-panel"
                className={`${css.togglePanel} ${openHard ? css.togglePanelOpen : ""}`}
              >
                <div className={css.toggleBody}>
                  <ul className={css.minList}>
                    {hardSkills.map((item, idx) => (
                      <li key={idx} className={css.minListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className={css.toggleCard}>
              <button
                type="button"
                className={css.toggleHeader}
                onClick={() => setOpenSoft((v) => !v)}
                aria-expanded={openSoft}
                aria-controls="skills-soft-panel"
              >
                <span className={css.toggleTitle}>
                  <span aria-hidden="true">🤝</span> Soft Skills
                </span>

                <span
                  className={`${css.toggleIcon} ${openSoft ? css.toggleIconActive : ""}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              <div
                id="skills-soft-panel"
                className={`${css.togglePanel} ${openSoft ? css.togglePanelOpen : ""}`}
              >
                <div className={css.toggleBody}>
                  <ul className={css.minList}>
                    {softSkills.map((item, idx) => (
                      <li key={idx} className={css.minListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className={css.toggleCard}>
              <button
                type="button"
                className={css.toggleHeader}
                onClick={() => setOpenLearning((v) => !v)}
                aria-expanded={openLearning}
                aria-controls="skills-learning-panel"
              >
                <span className={css.toggleTitle}>
                  <span aria-hidden="true">🌱</span> Currently Learning
                </span>

                <span
                  className={`${css.toggleIcon} ${
                    openLearning ? css.toggleIconActive : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              <div
                id="skills-learning-panel"
                className={`${css.togglePanel} ${openLearning ? css.togglePanelOpen : ""}`}
              >
                <div className={css.toggleBody}>
                  <ul className={css.minList}>
                    {currentlyLearning.map((item, idx) => (
                      <li key={idx} className={css.minListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end togglesRow */}
        </div>
      </section>
    </div>
  );
}
