import Link from "next/link";
import css from "./Site.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.siteFooter}>
      <div className={css.siteFooterInner}>
        {/* Left: Copyright */}
        <p className={css.siteFooterCopy}>© {currentYear} Romana Solovan</p>

        {/* Center: Contact Button */}
        <Link href="/contact" className={css.footerContactButton}>
          Feel Free to Reach Out
          <svg
            className={css.footerContactIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </Link>

        {/* Right: Social Links (optional) */}
        <div className={css.footerLinks}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={css.footerLink}
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={css.footerLink}
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
