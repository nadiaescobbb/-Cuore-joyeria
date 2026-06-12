import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function ContactSection() {
  const ref = useReveal();

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-4 md:px-20 py-16 md:py-24" ref={ref}>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-4 md:col-span-6 flex flex-col items-start text-left">
          <span className="font-body text-label font-bold tracking-wide text-muted uppercase mb-4">
            Datos para confiar
          </span>
          <h2 className="font-heading text-[48px] md:text-[72px] leading-tight tracking-tight text-foreground mb-6">
            Consultá antes de pasar.
          </h2>
          <p className="font-body text-body text-muted leading-relaxed max-w-[70ch] mb-8">
            Estamos en el centro de Río Grande. Podés preguntar por stock, mandar una referencia o coordinar retiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={getWaLink("Hola Cuore, quería hacer una consulta antes de pasar")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultá antes de pasar por WhatsApp"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-body font-bold text-body tracking-normal hover:bg-tierra transition-colors duration-200 focus-visible:outline-accent"
            >
              Consultá antes de pasar
            </a>
            <a 
              href="https://instagram.com/cuore_joyas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Instagram de Cuore"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground border border-border font-body font-bold text-body tracking-normal hover:bg-surface transition-colors duration-200 focus-visible:outline-accent"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="col-span-4 md:col-span-5 md:col-start-8 flex flex-col gap-8 mt-12 md:mt-0 pt-4 border-t md:border-t-0 md:border-l border-border md:pl-10">
          <div>
            <h3 className="font-body text-body font-bold text-foreground mb-1">Dirección</h3>
            <p className="font-body text-body text-muted">Av. Belgrano 616, Río Grande, Tierra del Fuego.</p>
          </div>
          <div>
            <h3 className="font-body text-body font-bold text-foreground mb-1">Horarios</h3>
            <p className="font-body text-body text-muted">Lunes a Sábado de 10:00 a 12:30 y de 16:00 a 20:30hs.</p>
          </div>
          <div>
            <h3 className="font-body text-body font-bold text-foreground mb-1">Envíos</h3>
            <p className="font-body text-body text-muted">A Tierra del Fuego y a todo el país.</p>
          </div>
          <div>
            <h3 className="font-body text-body font-bold text-foreground mb-1">Pagos</h3>
            <p className="font-body text-body text-muted">Efectivo, transferencia y tarjetas de crédito/débito.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
