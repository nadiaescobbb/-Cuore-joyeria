import { useReveal } from '../hooks/use-reveal';
import { categories } from '../data/categories';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function CategoryGrid() {
  const ref = useReveal();

  return (
    <div className="w-full" ref={ref}>
      <section id="categories" className="max-w-[1440px] mx-auto px-5 md:px-20 pt-section pb-0 md:pb-8">
        <div className="w-full flex flex-col items-start text-left mb-group">
          <span className="font-body text-label font-bold tracking-wide text-muted uppercase mb-4">
            Por dónde empezar
          </span>
          <h2 className="font-heading text-[48px] md:text-[72px] leading-tight tracking-tight text-foreground mb-4">
            Elegí una categoría y escribinos.
          </h2>
          <p className="font-body text-body md:text-lg text-muted max-w-[70ch]">
            Mandanos una referencia, una foto o una captura. Te ayudamos a encontrar lo que estás buscando.
          </p>
        </div>

        {/* Collage Desestructurado (Mobile/Tablet) -> Grilla Simétrica (Desktop) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-[var(--spacing-group)] lg:gap-y-[var(--spacing-section)] w-full relative gap-group md:gap-0">
          
          {categories.slice(0, 3).map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <a
                key={category.name}
                href={getWaLink(category.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col w-full z-20 focus-visible:outline-accent ${
                  isEven 
                    ? 'mb-0 md:mb-group lg:mb-0' 
                    : 'items-end ml-auto mt-0 md:-mt-group mb-0 md:mb-group lg:items-start lg:ml-0 lg:mt-0 lg:mb-0'
                }`}
              >
                <div className={`overflow-hidden bg-surface transition-all ${
                  isEven 
                    ? 'w-[85%] md:w-[45%] lg:w-full aspect-[3/4] lg:aspect-[4/5] shadow-2xl lg:shadow-none' 
                    : 'w-[85%] md:w-[55%] lg:w-full aspect-[4/3] md:aspect-video lg:aspect-[4/5]'
                }`}>
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                
                <div className={`relative md:absolute lg:static lg:w-full lg:p-0 lg:pt-4 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:drop-shadow-none ${
                  isEven 
                    ? 'md:right-0 md:top-1/3 w-full md:w-[55%] pt-6 md:pt-0 md:pl-8 drop-shadow-md' 
                    : 'md:left-0 md:bottom-[-10%] w-full md:w-[50%] bg-transparent md:bg-background/95 md:backdrop-blur-sm pt-6 md:pt-0 md:p-6 shadow-none md:shadow-2xl self-start md:self-auto'
                }`}>
                  <h3 className="font-heading text-[40px] md:text-[48px] lg:hidden tracking-tight text-foreground mb-2">
                    {category.name}
                  </h3>
                  
                  {/* Desktop caption title */}
                  <h3 className="hidden lg:block font-body text-sm font-bold tracking-widest text-foreground uppercase mb-1">
                    {category.name}
                  </h3>
                  
                  <p className="font-body text-sm md:text-base lg:text-sm text-muted leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 4. RELOJES - Separación Visual Masiva */}
      {categories[3] && (
        <section className="w-full mt-section mb-0">
          <a
            href={getWaLink(categories[3].waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col w-full h-[80svh] md:h-[90vh] relative overflow-hidden focus-visible:outline-accent"
          >
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 bg-dark">
              <img 
                src={categories[3].image} 
                alt={categories[3].name}
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              <span className="font-body text-[13px] md:text-xs font-bold tracking-[0.32em] text-[#d8c79f] uppercase mb-6 md:mb-8 drop-shadow-md">
                La otra mitad de Cuore
              </span>
              <h3 className="font-heading text-[64px] md:text-[80px] lg:text-[120px] leading-none tracking-tight text-background mb-6 md:mb-8">
                {categories[3].name}
              </h3>
              <p className="font-body text-base md:text-xl text-background/80 leading-relaxed max-w-sm md:max-w-2xl mb-10">
                {categories[3].description}
              </p>
              <span className="font-body text-xs md:text-sm font-bold tracking-[0.20em] uppercase text-background flex items-center gap-3">
                Ver opciones 
                <span aria-hidden="true" className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </div>
          </a>
        </section>
      )}
    </div>
  );
}
