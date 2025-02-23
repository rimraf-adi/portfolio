"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Navbar } from "@/components/ui/floating-navbar";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { IconEdit, IconPalette, IconVideo, IconWand, IconMail, IconBrandInstagram, IconBolt, IconBrain, IconCloud, IconDeviceLaptop, IconBrandAdobePhotoshop, IconBrandBlender, IconVolume } from "@tabler/icons-react";
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

interface SkillItem {
  title: string;
  description: string;
  header: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Work", link: "#work" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  const animatedTestimonials = [
    {
      quote: "The best video editor I've worked with. Incredible attention to detail and creativity.",
      name: "James Wilson",
      designation: "Film Director",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      quote: "Transformed our raw footage into a cinematic masterpiece. Truly exceptional work.",
      name: "Lisa Thompson",
      designation: "Production Manager",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      quote: "Professional, creative, and always delivers beyond expectations.",
      name: "David Chen",
      designation: "Creative Director",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const portfolioItems = [
    {
      src: "https://images.unsplash.com/photo-1536240478700-b869070f9279",
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
      description: "Premiere Pro • After Effects • Photoshop • Audition",
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
          >
            <IconBrandAdobePhotoshop className="w-12 h-12 text-white" />
          </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Crafting Visual Stories<br />Frame by Frame
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-lg mx-auto">
            Professional video editor specializing in cinematic storytelling, 
            motion graphics, and color grading.
          </p>
          <SafeMotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
          >
            View My Work
          </SafeMotionButton>
        </motion.div>
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
        <div className="bg-black/50 backdrop-blur-sm py-10">
          <AnimatedTestimonials 
            testimonials={animatedTestimonials}
            autoplay={true}
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67"
                  alt="Video Editor at Work"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/20" />
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
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-neutral-900 rounded-full hover:bg-neutral-800"
            >
              <IconMail className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-neutral-900 rounded-full hover:bg-neutral-800"
            >
              <IconBrandInstagram className="w-6 h-6 text-white" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center text-neutral-400">
          <p>© 2024 Video Editor Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
