"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveCard from "@/components/InteractiveCard";
import TextReveal from "@/components/TextReveal";
import { useLanguage } from "@/contexts/LanguageContext";
// Technology-specific icons from react-icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiAmazon,
  SiDocker,
  SiJest,
} from "react-icons/si";
// Keep some Lucide icons for concepts that don't have specific tech icons
import { Zap, FileText, Code2 } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "JavaScript", icon: SiJavascript, category: "language" },
    { name: "TypeScript", icon: SiTypescript, category: "language" },
    { name: "React/Next.js", icon: SiReact, category: "frontend" },
    { name: "React Native", icon: SiReact, category: "mobile" },
    { name: "Node/Express", icon: SiNodedotjs, category: "backend" },
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("about.projectsCompleted")}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
                <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  4+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("about.yearsExperience")}
                </p>
              </div>
            </motion.div>
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                >
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
