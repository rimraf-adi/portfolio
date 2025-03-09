"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const videoData = [
  {
    id: 1,
    title: "Project with Brand A",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&q=80",
    description: "Increased conversion by 45%"
  },
  {
    id: 2,
    title: "Campaign for Brand B",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&q=80",
    description: "Generated 2.3M views"
  },
  {
    id: 3,
    title: "Product Launch for Brand C",
    thumbnail: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?w=800&h=450&q=80",
    description: "200% ROI in first month"
  },
  {
    id: 4,
    title: "Brand Awareness Campaign",
    thumbnail: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&h=450&q=80",
    description: "Increased social engagement by 78%"
  },
  {
    id: 5,
    title: "Social Media Strategy",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&q=80",
    description: "Doubled follower growth in 3 months"
  },
  {
    id: 6,
    title: "E-commerce Redesign",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&q=80",
    description: "Increased sales by 67%"
  },
  {
    id: 7,
    title: "Influencer Marketing",
    thumbnail: "https://images.unsplash.com/photo-1533422902779-aff35862e462?w=800&h=450&q=80",
    description: "5.2M impressions in first week"
  },
  {
    id: 8,
    title: "Brand Identity Refresh",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&q=80",
    description: "Increased brand recognition by 35%"
  }
];

export default function Videos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  return (
    <section 
      className="py-16 px-4 md:px-8 lg:px-16 relative"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-5xl font-serif mb-4" 
               style={{ color: 'var(--color-offwhite)' }}>
            Results speak for <span className="font-calligraphy">themselves</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto"
             style={{ color: 'var(--color-offwhite)' }}>
            We've worked across a number of industries and have achieved some incredible results 
            with some incredible people and brands.
          </p>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.18)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="var(--color-offwhite)">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.18)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="var(--color-offwhite)">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 hide-scrollbar"
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6">
              {videoData.map((video) => (
                <div 
                  key={video.id} 
                  className="group relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.18)'
                  }}
                >
                  <div className="aspect-video relative w-full">
                    <Image 
                      src={video.thumbnail} 
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--color-dark-orange)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="var(--color-offwhite)">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-b-2xl" style={{ 
                    background: 'linear-gradient(to bottom, rgba(30,30,30,0.7), rgba(20,20,20,0.9))',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <h3 className="font-serif font-bold text-lg" 
                        style={{ color: 'var(--color-offwhite)' }}>{video.title}</h3>
                    <p className="mt-1" 
                      style={{ color: 'var(--color-olive)' }}>{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(videoData.length / 4) }).map((_, index) => (
            <button 
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const scrollAmount = container.scrollWidth / Math.ceil(videoData.length / 4) * index;
                  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                }
              }}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                border: '1px solid rgba(255,255,255,0.18)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS
// .hide-scrollbar::-webkit-scrollbar {
//   display: none;
// } 