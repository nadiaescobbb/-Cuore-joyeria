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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 w-full py-3 md:py-4 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/90 backdrop-blur-md lg:bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 h-12 md:h-14 flex items-center justify-between relative">
          
          {/* Logo */}
          <a href="#" className="focus-visible:outline-accent inline-block" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
            <img
              src="/cuorelogorojoo.png"
              alt="Cuore joyería y relojería"
              className="h-10 md:h-16 w-auto object-contain transition-all origin-left"
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

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="md:hidden flex p-2 text-foreground focus-visible:outline-accent relative z-50"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between pointer-events-none">
              <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-[#FAF8F3] flex flex-col items-center justify-center h-screen w-screen px-6 overflow-y-auto animate-fade-up"
        >
          {/* Close Button top-right */}
          <button
            className="absolute top-5 right-5 p-3 text-foreground focus-visible:outline-accent"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span className="block w-6 h-0.5 bg-foreground absolute rotate-45" />
              <span className="block w-6 h-0.5 bg-foreground absolute -rotate-45" />
            </div>
          </button>

          {/* Nav Links */}
          <nav className="flex flex-col items-center justify-center gap-8 text-center" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-heading text-foreground hover:text-accent tracking-wide transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
