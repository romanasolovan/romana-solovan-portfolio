import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <Link href="/" aria-label="Home">
          HOME
        </Link>
        <nav className={css.pageNav}>
          <ul className={css.links}>
            <li className={css.aboutLink}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={css.portLink}>
              <Link href="/profile">PROFILE</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
