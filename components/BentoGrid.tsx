"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function BentoGrid() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <AnimateOnScroll 
        animation="blur-unblur" 
        threshold={0.1}
      >
        <div className="rounded-lg p-8 md:p-12" 
          style={{ 
            background: 'linear-gradient(145deg, rgba(40, 40, 38, 0.9), rgba(25, 25, 25, 0.8))',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(174, 172, 149, 0.1)'
          }}>
          <div className="flex flex-col items-center text-center">
            <AnimateOnScroll animation="fade-in" delay={200}>
              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-6" style={{ color: 'var(--color-offwhite)' }}>
                Ready to scale your brand to new heights?
              </h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in" delay={400}>
              <p className="text-base md:text-lg max-w-3xl mx-auto mb-10" style={{ color: 'var(--color-olive)' }}>
                If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="parallax" delay={600} parallaxSpeed="fast">
              <Link 
                href="#contact" 
                className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-serif text-base md:text-lg px-10 py-5 rounded-sm transition-colors duration-300 hover-lift"
              >
                Let's Talk
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
} 