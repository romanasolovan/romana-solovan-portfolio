"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStage } from "./StageManager";
import css from "./HorizontalDrawer.module.css";
import { navItems, type NavItem } from "./navItems";

interface HorizontalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HorizontalDrawer({
  isOpen,
  onClose,
}: HorizontalDrawerProps) {
  const pathname = usePathname();
  const { updateContent } = useStage();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Close on Escape key (only when open)
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Auto-scroll active item into view when opening
  useEffect(() => {
    if (!isOpen || !scrollRef.current) return;

    const activeItem = scrollRef.current.querySelector('[aria-current="page"]');
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [isOpen, pathname]);

  const handleNavClick = (item: NavItem) => {
    const isActive = pathname === item.href;

    // Home: no stage, just close
    if (item.href === "/") {
      onClose();
      return;
    }

    // If already on this page, just close (avoid re-animating stage)
    if (isActive) {
      onClose();
      return;
    }

    // Only update stage if this item actually has stageTitle
    if (item.stageTitle) {
      updateContent({ title: item.stageTitle, subtitle: item.stageSubtitle });
    }

    onClose();
  };

  return (
    <nav
      id="mobile-horizontal-drawer"
      className={`${css.drawer} ${isOpen ? css.drawerOpen : ""}`}
      aria-label="Mobile navigation drawer"
      aria-hidden={!isOpen}
    >
      <div className={css.drawerScroll} ref={scrollRef}>
        <div className={css.drawerInner}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${css.drawerItem} ${isActive ? css.drawerItemActive : ""}`}
                onClick={() => handleNavClick(item)}
                aria-current={isActive ? "page" : undefined}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
