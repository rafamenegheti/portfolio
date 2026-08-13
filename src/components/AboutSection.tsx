"use client";

import React from "react";
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
import { Zap, FileText } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React/Next.js", icon: SiReact },
    { name: "Angular", icon: SiAngular },
    { name: "React Native", icon: SiReact },
    { name: "Node/Express", icon: SiNodedotjs },
    { name: "Spring Boot", icon: SiSpring },
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "HTML/CSS", icon: SiHtml5 },
    { name: "SQL/NoSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Jest/Testing", icon: SiJest },
    { name: "AI Tools", icon: Zap },
    { name: "Clean Code", icon: FileText },
  ];

  return (
    <section id="about" className="section-pad relative z-10">
      <div className="container-page">
        <Reveal>
          <div className="glass-panel p-6 sm:p-10 md:p-12">
            <p className="section-label">01 / about/</p>
            <h2 className="heading-display mb-6 text-3xl text-glow sm:text-4xl md:text-5xl">
              {t("about.title")}
            </h2>
            <p className="mb-10 max-w-3xl font-mono text-sm leading-relaxed text-muted sm:text-[15px]">
              {t("about.description")}
            </p>

            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 font-mono text-sm text-fg">
                  {t("about.journey")}
                </h3>
                <p className="mb-8 font-mono text-sm leading-relaxed text-muted">
                  {t("about.journeyText")}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="soft-panel rounded-2xl p-4">
                    <p className="font-display text-3xl font-bold text-fg">
                      <AnimatedCounter value={10} suffix="+" />
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {t("about.projectsCompleted")}
                    </p>
                  </div>
                  <div className="soft-panel rounded-2xl p-4">
                    <p className="font-display text-3xl font-bold text-fg">
                      <AnimatedCounter value={4} suffix="+" />
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {t("about.yearsExperience")}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-mono text-sm text-fg">
                  {t("about.skillsTitle")}
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="soft-panel flex items-center gap-2 px-3 py-2.5 transition-colors hover:border-[var(--accent)]"
                    >
                      <skill.icon className="h-4 w-4 flex-shrink-0 text-muted" />
                      <span className="truncate font-mono text-[11px] text-fg">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
