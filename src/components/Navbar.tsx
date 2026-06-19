import { useState, useEffect } from 'react';
import { navItems } from '../data/nav';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-dark shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 h-20 flex items-center justify-between relative z-[60]">
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
        
        <a href="#" className="focus-visible:outline-accent inline-block relative z-[60]" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
          <img 
            src="/images/cuorelogo.png" 
            alt="Cuore joyería y relojería" 
            className="h-14 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
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

        {!isOpen ? (
          <button 
            className="md:hidden p-2 text-background focus-visible:outline-accent relative z-[60]" 
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
            className="md:hidden absolute top-6 right-5 p-2 text-background focus-visible:outline-accent z-[60]"
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
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-dark/95 flex flex-col items-center justify-center gap-8 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-2xl font-heading font-normal text-background hover:text-gold transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
