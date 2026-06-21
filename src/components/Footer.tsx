import { navItems } from '../data/nav';

export function Footer() {
  return (
    <footer className="bg-dark border-t border-background/10 py-6 px-8 lg:px-20">
      <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-6 md:gap-0 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center justify-center md:justify-start w-full">
          <a href="#" aria-label="Ir al inicio" className="focus-visible:outline-accent">
            <span className="font-heading text-2xl text-background/80 tracking-tight">
              Cuore
            </span>
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-3 md:gap-6 justify-center w-full px-5 md:px-0" aria-label="Navegación del pie de página">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="font-body text-[11px] text-background/50 hover:text-background tracking-normal transition-colors duration-200 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-1 w-full text-center md:text-right">
          <p className="font-body text-xs text-background/30">
            © 2026 Joyería y Relojería Cuore · Río Grande, TDF.
          </p>
          <p className="font-body text-xs text-background/30">
            Hecho por heytrama
          </p>
        </div>
      </div>
    </footer>
  );
}
