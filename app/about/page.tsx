"use client";
import { useState } from "react";
import css from "./AboutPage.module.css";

// NOTE: Metadata must be in a separate server component
// Create a layout.tsx file in the /about folder with the metadata instead

export default function AboutPage() {
  // NOTE: Track which toggles are open (by index)
  const [openPersonal, setOpenPersonal] = useState<number | null>(null);
  const [openProfessional, setOpenProfessional] = useState<number | null>(null);

  // NOTE: Personal section data with titles and content
  const personalItems = [
    {
      title: "Foundations",
      content:
        "Portuguese shaped how I learned to read and write. It trained my mind to absorb languages intuitively.",
    },
    {
      title: "Rhythm",
      content:
        "Movement brings balance to my life. Dance, strength training, yoga, and boxing keep me aligned.",
    },
    {
      title: "Wonder",
      content:
        "Travel keeps my sense of curiosity alive. New places remind me to see with fresh eyes.",
    },
    {
      title: "Hands",
      content:
        "I love working with my hands. Creating music, textiles, food, or gardens helps me slow down.",
    },
    {
      title: "Attention",
      content:
        "I value focus and intention. Being present changes how deeply I learn and create.",
    },
  ];

  // NOTE: Professional section data with titles and content
  const professionalItems = [
    {
      title: "Thinking",
      content:
        "I enjoy exploring ideas deeply. Good solutions come from asking better questions.",
    },
    {
      title: "Structure",
      content:
        "Clear organization improves both code and experience. I value simplicity with purpose.",
    },
    {
      title: "Respect",
      content:
        "Communication should be thoughtful and open. Collaboration works best when people feel safe.",
    },
    {
      title: "Care",
      content:
        "I build with real users in mind. Understanding people leads to better products.",
    },
    {
      title: "Resilience",
      content:
        "Challenges don't discourage me. They refine how I work and grow.",
    },
  ];

  // NOTE: Toggle handlers
  const togglePersonal = (index: number) => {
    setOpenPersonal(openPersonal === index ? null : index);
  };

  const toggleProfessional = (index: number) => {
    setOpenProfessional(openProfessional === index ? null : index);
  };

  return (
    <div className={css.pageContainer}>
      {/* ========================================
          HEADER - QUOTE SECTION
          ======================================== */}
      <header className={css.quoteHeader}>
        <blockquote className={css.blockquote}>
          <p className={css.quoteText}>
            You are only limited by weakness of attention and poverty of
            imagination.
          </p>
          <footer className={css.quoteFooter}>
            <cite className={css.quoteCite}>— William James</cite>
          </footer>
        </blockquote>
      </header>

      {/* ========================================
          MAIN CONTENT - TWO COLUMN LAYOUT
          ======================================== */}
      <section className={css.mainSection}>
        <div className={css.twoColumnGrid}>
          {/* ========== LEFT COLUMN - PERSONAL ========== */}
          <article className={css.column}>
            <div className={css.columnContent}>
              <h2 className={css.columnTitle}>What Makes Me Different</h2>

              <h3 className={css.subheading}>
                I learn by living, not just by reading about it.
              </h3>

              <p className={css.paragraph}>
                Curiosity shapes how I move through life. I am drawn to new
                experiences, cultures, and challenges, and I am comfortable
                stepping outside familiar paths. This openness has shaped how I
                think, adapt, and grow — both personally and professionally.
              </p>

              {/* NOTE: Personal toggles/accordions */}
              <div className={css.toggleList}>
                {personalItems.map((item, index) => (
                  <div key={index} className={css.toggleItem}>
                    <button
                      className={`${css.toggleButton} ${openPersonal === index ? css.toggleButtonActive : ""}`}
                      onClick={() => togglePersonal(index)}
                      aria-expanded={openPersonal === index}
                    >
                      <span className={css.toggleTitle}>{item.title}</span>
                      <svg
                        className={`${css.toggleIcon} ${openPersonal === index ? css.toggleIconActive : ""}`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`${css.toggleContent} ${openPersonal === index ? css.toggleContentOpen : ""}`}
                    >
                      <p className={css.toggleText}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* ========== RIGHT COLUMN - PROFESSIONAL ========== */}
          <article className={css.column}>
            <div className={css.columnContent}>
              <h2 className={css.columnTitle}>My Professional Values</h2>

              <h3 className={css.subheading}>
                I build software with intention and empathy.
              </h3>

              <p className={css.paragraph}>
                My professional approach is shaped by empathy, structure, and a
                deep respect for how people learn and interact with technology.
                With a background in education, I naturally focus on clarity,
                accessibility, and thoughtful communication. I care about
                building products that feel intuitive.
              </p>

              {/* NOTE: Professional toggles/accordions */}
              <div className={css.toggleList}>
                {professionalItems.map((item, index) => (
                  <div key={index} className={css.toggleItem}>
                    <button
                      className={`${css.toggleButton} ${openProfessional === index ? css.toggleButtonActive : ""}`}
                      onClick={() => toggleProfessional(index)}
                      aria-expanded={openProfessional === index}
                    >
                      <span className={css.toggleTitle}>{item.title}</span>
                      <svg
                        className={`${css.toggleIcon} ${openProfessional === index ? css.toggleIconActive : ""}`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`${css.toggleContent} ${openProfessional === index ? css.toggleContentOpen : ""}`}
                    >
                      <p className={css.toggleText}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
