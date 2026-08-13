"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "@/components/AnimatedButton";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = language === "en" ? "/Rafael Carvalho.pdf" : "/Rafael C.pdf";
    link.download =
      language === "en"
        ? "Rafael Menegheti CV - English.pdf"
        : "Rafael Menegheti CV - Português.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center pb-16 pt-28"
    >
      <div className="container-page w-full">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex justify-center"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-[var(--border)] shadow-[var(--panel-shadow)] sm:h-36 sm:w-36">
              <Image
                src="/foto.png"
                alt="Rafael Menegheti"
                fill
                className="object-cover object-top"
                priority
                sizes="144px"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-3 font-mono text-sm text-muted"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display mb-4 text-5xl text-glow sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {t("hero.name")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6 font-mono text-base text-fg sm:text-lg"
          >
            {t("hero.title")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mx-auto mb-10 max-w-xl font-mono text-sm leading-relaxed text-muted sm:text-[15px]"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            <AnimatedButton
              onClick={scrollToContact}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              {`-> ${t("hero.getInTouch")}`}
            </AnimatedButton>
            <AnimatedButton
              onClick={downloadCV}
              variant="outline"
              size="lg"
              icon={<Download className="h-4 w-4" />}
            >
              {`-> ${t("hero.downloadCV")}`}
            </AnimatedButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center justify-center gap-5"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {t("hero.available")}
            </span>
            <span className="text-muted opacity-40">·</span>
            <a
              href="https://github.com/rafamenegheti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-menegheti-4532a0219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
