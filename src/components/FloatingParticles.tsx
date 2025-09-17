"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 6 + 2,
          color: `hsl(${200 + Math.random() * 80}, 80%, 65%)`,
          speed: Math.random() * 0.8 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    generateParticles();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", generateParticles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", generateParticles);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {particles.map((particle) => {
        const distanceToMouse = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) +
            Math.pow(mousePosition.y - particle.y, 2)
        );
        const magneticForce = Math.max(0, 200 - distanceToMouse) / 200;
        const isNearMouse = distanceToMouse < 100;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              filter: isNearMouse ? "blur(0.5px)" : "blur(1px)",
              boxShadow: isNearMouse
                ? `0 0 ${particle.size * 2}px ${particle.color}40`
                : `0 0 ${particle.size}px ${particle.color}20`,
            }}
            animate={{
              x:
                particle.x +
                (mousePosition.x - particle.x) * magneticForce * 0.15,
              y:
                particle.y +
                (mousePosition.y - particle.y) * magneticForce * 0.15,
              scale: isNearMouse ? 1.5 : 1,
              opacity: isNearMouse ? 0.9 : 0.6,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 25,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;
