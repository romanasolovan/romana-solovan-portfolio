"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import css from "./AboutSection.module.css";

interface AboutSectionProps {
  showViewMore?: boolean;
}

const fullTitle = "About Me";

const images = [
  "/hero/sanFran.JPG",
  "/hero/hero3.jpg",
  "/hero/holdWorld.JPG",
  "/hero/heroRom1.jpg",
  "/hero/hero4.jpg",
];

export default function AboutSection({
  showViewMore = false,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  // reveal once when the section enters view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // typing effect (runs once after reveal)
  useEffect(() => {
    if (!isVisible) return;

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTypedText(fullTitle.slice(0, i));
      if (i >= fullTitle.length) window.clearInterval(id);
    }, 80);

    return () => window.clearInterval(id);
  }, [isVisible]);

  // image rotation (only after reveal)
  useEffect(() => {
    if (!isVisible) return;

    const id = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section section--darker">
      <div className="container">
        <div className={css.grid}>
          {/* image side */}
          <div
            className={[
              css.imageContainer,
              isVisible ? css.slideInLeft : "",
            ].join(" ")}
          >
            <div className={css.imageWrapper}>
              {images.map((src, index) => (
                <div
                  key={src}
                  className={[
                    css.imageSlide,
                    index === currentImage ? css.imageSlideActive : "",
                  ].join(" ")}
                >
                  <div className={css.imageFrame}>
                    <img
                      className={css.image}
                      src={src}
                      alt={`About image ${index + 1}`}
                    />
                    <div className={css.imageOverlay} />
                  </div>
                </div>
              ))}
            </div>

            <div
              className={css.indicators}
              aria-label="Image carousel controls"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={[
                    css.indicator,
                    index === currentImage ? css.indicatorActive : "",
                  ].join(" ")}
                  aria-label={`Go to image ${index + 1}`}
                  aria-pressed={index === currentImage}
                />
              ))}
            </div>
          </div>

          {/* text side */}
          <div
            className={[css.content, isVisible ? css.slideInRight : ""].join(
              " ",
            )}
          >
            <h2 className={[css.title, css.typingCursor].join(" ")}>
              {typedText}
            </h2>

            <div
              className={[css.textWrapper, isVisible ? css.fadeInUp : ""].join(
                " ",
              )}
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

            {showViewMore && (
              <div className={css.viewMoreContainer}>
                <Link href="/about" className="btn btn--secondary">
                  Learn more
                  <svg
                    className={css.viewMoreIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
