"use client";

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <AnimateOnScroll animation="fade-in">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: 'var(--color-offwhite)' }}>
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--color-light-orange)' }}></div>
        </div>
      </AnimateOnScroll>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Image */}
        <AnimateOnScroll animation="blur-unblur" threshold={0.2}>
          <div className="relative mx-auto lg:mx-0 hover-lift" 
            style={{ 
              maxWidth: '450px',
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
            <h3 className="text-2xl md:text-3xl font-serif mb-4" style={{ color: 'var(--color-offwhite)' }}>
              Hi, I'm <span className="font-calligraphy" style={{ color: 'var(--color-light-orange)' }}>Pranav</span>
            </h3>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={400}>
            <div style={{ color: 'var(--color-olive)' }} className="space-y-4">
              <p>
                With over 6 years of experience in video editing and motion graphics, I transform ordinary footage into compelling visual stories that captivate audiences and drive results.
              </p>
              <p>
                My approach combines technical expertise with creative storytelling, ensuring each project not only looks polished but also effectively communicates your message and connects with your audience.
              </p>
              <p>
                I've collaborated with brands, content creators, and agencies to create videos that not only meet but exceed their performance goals.
              </p>
            </div>
          </AnimateOnScroll>
          
          {/* Skills */}
          <AnimateOnScroll animation="fade-in" delay={600}>
            <div className="mt-8">
              <h4 className="text-xl font-serif mb-4" style={{ color: 'var(--color-offwhite)' }}>
                Expertise
              </h4>
              <div className="grid grid-cols-2 gap-4">
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
            <div className="mt-10">
              <h4 className="text-xl font-serif mb-4" style={{ color: 'var(--color-offwhite)' }}>
                Tools & Software
              </h4>
              <div className="flex flex-wrap gap-3">
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
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm" style={{ color: 'var(--color-offwhite)' }}>{skill}</span>
        <span className="text-sm" style={{ color: 'var(--color-light-orange)' }}>{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
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
      className="px-4 py-2 rounded-full text-sm hover-lift" 
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