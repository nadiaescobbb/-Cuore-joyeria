export function ImageOverlay({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 pointer-events-none z-[1] ${className}`} 
      aria-hidden="true"
    />
  );
}
