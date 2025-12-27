"use client";
import React, { useEffect, useRef } from "react";
import css from "./AboutSection.module.css";

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className={`section section-darker ${css.about}`}
    >
      <div className="section-container">
        <h2 className={css.title}>Get to Know Me</h2>
        <div className={css.content}>
          <div className={css.textContent}>
            <p className={css.paragraph}>
              I&apos;m a passionate front-end developer specializing in creating
              exceptional digital experiences. With a keen eye for design and a
              love for clean code, I transform ideas into interactive,
              user-friendly applications.
            </p>
            <p className={css.paragraph}>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
            <div className={css.buttonGroup}>
              <a href="#contact" className={css.primaryBtn}>
                Get in Touch
              </a>
              <a href="#portfolio" className={css.secondaryBtn}>
                View Work
              </a>
            </div>
          </div>
          <div className={css.highlights}>
            <div className={css.highlightItem}>
              <div className={css.icon}>💻</div>
              <div>
                <h3 className={css.highlightTitle}>Clean Code</h3>
                <p className={css.highlightDesc}>
                  Maintainable & scalable solutions
                </p>
              </div>
            </div>
            <div className={css.highlightItem}>
              <div className={css.icon}>🎨</div>
              <div>
                <h3 className={css.highlightTitle}>Design Focus</h3>
                <p className={css.highlightDesc}>
                  Pixel-perfect implementations
                </p>
              </div>
            </div>
            <div className={css.highlightItem}>
              <div className={css.icon}>🚀</div>
              <div>
                <h3 className={css.highlightTitle}>Performance</h3>
                <p className={css.highlightDesc}>Fast, optimized experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
