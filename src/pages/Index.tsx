import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FeaturedProjectsSection } from '@/components/FeaturedProjectsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ToolsCarousel } from '@/components/ToolsCarousel';
import { ContactSection } from '@/components/ContactSection';
import { CursorEffect } from '@/components/CursorEffect';

const Index = () => {
  return (
    <div className="relative">
      <GalaxyBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedProjectsSection />
        <ProjectsSection />
        <SkillsSection />
        <ToolsCarousel />
        <ContactSection />
      </main>
      <CursorEffect />
      
      {/* Copyright Footer */}
      <footer className="py-8 px-6 bg-card/20 border-t border-border/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Ghofrane. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
