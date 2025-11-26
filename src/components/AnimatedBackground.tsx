"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbs = Array.from({ length: 5 }, (_, i) => {
      const orb = document.createElement("div");
      orb.className = "absolute rounded-full blur-3xl opacity-20";
      orb.style.width = `${200 + i * 100}px`;
      orb.style.height = `${200 + i * 100}px`;

      const colors = [
        "bg-blue-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-cyan-500",
        "bg-indigo-500",
      ];
      orb.className += ` ${colors[i]}`;

      container.appendChild(orb);
      return orb;
    });

    orbs.forEach((orb, i) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      gsap.set(orb, { x, y });

      gsap.to(orb, {
        x: `+=${(Math.random() - 0.5) * 500}`,
        y: `+=${(Math.random() - 0.5) * 500}`,
        duration: 10 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      orbs.forEach((orb) => orb.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    />
  );
};

export default AnimatedBackground;
