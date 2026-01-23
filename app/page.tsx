import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import AboutSection from "@/components/Sections/AboutSection/AboutSection";
import PortfolioSection from "@/components/Sections/PortfolioSection/PortfolioSection";
import SkillsSection from "@/components/Sections/SkillsSection/SkillsSection";
import ContactSection from "@/components/Sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="about">
        <AboutSection showViewMore />
      </section>

      <section id="portfolio">
        <PortfolioSection showViewMore limitProjects={2} />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
