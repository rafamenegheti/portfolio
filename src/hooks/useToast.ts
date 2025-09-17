"use client";

import { useState, useCallback } from "react";
import { ToastProps } from "@/components/Toast";

export interface ToastOptions {
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (options: ToastOptions) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast: ToastProps = {
        id,
        ...options,
        onClose: removeToast,
      };

      setToasts((prev) => [...prev, newToast]);
      return id;
    },
    [removeToast]
  );

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
    removeAllToasts,
  };
};
