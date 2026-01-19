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

      <section className={css.resumeSection}>
        <div className={css.resumeContainer}>
          <h2 className={css.resumeTitle}>Download My Resume</h2>
          <p className={css.resumeDescription}>
            Interested in my experience and qualifications? Download my resume
            to learn more about my professional background.
          </p>
          <a
            href="/portfolioCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={css.downloadButton}
          >
            <svg
              className={css.iconDownload}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
            <svg
              className={css.iconArrow}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
