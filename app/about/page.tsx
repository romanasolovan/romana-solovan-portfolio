"use client";
import { useState } from "react";
import css from "./AboutPage.module.css";

export default function AboutPage() {
  // NOTE: Track which toggles are open - using Set to allow multiple open at once
  const [openPersonal, setOpenPersonal] = useState<Set<number>>(new Set());
  const [openProfessional, setOpenProfessional] = useState<Set<number>>(
    new Set()
  );

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

  // NOTE: Toggle handlers - allow multiple toggles to be open
  const togglePersonal = (index: number) => {
    const newSet = new Set(openPersonal);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenPersonal(newSet);
  };

  const toggleProfessional = (index: number) => {
    const newSet = new Set(openProfessional);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenProfessional(newSet);
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
                experiences, cultures, and challenges, and I feel comfortable
                stepping outside familiar paths. This openness influences how I
                think, adapt, and grow as a person.
              </p>

              {/* NOTE: Personal toggles/accordions */}
              <div className={css.toggleList}>
                {personalItems.map((item, index) => (
                  <div key={index} className={css.toggleItem}>
                    <button
                      className={`${css.toggleButton} ${openPersonal.has(index) ? css.toggleButtonActive : ""}`}
                      onClick={() => togglePersonal(index)}
                      aria-expanded={openPersonal.has(index)}
                    >
                      <span className={css.toggleTitle}>{item.title}</span>
                      <svg
                        className={`${css.toggleIcon} ${openPersonal.has(index) ? css.toggleIconActive : ""}`}
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
                      className={`${css.toggleContent} ${openPersonal.has(index) ? css.toggleContentOpen : ""}`}
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
                Empathy shapes how I approach my work. I focus on how people
                learn, interact, and navigate technology, drawing from my
                background in education. This mindset guides how I design,
                communicate, and build thoughtful products.
              </p>

              {/* NOTE: Professional toggles/accordions */}
              <div className={css.toggleList}>
                {professionalItems.map((item, index) => (
                  <div key={index} className={css.toggleItem}>
                    <button
                      className={`${css.toggleButton} ${openProfessional.has(index) ? css.toggleButtonActive : ""}`}
                      onClick={() => toggleProfessional(index)}
                      aria-expanded={openProfessional.has(index)}
                    >
                      <span className={css.toggleTitle}>{item.title}</span>
                      <svg
                        className={`${css.toggleIcon} ${openProfessional.has(index) ? css.toggleIconActive : ""}`}
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
                      className={`${css.toggleContent} ${openProfessional.has(index) ? css.toggleContentOpen : ""}`}
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
