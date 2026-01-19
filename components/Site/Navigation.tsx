"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStage } from "./StageManager";
import { navItems } from "./navItems";
import css from "./Site.module.css";

interface NavigationProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export default function Navigation({
  onLinkClick,
  isMobile = false,
}: NavigationProps) {
  const pathname = usePathname();
  const { updateContent } = useStage();

  const handleNavClick = (
    href: string,
    stageTitle?: string,
    stageSubtitle?: string
  ) => {
    const isActive = pathname === href;

    // Home: no stage updates
    if (href === "/") {
      onLinkClick?.();
      return;
    }

    // Avoid re-animating stage when already on this page
    if (isActive) {
      onLinkClick?.();
      return;
    }

    // Only update stage if this item actually has stageTitle
    if (stageTitle) {
      updateContent({ title: stageTitle, subtitle: stageSubtitle });
    }

    onLinkClick?.();
  };

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
                className={
                  isMobile
                    ? `nav-link-mobile ${isActive ? "nav-link-mobile--active" : ""}`
                    : `nav-tab ${isActive ? "nav-tab--active" : ""}`
                }
                href={item.href}
                onClick={() =>
                  handleNavClick(item.href, item.stageTitle, item.stageSubtitle)
                }
                aria-current={isActive ? "page" : undefined}
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
