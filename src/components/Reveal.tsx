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
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span" | "li" | "a";
}

export const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref as any}
      className={cn("reveal", className)}
      style={{ ["--delay" as any]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
