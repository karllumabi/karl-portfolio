import PortfolioIntro from "@/components/intro/PortfolioIntro";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import DesignsSection from "@/components/sections/DesignsSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <>
      <PortfolioIntro />

      <main className="min-h-screen bg-[var(--page)] text-[var(--text)]">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <DesignsSection />
        <ContactSection />
      </main>
    </>
  );
}