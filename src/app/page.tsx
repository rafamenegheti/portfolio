"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SectionTransition from "@/components/SectionTransition";
import GSAPTextSplit from "@/components/GSAPTextSplit";

export default function Home() {
  return (
    <div className="page-content min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />

        <AboutSection />

        <SectionTransition effect="fade">
          <ExperienceSection />
        </SectionTransition>

        <SectionTransition effect="slide" direction="up">
          <ProjectsSection />
        </SectionTransition>

        <SectionTransition effect="fade">
          <ContactSection />
        </SectionTransition>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <GSAPTextSplit
              text="2025 Rafael Menegheti. Built with Next.js, TypeScript, Tailwind CSS and ❤."
              type="words"
              animation="fade"
              delay={0}
              className="text-gray-400"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
