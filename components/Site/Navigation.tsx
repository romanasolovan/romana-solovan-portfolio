import Link from "next/link";
import css from "./Site.module.css";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <nav aria-label="Primary" className={css.nav}>
      <ul className={css.navList}>
        {navItems.map((item) => (
          <li key={item.href} className={css.navItem}>
            <Link className={css.navLink} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
