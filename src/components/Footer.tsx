import { navItems } from '../data/nav';

export function Footer() {
  return (
    <footer className="bg-[#2A2421] text-[#E5DFD5] py-6 px-5 md:px-12 lg:px-20 border-t border-[#38302B]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-full text-center md:text-left">
        
        {/* Left: Brand logo with heart */}
        <div className="flex items-center gap-2">
          <a href="#" aria-label="Ir al inicio" className="focus-visible:outline-accent flex items-center gap-2">
            <span className="text-[#B89B5E] text-sm">♥</span>
            <span className="font-heading text-2xl text-[#E5DFD5] tracking-tight">
              Cuore
            </span>
          </a>
        </div>

        {/* Center: Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-xs text-[#A89C92] font-body">
          <p>© 2026 Joyería Cuore · Río Grande, Tierra del Fuego.</p>
          <span className="hidden md:inline">·</span>
          <p>
            Hecho por <a href="https://www.instagram.com/heytrama" target="_blank" rel="noopener noreferrer" className="hover:text-[#D8C79F] transition-colors duration-150">heytrama</a>
          </p>
        </div>

        {/* Right: Navigation links */}
        <nav className="flex flex-wrap gap-4 lg:gap-6 justify-center md:justify-end" aria-label="Navegación del pie de página">
          {navItems.filter(item => item.label !== 'Contacto').map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="font-body text-xs text-[#C2B5A8] hover:text-white uppercase tracking-[0.16em] transition-colors duration-150 ease-linear focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}
