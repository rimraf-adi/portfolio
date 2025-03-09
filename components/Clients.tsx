"use client"
import React, { useState } from 'react';
const Clients = () => {
  // Random Unsplash images for client avatars
  const clientImages = [
    'https://images.unsplash.com/photo-1512849934327-1cf5bf8a5ccc?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1578774296842-c45e472b3028?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isComponentHovered, setIsComponentHovered] = useState(false);
  
  return (
    <div 
    className="w-full text-white p-4 rounded-lg flex items-center justify-center  transition-all duration-300"
      onMouseEnter={() => setIsComponentHovered(true)}
      onMouseLeave={() => {
        setIsComponentHovered(false);
        setHoveredIndex(null);
      }}
      style={{ transform: isComponentHovered ? 'scale(1.05)' : 'scale(1)' , backgroundColor: 'var(--color-background)'}}
    >
      {/* Client images with individual hover effects */}
      <div className="flex -space-x-1 relative mr-4">
        {clientImages.map((src, index) => (
          <div 
            key={index} 
            className={`w-10 h-10 rounded-full border-2 border-black overflow-hidden transition-all duration-300`}
            style={{ 
              zIndex: hoveredIndex === index ? 10 : clientImages.length - index,
              transform: hoveredIndex === index ? 'scale(1.5) translateY(-10px)' : 'scale(1)',
              marginLeft: index > 0 ? '-8px' : '0',
              position: 'relative'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img 
              src={src} 
              alt={`Client ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Rating and text */}
      <div className="flex flex-col">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-5 h-5 fill-current ${isComponentHovered ? 'text-yellow-400' : 'text-white'} transition-colors duration-300`} 
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
          ))}
        </div>
        <p className="font-semibold">
          115+ happy clients
        </p>
      </div>
    </div>
  );
};

export default Clients;