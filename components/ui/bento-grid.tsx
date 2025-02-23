import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200",
        "shadow-input dark:shadow-none p-4",
        "bg-black border border-neutral-800",
        "justify-between flex flex-col space-y-4",
        "hover:shadow-[0_0_20px_rgba(100,100,100,0.15)] hover:border-neutral-700",
        "relative before:absolute before:w-full before:h-full before:rounded-xl",
        "before:bg-gradient-to-br before:from-neutral-800/20 before:to-neutral-800/0",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        "before:-z-10 before:blur-xl before:top-0 before:left-0",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-400 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
