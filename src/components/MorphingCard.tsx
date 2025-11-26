"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MorphingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const MorphingCard: React.FC<MorphingCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    // Scroll reveal
    gsap.fromTo(
      card,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Morphing glow effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / centerX;
      const moveY = (y - centerY) / centerY;

      gsap.to(glow, {
        x: moveX * 20,
        y: moveY * 20,
        scale: 1.2,
        opacity: 0.6,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(card, {
        rotationY: moveX * 5,
        rotationX: -moveY * 5,
        z: 10,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 0.3,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const glowColors = {
    blue: "from-blue-500/30 via-purple-500/30 to-pink-500/30",
    purple: "from-purple-500/30 via-pink-500/30 to-blue-500/30",
    green: "from-green-500/30 via-emerald-500/30 to-teal-500/30",
    pink: "from-pink-500/30 via-rose-500/30 to-orange-500/30",
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <div
        ref={glowRef}
        className={`absolute -inset-1 bg-gradient-to-r ${
          glowColors[glowColor as keyof typeof glowColors] || glowColors.blue
        } rounded-2xl blur-xl opacity-30 transition-opacity duration-300`}
      />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
};

export default MorphingCard;
