"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useSyncExternalStore,
  ReactNode,
  useMemo,
} from "react";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

type StageContent = {
  title: string;
  subtitle?: string;
};

type StageContextType = {
  isStageRevealed: boolean;
  currentContent: StageContent | null;
  displayContent: StageContent | null;
  isTextAnimating: boolean;
  revealStage: () => void;
  updateContent: (content: StageContent) => void;
};

const StageContext = createContext<StageContextType | null>(null);

const FADE_MS = 200;
const STORAGE_KEY = "stageRevealed";

const getStageContentForPath = (pathname: string): StageContent | null => {
  if (pathname === "/") return null;

  const match = navItems.find((i) => i.href === pathname && i.stageTitle);
  if (!match) return null;

  return match
    ? { title: match.stageTitle!, subtitle: match.stageSubtitle }
    : null;
};

function useStageRevealedStore() {
  const getSnapshot = () => {
    if (typeof window === "undefined") return "false";
    return sessionStorage.getItem(STORAGE_KEY) ?? "false";
  };

  const getServerSnapshot = () => "false";

  const subscribe = (callback: () => void) => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) callback();
    };

    const onLocal = () => callback();

    window.addEventListener("storage", onStorage);
    window.addEventListener("stageRevealedChange", onLocal);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("stageRevealedChange", onLocal);
    };
  };

  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return value === "true";
}

export function StageManager({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStageRevealed = useStageRevealedStore();

  const routeContent = useMemo(
    () => getStageContentForPath(pathname),
    [pathname]
  );

  // Local state ONLY for animations / user-triggered transitions
  const [currentContent, setCurrentContent] = useState<StageContent | null>(
    null
  );
  const [displayContentState, setDisplayContentState] =
    useState<StageContent | null>(null);
  const [isTextAnimating, setIsTextAnimating] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  // ✅ Derive what Stage should show (no effects, no warnings)
  const displayContent =
    pathname === "/" || !isStageRevealed
      ? null
      : (displayContentState ?? currentContent ?? routeContent);

  const revealStage = () => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(STORAGE_KEY, "true");
    window.dispatchEvent(new Event("stageRevealedChange"));
  };

  const updateContent = (content: StageContent) => {
    // Home should never show stage
    if (pathname === "/") return;

    // ensure revealed flag is true
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
      window.dispatchEvent(new Event("stageRevealedChange"));
    }

    setCurrentContent(content);

    // first content ever: show immediately (no bulky fade)
    if (!displayContentState && !routeContent) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;

      setDisplayContentState(content);
      setIsTextAnimating(false);
      return;
    }

    // cancel previous swap if user clicks quickly
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // fade out
    setIsTextAnimating(true);

    // swap + fade in
    timeoutRef.current = window.setTimeout(() => {
      setDisplayContentState(content);
      setIsTextAnimating(false);
      timeoutRef.current = null;
    }, FADE_MS);
  };

  // (Optional) you can clear timers on unmount by moving timer logic into a custom hook,
  // but not required unless you see warnings about state updates on unmounted components.

  return (
    <StageContext.Provider
      value={{
        isStageRevealed,
        currentContent,
        displayContent,
        isTextAnimating,
        revealStage,
        updateContent,
      }}
    >
      {children}
    </StageContext.Provider>
  );
}

export function useStage() {
  const ctx = useContext(StageContext);
  if (!ctx) throw new Error("useStage must be used within StageManager");
  return ctx;
}
