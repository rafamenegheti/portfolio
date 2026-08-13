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
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-xl font-mono tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[var(--btn-solid-bg)] text-[var(--btn-solid-fg)] hover:opacity-90",
    secondary:
      "border border-[var(--border)] bg-[var(--surface)] text-fg hover:opacity-90",
    outline: "btn-outline",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-sm",
  };

  return (
    <motion.button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
