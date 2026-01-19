export type NavItem = {
  label: string;
  href: string;
  stageTitle?: string;
  stageSubtitle?: string;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    // ✅ no stage content on Home
  },
  {
    label: "About",
    href: "/about",
    stageTitle:
      "You are only limited by weakness of attention and poverty of imagination.",
    stageSubtitle: "— William James",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    stageTitle: "All Projects",
    stageSubtitle: "A comprehensive collection of my work",
  },
  {
    label: "Skills",
    href: "/skills",
    stageTitle: "Skills & Expertise",
    stageSubtitle: "What I bring to the table as a developer",
  },
  {
    label: "Contact",
    href: "/contact",
    stageTitle: "Get In Touch",
    stageSubtitle: "Let's discuss your next project or opportunity",
  },
];
