import { cn } from "@/lib/utils";
import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-1 w-full h-full min-h-[6rem] rounded-xl",
      "bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100",
      "animate-pulse",
      className
    )}
    {...props}
  />
); 