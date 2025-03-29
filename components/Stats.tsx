'use client'

import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  number: number;
  label: string;
  duration?: number; // Animation duration in ms
  delay?: number;    // Optional delay before starting animation
  className?: string; // Add support for className prop
  startAnimation: boolean; // Flag to control when animation starts
}

const StatItem = ({ number, label, duration = 2000, delay = 0, className = '', startAnimation }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<NodeJS.Timeout | null>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    // Only start animation when startAnimation is true and hasn't run before
    if (startAnimation && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now() + delay;
      const intervalTime = 50; // Update every 50ms for smooth animation
      
      // Clear any existing interval
      if (countRef.current) clearInterval(countRef.current);
      
      countRef.current = setInterval(() => {
        const now = Date.now();
        if (now < startTime) return; // Wait for delay
        
        const elapsedTime = now - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Ease-out function to make the count slow down as it approaches the target
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easedProgress * number);
        
        setCount(currentCount);
        
        if (progress >= 1) {
          clearInterval(countRef.current!);
        }
      }, intervalTime);
    }
    
    return () => {
      if (countRef.current) clearInterval(countRef.current);
    };
  }, [number, duration, delay, startAnimation]);
  
  return (
    <div className={`flex flex-col items-center p-4 sm:p-6 fade-in ${className}`}>
      <h3 className="text-4xl sm:text-5xl font-bold mb-2 text-light-orange">{count}</h3>
      <p className="text-base sm:text-lg text-center">{label}</p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the section becomes visible in the viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once we've seen it, no need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        // Start animation when section is 20% visible
        threshold: 0.2,
        // Optionally add rootMargin for earlier/later trigger
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-10 sm:py-16 px-4 bg- text-offwhite" 
      style={{backgroundColor: 'var(--color-background)'}}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <StatItem number={150} label="Clients Served" delay={0} className="fade-in-1" startAnimation={isVisible} />
          <StatItem number={98} label="Satisfaction Rate %" delay={200} className="fade-in-2" startAnimation={isVisible} />
          <StatItem number={25} label="Years Experience" delay={400} className="fade-in-3" startAnimation={isVisible} />
          <StatItem number={500} label="Projects Completed" delay={600} className="fade-in-4" startAnimation={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Stats; 