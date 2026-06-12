import { navItems } from '../data/nav';

export function Navbar() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 h-20 flex items-center justify-between">
        <nav className="hidden md:flex gap-8" aria-label="Navegación principal">
          {navItems.slice(0, 3).map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-body font-body font-normal tracking-normal text-background/80 hover:text-background transition-colors focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <a href="#" className="focus-visible:outline-accent inline-block" aria-label="Ir al inicio">
          <img 
            src="/images/cuorelogo.png" 
            alt="Cuore joyería y relojería" 
            className="h-8 md:h-10 w-auto object-contain brightness-0 invert drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
          />
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.slice(3, 5).map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-body font-body font-normal tracking-normal text-background/80 hover:text-background transition-colors focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={navItems[5].href}
            className="text-body font-body font-normal tracking-normal text-background/80 hover:text-background transition-colors focus-visible:outline-accent"
          >
            {navItems[5].label}
          </a>
        </div>

        <button 
          className="md:hidden p-2 text-background focus-visible:outline-accent" 
          aria-label="Abrir menú"
          aria-expanded="false"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>
    </header>
  );
}
