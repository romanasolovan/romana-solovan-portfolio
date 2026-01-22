"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useStage } from "./StageManager";
import css from "./Stage.module.css";

export default function Stage() {
  const pathname = usePathname();
  const { isStageRevealed, displayContent, isTextAnimating } = useStage();

  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > 40;
  });

  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const lastY = lastYRef.current;

        const scrollingDown = y > lastY;
        const nearTop = y < 12;

        if (nearTop) {
          setIsCollapsed(false);
        } else if (scrollingDown && y > 40) {
          setIsCollapsed(true);
        } else if (!scrollingDown) {
          setIsCollapsed(false);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/") return null;
  if (!isStageRevealed || !displayContent) return null;

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
          className={`${css.stageTitle} ${
            isTextAnimating ? css.textFadeOut : css.textFadeIn
          }`}
        >
          {displayContent.title}
        </h1>

        {displayContent.subtitle && (
          <p
            className={`${css.stageSubtitle} ${
              isTextAnimating ? css.textFadeOut : css.textFadeIn
            }`}
          >
            {displayContent.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
