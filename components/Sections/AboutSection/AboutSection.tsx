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

  // NOTE: Image carousel array
  const images = [
    "/hero/sanFran.JPG",
    "/hero/hero3.jpg",
    "/hero/holdWorld.JPG",
    "/hero/heroRom1.jpg",
    "/hero/hero4.jpg",
  ];

  // NOTE: Intersection Observer - triggers animations when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // NOTE: Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // NOTE: Typing animation effect for title
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
    }, 80); // NOTE: 80ms per character for smooth typing

    return () => clearInterval(typingInterval);
    // NOTE: fullTitle is a constant, doesn't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  // NOTE: Image carousel auto-rotate every 4 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  return (
    <section
      ref={sectionRef}
      className="section section--darker" // NOTE: Using global section class for consistent margins
    >
      <div className="container">
        {" "}
        {/* NOTE: Using global container for consistent padding */}
        <div className={css.grid}>
          {/* ========== IMAGE CAROUSEL - LEFT SIDE ========== */}
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
                      alt={`About image ${index + 1}`} // NOTE: More descriptive alt text
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

            {/* NOTE: Carousel indicators - allow manual image selection */}
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

          {/* ========== TEXT CONTENT - RIGHT SIDE ========== */}
          <div
            className={`${css.content} ${isVisible ? css.slideInRight : ""}`}
          >
            {/* NOTE: Animated typing title */}
            <h2 className={`${css.title} ${css.typingCursor}`}>{typedText}</h2>

            {/* NOTE: Content with fade-in animation */}
            <div
              className={`${css.textWrapper} ${isVisible ? css.fadeInUp : ""}`}
            >
              <p className={css.paragraph}>
                “My first ‘users’ were children — now I design for everyone.”
              </p>
              <p className={css.paragraph}>
                I transitioned into front-end development from early childhood
                education — a background that shaped my patience, empathy, and
                strong user-first thinking.
              </p>
              <p className={css.paragraph}>
                I learn through experience: building, exploring new
                environments, and continuously growing both as a developer and
                as a person.
              </p>
            </div>

            {/* NOTE: Optional "Learn More" button - shown on homepage */}
            {showViewMore && (
              <div className={css.viewMoreContainer}>
                <Link href="/about" className={css.viewMoreButton}>
                  Learn More About Me
                  <svg
                    className={css.viewMoreIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true" // NOTE: Decorative icon
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
