import { useReveal } from '../hooks/use-reveal';
import { categories } from '../data/categories';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function CategoryGrid() {
  const ref = useReveal();

  return (
    <div className="w-full" ref={ref}>
      <section id="categories" className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 pt-[120px] md:pt-[180px] pb-16 md:pb-32">
        
        {/* Encabezado con mucho aire */}
        <div className="w-full flex flex-col items-center text-center mb-16 md:mb-32">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-foreground">
            Explorá nuestra selección.
          </h2>
        </div>

        {/* Layout Asimétrico Editorial */}
        <div className="w-full flex flex-col gap-4 md:gap-32">
          
          {/* Fila 1: Anillos (Izquierda, más angosto y alto) y Collares (Derecha, más ancho, desplazado hacia abajo) */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 w-full">
            {categories[0] && (
              <a
                href={getWaLink(categories[0].waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-full md:w-5/12 h-[55vh] md:h-[90vh] focus-visible:outline-accent overflow-hidden rounded-none md:mr-auto"
              >
                <img 
                  src={categories[0].image} 
                  alt={categories[0].name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2">
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
                className="group relative flex flex-col w-full md:w-6/12 h-[45vh] md:h-[80vh] focus-visible:outline-accent overflow-hidden rounded-none md:mt-32"
              >
                <img 
                  src={categories[1].image} 
                  alt={categories[1].name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2">
                    {categories[1].name}
                  </h3>
                </div>
              </a>
            )}
          </div>

          {/* Fila 2: Pulseras (Izquierda, cuadrada/ancha, flotando alto) y Aros (Derecha, vertical alta) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-16 w-full">
            {categories[3] && (
              <a
                href={getWaLink(categories[3].waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-full md:w-5/12 h-[55vh] md:h-[95vh] focus-visible:outline-accent overflow-hidden rounded-none md:ml-auto"
              >
                <img 
                  src={categories[3].image} 
                  alt={categories[3].name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2">
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
                className="group relative flex flex-col w-full md:w-6/12 h-[45vh] md:h-[75vh] focus-visible:outline-accent overflow-hidden rounded-none md:mb-48"
              >
                <img 
                  src={categories[2].image} 
                  alt={categories[2].name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                  <h3 className="font-body text-sm md:text-base font-bold tracking-[0.3em] text-background uppercase text-center drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] border-b border-transparent group-hover:border-background transition-colors duration-500 pb-2">
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
