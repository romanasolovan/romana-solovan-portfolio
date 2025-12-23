import Link from "next/link";
import Navigation from "./Navigation";
import css from "./Site.module.css";

export default function Header() {
  return (
    <header className={css.siteHeader}>
      <div className={css.siteHeaderInner}>
        <Link href="/" className={css.siteHeaderBrand} aria-label="Go to Home">
          Romana Solovan
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
