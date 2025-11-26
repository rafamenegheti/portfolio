"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get page content
    const pageContent = document.querySelector(".page-content");

    // Set initial state - page content is visible but loader is on top
    if (pageContent) {
      gsap.set(pageContent, { opacity: 1 });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // Animate loader elements
    tl.to(".loader-text", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })
      .to(
        ".loader-progress",
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(
        ".loader-content",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "-=0.5"
      )
      .to(
        ".loader-overlay",
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=0.8"
      )
      .to(
        ".loader-container",
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-container fixed inset-0 z-[9999] bg-white dark:bg-gray-900">
      <div className="loader-overlay absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />

      <div className="loader-content absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-8 overflow-hidden">
          <h1 className="loader-text text-6xl md:text-8xl font-bold text-white opacity-0 translate-y-10">
            Rafael
          </h1>
        </div>

        <div className="mb-4 overflow-hidden">
          <p className="loader-text text-xl text-gray-300 opacity-0 translate-y-10">
            Full Stack Developer
          </p>
        </div>

        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="loader-progress h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-0" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
