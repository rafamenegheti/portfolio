"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Drop {
  x: number;
  y: number;
  len: number;
  speed: number;
  opacity: number;
  width: number;
}

export default function Atmosphere() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isDark) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let drops: Drop[] = [];
    let width = 0;
    let height = 0;
    let reducedMotion = false;

    const angle = (-28 * Math.PI) / 180;
    const dx = Math.sin(angle);
    const dy = Math.cos(angle);

    const createDrop = (randomY = false): Drop => ({
      x: Math.random() * width * 1.2 - width * 0.1,
      y: randomY ? Math.random() * height : -Math.random() * 80,
      len: 10 + Math.random() * 18,
      speed: 2.2 + Math.random() * 3.8,
      opacity: 0.12 + Math.random() * 0.35,
      width: 0.6 + Math.random() * 0.9,
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.floor((width * height) / 9000), 160);
      drops = Array.from({ length: count }, () => createDrop(true));
    };

    const draw = () => {
      if (reducedMotion) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        drop.x += dx * drop.speed;
        drop.y += dy * drop.speed;

        if (drop.y > height + 40 || drop.x < -60 || drop.x > width + 60) {
          drops[i] = createDrop(false);
          continue;
        }

        ctx.beginPath();
        ctx.strokeStyle = `rgba(230, 220, 255, ${drop.opacity})`;
        ctx.lineWidth = drop.width;
        ctx.lineCap = "round";
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + dx * drop.len, drop.y + dy * drop.len);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      reducedMotion = media.matches;
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, width, height);
      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    onMotionChange();
    window.addEventListener("resize", resize);
    media.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      media.removeEventListener("change", onMotionChange);
    };
  }, [isDark]);

  return (
    <>
      {/* Rainy night */}
      <div
        className={`cafe-bg pointer-events-none fixed inset-0 -z-10 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`cafe-grid pointer-events-none fixed inset-0 -z-10 ${
          isDark ? "opacity-60" : "opacity-0"
        }`}
      />

      {/* Sunny day */}
      <div
        className={`sunny-bg pointer-events-none fixed inset-0 -z-10 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`sunny-grid pointer-events-none fixed inset-0 -z-10 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />

      {!isDark && (
        <div className="pointer-events-none fixed inset-0 -z-[9] overflow-hidden">
          {/* Sun */}
          <div className="absolute -right-16 -top-16 sm:right-8 sm:top-10">
            <div className="sun-rays relative h-64 w-64 sm:h-80 sm:w-80">
              <div
                className="absolute inset-0 rounded-full opacity-40"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(255,220,100,0.35) 8deg, transparent 16deg, transparent 40deg, rgba(255,220,100,0.25) 48deg, transparent 56deg, transparent 80deg, rgba(255,220,100,0.3) 88deg, transparent 96deg, transparent 120deg, rgba(255,220,100,0.25) 128deg, transparent 136deg, transparent 160deg, rgba(255,220,100,0.3) 168deg, transparent 176deg, transparent 200deg, rgba(255,220,100,0.25) 208deg, transparent 216deg, transparent 240deg, rgba(255,220,100,0.3) 248deg, transparent 256deg, transparent 280deg, rgba(255,220,100,0.25) 288deg, transparent 296deg, transparent 320deg, rgba(255,220,100,0.3) 328deg, transparent 336deg, transparent 360deg)",
                }}
              />
              <div
                className="sun-core absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-36 sm:w-36"
                style={{
                  background:
                    "radial-gradient(circle, #fff7d1 0%, #ffd56a 45%, #ffb020 100%)",
                  boxShadow:
                    "0 0 60px 20px rgba(255, 200, 80, 0.55), 0 0 120px 40px rgba(255, 180, 40, 0.35), 0 0 200px 80px rgba(255, 160, 20, 0.2)",
                }}
              />
            </div>
          </div>

          {/* Soft clouds */}
          <div
            className="cloud absolute left-[8%] top-[18%] h-16 w-40 rounded-full bg-white/50 blur-xl sm:h-20 sm:w-56"
            style={{ boxShadow: "30px 10px 0 8px rgba(255,255,255,0.35)" }}
          />
          <div
            className="cloud-delay absolute right-[22%] top-[28%] h-12 w-32 rounded-full bg-white/40 blur-xl sm:h-16 sm:w-44"
            style={{ boxShadow: "24px 8px 0 6px rgba(255,255,255,0.3)" }}
          />
          <div
            className="cloud absolute bottom-[22%] left-[18%] h-14 w-48 rounded-full bg-white/35 blur-2xl"
          />
        </div>
      )}

      {isDark && (
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[1]"
        />
      )}
    </>
  );
}
