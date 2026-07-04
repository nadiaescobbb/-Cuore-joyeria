import { useState, useEffect } from 'react';
import { navItems } from '../data/nav';
import { getImageUrl } from '../utils/image';

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
    <header className={`fixed top-0 z-50 w-full pt-4 md:pt-6 transition-all duration-300 ${isScrolled ? 'bg-dark lg:bg-background shadow-md lg:shadow-sm pb-4' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 h-20 flex items-center justify-between relative z-[60]">
        <a href="#" className="focus-visible:outline-accent inline-block relative z-[60]" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
          <img 
            src={getImageUrl('/cuorelogo_d4gew3.png')} 
            alt="Cuore joyería y relojería" 
            className="h-14 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] lg:brightness-100 lg:invert-0 lg:drop-shadow-none"
          />
        </a>

        <nav className="hidden md:flex gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Navegación principal">
          {navItems.slice(0, 5).map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="font-body font-normal text-xs lg:text-sm uppercase tracking-[0.2em] text-background/80 lg:text-tierra transition-colors focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>



        {!isOpen ? (
          <button 
            className="md:hidden flex p-2 text-background focus-visible:outline-accent relative z-[60]" 
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
            className="md:hidden flex absolute top-6 right-5 p-2 text-background focus-visible:outline-accent z-[60]"
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
          className="md:hidden fixed inset-0 z-50 bg-dark flex flex-col items-center justify-center h-full overflow-hidden"
          onClick={() => setIsOpen(false)}
        >
          {/* Links Container */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full gap-12">
            {/* Grupo 1: Joyería y Relojería */}
            <div className="flex flex-col items-center gap-2">
              {[navItems[3], navItems[4]].map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  className="text-3xl lg:text-4xl font-heading text-background hover:text-gold transition-colors text-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Grupo 2: Taller y Reparaciones */}
            <div className="flex flex-col items-center gap-2">
              {[navItems[1], navItems[2]].map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  className="text-3xl lg:text-4xl font-heading text-background hover:text-gold transition-colors text-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Grupo 3: Nosotros y Contacto */}
            <div className="flex flex-col items-center gap-2">
              {[navItems[0], navItems[5]].map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  className="text-3xl lg:text-4xl font-heading text-background hover:text-gold transition-colors text-center"
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
        </div>
      )}
    </header>
  );
}
