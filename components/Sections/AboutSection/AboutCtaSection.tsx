"use client";

import { useEffect, useState } from "react";
import css from "./AboutCtaSection.module.css";

export default function AboutCtaSection() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>Let&apos;s Connect</h2>

        <p className={css.text}>
          Interested in collaborating — or have a few constructive ideas? Feel
          free to reach out. I&apos;m always happy to connect and improve.
        </p>

        <div className={css.actions}>
          <button type="button" onClick={openModal} className={css.primaryBtn}>
            Leave a message
          </button>
        </div>

        {isOpen && (
          <div
            className={css.overlay}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={closeModal}
          >
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
              <div className={css.modalHeader}>
                <h3 className={css.modalTitle} id="contact-modal-title">
                  Send a message
                </h3>

                <button
                  type="button"
                  onClick={closeModal}
                  className={css.closeBtn}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <p className={css.modalText}>
                Share your idea, role, or feedback — I&apos;ll get back to you
                as soon as I can.
              </p>

              <div className={css.modalBody}></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
