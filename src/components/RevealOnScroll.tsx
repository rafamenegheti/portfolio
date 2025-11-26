"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const directions = {
      up: { y: 100, x: 0 },
      down: { y: -100, x: 0 },
      left: { x: 100, y: 0 },
      right: { x: -100, y: 0 },
    };

    const from = directions[direction];

    gsap.fromTo(
      element,
      {
        opacity: 0,
        ...from,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [direction, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
