"use client";
import React, { useEffect, useRef } from "react";
import css from "./HeroSection.module.css";

export default function HeroSection() {
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
      id="home"
      ref={sectionRef}
      className={`section section-dark ${css.hero}`}
    >
      <div className="section-container">
        <div className={css.content}>
          <h1 className={css.title}>Passion</h1>
          <h2 className={css.title}>Dedication</h2>
          <h2 className={css.title}>Impact</h2>
        </div>
      </div>
    </section>
  );
}
