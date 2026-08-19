import { useState, useEffect } from 'react';
import { navItems } from '../data/nav';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full py-3 md:py-4 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm lg:bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 h-12 md:h-14 flex items-center justify-between relative z-[60]">
        
        {/* Logo */}
        <a href="#" className="focus-visible:outline-accent inline-block relative z-[60]" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
          <img
            src="/cuorelogorojoo.png"
            alt="Cuore joyería y relojería"
            className="h-12 md:h-16 w-auto object-contain transition-all origin-left"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 ml-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:ml-0" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body font-normal text-xs uppercase tracking-[0.18em] text-tierra hover:text-foreground transition-colors duration-150 ease-linear focus-visible:outline-accent whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        {!isOpen ? (
          <button
            className="md:hidden flex p-2 text-foreground focus-visible:outline-accent relative z-[60]"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        ) : (
          <button
            className="md:hidden flex absolute top-4 right-5 p-2 text-foreground focus-visible:outline-accent z-[60]"
            aria-label="Cerrar menú"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(false)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className="block w-6 h-0.5 bg-current absolute rotate-45 transition-transform"></span>
              <span className="block w-6 h-0.5 bg-current absolute -rotate-45 transition-transform"></span>
            </div>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        aria-hidden={!isOpen}
        className={`md:hidden fixed inset-0 z-50 bg-background flex flex-col items-center justify-center h-full overflow-hidden transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-2xl md:text-3xl font-heading text-tierra hover:text-accent transition-colors duration-150 ease-linear text-center"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
