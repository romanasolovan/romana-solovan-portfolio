"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import css from "./ContactSection.module.css";

interface ContactSectionProps {
  showViewMore?: boolean;
}

export default function ContactSection({
  showViewMore = false,
}: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
  }, []);

  const contactMethods = [
    {
      icon: (
        <svg className={css.icon} fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "GitHub",
      value: "@romanasolovan",
      link: "https://github.com/romanasolovan",
    },
    {
      icon: (
        <svg
          className={css.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "solo.rv95@gmail.com",
      link: "mailto:solo.rv95@gmail.com",
    },
    {
      icon: (
        <svg
          className={css.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      label: "Contact Form",
      value: "Send me a message",
      link: "/contact",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`section section-dark ${css.contact}`}
    >
      <div className="section-container">
        <div className={`${css.header} ${isVisible ? css.fadeIn : ""}`}>
          <h2 className={css.title}>Let&apos;s Work Together</h2>
          <p className={css.subtitle}>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className={css.grid}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith("http") ? "_blank" : undefined}
              rel={
                method.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`${css.card} ${isVisible ? css.fadeInUp : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={css.iconWrapper}>{method.icon}</div>
              <div className={css.cardContent}>
                <h3 className={css.cardTitle}>{method.label}</h3>
                <p className={css.cardValue}>{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        {showViewMore && (
          <div
            className={`${css.viewMoreContainer} ${isVisible ? css.fadeIn : ""}`}
          >
            <Link href="/contact" className={css.viewMoreButton}>
              View Full Contact Page
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
    </section>
  );
}
