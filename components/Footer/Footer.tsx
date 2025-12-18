import Link from "next/link";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Link href="/" aria-label="Home">
        HOME
      </Link>
      <nav className={css.pageNav}>
        <ul className={css.links}>
          <li className={css.aboutLink}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className={css.portLink}>
            <Link href="/portfolio">PROFILE</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
