"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: "1",
      company: "Sync-OS",
      position: "Full Stack Developer",
      location: "Remote",
      startDate: "Jan 2023",
      endDate: "Present",
      description: "",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "HTML",
        "CSS",
        "Node.js",
        "AWS",
        "Vitest",
        "MongoDB",
      ],
      achievements: [
        "Developed a meteorological analysis and monitoring platform.",
        "Implemented interactive dashboards with real-time data visualization, allowing users to track weather metrics and forecasts intuitively.",
        "Led the integration of external APIs for climate data collection, ensuring reliability and scalability in processing large volumes of information.",
        "Performed backend performance optimizations, reducing response time by up to 40% in critical queries.",
        "Collaborated in defining the application architecture, applying Clean Code best practices, SOLID principles, and scalable architecture principles.",
      ],
    },
    {
      id: "2",
      company: "Grupo Voitto",
      position: "Junior Full Stack Developer",
      location: "Remote",
      startDate: "Mar 2021",
      endDate: "Jan 2024",
      description: "",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML",
        "CSS",
        "Node.js",
        "AWS",
        "Express",
        "MySQL",
        "Jest",
      ],
      achievements: [
        "Developed a video course consumption platform.",
        "Performed maintenance and implemented improvements across all company platforms, including websites, blogs, and the LMS platform. This involved bug fixes, performance optimization, and implementation of new features, enhancing user experience and ensuring smooth platform operation.",
        "Created a B2B course license sales and management platform.",
        "Created various campaign pages, such as landing pages and referral programs, that attracted thousands of users, ensuring attractive design and intuitive navigation.",
      ],
    },
    {
      id: "3",
      company: "Usina de Laticínios Jussara",
      position: "Systems Support Analyst",
      location: "Franca, SP",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      description: "",
      technologies: ["MySQL", "Oracle"],
      achievements: [
        "Provided technical support to internal clients, handling tickets related to problems and technical issues in our systems.",
        "Performed problem analysis and identified root causes, ensuring efficient and complete resolution of issues reported by users.",
        "Worked closely with the development team to investigate and fix bugs or system failures.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
              <TextReveal text="Work Experience" type="word" delay={0.2} />
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey in software development, working with
            various technologies and teams to deliver impactful solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div
                      className="absolute left-1/2 top-12 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2 z-0 hidden md:block"
                      style={{ height: "calc(100% + 2rem)" }}
                    ></div>
                  )}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </h4>
                    </div>

                    <div className="flex flex-col lg:items-end space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {experience.startDate} - {experience.endDate}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p> */}

                  {/* Achievements */}
                  <div className="mb-6">
                    {/* <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h5> */}
                    <ul className="space-y-2">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
