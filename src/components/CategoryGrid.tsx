import { useReveal } from '../hooks/use-reveal';
import { categories } from '../data/categories';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function CategoryGrid() {
  const ref = useReveal();

  return (
    <div className="w-full bg-background" ref={ref}>
      <section id="categories" className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 pt-section">
        
        {/* Encabezado con mucho aire */}
        <div className="w-full flex flex-col items-center text-center mb-item">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-foreground">
            Explorá nuestra selección.
          </h2>
        </div>

        {/* Layout Asimétrico Editorial */}
        <div className="w-full flex flex-col gap-16 md:gap-20">
          
          {/* Fila 1: Anillos (Izquierda, más angosto y alto) y Collares (Derecha, más ancho, desplazado hacia abajo) */}
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20 w-full">
            {categories[0] && (
              <a
                href={getWaLink(categories[0].waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-full md:w-5/12 h-[55vh] md:h-[60vh] focus-visible:outline-accent overflow-hidden rounded-sm md:mr-auto"
              >
                <img 
                  src={categories[0].image} 
                  alt={categories[0].name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2 z-10 relative">
                    {categories[0].name}
                  </h3>
                </div>
              </a>
            )}

            {categories[1] && (
              <a
                href={getWaLink(categories[1].waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-full md:w-6/12 h-[45vh] md:h-[50vh] focus-visible:outline-accent overflow-hidden rounded-sm md:translate-y-8 lg:translate-y-10"
              >
                <img 
                  src={categories[1].image} 
                  alt={categories[1].name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2 z-10 relative">
                    {categories[1].name}
                  </h3>
                </div>
              </a>
            )}
          </div>

          {/* Fila 2: Pulseras (Izquierda, cuadrada/ancha, flotando alto) y Aros (Derecha, vertical alta) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-20 w-full">
            {categories[3] && (
              <a
                href={getWaLink(categories[3].waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-full md:w-5/12 h-[55vh] md:h-[60vh] focus-visible:outline-accent overflow-hidden rounded-sm md:ml-auto"
              >
                <img 
                  src={categories[3].image} 
                  alt={categories[3].name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2 z-10 relative">
                    {categories[3].name}
                  </h3>
                </div>
              </a>
            )}

            {categories[2] && (
              <a
                href={getWaLink(categories[2].waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-full md:w-6/12 h-[45vh] md:h-[50vh] focus-visible:outline-accent overflow-hidden rounded-sm md:-translate-y-8 lg:-translate-y-10"
              >
                <img 
                  src={categories[2].image} 
                  alt={categories[2].name} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2 z-10 relative">
                    {categories[2].name}
                  </h3>
                </div>
              </a>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
