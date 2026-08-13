"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { Project } from "@/types/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

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

  return (
    <section id="projects" className="section-pad relative z-10">
      <div className="container-page">
        <Reveal>
          <p className="section-label">03 / projects/</p>
          <h2 className="heading-display mb-3 text-3xl text-glow sm:text-4xl md:text-5xl">
            {t("projects.title")}
          </h2>
          <p className="mb-12 max-w-2xl font-mono text-sm text-muted">
            {t("projects.description")}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mb-6 font-mono text-sm text-fg">
            {t("projects.webApps.title")}/
          </h3>
        </Reveal>

        <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mb-6 font-mono text-sm text-fg">
            {t("projects.apis.title")}/
          </h3>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apiProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ApiCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="glass-card group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden bg-black/30">
        {project.videoUrl ? (
          <video
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={project.imageUrl!}
            alt={project.title}
            width={400}
            height={200}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/55 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Live demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h4 className="mb-2 font-display text-lg font-semibold text-fg">
          {project.title}
        </h4>
        <p className="mb-4 flex-1 font-mono text-xs leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              {"-> live"}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              {"-> github"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ApiCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="glass-card group flex h-full flex-col p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-muted">
          <Terminal className="h-5 w-5" />
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs"
          >
            {"-> github"}
          </a>
        )}
      </div>
      <h4 className="mb-2 font-display text-lg font-semibold text-fg">
        {project.title}
      </h4>
      <p className="mb-4 flex-1 font-mono text-xs leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectsSection;
