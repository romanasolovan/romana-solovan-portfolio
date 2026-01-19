"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import HorizontalDrawer from "./HorizontalDrawer";
import Stage from "./Stage";
import css from "./Site.module.css";
import StageRouteSync from "./StageRouteSync";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((v) => !v);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={css.siteHeader}>
      <div className={css.siteHeaderInner}>
        <Link
          href="/"
          className={css.siteHeaderBrand}
          aria-label="Go to Home"
          onClick={closeMenu}
        >
          Romana Solovan
        </Link>

        {/* Desktop Navigation */}
        <div className={css.desktopNav}>
          <Navigation onLinkClick={closeMenu} />
        </div>

        {/* Mobile Burger Button */}
        <button
          className={`${css.burgerButton} ${
            isMobileMenuOpen ? css.burgerButtonOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-horizontal-drawer"
          type="button"
        >
          <span className={css.burgerLine}></span>
          <span className={css.burgerLine}></span>
          <span className={css.burgerLine}></span>
        </button>
      </div>

      {/* Mobile Horizontal Drawer */}
      <HorizontalDrawer isOpen={isMobileMenuOpen} onClose={closeMenu} />

      <StageRouteSync />

      {/* Stage should live under header so it "opens like a tab" */}
      <Stage />
    </header>
  );
}
