"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsVisible(true);
    };

    const mouseLeaveWindow = () => setIsVisible(false);
    const mouseEnterWindow = () => setIsVisible(true);

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");
    const handleTextHover = () => setCursorVariant("text");
    const handleTextLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeaveWindow);
    window.addEventListener("mouseenter", mouseEnterWindow);

    const hoverElements = document.querySelectorAll(
      "button, a, .magnetic, .cursor-hover, [role='button']"
    );
    const textElements = document.querySelectorAll(
      "input, textarea, [contenteditable], .cursor-text"
    );

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    textElements.forEach((element) => {
      element.addEventListener("mouseenter", handleTextHover);
      element.addEventListener("mouseleave", handleTextLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeaveWindow);
      window.removeEventListener("mouseenter", mouseEnterWindow);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      textElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleTextHover);
        element.removeEventListener("mouseleave", handleTextLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1,
      opacity: isVisible ? 0.8 : 0,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.8,
      opacity: isVisible ? 1 : 0,
    },
    text: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 12,
      scaleX: 0.1,
      scaleY: 1.2,
      opacity: isVisible ? 0.7 : 0,
    },
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      opacity: isVisible ? 0.3 : 0,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1.5,
      opacity: isVisible ? 0.6 : 0,
    },
    text: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 0.8,
      opacity: isVisible ? 0.2 : 0,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400/50 dark:border-blue-300/50 rounded-full pointer-events-none z-[9998]"
        variants={ringVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
        style={{
          backdropFilter: "blur(1px)",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] rounded-full"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 50%, rgba(59, 130, 246, 0.4) 100%)",
          boxShadow:
            "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.2)",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9997] rounded-full"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorVariant === "hover" ? 1.2 : 0.8,
          opacity: isVisible ? 0.15 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9996] rounded-full"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: cursorVariant === "hover" ? 1.5 : 0.6,
          opacity: isVisible ? 0.08 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 30%, transparent 60%)",
          filter: "blur(12px)",
        }}
      />

      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-1 h-1 bg-blue-400 rounded-full pointer-events-none z-[9995]"
          animate={{
            x: mousePosition.x - 2 + Math.cos((Date.now() / 1000 + i) * 2) * 15,
            y: mousePosition.y - 2 + Math.sin((Date.now() / 1000 + i) * 2) * 15,
            opacity: isVisible && cursorVariant === "hover" ? 0.6 : 0,
            scale: cursorVariant === "hover" ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: i * 0.1,
          }}
        />
      ))}
    </>
  );
};

export default MagneticCursor;
