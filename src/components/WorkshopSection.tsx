import { useReveal } from '../hooks/use-reveal';
import { getImageUrl } from '../utils/image';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WorkshopSection() {
  const ref = useReveal();

  return (
    <section className="w-full bg-background relative" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-item)] md:gap-[var(--spacing-group)] w-full">
          
          {/* COLUMN 1 - TALLER */}
          <div id="workshop" className="flex flex-col w-full">
            {/* Top Image */}
            <div className="w-full aspect-[4/3] lg:aspect-video relative rounded-sm overflow-hidden bg-surface">
              <img 
                src={getImageUrl('/craf_lstywg.avif')} 
                alt="Trabajo artesanal en el taller de Cuore"
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>

            {/* Left Aligned Text Block */}
            <div className="w-full py-8 md:py-12 lg:py-16">
              <div className="flex flex-col items-start text-left gap-item max-w-xl">
                
                <div className="flex flex-col items-start gap-3">
                  <span className="font-body text-[10px] md:text-[12px] font-bold tracking-[0.20em] text-accent uppercase">
                    Taller y fabricación
                  </span>
                  
                  <h2 className="font-heading text-4xl md:text-5xl font-normal leading-tight text-foreground">
                    Fabricamos alianzas en nuestro taller.
                  </h2>
                  
                  <p className="font-body text-base md:text-lg text-tierra">
                    Elegís el material, la medida y el grabado. Cada alianza se hace acá, en Río Grande.
                  </p>
                </div>

                {/* CTA */}
                <a 
                  href={getWaLink("Hola Cuore, quería cotizar alianzas")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cotizar alianzas por WhatsApp"
                  className="w-full md:w-fit min-h-14 px-10 bg-accent text-background font-body font-bold text-sm tracking-[0.16em] uppercase rounded-sm flex items-center justify-center hover:opacity-90 transition-opacity duration-200 focus-visible:outline-accent"
                >
                  Cotizar alianzas
                </a>

              </div>
            </div>
          </div>

          {/* COLUMN 2 - REPARACIONES */}
          <div id="repairs" className="flex flex-col w-full">
            {/* Top Image */}
            <div className="w-full aspect-[4/3] lg:aspect-video relative rounded-sm overflow-hidden bg-surface">
              <img 
                src="/repair_workshop.png" 
                alt="Servicio de reparación de joyas y relojes"
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>

            {/* Left Aligned Text Block */}
            <div className="w-full py-8 md:py-12 lg:py-16">
              <div className="flex flex-col items-start text-left gap-item max-w-xl">
                
                <div className="flex flex-col items-start gap-3">
                  <span className="font-body text-[10px] md:text-[12px] font-bold tracking-[0.20em] text-accent uppercase">
                    Reparaciones
                  </span>
                  
                  <h2 className="font-heading text-4xl md:text-5xl font-normal leading-tight text-foreground">
                    Reparamos las piezas que querés usar.
                  </h2>
                  
                  <p className="font-body text-base md:text-lg text-tierra">
                    Relojes, joyas, mallas y pilas. Si algo se rompió o dejó de funcionar, traelo a nuestro propio taller.
                  </p>
                </div>

                {/* CTA */}
                <a 
                  href={getWaLink("Hola Cuore, quería consultar por una reparación")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultá por una reparación por WhatsApp"
                  className="w-full md:w-fit min-h-14 px-10 bg-accent text-background font-body font-bold text-sm tracking-[0.16em] uppercase rounded-sm flex items-center justify-center hover:opacity-90 transition-opacity duration-200 focus-visible:outline-accent"
                >
                  Consultá por reparación
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
