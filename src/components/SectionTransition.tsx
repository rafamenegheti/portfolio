"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  effect?: "fade" | "slide" | "scale" | "pin" | "parallax";
  direction?: "up" | "down" | "left" | "right";
  pinDuration?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = "",
  effect = "fade",
  direction = "up",
  pinDuration = 0,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const directions = {
      up: { y: 100, x: 0 },
      down: { y: -100, x: 0 },
      left: { x: 100, y: 0 },
      right: { x: -100, y: 0 },
    };

    const from = directions[direction];
    let scrollTrigger: ScrollTrigger | null = null;

    if (effect === "pin" && pinDuration > 0) {
      scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${pinDuration}`,
        pin: true,
        pinSpacing: true,
      });
    } else if (effect === "parallax") {
      scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        animation: gsap.to(section, {
          yPercent: -50,
          ease: "none",
        }),
      });
    } else {
      // Ensure section starts in natural position
      gsap.set(section, { clearProps: "all" });

      // Use fromTo with immediateRender: false to prevent layout shifts
      const animation = gsap.fromTo(
        section,
        {
          opacity: effect === "fade" ? 0 : 1,
          ...(effect === "slide" ? from : {}),
          ...(effect === "scale" ? { scale: 0.8 } : {}),
          immediateRender: false, // Don't apply initial state until triggered
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false, // Set to true for debugging
          },
        }
      );

      scrollTrigger = animation.scrollTrigger || null;
    }

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      // Reset transforms to prevent layout issues
      gsap.set(section, { clearProps: "all" });
    };
  }, [effect, direction, pinDuration]);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
};

export default SectionTransition;
