import { useReveal } from '../hooks/use-reveal';
import { categories } from '../data/categories';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function CategoryGrid() {
  const ref = useReveal();

  return (
    <div className="w-full" ref={ref}>
      <section id="categories" className="max-w-[1440px] mx-auto px-5 md:px-20 pt-16 md:pt-24 pb-8">
        <div className="w-full flex flex-col items-start text-left mb-16 md:mb-32">
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

        {/* Collage Desestructurado */}
        <div className="flex flex-col w-full relative gap-16 md:gap-0">
          
          {/* 1. ANILLOS */}
          {categories[0] && (
            <a
              href={getWaLink(categories[0].waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col w-full mb-0 md:mb-24 z-20 focus-visible:outline-accent"
            >
              <div className="w-[85%] md:w-[40%] aspect-[3/4] overflow-hidden bg-surface shadow-2xl">
                <img src={categories[0].image} alt={categories[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="relative md:absolute md:right-0 md:top-1/3 w-full md:w-[40%] pt-6 md:pt-0 md:pl-4 drop-shadow-md">
                <h3 className="font-heading text-[40px] md:text-[64px] tracking-tight text-foreground mb-2">
                  {categories[0].name}
                </h3>
                <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                  {categories[0].description}
                </p>
              </div>
            </a>
          )}

          {/* 2. COLLARES */}
          {categories[1] && (
            <a
              href={getWaLink(categories[1].waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col w-full items-end ml-auto mt-0 md:-mt-32 mb-0 md:mb-32 z-30 focus-visible:outline-accent"
            >
              <div className="w-[85%] md:w-[55%] aspect-[4/3] md:aspect-video overflow-hidden bg-surface">
                <img src={categories[1].image} alt={categories[1].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="relative md:absolute md:left-0 md:bottom-[-10%] w-full md:w-[40%] bg-transparent md:bg-background/95 md:backdrop-blur-sm pt-6 md:pt-0 md:p-8 shadow-none md:shadow-2xl self-start md:self-auto">
                <h3 className="font-heading text-[40px] md:text-[64px] tracking-tight text-foreground mb-2">
                  {categories[1].name}
                </h3>
                <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                  {categories[1].description}
                </p>
              </div>
            </a>
          )}

          {/* 3. ALIANZAS (Zig-Zag continuo, estilo Anillos) */}
          {categories[2] && (
            <a
              href={getWaLink(categories[2].waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col w-full mt-0 md:-mt-32 mb-0 md:mb-24 z-10 focus-visible:outline-accent"
            >
              <div className="w-[85%] md:w-[40%] aspect-[3/4] overflow-hidden bg-surface shadow-2xl">
                <img src={categories[2].image} alt={categories[2].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="relative md:absolute md:right-0 md:top-1/3 w-full md:w-[40%] pt-6 md:pt-0 md:pl-4 drop-shadow-md">
                <h3 className="font-heading text-[40px] md:text-[64px] tracking-tight text-foreground mb-2">
                  {categories[2].name}
                </h3>
                <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                  {categories[2].description}
                </p>
              </div>
            </a>
          )}
        </div>
      </section>

      {/* 4. RELOJES - Separación Visual Masiva */}
      {categories[3] && (
        <section className="w-full mt-24 md:mt-40 mb-16 md:mb-32">
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
              <span className="font-body text-[10px] md:text-xs font-bold tracking-[0.30em] text-accent uppercase mb-6 md:mb-8">
                La otra mitad de Cuore
              </span>
              <h3 className="font-heading text-[64px] md:text-[120px] leading-none tracking-tight text-background mb-6 md:mb-8">
                {categories[3].name}
              </h3>
              <p className="font-body text-base md:text-xl text-background/80 leading-relaxed max-w-lg mb-10">
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
