"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation: "fade-in" | "blur-unblur" | "parallax";
  delay?: number;
  threshold?: number;
  parallaxSpeed?: "slow" | "medium" | "fast";
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation,
  delay = 0,
  threshold = 0.2,
  parallaxSpeed = "medium",
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          // Delay the animation if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Unobserve after animation is triggered
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  // Apply the appropriate classes based on the animation type
  const getAnimationClasses = () => {
    if (animation === "fade-in") {
      return `fade-in ${isVisible ? "" : "opacity-0"}`;
    } else if (animation === "blur-unblur") {
      return `blur-element ${isVisible ? "unblur-element" : ""}`;
    } else if (animation === "parallax") {
      return `${parallaxSpeed === "slow" ? "parallax-slow" : parallaxSpeed === "fast" ? "parallax-fast" : "parallax-medium"} ${isVisible ? "transform-none" : "translate-y-16"}`;
    }
    return "";
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
} 