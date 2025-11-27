"use client";

import React, { useRef } from "react";
import TextReveal from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
// Technology-specific icons from react-icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiSpring,
  SiCplusplus,
  SiHtml5,
  SiPostgresql,
  SiGit,
  SiAmazon,
  SiDocker,
  SiJest,
} from "react-icons/si";
// Keep some Lucide icons for concepts that don't have specific tech icons
import { Zap, FileText } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const monitorRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const screenContentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const monitor = monitorRef.current;
    const screen = screenRef.current;
    const screenContent = screenContentRef.current;

    if (!monitor || !screen || !screenContent || !sectionRef.current) return;

    // Set initial state - screen starts flat (0 degrees)
    // For rotationX: 90° = flat/horizontal, 0° = vertical
    gsap.set(monitor, {
      rotationX: 90, // Start flat (lying down)
      transformOrigin: "center center",
      opacity: 1,
    });

    // Create scroll-triggered rotation animation
    // Rotate from 90° (flat) to 0° (vertical/standing up)
    const rotationAnimation = gsap.to(monitor, {
      rotationX: 0, // End vertical (standing up)
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        markers: false, // Set to true to debug scroll trigger positions
        onUpdate: (self) => {
          // Fade in content as screen rotates (starts fading at 30% progress)
          const contentOpacity =
            self.progress < 0.3 ? 0 : Math.min((self.progress - 0.3) * 2, 1);
          gsap.set(screenContent, {
            opacity: contentOpacity,
          });

          // Add glow effect as it rotates
          const glowIntensity = Math.min(self.progress * 0.8, 0.5);
          gsap.set(screen, {
            boxShadow: `0 0 ${
              60 * glowIntensity
            }px rgba(59, 130, 246, ${glowIntensity}), inset 0 0 ${
              100 * glowIntensity
            }px rgba(59, 130, 246, ${glowIntensity * 0.3})`,
          });
        },
      },
    });

    // Skills stagger animation
    if (skillsRef.current) {
      const skillCards = skillsRef.current.querySelectorAll(".skill-card");
      gsap.fromTo(
        skillCards,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Stats cards animation
    if (statsRef.current) {
      const cards = statsRef.current.querySelectorAll("div");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const skills = [
    { name: "JavaScript", icon: SiJavascript, category: "language" },
    { name: "TypeScript", icon: SiTypescript, category: "language" },
    { name: "React/Next.js", icon: SiReact, category: "frontend" },
    { name: "Angular", icon: SiAngular, category: "frontend" },
    { name: "React Native", icon: SiReact, category: "mobile" },
    { name: "Node/Express", icon: SiNodedotjs, category: "backend" },
    { name: "Spring Boot", icon: SiSpring, category: "backend" },
    { name: "Python", icon: SiPython, category: "language" },
    { name: "C++", icon: SiCplusplus, category: "language" },
    { name: "HTML/CSS", icon: SiHtml5, category: "frontend" },
    { name: "SQL/NoSQL", icon: SiPostgresql, category: "database" },
    { name: "Git", icon: SiGit, category: "tools" },
    { name: "AWS", icon: SiAmazon, category: "cloud" },
    { name: "Docker", icon: SiDocker, category: "tools" },
    { name: "Jest/Testing", icon: SiJest, category: "testing" },
    { name: "AI Tools", icon: Zap, category: "tools" },
    { name: "Clean Code", icon: FileText, category: "practices" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Computer Screen with Border */}
        <div
          className="relative mx-auto max-w-6xl"
          style={{
            perspective: "1500px",
            perspectiveOrigin: "center center",
          }}
        >
          <div
            ref={monitorRef}
            className="relative"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Screen Content Container */}
            <div
              ref={screenRef}
              className="relative rounded-lg overflow-hidden"
            >
              {/* Screen Content */}
              <div
                ref={screenContentRef}
                className="p-6 sm:p-8 md:p-12 min-h-[600px] opacity-0"
              >
                {/* Screen Header */}
                <div className="mb-8 text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    <span
                      className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <TextReveal
                        key={t("about.title")}
                        text={t("about.title")}
                        type="word"
                        delay={0.2}
                      />
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    {t("about.description")}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Journey */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {t("about.journey")}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t("about.journeyText")}
                    </p>

                    <div ref={statsRef} className="grid grid-cols-2 gap-4 pt-6">
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          <AnimatedCounter value={10} suffix="+" />
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {t("about.projectsCompleted")}
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          <AnimatedCounter value={4} suffix="+" />
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {t("about.yearsExperience")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Skills */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      {t("about.skillsTitle")}
                    </h3>

                    <div
                      ref={skillsRef}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                      {skills.map((skill) => (
                        <div key={skill.name} className="skill-card">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col items-center text-center space-y-2 group cursor-pointer shadow-md hover:shadow-lg">
                            <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
