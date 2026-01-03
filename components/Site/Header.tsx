"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import css from "./Site.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
            className={`${css.burgerButton} ${isMobileMenuOpen ? css.burgerButtonOpen : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span className={css.burgerLine}></span>
            <span className={css.burgerLine}></span>
            <span className={css.burgerLine}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Only render when open */}
      {isMobileMenuOpen && (
        <>
          <div
            className={css.mobileMenuOverlay}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className={css.mobileMenu}>
            <nav className={css.mobileNav}>
              <ul className={css.mobileNavList}>
                <li className={css.mobileNavItem}>
                  <Link
                    href="/"
                    className={css.mobileNavLink}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className={css.mobileNavItem}>
                  <Link
                    href="/about"
                    className={css.mobileNavLink}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li className={css.mobileNavItem}>
                  <Link
                    href="/portfolio"
                    className={css.mobileNavLink}
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className={css.mobileNavItem}>
                  <Link
                    href="/skills"
                    className={css.mobileNavLink}
                    onClick={closeMenu}
                  >
                    Skills
                  </Link>
                </li>
                <li className={css.mobileNavItem}>
                  <Link
                    href="/contact"
                    className={css.mobileNavLink}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
