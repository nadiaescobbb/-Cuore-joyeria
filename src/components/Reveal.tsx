import { ReactNode } from "react";
import { useReveal } from "../hooks/use-reveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
