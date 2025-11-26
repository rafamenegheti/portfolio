"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Reusable GSAP animation hooks and utilities

export const useGSAP = (
  callback: (ctx: gsap.Context) => void,
  deps?: React.DependencyList
) => {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      callback(self);
    }, scope);

    return () => ctx.revert();
  }, deps || []);

  return scope;
};

// Magnetic effect for buttons and links
export const useMagnetic = <T extends HTMLElement = HTMLElement>(
  strength = 0.3
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

// Parallax effect
export const useParallax = <T extends HTMLElement = HTMLElement>(
  speed = 0.5
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const y = (self.progress - 0.5) * speed * 100;
        gsap.set(element, { y: y });
      },
    });
  }, [speed]);

  return ref;
};

// Scroll reveal animation
export const useScrollReveal = (
  options: {
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
  } = {}
) => {
  const ref = useRef<HTMLElement>(null);
  const { delay = 0, duration = 1, direction = "up", distance = 50 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const directions = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    };

    const from = directions[direction];

    gsap.fromTo(
      element,
      {
        opacity: 0,
        ...from,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay, duration, direction, distance]);

  return ref;
};

// Split text animation
export const animateTextReveal = (
  element: HTMLElement | null,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
  } = {}
) => {
  if (!element) return;

  const { delay = 0, duration = 0.8, stagger = 0.1 } = options;

  const text = element.textContent || "";
  const words = text.split(" ");
  element.innerHTML = "";

  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(100%)";
    element.appendChild(span);

    gsap.to(span, {
      opacity: 1,
      y: 0,
      duration,
      delay: delay + i * stagger,
      ease: "power3.out",
    });
  });
};

// 3D card tilt effect
export const use3DTilt = <T extends HTMLElement = HTMLElement>(
  intensity = 10
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * intensity;
      const rotateY = ((centerX - x) / centerX) * intensity;

      gsap.to(element, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return ref;
};

// Smooth scroll with GSAP (using native smooth scroll as fallback)
export const smoothScrollTo = (target: string | HTMLElement, offset = 0) => {
  const element =
    typeof target === "string" ? document.querySelector(target) : target;
  if (!element) return;

  const targetY = element.getBoundingClientRect().top + window.scrollY - offset;

  // Use native smooth scroll as GSAP ScrollToPlugin is premium
  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
};

// Stagger animation for lists
export const animateStagger = (
  selector: string,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
  } = {}
) => {
  const {
    delay = 0,
    duration = 0.6,
    stagger = 0.1,
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
  } = options;

  gsap.fromTo(selector, from, {
    ...to,
    duration,
    delay,
    stagger,
    ease: "power3.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
};
