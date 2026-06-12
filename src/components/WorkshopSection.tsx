import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WorkshopSection() {
  const ref = useReveal();

  return (
    <section id="workshop" className="max-w-[1440px] mx-auto px-4 md:px-20 py-16 md:py-24" ref={ref}>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className="col-span-4 md:col-span-6 order-2 md:order-1">
          <img 
            src="/images/craf.avif" 
            alt="Trabajo artesanal en el taller de Cuore"
            className="w-full h-auto object-cover aspect-square"
          />
        </div>
        <div className="col-span-4 md:col-span-6 flex flex-col items-start text-left order-1 md:order-2">
          <span className="font-body text-label font-bold tracking-wide text-muted uppercase mb-4">
            Taller y fabricación
          </span>
          <h2 className="font-heading text-[48px] md:text-[72px] leading-tight tracking-tight text-foreground mb-6">
            Fabricamos alianzas en nuestro taller.
          </h2>
          <p className="font-body text-body text-muted leading-relaxed max-w-[70ch] mb-8">
            Elegís material, medida, ancho y grabado. Te pasamos presupuesto por WhatsApp antes de pasar. Cada alianza sale de nuestro taller en Río Grande.
          </p>
          
          <ul className="flex flex-col gap-3 font-body text-body text-foreground font-medium mb-8">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Referencia
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Medida y material
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Grabado y entrega
            </li>
          </ul>

          <a 
            href={getWaLink("Hola Cuore, quería cotizar alianzas")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cotizar alianzas por WhatsApp"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-body font-bold text-body tracking-normal hover:bg-tierra transition-colors duration-200 focus-visible:outline-accent"
          >
            Cotizar alianzas
          </a>
        </div>
      </div>
    </section>
  );
}
