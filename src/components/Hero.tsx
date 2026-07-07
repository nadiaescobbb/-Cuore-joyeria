import { useReveal } from '../hooks/use-reveal';
import { getImageUrl } from '../utils/image';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function Hero() {
  const ref = useReveal();

  return (
    <section id="hero" className="relative w-full h-[100dvh] lg:h-auto lg:min-h-[100dvh] lg:grid lg:grid-cols-12 lg:bg-transparent" ref={ref}>
      
      {/* MOBILE FULL-BLEED IMAGE & GRADIENTS */}
      <img 
        src="https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508798/hero_pab1ge.avif" 
        alt="Nuestras manos trabajando en joyería Cuore"
        className="absolute inset-0 w-full h-full object-cover object-center lg:hidden"
      />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark/60 to-transparent pointer-events-none lg:hidden"></div>
      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent pointer-events-none lg:hidden"></div>

      {/* TEXT PANEL */}
      <div className="absolute inset-0 flex flex-col pt-section lg:pt-item px-6 sm:px-8 pb-group md:px-8 box-border z-10 lg:static lg:col-span-5 lg:h-[calc(100dvh-104px)] lg:mt-[104px] lg:justify-start lg:px-0 lg:pl-[max(4rem,calc(50vw-720px+5rem))] lg:pr-8 lg:bg-transparent">
        <div className="w-full mt-auto lg:mt-0">
          <div className="max-w-2xl lg:max-w-none flex flex-col items-start text-left w-full pr-2 sm:pr-0">
            <h1 className="font-heading font-normal text-background lg:text-foreground mb-6 lg:mb-8 drop-shadow-md lg:drop-shadow-none w-full break-words">
              <span className="block text-4xl sm:text-[40px] md:text-6xl lg:text-hero-title leading-[1.05] tracking-tight">
                Joyería, relojería y taller propio.
              </span>
              <span className="block text-2xl md:text-3xl leading-[1.2] mt-4 lg:mt-6 text-background/90 lg:text-tierra">
                Fabricamos alianzas, reparamos joyas y relojes, y trabajamos con una selección que se renueva de forma permanente.
              </span>
            </h1>
            <p className="font-body text-sm md:text-base lg:text-sm text-background/90 lg:text-tierra max-w-[280px] sm:max-w-lg lg:max-w-md mb-item leading-relaxed drop-shadow-sm lg:drop-shadow-none w-full break-words">
              Hace más de 40 años que trabajamos desde Río Grande.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-item w-full sm:w-auto">
              <a 
                href={getWaLink("Consultá por WhatsApp")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultá por WhatsApp"
                className="inline-flex items-center justify-center px-6 md:px-8 min-h-12 bg-cta text-background font-body font-bold text-sm md:text-body tracking-normal hover:bg-cta-hover transition-colors duration-200 focus-visible:outline-accent text-center shadow-md lg:shadow-none"
              >
                Consultá por WhatsApp
              </a>
              <a 
                href="#trust"
                className="inline-flex items-center justify-center px-6 md:px-8 min-h-12 bg-transparent text-background lg:text-tierra border border-background/60 lg:border-tierra/40 font-body font-bold text-sm md:text-body tracking-normal hover:bg-background/10 lg:hover:bg-tierra/5 transition-colors duration-200 focus-visible:outline-accent text-center shadow-sm lg:shadow-none backdrop-blur-sm lg:backdrop-blur-none"
              >
                Ver qué hacemos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP IMAGES GRID */}
      <div className="hidden lg:grid col-span-7 grid-cols-[3fr_5fr_2fr] gap-x-[var(--spacing-item)] lg:h-[calc(100dvh-104px)] lg:mt-[104px] w-full relative pb-[var(--spacing-item)] lg:pt-[var(--spacing-item)]">

        <div className="w-full h-full relative overflow-hidden bg-surface">
          <img src="https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508798/hero_pab1ge.avif" alt="Taller" className="w-full h-full object-cover" />
        </div>
        
        <div className="w-full h-full relative overflow-hidden bg-surface">
          <img src="https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508793/alianzas_zawavf.avif" alt="Alianzas" className="w-full h-full object-cover" />
        </div>

        <div className="w-full h-full relative overflow-hidden bg-surface">
          <img src="https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508797/relojescasio_lzx4kk.jpg" alt="Relojes" className="w-full h-full object-cover" />
        </div>
      </div>

    </section>
  );
}
