// import Link from "next/link";
import css from "./Site.module.css";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
];

export default function Navigation() {
  return (
    <nav aria-label="Primary" className={css.nav}>
      <ul className={css.navList}>
        {navItems.map((item) => (
          <li key={item.href} className={css.navItem}>
            <a className={css.navLink} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
