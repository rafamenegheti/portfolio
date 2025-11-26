"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPTextSplitProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "chars" | "words" | "lines";
  animation?: "fade" | "slide" | "scale" | "rotate";
}

const GSAPTextSplit: React.FC<GSAPTextSplitProps> = ({
  text,
  className = "",
  delay = 0,
  type = "words",
  animation = "fade",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let elements: HTMLElement[] = [];

    // Split text based on type
    if (type === "chars") {
      const chars = text.split("");
      container.innerHTML = chars
        .map((char) => {
          if (char === " ") {
            return '<span class="inline-block">&nbsp;</span>';
          }
          return `<span class="inline-block">${char}</span>`;
        })
        .join("");
      elements = Array.from(container.querySelectorAll("span"));
    } else if (type === "words") {
      const words = text.split(" ");
      container.innerHTML = words
        .map((word) => `<span class="inline-block mr-2">${word}</span>`)
        .join("");
      elements = Array.from(container.querySelectorAll("span"));
    } else if (type === "lines") {
      const lines = text.split("\n");
      container.innerHTML = lines
        .map((line) => `<div class="block">${line}</div>`)
        .join("");
      elements = Array.from(container.querySelectorAll("div"));
    }

    // Set initial states based on animation type
    const initialStates: Record<string, gsap.TweenVars> = {
      fade: { opacity: 0 },
      slide: { opacity: 0, y: 50 },
      scale: { opacity: 0, scale: 0 },
      rotate: { opacity: 0, rotation: -180, scale: 0 },
    };

    const finalStates: Record<string, gsap.TweenVars> = {
      fade: { opacity: 1 },
      slide: { opacity: 1, y: 0 },
      scale: { opacity: 1, scale: 1 },
      rotate: { opacity: 1, rotation: 0, scale: 1 },
    };

    // Animate elements
    const animationConfig = {
      ...finalStates[animation],
      duration: 0.8,
      delay: delay,
      stagger: type === "chars" ? 0.02 : 0.1,
      ease: "power3.out",
    };

    let scrollTrigger: ScrollTrigger | null = null;
    let fallbackTimeout: NodeJS.Timeout | null = null;

    // Wait for next frame to ensure layout is complete
    requestAnimationFrame(() => {
      // Check if element is already in viewport (for footer at bottom)
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        // If already visible, animate immediately
        gsap.fromTo(elements, initialStates[animation], animationConfig);
      } else {
        // Use scroll trigger
        scrollTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.fromTo(elements, initialStates[animation], animationConfig);
          },
          once: true,
        });

        // Fallback: animate after a short delay if still not visible
        fallbackTimeout = setTimeout(() => {
          if (
            elements.length > 0 &&
            gsap.getProperty(elements[0], "opacity") === 0
          ) {
            gsap.fromTo(elements, initialStates[animation], animationConfig);
            scrollTrigger?.kill();
          }
        }, 500);
      }
    });

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout);
      }
    };
  }, [text, type, animation, delay]);

  return (
    <div ref={containerRef} className={className}>
      {text}
    </div>
  );
};

export default GSAPTextSplit;
