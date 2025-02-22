"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight"; // Ensure correct import path
import { Navbar } from "@/components/ui/floating-navbar"; // Ensure correct import path

export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-center px-4 bg-black">
      {/* Sticky Navbar */}
      <Navbar navItems={navItems} />

      {/* Hero Section */}
      <div className="h-[40rem] w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden mt-20">
        <Spotlight />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-10 w-full px-4"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Welcome to my <br /> Digital Humble Abode
          </h1>

          <p className="mt-4 text-lg text-neutral-300 max-w-lg text-center mx-auto">
            I’m an independent designer specializing in brand and user experience.
          </p>

          <div className="mt-6 flex justify-center">
            <button className="bg-gray-800 text-white rounded-full px-6 py-3 font-medium hover:bg-gray-700 transition">
              Explore Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Additional Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <h2 className="text-4xl font-semibold">More Content Below</h2>
        <p className="text-lg text-gray-400 mt-4">Keep scrolling to see more...</p>
      </div>
    </div>
  );
}
