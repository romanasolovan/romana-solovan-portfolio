"use client";
import React from "react";
import Link from "next/link";
import css from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={css.contactSection}>
      <div className={css.container}>
        <div className={css.content}>
          <h2 className={css.title}>Let&apos;s Work Together</h2>
          <p className={css.description}>
            Whether you have a project in mind, want to collaborate, or just
            want to say hi — I would love to hear from you. Feel free to reach
            out and lets create something amazing together.
          </p>
          <Link href="/contact" className={css.ctaButton}>
            Get In Touch
            <svg
              className={css.ctaArrow}
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
      </div>
    </section>
  );
}
