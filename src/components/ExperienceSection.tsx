"use client";

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  achievements: string[];
}

const ExperienceSection = () => {
  const { t, tArray } = useLanguage();

  const experiences: Experience[] = [
    {
      id: "1",
      company: "Sync-OS (Vale)",
      position: t("experience.job1.position"),
      location: t("experience.remote"),
      startDate: "Jan 2023",
      endDate: t("experience.present"),
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Docker",
        "Prisma ORM",
        "HTML",
        "CSS",
        "Node.js",
        "AWS",
        "Vitest",
        "MongoDB",
      ],
      achievements: tArray("experience.job1.achievements"),
    },
    {
      id: "2",
      company: "Grupo Voitto",
      position: t("experience.job2.position"),
      location: t("experience.remote"),
      startDate: "Mar 2021",
      endDate: "Jan 2024",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Docker",
        "HTML",
        "CSS",
        "Node.js",
        "AWS",
        "Express",
        "MySQL",
        "Jest",
      ],
      achievements: tArray("experience.job2.achievements"),
    },
    {
      id: "3",
      company: "Usina de Laticínios Jussara",
      position: t("experience.job3.position"),
      location: "Franca, SP",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      technologies: ["MySQL", "Oracle"],
      achievements: tArray("experience.job3.achievements"),
    },
  ];

  return (
    <section id="experience" className="section-pad relative z-10">
      <div className="container-page">
        <Reveal>
          <p className="section-label">02 / experience/</p>
          <h2 className="heading-display mb-3 text-3xl text-glow sm:text-4xl md:text-5xl">
            {t("experience.title")}
          </h2>
          <p className="mb-12 max-w-2xl font-mono text-sm text-muted">
            {t("experience.description")}
          </p>
        </Reveal>

        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 0.08}>
              <article className="glass-panel p-6 sm:p-8">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-1 font-mono text-xs text-muted">
                      {experience.company}
                    </p>
                    <h3 className="heading-display text-xl sm:text-2xl">
                      {experience.position}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1 font-mono text-xs text-muted sm:items-end">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {experience.startDate} — {experience.endDate}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                <ul className="mb-6 space-y-2.5">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-3 font-mono text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted opacity-70">
                  {t("experience.technologiesUsed")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
