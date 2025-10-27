"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import TextReveal from "@/components/TextReveal";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const webProjects: Project[] = [
    {
      id: "1",
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      videoUrl: "/mcdonalds.mp4",
      technologies: [
        "React.js",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "TailwindCSS",
      ],
      githubUrl: "https://github.com/rafamenegheti/mcdonalds-self-attending",
      liveUrl: "https://mcdonalds-self-attending.vercel.app/mcdonalds",
    },
    {
      id: "2",
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      videoUrl: "/bewear.mp4",
      technologies: ["Next.js", "React.js", "TailwindCSS"],
      githubUrl: "https://github.com/rafamenegheti/bewear",
    },
    {
      id: "3",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      videoUrl: "/ignews.mp4",
      technologies: ["Next.js", "React.js", "FaunaDB", "Stripe"],
      githubUrl: "https://github.com/rafamenegheti/ignews",
      liveUrl: "https://ignews-qos25pzu8-rafamenegheti.vercel.app",
    },
    {
      id: "4",
      title: t("projects.project5.title"),
      description: t("projects.project5.description"),
      videoUrl: "/angularMarketplace.mkv",
      technologies: ["JavaScript", "TypeScript", "Angular", "TailwindCSS"],
      githubUrl: "https://github.com/rafamenegheti/angular-marketplace",
    },
    {
      id: "5",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      videoUrl: "/dashgo.mp4",
      technologies: ["React.js", "Next.js", "TypeScript"],
      githubUrl: "https://github.com/rafamenegheti/dashgo",
    },
    {
      id: "6",
      title: t("projects.project6.title"),
      description: t("projects.project6.description"),
      videoUrl: "/spacetraveling.mkv",
      technologies: ["React.js", "Next.js", "Prismic CMS", "TypeScript"],
      githubUrl: "https://github.com/rafamenegheti/spacetraveling",
    },
  ];

  const apiProjects: Project[] = [
    {
      id: "1",
      title: t("projects.api1.title"),
      description: t("projects.api1.description"),
      technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/rafamenegheti/iCompras",
    },
    {
      id: "2",
      title: t("projects.api2.title"),
      description: t("projects.api2.description"),
      technologies: [
        "Node",
        "Fastify",
        "Swagger",
        "Vitest",
        "Zod",
        "PostgreSQL",
        "Drizzle ORM",
        "Docker",
      ],
      githubUrl:
        "https://github.com/rafamenegheti/Contact-Management-System-API",
    },
    {
      id: "3",
      title: t("projects.api3.title"),
      description: t("projects.api3.description"),
      technologies: [
        "Node",
        "Express",
        "Swagger",
        "TypeORM",
        "Redis",
        "Jest",
        "Docker",
      ],
      githubUrl: "https://github.com/rafamenegheti/rentx",
    },
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const renderProjectCard = (project: Project) => (
    <motion.div
      key={project.id}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        {project.videoUrl ? (
          <video
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={project.imageUrl!}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.a>
            )}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 dark:opacity-100 dark:group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );

  const renderApiCard = (project: Project) => (
    <motion.div
      key={project.id}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
    >
      {/* Icon Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex space-x-2">
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </motion.a>
          )}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </motion.a>
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
                key={t("projects.title")}
                text={t("projects.title")}
                type="word"
                delay={0.2}
              />
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t("projects.description")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t("projects.webApps.title")}
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {webProjects.map((project) => renderProjectCard(project))}
          </motion.div>
        </motion.div>

        {apiProjects.length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t("projects.apis.title")}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {apiProjects.map((project) => renderApiCard(project))}
            </motion.div>
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
