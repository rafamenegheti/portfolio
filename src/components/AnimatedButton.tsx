"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  type?: "button" | "submit";
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  icon,
  type = "button",
}) => {
  const baseClasses =
    "relative overflow-hidden font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 magnetic cursor-hover";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{ opacity: disabled ? 0 : 0.1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -translate-x-full"
        whileHover={{ translateX: "200%", opacity: disabled ? 0 : 0.2 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {icon && (
        <motion.span
          whileHover={{ rotate: disabled ? 0 : 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.span>
      )}

      <motion.span
        whileHover={{ y: disabled ? 0 : -1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 scale-x-0 origin-left"
        whileHover={{ scaleX: disabled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;
