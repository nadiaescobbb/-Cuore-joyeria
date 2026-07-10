import { navItems } from '../data/nav';

export function Footer() {
  return (
    <footer className="bg-surface pt-0 pb-item px-8 lg:px-20">
      <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-item md:gap-0 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center justify-center md:justify-start w-full">
          <a href="#" aria-label="Ir al inicio" className="focus-visible:outline-accent">
            <span className="font-heading text-2xl text-foreground/80 tracking-tight">
              Cuore
            </span>
          </a>
        </div>

        <nav className="flex flex-wrap gap-4 lg:gap-6 justify-center w-full px-5 md:px-0" aria-label="Navegación del pie de página">
          {navItems.filter(item => item.label !== 'Contacto').map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="font-body text-[11px] text-tierra hover:text-accent tracking-normal transition-colors duration-150 ease-linear focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-1 w-full text-center md:text-right">
          <p className="font-body text-xs text-muted">
            © 2026 Joyería y Relojería Cuore · Río Grande, TDF.
          </p>
          <p className="font-body text-xs text-muted">
            Hecho por <a href="https://www.instagram.com/heytrama" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-150 ease-linear">heytrama</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
