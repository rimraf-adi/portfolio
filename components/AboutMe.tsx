"use client";

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function AboutMe() {
  return (
    <section id="about" className="py-12 sm:py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <AnimateOnScroll animation="fade-in">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-serif" style={{ color: 'var(--color-offwhite)' }}>
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--color-light-orange)' }}></div>
        </div>
      </AnimateOnScroll>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left column: Image */}
        <AnimateOnScroll animation="blur-unblur" threshold={0.2}>
          <div className="relative mx-auto lg:mx-0 hover-lift" 
            style={{ 
              maxWidth: '350px',
              width: '100%',
              filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))'
            }}
          >
            <div className="aspect-w-4 aspect-h-5 relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 to-transparent mix-blend-overlay z-10"></div>
              {/* Replace with your actual image */}
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                alt="Pranav - Video Editor"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg" 
              style={{ 
                backgroundColor: 'var(--color-light-orange)',
                opacity: '0.1',
                zIndex: '-1'
              }}
            ></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg" 
              style={{ 
                backgroundColor: 'var(--color-dark-orange)',
                opacity: '0.05',
                zIndex: '-1'
              }}
            ></div>
          </div>
        </AnimateOnScroll>
        
        {/* Right column: Content */}
        <div>
          <AnimateOnScroll animation="fade-in" delay={200}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4" style={{ color: 'var(--color-offwhite)' }}>
              Namaste, Main <span className="font-calligraphy" style={{ color: 'var(--color-light-orange)' }}>Pranav</span>
            </h3>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={400}>
            <div style={{ color: 'var(--color-olive)' }} className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p>
                Video editing aur motion graphics mein 6+ saal ka experience hai mere paas. Main normal footage ko ek zabardast visual story mein convert karta hoon jo audience ko hook karti hai aur results deliver karti hai.
              </p>
              <p>
                Mera approach technical expertise aur creative storytelling ka perfect mix hai. Main ensure karta hoon ki har project na sirf visually stunning ho, balki aapka message bhi effectively communicate kare aur audience ke saath connect kare.
              </p>
              <p>
                Maine various brands, content creators, aur agencies ke saath kaam kiya hai, aur hamesha unki expectations se zyada deliver kiya hai.
              </p>
            </div>
          </AnimateOnScroll>
          
          {/* Skills */}
          <AnimateOnScroll animation="fade-in" delay={600}>
            <div className="mt-6 sm:mt-8">
              <h4 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4" style={{ color: 'var(--color-offwhite)' }}>
                Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <SkillBar skill="Video Editing" percentage={95} />
                <SkillBar skill="Motion Graphics" percentage={90} />
                <SkillBar skill="Color Grading" percentage={85} />
                <SkillBar skill="Sound Design" percentage={80} />
                <SkillBar skill="Visual Effects" percentage={75} />
                <SkillBar skill="Cinematography" percentage={70} />
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* Software tools */}
          <AnimateOnScroll animation="fade-in" delay={800}>
            <div className="mt-6 sm:mt-10">
              <h4 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4" style={{ color: 'var(--color-offwhite)' }}>
                Tools & Software
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <SkillTag>Adobe Premiere Pro</SkillTag>
                <SkillTag>After Effects</SkillTag>
                <SkillTag>DaVinci Resolve</SkillTag>
                <SkillTag>Final Cut Pro</SkillTag>
                <SkillTag>Photoshop</SkillTag>
                <SkillTag>Illustrator</SkillTag>
                <SkillTag>Audition</SkillTag>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// Component for skill bars
function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
  return (
    <div className="mb-2 sm:mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs sm:text-sm" style={{ color: 'var(--color-offwhite)' }}>{skill}</span>
        <span className="text-xs sm:text-sm" style={{ color: 'var(--color-light-orange)' }}>{percentage}%</span>
      </div>
      <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full" 
          style={{ 
            width: `${percentage}%`,
            backgroundImage: 'linear-gradient(to right, var(--color-dark-orange), var(--color-light-orange))'
          }}
        ></div>
      </div>
    </div>
  );
}

// Component for skill tags
function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm hover-lift" 
      style={{ 
        backgroundColor: 'rgba(174, 172, 149, 0.1)',
        color: 'var(--color-offwhite)',
        border: '1px solid rgba(174, 172, 149, 0.2)'
      }}
    >
      {children}
    </div>
  );
} 