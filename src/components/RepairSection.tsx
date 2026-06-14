import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function RepairSection() {
  const ref = useReveal();

  return (
    <section id="repairs" className="bg-dark px-5 lg:px-20 py-16 md:py-24" ref={ref}>
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
        
        {/* Header content */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-body text-[10px] font-bold tracking-[0.20em] text-gold uppercase">
            REPARACIONES
          </span>
          <h2 className="font-heading text-5xl lg:text-6xl font-normal leading-tight text-background">
            Reparamos las piezas que querés seguir usando.
          </h2>
          <p className="font-body text-sm lg:text-base text-background/70 max-w-lg mx-auto">
            Relojes, joyas, mallas y pilas. Si algo se rompió o dejó de funcionar, traelo. Trabajamos con taller propio y te damos presupuesto antes de empezar.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-16 md:gap-y-6 mt-4 w-fit mx-auto">
          <div className="font-body text-base lg:text-lg font-normal text-gold text-left">
            Reparación de relojes
          </div>
          <div className="font-body text-base lg:text-lg font-normal text-gold text-left">
            Cambio de pilas y mallas
          </div>
          <div className="font-body text-base lg:text-lg font-normal text-gold text-left">
            Reparación de joyas
          </div>
          <div className="font-body text-base lg:text-lg font-normal text-gold text-left">
            Grabado láser
          </div>
        </div>

        {/* CTA */}
        <a 
          href={getWaLink("Hola Cuore, quería consultar por una reparación")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultá por una reparación por WhatsApp"
          className="mt-6 border border-background/40 text-background bg-transparent hover:bg-background/10 transition-colors duration-200 min-h-12 px-8 font-body font-bold text-sm tracking-[0.16em] uppercase w-fit inline-flex items-center justify-center focus-visible:outline-gold"
        >
          Consultá por una reparación
        </a>

      </div>
    </section>
  );
}
