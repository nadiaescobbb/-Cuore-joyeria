import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WorkshopSection() {
  const ref = useReveal();

  return (
    <section id="workshop" className="w-full bg-background" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Image Column */}
        <div className="h-[40svh] lg:h-full w-full">
          <img 
            src="/images/craf.avif" 
            alt="Trabajo artesanal en el taller de Cuore"
            className="w-full h-full object-cover object-center rounded-none m-0 p-0"
          />
        </div>
        
        {/* Text Column */}
        <div className="flex flex-col justify-center px-5 py-12 lg:px-16 lg:py-20 gap-8">
          
          {/* Label */}
          <span className="font-body text-[10px] font-bold tracking-[0.20em] text-accent uppercase">
            TALLER Y FABRICACIÓN
          </span>
          
          {/* Title */}
          <h2 className="font-heading text-5xl lg:text-6xl font-normal leading-tight text-foreground">
            Fabricamos alianzas en nuestro taller.
          </h2>
          
          {/* Body */}
          <p className="font-body text-sm lg:text-base text-muted max-w-md">
            Elegís material, medida, ancho y grabado. Te pasamos presupuesto por WhatsApp antes de pasar. Cada alianza sale de nuestro taller en Río Grande.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-sm font-normal text-muted">01.</span>
              <span className="font-body text-base font-normal text-foreground">Referencia</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-sm font-normal text-muted">02.</span>
              <span className="font-body text-base font-normal text-foreground">Medida y material</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-sm font-normal text-muted">03.</span>
              <span className="font-body text-base font-normal text-foreground">Grabado y entrega</span>
            </div>
          </div>

          {/* CTA */}
          <a 
            href={getWaLink("Hola Cuore, quería cotizar alianzas")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cotizar alianzas por WhatsApp"
            className="mt-4 min-h-14 px-8 bg-accent text-background font-body font-bold text-sm tracking-[0.16em] uppercase rounded-sm w-fit flex items-center justify-center hover:opacity-90 transition-opacity duration-200 focus-visible:outline-accent"
          >
            Cotizar alianzas
          </a>

        </div>
      </div>
    </section>
  );
}
