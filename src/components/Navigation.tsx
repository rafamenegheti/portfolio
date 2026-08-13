"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CloudRain, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { theme, toggleTheme, mounted: themeMounted } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "#home", id: "home" },
    { label: t("nav.about"), href: "#about", id: "about" },
    { label: t("nav.experience"), href: "#experience", id: "experience" },
    { label: t("nav.projects"), href: "#projects", id: "projects" },
    { label: t("nav.contact"), href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "projects", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            onClick={() => scrollToSection("#home")}
            className="font-display text-lg font-bold tracking-tight text-glow"
          >
            rafael.
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 font-mono text-xs transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-fg"
                    : "text-muted hover:opacity-80"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-[var(--foreground)] opacity-70"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {mounted && themeMounted ? (
              <>
                <button
                  onClick={toggleLanguage}
                  className="px-2 py-1 font-mono text-xs text-muted transition-colors hover:text-fg"
                  aria-label="Toggle language"
                >
                  {language === "en" ? "EN" : "PT"}
                  <span className="mx-1 opacity-30">/</span>
                  <span className="opacity-40">
                    {language === "en" ? "PT" : "EN"}
                  </span>
                </button>

                <button
                  onClick={toggleTheme}
                  className="rounded-xl p-2 text-muted transition-colors hover:bg-[var(--surface)] hover:text-fg"
                  aria-label={
                    theme === "dark"
                      ? "Switch to sunny day"
                      : "Switch to rainy night"
                  }
                  title={theme === "dark" ? "Sunny day" : "Rainy night"}
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <CloudRain className="h-4 w-4" />
                  )}
                </button>
              </>
            ) : (
              <div className="h-8 w-16 animate-pulse rounded bg-[var(--surface)]" />
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl md:hidden"
          >
            <div className="container-page space-y-1 py-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full py-3 text-left font-mono text-sm ${
                    activeSection === item.id ? "text-fg" : "text-muted"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
