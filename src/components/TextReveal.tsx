"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "word" | "char" | "typewriter";
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  delay = 0,
  type = "word",
}) => {
  const renderWordAnimation = () => {
    const words = text.split(" ");
    return (
      <span className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: delay + i * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  };

  const renderCharAnimation = () => {
    const chars = text.split("");
    return (
      <span className={className}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: delay + i * 0.05,
              duration: 0.3,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  };

  const renderTypewriterAnimation = () => {
    const chars = text.split("");
    return (
      <span className={`${className} inline-flex items-center`}>
        <span className="inline-block">
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: delay + i * 0.05,
                duration: 0.01,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
        <motion.span
          className="inline-block w-0.5 bg-blue-500 ml-1"
          style={{ height: "0.8em", marginTop: "0.05em" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            delay: delay + text.length * 0.05,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </span>
    );
  };

  switch (type) {
    case "char":
      return renderCharAnimation();
    case "typewriter":
      return renderTypewriterAnimation();
    default:
      return renderWordAnimation();
  }
};

export default TextReveal;
