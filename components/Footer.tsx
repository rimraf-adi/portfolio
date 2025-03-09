"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 border-t border-gray-800 py-16" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl" style={{ color: 'var(--color-offwhite)' }}>PRANAV</h3>
            <p className="max-w-xs text-sm" style={{ color: 'var(--color-olive)' }}>
              Transforming ordinary footage into compelling visual stories that captivate audiences and drive results.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="https://instagram.com/yourusername" icon="instagram" />
              <SocialIcon href="https://twitter.com/yourusername" icon="twitter" />
              <SocialIcon href="https://youtube.com/yourusername" icon="youtube" />
              <SocialIcon href="https://linkedin.com/in/yourusername" icon="linkedin" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4" style={{ color: 'var(--color-offwhite)' }}>Quick Links</h4>
            <ul className="space-y-2" style={{ color: 'var(--color-olive)' }}>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#portfolio">Portfolio</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-medium text-lg mb-4" style={{ color: 'var(--color-offwhite)' }}>Services</h4>
            <ul className="space-y-2" style={{ color: 'var(--color-olive)' }}>
              <FooterLink href="#video-editing">Video Editing</FooterLink>
              <FooterLink href="#motion-graphics">Motion Graphics</FooterLink>
              <FooterLink href="#color-grading">Color Grading</FooterLink>
              <FooterLink href="#sound-design">Sound Design</FooterLink>
              <FooterLink href="#post-production">Post Production</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium text-lg mb-4" style={{ color: 'var(--color-offwhite)' }}>Contact</h4>
            <ul className="space-y-2" style={{ color: 'var(--color-olive)' }}>
              <li>📧 hello@yourdomain.com</li>
              <li>📱 +91 88888 88888</li>
              <li>📍 Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm" style={{ color: 'var(--color-olive)' }}>
            © {currentYear} Pranav. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8 text-sm" style={{ color: 'var(--color-olive)' }}>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for footer links
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href}
        className="hover:text-amber-400 transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

// Social media icon
function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
      style={{ 
        backgroundColor: 'rgba(174, 172, 149, 0.1)',
        color: 'var(--color-light-orange)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-light-orange)';
        e.currentTarget.style.color = '#000';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(174, 172, 149, 0.1)';
        e.currentTarget.style.color = 'var(--color-light-orange)';
      }}
    >
      <i className={`fab fa-${icon}`} aria-hidden="true"></i>
      <span className="sr-only">{icon}</span>
    </Link>
  );
} 