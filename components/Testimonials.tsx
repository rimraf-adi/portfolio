"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    testimonial: "Working with this team has transformed our business operations. Their innovative solutions helped us increase efficiency by 40% within just three months.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Brands",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    testimonial: "The level of creativity and attention to detail exceeded our expectations. Our campaign engagement metrics improved dramatically after implementing their strategies.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "CTO",
    company: "Innovate Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    testimonial: "Their technical expertise is unmatched. They delivered a complex system on time and under budget, with excellent documentation and support throughout the process.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Operations Manager",
    company: "Streamline Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    testimonial: "The team's ability to understand our unique challenges and develop customized solutions has been invaluable to our growth. Highly recommended!",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "NextGen Products",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    testimonial: "From concept to execution, they guided us through every step with professionalism and insight. Our product launch was a tremendous success thanks to their contributions.",
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>([]);
  
  useEffect(() => {
    // Create an infinite loop of testimonials by duplicating the array
    setDisplayedTestimonials([...testimonials, ...testimonials, ...testimonials]);
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Infinite scroll logic
      if (scrollLeft > (scrollWidth - clientWidth) * 0.75) {
        // When we're 75% through the scroll, append more testimonials
        setDisplayedTestimonials(prev => [...prev, ...testimonials]);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      
      // Auto-scroll animation
      const autoScroll = setInterval(() => {
        if (scrollContainer && !scrollContainer.matches(':hover')) {
          scrollContainer.scrollBy({
            left: 1,
            behavior: 'smooth'
          });
        }
      }, 50);
      
      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
        clearInterval(autoScroll);
      };
    }
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-[90vw] mx-auto" style={{color: 'var(--foreground)'}}>
      <div>
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{color: 'var(--foreground)'}}>
          Hear it directly from our clients.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{color: 'var(--foreground)'}}>
          Hear what our clients have to say. Our testimonials reflect the satisfaction our clients have in our services.
        </p> */}
      </div>

      <div className="relative overflow-visible">
        {/* Left dripping shadow */}
        <div className="absolute -left-16 top-0 bottom-0 w-16 z-[-1]" style={{
          background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.4))',
          boxShadow: '-10px 0 20px rgba(0,0,0,0.3)',
        }}></div>
        
        {/* Right dripping shadow */}
        <div className="absolute -right-16 top-0 bottom-0 w-16 z-[-1]" style={{
          background: 'linear-gradient(to left, transparent, rgba(0,0,0,0.4))',
          boxShadow: '10px 0 20px rgba(0,0,0,0.3)',
        }}></div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar"
          onScroll={checkScrollPosition}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-full md:w-[500px] rounded-xl shadow-lg p-6 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(30, 30, 29, 0.95) 0%, rgba(30, 30, 29, 0.85) 50%, rgba(30, 30, 29, 0.9) 100%)`,
                borderColor: 'var(--olive)',
                color: 'var(--offwhite)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(174, 172, 149, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Glossy highlight effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent"></div>
              <div className="absolute -top-[150px] -left-[50px] w-[200px] h-[300px] rounded-full opacity-[0.07] rotate-[25deg]" style={{
                background: 'linear-gradient(rgba(255, 255, 255, 0.3), transparent)',
                filter: 'blur(5px)',
                pointerEvents: 'none'
              }}></div>
              
              <div className="flex items-center mb-4 relative z-10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4" style={{
                  boxShadow: '0 0 0 2px rgba(174, 172, 149, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)'
                }}>
                  <Image
                    src={`${testimonial.image}?auto=format&fit=crop&w=150&h=150&q=80`}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{color: 'var(--offwhite)'}}>{testimonial.name}</h3>
                  <p className="text-sm text-opacity-80" style={{color: 'var(--light-orange)'}}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="italic relative z-10" style={{color: 'var(--offwhite)', opacity: 0.9}}>&ldquo;{testimonial.testimonial}&rdquo;</p>
              
              {/* Bottom edge highlight */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 