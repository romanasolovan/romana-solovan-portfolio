import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import AboutSection from "@/components/Sections/AboutSection/AboutSection";
import PortfolioSection from "@/components/Sections/PortfolioSection/PortfolioSection";
import SkillsSection from "@/components/Sections/SkillsSection/SkillsSection";
import ContactSection from "@/components/Sections/ContactSection/ContactSection";
import "./globals.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="about">
        <AboutSection showViewMore={true} />
      </div>
      <div id="portfolio">
        <PortfolioSection showViewMore={true} limitProjects={2} />
      </div>
      <div id="skills">
        <SkillsSection showViewMore={true} />
      </div>
      <div id="contact">
        <ContactSection showViewMore={true} />
      </div>
    </>
  );
}
