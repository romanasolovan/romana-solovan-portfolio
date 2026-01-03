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
  { label: "Contact", href: "/contact" },
];

interface NavigationProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export default function Navigation({
  onLinkClick,
  isMobile = false,
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={isMobile ? css.mobileNav : css.nav}>
      <ul className={isMobile ? css.mobileNavList : css.navList}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.href}
              className={isMobile ? css.mobileNavItem : css.navItem}
            >
              <Link
                className={`${isMobile ? css.mobileNavLink : css.navLink} ${isActive ? (isMobile ? css.mobileNavLinkActive : css.navLinkActive) : ""}`}
                href={item.href}
                onClick={onLinkClick}
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
