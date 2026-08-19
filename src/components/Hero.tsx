import { Reveal } from './Reveal';

import { getWaLink } from '../constants/wa';

export function Hero() {
  return (
    <Reveal id="hero" className="relative w-full h-[100dvh] lg:h-auto lg:min-h-[100dvh] lg:grid lg:grid-cols-12 lg:bg-transparent">
      
      {/* MOBILE FULL-BLEED IMAGE & GRADIENTS */}
      <img 
        src="/hero2.avif"
        alt="Nuestras manos trabajando en joyería Cuore"
        className="absolute inset-0 w-full h-full object-cover object-center lg:hidden"
      />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark/60 to-transparent pointer-events-none lg:hidden"></div>
      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent pointer-events-none lg:hidden"></div>

      {/* TEXT PANEL */}
      <div className="absolute inset-0 flex flex-col pt-section lg:pt-item px-6 sm:px-8 pb-group md:px-8 box-border z-10 lg:static lg:col-span-5 lg:h-[calc(100dvh-84px)] lg:mt-[84px] lg:justify-start lg:px-0 lg:pl-[max(4rem,calc(50vw-720px+5rem))] lg:pr-8 lg:bg-transparent">
        <div className="w-full mt-auto lg:mt-0">
          <div className="max-w-2xl lg:max-w-none flex flex-col items-start text-left w-full pr-2 sm:pr-0">
            <h1 className="font-heading font-normal text-background lg:text-foreground mb-6 lg:mb-8 drop-shadow-md lg:drop-shadow-none w-full break-words">
              <span className="block text-4xl sm:text-[40px] md:text-6xl lg:text-hero-title leading-[1.05] tracking-tight">
                Joyería, relojería y taller propio.
              </span>
              <span className="block text-2xl md:text-3xl leading-[1.2] mt-4 lg:mt-6 text-background/90 lg:text-tierra">
                Fabricamos alianzas, reparamos joyas y trabajamos con una selección que se renueva de forma permanente.
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
                aria-label="Consultar por WhatsApp"
                className="inline-flex items-center justify-center px-6 md:px-8 min-h-12 bg-cta text-background font-body font-bold text-sm md:text-body tracking-[0.16em] uppercase hover:bg-cta-hover transition-colors duration-150 ease-linear focus-visible:outline-accent text-center shadow-md lg:shadow-none"
              >
                Consultar por WhatsApp
              </a>
              <a 
                href="#trust"
                className="inline-flex items-center justify-center px-6 md:px-8 min-h-12 bg-transparent text-background lg:text-tierra border border-background/60 lg:border-tierra/40 font-body font-bold text-sm md:text-body tracking-[0.16em] uppercase hover:bg-background/10 lg:hover:bg-tierra/5 transition-colors duration-150 ease-linear focus-visible:outline-accent text-center shadow-sm lg:shadow-none backdrop-blur-sm lg:backdrop-blur-none"
              >
                Ver qué hacemos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP IMAGES GRID */}
      <div className="hidden lg:grid col-span-7 grid-cols-2 grid-rows-2 gap-4 lg:h-[calc(100dvh-84px)] lg:mt-[84px] w-full relative pb-[var(--spacing-item)] lg:pt-[var(--spacing-item)] lg:pr-[max(2rem,calc(50vw-720px+2rem))]">

        {/* Left tall image (spans 2 rows) */}
        <div className="row-span-2 w-full h-full relative overflow-hidden rounded-xl bg-surface">
          <img src="/hero1.avif" alt="Taller propio de Cuore joyería en Río Grande, Tierra del Fuego" className="w-full h-full object-cover" />
        </div>
        
        {/* Top-right image */}
        <div className="row-span-1 w-full h-full relative overflow-hidden rounded-xl bg-surface">
          <img src="/hero2.avif" alt="Alianzas de boda fabricadas en plata 925 y oro 18kt en Cuore" className="w-full h-full object-cover object-center" />
        </div>

        {/* Bottom-right image */}
        <div className="row-span-1 w-full h-full relative overflow-hidden rounded-xl bg-surface">
          <img src="/hero3.avif" alt="Joyería en Cuore, Río Grande" className="w-full h-full object-cover" />
        </div>
      </div>

    </Reveal>
  );
}
