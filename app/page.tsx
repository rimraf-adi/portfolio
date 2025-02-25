"use client";

import React, { useEffect, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Navbar } from "@/components/ui/floating-navbar";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { IconEdit, IconPalette, IconVideo, IconWand, IconMail, IconBrandInstagram, IconBolt, IconBrain, IconCloud, IconDeviceLaptop, IconBrandAdobePhotoshop, IconBrandBlender, IconVolume, IconClock, IconRefresh, IconFileExport, IconUserPlus, IconWorld, IconCreditCard } from "@tabler/icons-react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Globe, World } from "@/components/ui/globe";

interface SkillItem {
  title: string;
  description: string;
  header: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left bg-neutral-900 hover:bg-neutral-800 transition-colors"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-neutral-900/50 text-neutral-300">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Work", link: "#work" },
    { name: "Skills", link: "#skills" },
    { name: "About", link: "#about" },
    { name: "FAQ", link: "#faq" },
  ];

  const [showTalkButton, setShowTalkButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 100) {
          setShowTalkButton(true);
        } else {
          setShowTalkButton(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const movingCards = [
    {
      quote: "The best video editor I've worked with. Incredible attention to detail and creativity.",
      name: "James Wilson",
      title: "Film Director",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      quote: "Transformed our raw footage into a cinematic masterpiece. Truly exceptional work.",
      name: "Lisa Thompson",
      title: "Production Manager",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      quote: "Professional, creative, and always delivers beyond expectations.",
      name: "David Chen",
      title: "Creative Director",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const portfolioItems = [
    {
      src: "https://images.unsplash.com/photo-1536240478700-b86907e534b4",
      title: "Cinematic Wedding Film",
      category: "Wedding",
      content: "Emotional storytelling through cinematic wedding videography"
    },
    {
      src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
      title: "Brand Commercial",
      category: "Commercial",
      content: "High-end commercial production for luxury brands"
    },
    {
      src: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67",
      title: "Music Video",
      category: "Music",
      content: "Creative music video direction and editing"
    },
    {
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
      title: "Documentary",
      category: "Film",
      content: "Compelling documentary storytelling"
    },
    {
      src: "https://images.unsplash.com/photo-1579187707643-35646d22b596",
      title: "Corporate Event",
      category: "Corporate",
      content: "Professional event coverage and highlight reels"
    }
  ];

  const skillItems: SkillItem[] = [
    {
      title: "Adobe Creative Suite",
      description: "Premiere Pro • AfterEffects • Photoshop • Audition",
      header: (
        <div className="relative flex flex-col items-center justify-center h-60 rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop"
              alt="Video editing workspace"
              className="object-cover w-full h-full opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/20" />
          </div>
          <div className="relative z-10 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <IconBrandAdobePhotoshop className="w-12 h-12 text-white" />
          </div>
        </div>
      ),
      className: "md:col-span-1"
    },
    {
      title: "DaVinci Resolve",
      description: "Professional color grading and HDR workflows",
      header: (
        <div className="relative flex items-center justify-center h-32 rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1533061502134-62cc6590cc35?q=80&w=2070&auto=format&fit=crop"
              alt="Color grading setup"
              className="object-cover w-full h-full opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/20" />
          </div>
          <div className="relative z-10" />
        </div>
      ),
      icon: <IconPalette className="w-6 h-6 text-orange-500" />,
      className: "md:col-span-2"
    },
    {
      title: "Audio Production",
      description: "Pro Tools • Sound Design • Music Mixing • Foley",
      header: (
        <div className="relative flex items-center justify-center h-32 rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop"
              alt="Audio production studio"
              className="object-cover w-full h-full opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/20" />
          </div>
          <div className="relative z-10" />
        </div>
      ),
      icon: <IconVolume className="w-6 h-6 text-indigo-400" />,
      className: "md:col-span-2"
    },
    {
      title: "Video Production",
      description: "Camera Operation • Lighting • Sound Design",
      header: (
        <div className="relative flex items-center justify-center h-32 rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579187707643-35646d22b596?q=80&w=2070&auto=format&fit=crop"
              alt="Video production setup"
              className="object-cover w-full h-full opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/20" />
          </div>
          <div className="relative z-10" />
        </div>
      ),
      icon: <IconVideo className="w-6 h-6 text-emerald-400" />,
      className: "md:col-span-1"
    }
  ];

  const SafeMotionButton: React.FC<HTMLMotionProps<"button">> = (props) => {
    return (
      <motion.button
        {...props}
        onError={(error) => {
          console.error("Motion animation error:", error);
        }}
      />
    );
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar navItems={navItems} />
      
      {/* Hero Section */}
      <div id="home" className="h-screen flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Crafting Visual Stories<br />Frame by Frame
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            Professional video editor specializing in cinematic storytelling, 
            motion graphics, and color grading.
          </p>
          <button
            className="mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
          >
            Let's Talk 👋
          </button>
        </div>
      </div>

      {/* Portfolio Section */}
      <section id="work" className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Featured Work
        </h2>
        <Carousel
          items={portfolioItems.map((item, index) => (
            <Card key={index} card={item} index={index} layout={true} />
          ))}
        />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Technical Expertise
        </h2>
        <BentoGrid className="mx-auto max-w-7xl">
          {skillItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Client Testimonials
        </h2>
        <InfiniteMovingCards 
          items={movingCards} 
          direction="left" 
          speed="normal" 
          pauseOnHover={true} 
          className="mx-auto"
        />
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          <TracingBeam className="px-4">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67"
                    alt="Video Editor at Work"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/20">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                        alt="Pranav Jadhav"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Pranav Jadhav</h3>
                      <p className="text-sm text-neutral-300">Video Editor & Motion Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">My Journey</h4>
                  <p className="text-neutral-300 leading-relaxed">
                    As a passionate video editor and motion designer, I have dedicated my career to the art of storytelling through visuals. 
                    With over 5 years of experience, I have had the privilege of collaborating with diverse clients, each project allowing me to 
                    explore new creative horizons. My journey has been fueled by a deep love for the craft, and I believe that every frame has the 
                    power to evoke emotions and convey messages that resonate with audiences. I strive to create compelling narratives that not 
                    only entertain but also inspire and connect people. My work is a reflection of my commitment to excellence and my desire to 
                    push the boundaries of creativity. I am grateful for the opportunities I have had and look forward to continuing this journey, 
                    crafting visual stories that leave a lasting impact.
                  </p>
                </div>

                {/* Let's Talk Button */}
                {/* {showTalkButton && (
                  <div className="text-center">
                    <a
                      href="#contact"
                      className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition duration-300"
                    >
                      👋 Talk
                    </a>
                  </div>
                )} */}

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">5+</div>
                    <div className="text-sm text-neutral-400">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-sm text-neutral-400">Projects Completed</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Experience Highlights</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center gap-2">
                      <IconBolt className="w-4 h-4 text-yellow-400" />
                      Completed 100+ successful projects
                    </li>
                    <li className="flex items-center gap-2">
                      <IconBrain className="w-4 h-4 text-blue-400" />
                      Expertise in industry-standard software
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCloud className="w-4 h-4 text-sky-400" />
                      Modern cloud-based workflow
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* FAQ & Global Reach Section */}
      <section id="faq" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Side - FAQs and Bento */}
            <div className="flex flex-col space-y-10">
              {/* FAQs */}
              <div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/50 h-[340px]">
                <h3 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <FaqItem 
                    question="What is your typical turnaround time?"
                    answer="For standard projects, I typically deliver within 5-7 business days. For more complex projects, timelines will be discussed during our initial consultation."
                  />
                  
                  <FaqItem 
                    question="Do you provide revisions?"
                    answer="Yes, all projects include two rounds of revisions. Additional revision rounds can be arranged at an hourly rate."
                  />
                  
                  <FaqItem 
                    question="What formats do you deliver in?"
                    answer="I deliver in all standard formats including MP4, MOV, and ProRes. If you need a specific format or codec, just let me know."
                  />
                  
                
                </div>
              </div>
              
              {/* Mini Bento Grid */}
              <div className="grid grid-cols-2 gap-6 h-[230px]">
                <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col">
                  <div className="mb-4">
                    <IconClock className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Workflow</h3>
                  <p className="text-neutral-300 text-sm">
                    Efficient process from concept to delivery. Every project follows a structured approach.
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Optimized</span>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col">
                  <div className="mb-4">
                    <IconDeviceLaptop className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Collaboration</h3>
                  <p className="text-neutral-300 text-sm">
                    Seamless remote work with clients globally using industry-leading tools.
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Efficient</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Globe Visualization */}
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50 h-[600px]">
              <div className="h-[450px] relative">
                <World 
                  globeConfig={{
                    globeColor: "#0f172a",
                    ambientLight: "#ffffff",
                    directionalLeftLight: "#ffffff",
                    directionalTopLight: "#ffffff",
                    pointLight: "#ffffff",
                    atmosphereColor: "#ffffff",
                    showAtmosphere: true,
                    atmosphereAltitude: 0.15,
                    polygonColor: "rgba(255,255,255,0.7)",
                    autoRotate: true,
                    autoRotateSpeed: 0.5,
                  }}
                  data={[
                    { order: 1, startLat: 40.7128, startLng: -74.0060, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.3, color: "#4f46e5" },
                    { order: 2, startLat: 51.5074, startLng: -0.1278, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.2, color: "#8b5cf6" },
                    { order: 3, startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.5, color: "#ec4899" },
                    { order: 4, startLat: 19.0760, startLng: 72.8777, endLat: 28.6139, endLng: 77.2090, arcAlt: 0.2, color: "#4f46e5" },
                    { order: 5, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.4, color: "#8b5cf6" },
                    { order: 6, startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: "#ff6347" },
                    { order: 7, startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.4, color: "#4682b4" },
                  ]}
                />
              </div>
              
              {/* Global Reach Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Working With Clients Worldwide</h3>
                <p className="text-neutral-300 mb-5">
                  Distance is no barrier to creating exceptional content. I collaborate with clients across the globe to deliver high-quality video editing services.
                </p>
                <div className="flex flex-wrap gap-3">
                  {/* {["United States", "Canada", "UK", "Australia", "Germany", "Japan"].map((country) => (
                    <span key={country} className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-neutral-300">
                      {country}
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Let's Create Together
          </h2>
          <p className="text-neutral-300 mb-12">
            Ready to bring your vision to life? Get in touch.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:contact@example.com"
              className="p-4 bg-neutral-900 rounded-full hover:bg-neutral-800"
            >
              <IconMail className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-4 bg-neutral-900 rounded-full hover:bg-neutral-800"
            >
              <IconBrandInstagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center text-neutral-400">
          <p>© 2025 Pranav Jadhav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
