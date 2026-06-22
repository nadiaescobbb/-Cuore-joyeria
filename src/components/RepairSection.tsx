import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function RepairSection() {
  const ref = useReveal();

  return (
    <section id="repairs" className="bg-dark px-8 lg:px-20 py-16 lg:py-24" ref={ref}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-16 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-md md:max-w-2xl lg:max-w-none">
          <span className="font-body text-[10px] font-bold tracking-[0.20em] text-gold uppercase text-left">
            REPARACIONES
          </span>
          <h2 className="font-heading text-5xl lg:text-6xl font-normal leading-tight text-background text-left">
            Reparamos las piezas que querés seguir usando.
          </h2>
          <p className="font-body text-sm lg:text-base text-background/70 max-w-lg md:max-w-2xl lg:max-w-lg text-left">
            Relojes, joyas, mallas y pilas. Si algo se rompió o dejó de funcionar, traelo. Trabajamos las reparaciones en nuestro propio taller.
          </p>

          {/* Servicios */}
          <div className="flex flex-col gap-3 mt-2">
            <span className="font-body text-base font-normal text-gold text-left">Reparación de relojes</span>
            <span className="font-body text-base font-normal text-gold text-left">Cambio de pilas y mallas</span>
            <span className="font-body text-base font-normal text-gold text-left">Reparación de joyas</span>
          </div>

          {/* CTA */}
          <a 
            href={getWaLink("Hola Cuore, quería consultar por una reparación")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultá por una reparación por WhatsApp"
            className="mt-4 border border-background/40 text-background bg-transparent hover:bg-background/10 transition-colors duration-200 min-h-12 px-8 font-body font-bold text-sm tracking-[0.16em] uppercase w-fit inline-flex items-center justify-center focus-visible:outline-gold"
          >
            Consultá por una reparación
          </a>
        </div>

        {/* Right Column (Decorative) */}
        <div className="hidden lg:flex items-end justify-end self-end">
          <span className="font-heading text-[12rem] lg:text-[16rem] text-background/5 leading-none pointer-events-none select-none">
            04
          </span>
        </div>

      </div>
    </section>
  );
}
