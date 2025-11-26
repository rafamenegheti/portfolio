"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import InteractiveCard from "@/components/InteractiveCard";
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
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4"
          >
            <span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block"
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
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t("about.description")}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              {t("about.journey")}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {t("about.journeyText")}
            </motion.p>

            <div ref={statsRef} className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedCounter value={10} suffix="+" />
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("about.projectsCompleted")}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  <AnimatedCounter value={4} suffix="+" />
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("about.yearsExperience")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              {t("about.skillsTitle")}
            </motion.h3>

            <div
              ref={skillsRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <InteractiveCard className="h-full" glowColor="blue">
                    <div className="p-4">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </InteractiveCard>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
