import css from "./Site.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.siteFooter}>
      <div className={css.siteFooterInner}>
        <p className={css.siteFooterCopy}>© {currentYear} Romana Solovan</p>
      </div>
    </footer>
  );
}
