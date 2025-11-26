"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const obj = { count: 0 };

    gsap.to(obj, {
      count: value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      onUpdate: () => {
        if (counter) {
          counter.textContent = prefix + Math.round(obj.count) + suffix;
        }
      },
    });
  }, [value, suffix, prefix, duration]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default AnimatedCounter;
