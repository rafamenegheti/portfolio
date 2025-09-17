"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toast, { ToastProps } from "@/components/Toast";

interface ToastContainerProps {
  toasts: ToastProps[];
  onRemoveToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemoveToast,
}) => {
  return (
    <div className="fixed top-4 right-4 z-[10001] space-y-4 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div key={toast.id} layout className="pointer-events-auto">
            <Toast {...toast} onClose={onRemoveToast} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
