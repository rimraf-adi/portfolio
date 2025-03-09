"use client";
import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I upload videos to the platform?",
    answer: "You can upload videos through our user-friendly interface. Simply navigate to the Videos section, click the 'Upload' button, select your video file, add relevant details like title and description, and submit."
  },
  {
    question: "What video formats are supported?",
    answer: "Our platform supports most common video formats including MP4, MOV, AVI, and WebM. For optimal performance, we recommend using MP4 with H.264 encoding."
  },
  {
    question: "Can I customize how my videos appear?",
    answer: "Yes! You can customize thumbnails, add captions, set visibility options, and organize videos into collections or playlists to enhance viewer experience."
  },
  {
    question: "How do I share my videos with clients?",
    answer: "You can share videos by copying the direct link, using the share buttons for social media, or embedding videos on your website using our embed code generator."
  },
  {
    question: "Is there a limit to how many videos I can upload?",
    answer: "Account limits vary by subscription tier. Free accounts have basic storage limits, while premium accounts offer expanded storage and additional features."
  }
];

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 border-opacity-30 hover-lift">
      <button
        className="flex justify-between items-center w-full py-5 px-3 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium" style={{ color: 'var(--color-offwhite)' }}>
          {item.question}
        </span>
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none" 
          stroke="var(--color-light-orange)" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-3 text-sm" style={{ color: 'var(--color-olive)' }}>
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <AnimateOnScroll animation="fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: 'var(--color-offwhite)' }}>
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-olive)' }}>
            Find answers to common questions about our video platform and services.
          </p>
        </div>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="blur-unblur" threshold={0.1}>
        <div className="rounded-lg p-6 md:p-8" 
          style={{ 
            background: 'linear-gradient(145deg, rgba(30, 30, 29, 0.9), rgba(17, 17, 17, 0.8))',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(174, 172, 149, 0.1)'
          }}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} />
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
} 