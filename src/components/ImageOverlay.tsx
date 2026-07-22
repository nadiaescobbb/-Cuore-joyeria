export function ImageOverlay({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 bg-black/20 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none z-[1] ${className}`} 
      aria-hidden="true"
    />
  );
}
