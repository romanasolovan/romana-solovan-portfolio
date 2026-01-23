"use client";

import { useEffect, useRef } from "react";
import css from "./HeroSection.module.css";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const titles = Array.from(
      root.querySelectorAll<HTMLElement>("[data-spot]"),
    );

    const cleanup: Array<() => void> = [];

    titles.forEach((el) => {
      const setPos = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      };

      const onEnter = () => el.setAttribute("data-pressed", "true");
      const onLeave = () => el.removeAttribute("data-pressed");

      // desktop: hover + move
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);
      el.addEventListener("pointermove", setPos);

      // touch: press, then drag finger for the same spotlight feel
      el.addEventListener("pointerdown", (e) => {
        el.setPointerCapture(e.pointerId);
        el.setAttribute("data-pressed", "true");
        setPos(e);
      });

      el.addEventListener("pointerup", onLeave);
      el.addEventListener("pointercancel", onLeave);

      cleanup.push(() => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
        el.removeEventListener("pointermove", setPos);
        el.removeEventListener("pointerup", onLeave);
        el.removeEventListener("pointercancel", onLeave);
      });
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`section section-dark ${css.hero}`}
    >
      <div className="section-container">
        <div className={css.content}>
          <h1 className={css.title} data-spot data-text="Passion">
            Passion
          </h1>
          <h2 className={css.title} data-spot data-text="Dedication">
            Dedication
          </h2>
          <h2 className={css.title} data-spot data-text="Impact">
            Impact
          </h2>
        </div>
      </div>
    </section>
  );
}
