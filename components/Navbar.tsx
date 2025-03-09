"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);

  // Handle scroll event to show/hide Contact link
  useEffect(() => {
    // Check scroll position immediately on mount
    const checkScroll = () => {
      const scrolled = window.scrollY > 200;
      setShowContact(scrolled);
    };

    // Initial check
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", checkScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Standard navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#videos" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  // Contact link (separate so we can apply special styling)
  const contactLink = { name: "Contact", href: "#contact" };

  return (
    <div className="mt-6 mb-6 sticky top-0 z-40">
      <nav className="w-full max-w-md mx-auto rounded-full flex items-center justify-center py-3 px-6"
        style={{
          backgroundColor: 'var(--color-light-black)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
        
        {/* Navigation Links */}
        <div className="flex space-x-8 justify-center items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-amber-400 transition-colors duration-300 text-sm md:text-base"
              style={{ color: 'var(--color-olive)' }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Contact link - only visible when scrolled */}
          {showContact && (
            <Link 
              href={contactLink.href}
              className="hover:opacity-90 transition-all duration-300 text-sm md:text-base px-4 py-1 rounded-full"
              style={{ 
                backgroundColor: 'var(--color-light-orange)',
                color: '#000'
              }}
            >
              {contactLink.name}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 