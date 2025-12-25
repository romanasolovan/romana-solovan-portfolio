import React from "react";
import css from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={css.aboutSection}>
      <h3 className={css.aboutTitle}>get to know me</h3>
      <p className={css.aboutInfo}>info about myself - showcast self</p>
    </div>
  );
}
