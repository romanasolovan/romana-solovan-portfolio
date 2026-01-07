"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import css from "./AboutSection.module.css";

interface AboutSectionProps {
  showViewMore?: boolean;
}

export default function AboutSection({
  showViewMore = false,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullTitle = "About Me";

  const images = [
    "/hero/sanFran.JPG",
    "/hero/hero3.jpg",
    "/hero/holdWorld.JPG",
    "/hero/heroRom1.jpg",
    // "/hero/heroRom7.jpg",
    "/hero/hero4.jpg",
  ];

  // Intersection Observer - triggers animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
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
  }, [isVisible]);

  // Typing animation effect for title
  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTypedText(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [isVisible, fullTitle]);

  // Image carousel auto-rotate
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  return (
    <section ref={sectionRef} className={`section section-darker ${css.about}`}>
      <div className="section-container">
        <div className={css.grid}>
          {/* IMAGE CAROUSEL - LEFT SIDE */}
          <div
            className={`${css.imageContainer} ${isVisible ? css.slideInLeft : ""}`}
          >
            <div className={css.imageWrapper}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${css.imageSlide} ${
                    index === currentImage ? css.imageSlideActive : ""
                  }`}
                >
                  <div className={css.imageFrame}>
                    <img
                      src={image}
                      alt={`About ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className={css.imageOverlay} />
                  </div>
                </div>
              ))}
            </div>

            {/* Image indicators */}
            <div className={css.indicators}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`${css.indicator} ${
                    index === currentImage ? css.indicatorActive : ""
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* TEXT CONTENT - RIGHT SIDE */}
          <div
            className={`${css.content} ${isVisible ? css.slideInRight : ""}`}
          >
            {/* ANIMATED TYPING TITLE */}
            <h2 className={`${css.title} ${css.typingCursor}`}>{typedText}</h2>

            {/* CONTENT WITH FADE-IN */}
            <div
              className={`${css.textWrapper} ${isVisible ? css.fadeInUp : ""}`}
            >
              <p className={css.paragraph}>
                I come from early childhood education — a path that trained me
                to be patient, organized, and deeply user-focused. Now I apply
                that mindset to building real products with clean code.
              </p>
              <p className={css.paragraph}>
                I enjoy learning through experience — exploring new places,
                adapting to new environments, and continuously growing both
                personally and professionally.
              </p>

              <div className={css.buttonGroup}>
                <a href="#contact" className={css.primaryBtn}>
                  Get in Touch
                </a>
                <Link href="/portfolio" className={css.secondaryBtn}>
                  View Work
                </Link>
              </div>
            </div>

            {showViewMore && (
              <div className={css.viewMoreContainer}>
                <Link href="/about" className={css.viewMoreButton}>
                  Learn More About Me
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
