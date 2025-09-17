"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

export interface ToastProps {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type,
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const colors = {
    success: "from-green-500 to-emerald-600",
    error: "from-red-500 to-rose-600",
    warning: "from-yellow-500 to-orange-600",
    info: "from-blue-500 to-indigo-600",
  };

  const bgColors = {
    success:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  };

  const textColors = {
    success: "text-green-800 dark:text-green-200",
    error: "text-red-800 dark:text-red-200",
    warning: "text-yellow-800 dark:text-yellow-200",
    info: "text-blue-800 dark:text-blue-200",
  };

  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={`relative flex items-center w-full max-w-sm p-4 rounded-xl border backdrop-blur-sm shadow-lg ${bgColors[type]} ${textColors[type]}`}
    >
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors[type]} opacity-5`}
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
        className="flex-shrink-0"
      >
        <Icon className="w-5 h-5" />
      </motion.div>

      <div className="ml-3 text-sm font-medium flex-1">{message}</div>

      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colors[type]} rounded-b-xl`}
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      />
    </motion.div>
  );
};

export default Toast;
