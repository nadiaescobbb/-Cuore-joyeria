import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WorkshopSection() {
  const ref = useReveal();

  return (
    <section id="workshop" className="w-full bg-background" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Image Column */}
        <div className="relative h-[70vh] lg:h-full w-full">
          <img 
            src="/images/craf.avif" 
            alt="Trabajo artesanal en el taller de Cuore"
            className="w-full h-full object-cover object-[center_top] m-0 p-0"
          />
          
          {/* Mobile Overlay Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark/85 to-transparent pointer-events-none lg:hidden"></div>
          
          {/* Mobile Overlay Text */}
          <div className="absolute bottom-0 left-0 w-full px-5 pb-8 lg:hidden">
            <span className="block font-body text-[10px] font-bold tracking-[0.20em] text-gold uppercase mb-2">
              TALLER Y FABRICACIÓN
            </span>
            <h2 className="font-heading text-4xl leading-tight text-background">
              Fabricamos alianzas en nuestro taller.
            </h2>
          </div>
        </div>
        
        {/* Text Column */}
        <div className="flex flex-col justify-start lg:justify-center px-5 py-10 lg:px-16 lg:py-20 lg:gap-8">
          
          {/* Desktop Label */}
          <span className="hidden lg:block font-body text-[10px] font-bold tracking-[0.20em] text-accent uppercase">
            TALLER Y FABRICACIÓN
          </span>
          
          {/* Desktop Title */}
          <h2 className="hidden lg:block font-heading text-5xl lg:text-6xl font-normal leading-tight text-foreground">
            Fabricamos alianzas en nuestro taller.
          </h2>
          
          {/* Body */}
          <p className="font-body text-sm lg:text-base text-muted max-w-md mb-6 lg:mb-0">
            Elegís el material, la medida y el grabado. Cada alianza se hace acá, en Río Grande.
          </p>

          {/* Steps */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-6 lg:gap-4 mb-8 lg:mb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex-shrink-0 flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-4">
              <span className="font-body lg:font-heading text-xs lg:text-sm font-normal text-muted">01.</span>
              <span className="font-body text-sm lg:text-base font-normal text-foreground">Referencia</span>
            </div>
            <div className="flex-shrink-0 flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-4">
              <span className="font-body lg:font-heading text-xs lg:text-sm font-normal text-muted">02.</span>
              <span className="font-body text-sm lg:text-base font-normal text-foreground">Medida y material</span>
            </div>
            <div className="flex-shrink-0 flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-4">
              <span className="font-body lg:font-heading text-xs lg:text-sm font-normal text-muted">03.</span>
              <span className="font-body text-sm lg:text-base font-normal text-foreground">Grabado y entrega</span>
            </div>
          </div>

          {/* CTA */}
          <a 
            href={getWaLink("Hola Cuore, quería cotizar alianzas")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cotizar alianzas por WhatsApp"
            className="w-full lg:w-fit min-h-14 lg:px-8 bg-accent text-background font-body font-bold text-sm tracking-[0.16em] uppercase rounded-sm flex items-center justify-center hover:opacity-90 transition-opacity duration-200 focus-visible:outline-accent"
          >
            Cotizar alianzas
          </a>

        </div>
      </div>
    </section>
  );
}
