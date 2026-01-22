"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useStage } from "./StageManager";
import css from "./Stage.module.css";

// Wider hysteresis = less chance of hovering near boundary
const SHOW_AT = 16; // show only very near top
const HIDE_AT = 120; // hide once user clearly scrolls down

// Must match (or slightly exceed) CSS max-height transition duration
const COLLAPSE_ANIM_MS = 520;

export default function Stage() {
  const pathname = usePathname();
  const { isStageRevealed, displayContent, isTextAnimating } = useStage();

  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY >= HIDE_AT;
  });

  const tickingRef = useRef(false);
  const lockUntilRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const now = performance.now();

        // If we're mid-animation, ignore scroll toggles
        if (now < lockUntilRef.current) {
          tickingRef.current = false;
          return;
        }

        const y = window.scrollY;

        // hysteresis: only toggle when crossing thresholds
        let nextCollapsed = isCollapsed;

        if (y <= SHOW_AT) nextCollapsed = false;
        else if (y >= HIDE_AT) nextCollapsed = true;

        // only set state if it actually changes
        if (nextCollapsed !== isCollapsed) {
          lockUntilRef.current = now + COLLAPSE_ANIM_MS;
          setIsCollapsed(nextCollapsed);
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCollapsed]);

  if (pathname === "/") return null;
  if (!isStageRevealed || !displayContent) return null;

  const isAboutQuote = pathname === "/about";

  return (
    <div
      className={[
        css.stage,
        css.stageRevealed,
        isCollapsed ? css.stageCollapsed : "",
      ].join(" ")}
    >
      <div className={css.stageInner}>
        <h1
          className={[
            css.stageTitle,
            isAboutQuote ? css.stageTitleQuote : "",
            isTextAnimating ? css.textFadeOut : css.textFadeIn,
          ].join(" ")}
        >
          {displayContent.title}
        </h1>

        {displayContent.subtitle && (
          <p
            className={[
              css.stageSubtitle,
              isTextAnimating ? css.textFadeOut : css.textFadeIn,
            ].join(" ")}
          >
            {displayContent.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
