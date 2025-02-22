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
  return (
    <div
      className={cn(
        "sticky top-5 inset-x-0 mx-auto max-w-fit border border-transparent dark:border-white/[0.2] rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-md z-[5000] pr-4 pl-6 py-3 flex items-center space-x-3",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={idx}
          href={navItem.link}
          className="relative text-xs text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
};
