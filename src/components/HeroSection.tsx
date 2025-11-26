"use client";

import React, { useRef } from "react";
import { Download, Mail, Github, Linkedin, Code2, Coffee } from "lucide-react";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import GSAPTextSplit from "@/components/GSAPTextSplit";
import AnimatedButton from "@/components/AnimatedButton";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP, useMagnetic } from "@/hooks/useGSAP";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingIcon1Ref = useRef<HTMLDivElement>(null);
  const floatingIcon2Ref = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Magnetic effect for buttons
  const magneticButton1 = useMagnetic(0.3) as React.RefObject<HTMLDivElement>;
  const magneticButton2 = useMagnetic(0.3) as React.RefObject<HTMLDivElement>;
  const magneticGithub = useMagnetic(0.4) as React.RefObject<HTMLAnchorElement>;
  const magneticLinkedin = useMagnetic(
    0.4
  ) as React.RefObject<HTMLAnchorElement>;

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      rotation: -10,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "back.out(1.7)",
    })
      .to(
        imageRef.current,
        {
          filter: "blur(0px)",
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        ".hero-title",
        {
          y: 100,
          opacity: 0,
          rotationX: -90,
          transformOrigin: "50% 50%",
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.8"
      )
      .from(
        ".hero-description",
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        buttonsRef.current?.children || [],
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      )
      .from(
        socialLinksRef.current?.children || [],
        {
          scale: 0,
          opacity: 0,
          rotation: 180,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

    // Continuous floating animation for icons with complex movement
    if (floatingIcon1Ref.current) {
      const icon1 = floatingIcon1Ref.current;
      gsap.set(icon1, { x: 0, y: 0 });

      // Create a complex floating path
      gsap.to(icon1, {
        x: 100,
        y: -100,
        rotation: 360,
        scale: 1.2,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Add pulsing glow
      gsap.to(icon1, {
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    // Enhanced floating icons with complex paths
    if (floatingIcon1Ref.current) {
      const icon1 = floatingIcon1Ref.current;
      gsap.set(icon1, { x: 0, y: 0 });

      gsap.to(icon1, {
        x: 100,
        y: -100,
        rotation: 360,
        scale: 1.2,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Add pulsing glow
      gsap.to(icon1, {
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    if (floatingIcon2Ref.current) {
      const icon2 = floatingIcon2Ref.current;
      gsap.set(icon2, { x: 0, y: 0 });

      gsap.to(icon2, {
        x: -50,
        y: 100,
        rotation: -360,
        scale: 1.1,
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Add pulsing glow
      gsap.to(icon2, {
        boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    // Scroll indicator animation
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Image glow animation
    if (imageRef.current) {
      const glow = imageRef.current.querySelector(".image-glow");
      if (glow) {
        gsap.to(glow, {
          scale: 1.1,
          opacity: 0.4,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
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
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>

      <div
        ref={floatingIcon1Ref}
        className="absolute top-20 right-20 w-16 h-16 bg-blue-500/10 dark:bg-blue-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
      >
        <Code2 className="w-8 h-8 text-blue-500 dark:text-blue-400" />
      </div>

      <div
        ref={floatingIcon2Ref}
        className="absolute bottom-20 left-20 w-12 h-12 bg-purple-500/10 dark:bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm"
      >
        <Coffee className="w-6 h-6 text-purple-500 dark:text-purple-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div ref={imageRef} className="mb-8 flex justify-center">
            <div className="relative group cursor-pointer">
              <div className="image-glow absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 dark:opacity-20"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/foto.png"
                  alt="Rafael Menegheti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-6 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <div
                className="hero-title inline-block text-blue-600 dark:text-blue-400"
                style={{
                  background:
                    "linear-gradient(to right, #2563eb, #9333ea, #1e40af)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#2563eb",
                }}
              >
                <GSAPTextSplit
                  text={t("hero.greeting")}
                  type="words"
                  animation="slide"
                  delay={0.2}
                />
              </div>
              <br />
              <span className="hero-title text-gray-900 dark:text-white">
                <GSAPTextSplit
                  text={t("hero.name")}
                  type="words"
                  animation="scale"
                  delay={0.8}
                  className="tracking-wide"
                />
              </span>
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="hero-title text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              <TextReveal
                key={t("hero.title")}
                text={t("hero.title")}
                type="typewriter"
                delay={1.5}
              />
            </h2>
            <p className="hero-description text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              {t("hero.description")}
            </p>
          </div>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <div ref={magneticButton1}>
              <AnimatedButton
                onClick={scrollToContact}
                variant="primary"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
              >
                {t("hero.getInTouch")}
              </AnimatedButton>
            </div>

            <div ref={magneticButton2}>
              <AnimatedButton
                onClick={downloadCV}
                variant="outline"
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                {t("hero.downloadCV")}
              </AnimatedButton>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">
                {t("hero.available")}
              </span>
            </div>

            <div
              ref={socialLinksRef}
              className="flex items-center justify-center space-x-6"
            >
              <a
                ref={magneticGithub}
                href="https://github.com/rafamenegheti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>

              <a
                ref={magneticLinkedin}
                href="https://www.linkedin.com/in/rafael-menegheti-4532a0219"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div ref={scrollIndicatorRef}>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center items-start">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
