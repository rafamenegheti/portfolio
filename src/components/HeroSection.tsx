"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Code2, Coffee } from "lucide-react";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import AnimatedButton from "@/components/AnimatedButton";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();

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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    // Use language-specific CV files
    const cvFile = language === "en" ? "/Rafael Carvalho.pdf" : "/Rafael C.pdf";
    const downloadName =
      language === "en"
        ? "Rafael Menegheti CV - English.pdf"
        : "Rafael Menegheti CV - Português.pdf";

    link.href = cvFile;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-16 h-16 bg-blue-500/10 dark:bg-blue-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
      >
        <Code2 className="w-8 h-8 text-blue-500 dark:text-blue-400" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-12 h-12 bg-purple-500/10 dark:bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm"
      >
        <Coffee className="w-6 h-6 text-purple-500 dark:text-purple-400" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 dark:opacity-20 animate-pulse"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/foto.png"
                  alt="Rafael Menegheti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 px-4">
            {/* <div className="inline-flex items-center bg-gray-900 dark:bg-gray-800 text-green-400 px-4 py-2 rounded-lg font-mono text-sm mb-4">
              <span className="text-gray-500">$</span>
              <span className="ml-2">developer --introducing</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                _
              </motion.span>
            </div> */}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <div
                className="inline-block text-blue-600 dark:text-blue-400"
                style={{
                  background:
                    "linear-gradient(to right, #2563eb, #9333ea, #1e40af)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#2563eb",
                }}
              >
                <TextReveal
                  key={t("hero.greeting")}
                  text={t("hero.greeting")}
                  type="word"
                  delay={0.2}
                />
              </div>
              <br />
              <span className="text-gray-900 dark:text-white">
                <TextReveal
                  key={t("hero.name")}
                  text={t("hero.name")}
                  type="word"
                  delay={0.8}
                  className="tracking-wide"
                />
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              <TextReveal
                key={t("hero.title")}
                text={t("hero.title")}
                type="typewriter"
                delay={1.5}
              />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              {t("hero.description")}
            </p>
            {/* 
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
            >
              {["Next.js", "React", "TypeScript", "Node.js", "Spring Boot"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div> */}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <AnimatedButton
              onClick={scrollToContact}
              variant="primary"
              size="lg"
              icon={<Mail className="w-5 h-5" />}
            >
              {t("hero.getInTouch")}
            </AnimatedButton>

            <AnimatedButton
              onClick={downloadCV}
              variant="outline"
              size="lg"
              icon={<Download className="w-5 h-5" />}
            >
              {t("hero.downloadCV")}
            </AnimatedButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-6"
          >
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">
                {t("hero.available")}
              </span>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://github.com/rafamenegheti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://www.linkedin.com/in/rafael-menegheti-4532a0219"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center items-start">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
