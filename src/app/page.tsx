"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen text-fg">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-[var(--border)] py-10">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted sm:flex-row">
              <p className="font-display text-base text-fg text-glow">
                rafael.
              </p>
              <p>© 2025 · built with next.js & a little coffee</p>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
