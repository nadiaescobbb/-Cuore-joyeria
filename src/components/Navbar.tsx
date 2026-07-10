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
    <header className={`fixed top-0 z-50 w-full pt-4 md:pt-6 transition-all duration-300 ${isScrolled ? 'bg-background shadow-sm pb-4' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 h-20 flex items-center justify-between relative z-[60]">
        <a href="#" className="focus-visible:outline-accent inline-block relative z-[60]" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
          <img 
            src="https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508796/cuorelogo_cmmt3i.svg" 
            alt="Cuore joyería y relojería" 
            className={`h-14 md:h-20 w-auto object-contain transition-all ${!isScrolled ? 'brightness-0 invert drop-shadow-md lg:brightness-100 lg:invert-0 lg:drop-shadow-none' : ''}`}
          />
        </a>

        <nav className="hidden md:flex gap-4 lg:gap-item ml-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:ml-0 pr-12 lg:pr-0" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className={`font-body font-normal text-xs lg:text-sm uppercase tracking-[0.2em] transition-colors duration-150 ease-linear focus-visible:outline-accent whitespace-nowrap ${
                !isScrolled 
                  ? 'text-background drop-shadow-md lg:text-tierra lg:drop-shadow-none hover:text-white/80 lg:hover:text-tierra/80' 
                  : 'text-foreground lg:text-tierra hover:text-foreground/80 lg:hover:text-tierra/80'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>



        {!isOpen ? (
          <button 
            className={`md:hidden flex p-2 focus-visible:outline-accent relative z-[60] transition-colors ${!isScrolled ? 'text-background drop-shadow-md' : 'text-foreground'}`} 

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
            className="md:hidden flex absolute top-6 right-5 p-2 text-foreground focus-visible:outline-accent z-[60]"
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
        {/* Links Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full gap-item">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-3xl md:text-4xl font-heading text-tierra hover:text-accent transition-colors duration-150 ease-linear text-center"
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
