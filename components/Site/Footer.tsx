import Navigation from "./Navigation";
import css from "./Site.module.css";

export default function Footer() {
  return (
    <footer className={css.siteFooter}>
      <div className={css.siteFooterInner}>
        <Navigation />

        <p className={css.siteFooterCopy}>
          © {new Date().getFullYear()} Romana Solovan
        </p>
      </div>
    </footer>
  );
}
