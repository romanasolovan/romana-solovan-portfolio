"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";
import { useStage } from "./StageManager";

const getStageContentForPath = (pathname: string) => {
  const match = navItems.find((i) => i.href === pathname && i.stageTitle);
  if (!match) return null;

  // Home should have no stage
  if (pathname === "/") return null;

  return match
    ? { title: match.stageTitle!, subtitle: match.stageSubtitle }
    : null;
};

export default function StageRouteSync() {
  const pathname = usePathname();
  const { isStageRevealed, currentContent, updateContent } = useStage();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    // Don’t do anything on Home
    if (pathname === "/") return;

    // Only sync after stage has been revealed at least once
    if (!isStageRevealed) {
      prevPathRef.current = pathname;
      return;
    }

    // Prevent duplicate work if Next re-runs effects
    if (prevPathRef.current === pathname) return;
    prevPathRef.current = pathname;

    const routeContent = getStageContentForPath(pathname);
    if (!routeContent) return;

    // If stage already matches, do nothing (prevents re-animating)
    if (
      currentContent?.title === routeContent.title &&
      currentContent?.subtitle === routeContent.subtitle
    ) {
      return;
    }

    // Sync stage to route
    updateContent(routeContent);
  }, [pathname, isStageRevealed, currentContent, updateContent]);

  return null;
}
