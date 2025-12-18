import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <Link href="/" aria-label="Home" className={css.homeLink}>
          HOME
        </Link>
        <nav className={css.pageNav}>
          <ul className={css.links}>
            <li className={css.portLink}>
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li className={css.aboutLink}>
              <Link href="/">SKILLS</Link>
            </li>
            <li className={css.aboutLink}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={css.contLink}>
              <Link href="/">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
