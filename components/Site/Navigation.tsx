"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Site.module.css";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={css.nav}>
      <ul className={css.navList}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className={css.navItem}>
              <Link
                className={`${css.navLink} ${isActive ? css.navLinkActive : ""}`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
