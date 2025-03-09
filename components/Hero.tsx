"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 3) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative pt-8 pb-24 px-4 md:px-8 lg:px-16 text-white flex justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div 
          className={`absolute top-20 right-20 w-64 h-64 rounded-full transition-all duration-1000 ease-out ${
            currentStep >= 0 ? 'opacity-20 blur-0 scale-100' : 'opacity-0 blur-lg scale-95'
          }`}
          style={{ 
            background: 'radial-gradient(circle, var(--color-light-orange) 0%, transparent 70%)',
          }}
        />
        <div 
          className={`absolute bottom-40 left-20 w-80 h-80 rounded-full transition-all duration-1000 ease-out ${
            currentStep >= 0 ? 'opacity-15 blur-0 scale-100' : 'opacity-0 blur-lg scale-95'
          }`}
          style={{ 
            background: 'radial-gradient(circle, var(--color-dark-orange) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main heading and subheading spawn together */}
        <div className="overflow-hidden mb-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight relative">
            {["Transform", "your", "vision", "into", "captivating"].map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-[1200ms] ease-out px-1 ${
                  currentStep >= 1 
                    ? 'opacity-100 blur-0 scale-100' 
                    : 'opacity-0 blur-lg scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {word}
              </span>
            ))}
            <br />
            {["visuals", "that", "tell"].map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-[1200ms] ease-out px-1 ${
                  currentStep >= 1 
                    ? 'opacity-100 blur-0 scale-100' 
                    : 'opacity-0 blur-lg scale-95'
                }`}
                style={{
                  transitionDelay: `${(index + 5) * 100}ms`
                }}
              >
                {word}
              </span>
            ))}
            <span 
              className={`font-calligraphy text-amber-400 inline-block px-2 transition-all duration-[1200ms] ${
                currentStep >= 1 
                  ? 'opacity-100 blur-0 scale-100' 
                  : 'opacity-0 blur-lg scale-90'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              unforgettable
              <svg 
                className="absolute -bottom-2 left-0 w-full h-1" 
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: currentStep >= 1 ? 0 : 1000,
                  transition: 'stroke-dashoffset 1.5s ease-out',
                  transitionDelay: '1000ms'
                }}
              >
                <line 
                  x1="0" 
                  y1="0" 
                  x2="100%" 
                  y2="0" 
                  stroke="var(--color-light-orange)" 
                  strokeWidth="2"
                />
              </svg>
            </span>
            {["stories."].map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-[1200ms] ease-out px-1 ${
                  currentStep >= 1 
                    ? 'opacity-100 blur-0 scale-100' 
                    : 'opacity-0 blur-lg scale-95'
                }`}
                style={{
                  transitionDelay: '900ms'
                }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
        
        {/* Subheading spawns with main heading */}
        <div className="overflow-hidden mb-16">
          <h2 
            className={`w-full font-serif text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-[1200ms] ease-out ${
              currentStep >= 1 
                ? 'opacity-100 blur-0 scale-100' 
                : 'opacity-0 blur-lg scale-95'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            Transforming ordinary footage into compelling visual stories that captivate audiences and drive results.
          </h2>
        </div>
        
        {/* CTA Button with spawn effect */}
        <div 
          className={`mt-12 transition-all duration-[1200ms] ease-out ${
            currentStep >= 2 
              ? 'opacity-100 blur-0 scale-100' 
              : 'opacity-0 blur-lg scale-90'
          }`}
        >
          <a 
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="inline-block relative overflow-hidden group bg-amber-500 hover:bg-amber-600 text-black font-serif text-lg px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Let's Talk</span>
            <div 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            />
          </a>
        </div>
      </div>

      {/* Decorative elements with spawn effect */}
      <div 
        className={`absolute -bottom-5 right-1/4 w-20 h-20 transition-all duration-1000 ease-out ${
          currentStep >= 3 ? 'opacity-20 blur-0 scale-100' : 'opacity-0 blur-lg scale-90'
        }`}
        style={{ 
          animation: currentStep >= 3 ? 'float 6s ease-in-out infinite' : 'none',
          transitionDelay: '400ms'
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-amber-400" />
      </div>
      <div 
        className={`absolute top-20 left-1/4 w-10 h-10 transition-all duration-1000 ease-out ${
          currentStep >= 3 ? 'opacity-20 blur-0 scale-100' : 'opacity-0 blur-lg scale-90'
        }`}
        style={{ 
          animation: currentStep >= 3 ? 'float 8s ease-in-out infinite' : 'none',
          transitionDelay: '200ms'
        }}
      >
        <div className="w-full h-full rounded-full bg-amber-400" />
      </div>
    </section>
  );
} 