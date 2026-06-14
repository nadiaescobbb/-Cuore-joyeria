import { navItems } from '../data/nav';

export function Footer() {
  return (
    <footer className="bg-dark border-t border-background/10 py-6 px-8 lg:px-20">
      <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-6 md:gap-0 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center justify-center md:justify-start w-full">
          <a href="#" aria-label="Ir al inicio" className="focus-visible:outline-accent">
            <img 
              src="/images/cuorelogo.png" 
              alt="Cuore logo" 
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </a>
        </div>

        <nav className="flex flex-wrap gap-4 md:gap-8 justify-center w-full" aria-label="Navegación del pie de página">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="font-body text-xs text-background/50 hover:text-background tracking-normal transition-colors duration-200 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-1 w-full text-center md:text-right">
          <p className="font-body text-xs text-background/30">
            © 2026 Joyería Cuore · Río Grande, TDF.
          </p>
          <p className="font-body text-xs text-background/30">
            Diseño: Trama Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
