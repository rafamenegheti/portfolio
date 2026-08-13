"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ScrollProgress = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          theme === "dark"
            ? "rgba(255,255,255,0.7)"
            : "rgba(232, 163, 23, 0.9)",
        boxShadow:
          theme === "dark"
            ? "0 0 12px rgba(255,255,255,0.45)"
            : "0 0 12px rgba(232, 163, 23, 0.55)",
      }}
    />
  );
};

export default ScrollProgress;
