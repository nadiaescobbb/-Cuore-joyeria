import { useReveal } from '../hooks/use-reveal';
import { repairServices } from '../data/repairs';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function RepairSection() {
  const ref = useReveal();

  return (
    <section id="repairs" className="max-w-[1440px] mx-auto px-4 md:px-20 py-16 md:py-24 bg-surface" ref={ref}>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-4 md:col-span-8 flex flex-col items-start text-left">
          <span className="font-body text-label font-bold tracking-wide text-muted uppercase mb-4">
            Reparaciones
          </span>
          <h2 className="font-heading text-[48px] md:text-[72px] leading-tight tracking-tight text-foreground mb-6">
            Reparamos las piezas que querés seguir usando.
          </h2>
          <p className="font-body text-body text-muted leading-relaxed max-w-[70ch] mb-8">
            Relojes, joyas, mallas y pilas. Si algo se rompió o dejó de funcionar, traelo. Trabajamos con taller propio y te damos presupuesto antes de empezar.
          </p>
          
          <ul className="flex flex-col gap-4 font-body text-body text-foreground font-medium mb-10 w-full">
            {repairServices.map((service) => (
              <li key={service.id} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                {service.name}
              </li>
            ))}
          </ul>

          <a 
            href={getWaLink("Hola Cuore, quería consultar por una reparación")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultá por una reparación por WhatsApp"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-body font-bold text-body tracking-normal hover:bg-tierra transition-colors duration-200 focus-visible:outline-accent"
          >
            Consultá por una reparación
          </a>
        </div>
      </div>
    </section>
  );
}
