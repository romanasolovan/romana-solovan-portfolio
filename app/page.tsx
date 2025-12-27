import AboutSection from "@/components/Sections/AboutSection/AboutSection";
import PortfolioSection from "@/components/Sections/PortfolioSection/PortfolioSection";
import SkillsSection from "@/components/Sections/SkillsSection/SkillsSection";
import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import "./globals.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
    </>
  );
}
