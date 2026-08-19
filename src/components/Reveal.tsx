import { type CSSProperties, type ReactNode } from "react";
import { useReveal } from "../hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const Reveal = ({ children, className, delay = 0, id }: RevealProps) => {
  const { elementRef, isVisible } = useReveal();

  return (
    <div
      id={id}
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className || ''}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
};
