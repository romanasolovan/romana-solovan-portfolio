"use client";

import { useStage } from "./StageManager";
import css from "./Stage.module.css";
import { usePathname } from "next/navigation";

export default function Stage() {
  const pathname = usePathname();
  const { isStageRevealed, displayContent, isTextAnimating } = useStage();

  if (pathname === "/") return null;
  if (!isStageRevealed || !displayContent) return null;

  return (
    <div className={`${css.stage} ${isStageRevealed ? css.stageRevealed : ""}`}>
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
