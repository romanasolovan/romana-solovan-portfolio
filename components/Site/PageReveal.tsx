"use client";
import { useEffect, useState } from "react";
import css from "./PageReveal.module.css";

interface PageRevealProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageReveal({
  title,
  subtitle,
  children,
}: PageRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Gentle delay before starting reveal
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Title/Subtitle Reveal Block - Flows from header */}
      <div
        className={`${css.revealHeader} ${isRevealed ? css.revealHeaderActive : ""}`}
      >
        <div className={css.revealHeaderInner}>
          <h1 className={css.revealTitle}>{title}</h1>
          {subtitle && <p className={css.revealSubtitle}>{subtitle}</p>}
        </div>
      </div>

      {/* Page Content - Fades in gently after reveal */}
      <div
        className={`${css.pageContent} ${isRevealed ? css.pageContentActive : ""}`}
      >
        {children}
      </div>
    </>
  );
}
