import Image from "next/image";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import FAQ from "@/components/FAQ";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{backgroundColor: 'var(--color-background)'}}>
      <Navbar />
      <main className="flex-1 py-8">
        <Clients />
        <Hero />
        <Testimonials />
        <Videos />
        <FAQ />
        <AboutMe />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
}
