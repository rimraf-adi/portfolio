"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Check if the href is a hash link
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100, // Offset for navbar
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <div
      className={cn(
        "sticky top-5 inset-x-0 mx-auto max-w-fit border border-gray-300 dark:border-white/[0.2] rounded-full bg-gray-500/50 dark:bg-black/50 backdrop-blur-md shadow-md z-[5000] pr-4 pl-6 py-3 flex items-center space-x-3",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={idx}
          href={navItem.link}
          onClick={(e) => handleClick(e, navItem.link)}
          className="relative text-xs text-white dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
        >
          {navItem.name}
        </a>
      ))}
    </div>
  );
};
