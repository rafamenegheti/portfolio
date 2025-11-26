"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTimelineProps {
  children: ReactNode;
  className?: string;
  items: Array<{
    id: string;
    content: ReactNode;
    trigger?: string;
  }>;
}

const ScrollTimeline: React.FC<ScrollTimelineProps> = ({
  children,
  className = "",
  items,
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timeline,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    items.forEach((item, index) => {
      const element = timeline.querySelector(`[data-item="${item.id}"]`);
      if (element) {
        if (index === 0) {
          tl.fromTo(
            element,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1 }
          );
        } else {
          tl.to(element, { opacity: 1, scale: 1, duration: 1 }, "-=0.5").to(
            element,
            { opacity: 0, scale: 0.8, duration: 0.5 },
            "+=0.5"
          );
        }
      }
    });
  }, [items]);

  return (
    <div ref={timelineRef} className={className}>
      {children}
      {items.map((item) => (
        <div key={item.id} data-item={item.id} className="opacity-0">
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default ScrollTimeline;
