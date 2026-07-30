import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import DesignsSection from "../components/sections/DesignsSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--page)] text-[var(--text)]">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <DesignsSection />
      <ContactSection />
    </main>
  );
}