import css from "./SkillsPage.module.css";

export const metadata = {
  title: "Skills | Romana Solovan",
  description:
    "Technologies and tools that Romana Solovan works with professionally.",
};

// NOTE: Detailed hard skills list - only on full skills page
const hardSkills = [
  "Build responsive, mobile-first UI from designs (semantic HTML, reusable components)",
  "Develop React/Next.js apps with clean component architecture and predictable state flow",
  "TypeScript-first development: typed props, data models, safer refactors",
  "API integration: async/await, error handling, loading states, pagination",
  "UI behavior: modals, galleries/lightboxes, forms, validation, user feedback/toasts",
  "Performance-minded UI: avoiding unnecessary re-renders, optimizing assets and rendering",
  "Version control workflow: branches, PR-ready commits, collaboration in GitHub",
];

// NOTE: Detailed soft skills list - only on full skills page
const softSkills = [
  "Strong communication: explain decisions clearly, ask the right questions, align with team goals",
  "Highly organized and reliable: plan tasks, break down features, follow through to completion",
  "Patient, user-focused mindset: designing with empathy and accessibility in mind",
  "Team collaboration: receptive to feedback, comfortable in pair work and code reviews",
  "Problem-solving & debugging: persistent, systematic approach to finding and fixing issues",
  "Adaptable learner: fast at picking up new tools and patterns (career switch + freelance experience)",
];

export default function SkillsPage() {
  return (
    <div className={css.pageContainer}>
      {/* ========================================
          PAGE HEADER - COMPACT LIKE OTHER PAGES
          ======================================== */}
      <header className={css.pageHeader}>
        <h1 className={css.pageTitle}>Skills & Expertise</h1>
        <p className={css.pageSubtitle}>
          What I bring to the table as a developer
        </p>
      </header>

      {/* ========================================
          SKILLS CONTENT - FULL PAGE VERSION
          ======================================== */}
      <section className={css.pageContent}>
        <div className="container">
          {" "}
          {/* NOTE: Using global container */}
          {/* NOTE: About My Skills - introduction section */}
          <div className={css.aboutSkills}>
            <h2 className={css.sectionHeading}>
              <span className={css.headingIcon}>💡</span>
              About My Skills
            </h2>
            <p className={css.aboutText}>
              I bring a unique blend of technical expertise and people skills to
              every project. My background in early childhood education taught
              me patience, clear communication, and how to break down complex
              problems into simple, understandable pieces. Now I apply that same
              mindset to building user-friendly interfaces that people actually
              enjoy using.
            </p>
            <p className={css.aboutText}>
              I am a hands-on developer who cares deeply about code quality,
              accessibility, and the end-user experience. Whether it is writing
              clean TypeScript, debugging a tricky layout issue, or
              collaborating with a team, I approach every challenge with
              curiosity and determination.
            </p>
          </div>
          {/* NOTE: Hard Skills - technical abilities in detail */}
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
          {/* NOTE: Soft Skills - interpersonal and professional abilities */}
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
        </div>
      </section>
    </div>
  );
}
