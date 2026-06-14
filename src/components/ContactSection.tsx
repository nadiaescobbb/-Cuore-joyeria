import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function ContactSection() {
  const ref = useReveal();

  return (
    <section id="contact" className="w-full bg-surface" ref={ref}>
      <div className="max-w-4xl mx-auto px-8 lg:px-20 py-16 lg:py-24 flex flex-col gap-12">
        <div className="flex flex-col items-start text-left">
          <span className="font-body text-[10px] font-bold tracking-[0.20em] text-accent uppercase mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-6xl lg:text-7xl font-normal leading-tight text-foreground mb-6">
            Escribinos antes de pasar.
          </h2>
          <p className="font-body text-base text-muted max-w-lg mb-8">
            Te respondemos por WhatsApp. Podés mandar una foto, preguntar por stock o pedir una referencia. Sin compromiso.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a 
              href={getWaLink("Hola Cuore, quería hacer una consulta antes de pasar")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribinos por WhatsApp"
              className="inline-flex items-center justify-center bg-accent text-background min-h-12 px-8 font-body font-bold text-sm tracking-[0.16em] w-fit hover:bg-tierra transition-colors duration-200 focus-visible:outline-accent"
            >
              Escribinos por WhatsApp
            </a>
            <a 
              href="https://instagram.com/cuore_joyas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Instagram de Cuore"
              className="inline-flex items-center justify-center border border-foreground/20 text-foreground min-h-12 px-8 font-body font-bold text-sm tracking-[0.16em] w-fit hover:bg-foreground/5 transition-colors duration-200 focus-visible:outline-accent"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-16 lg:gap-y-8 mt-4">
          <div>
            <span className="font-body text-xs font-bold tracking-[0.16em] text-foreground uppercase mb-1 block">
              Dirección
            </span>
            <p className="font-body text-sm text-muted">
              Av. Belgrano 616, Río Grande, Tierra del Fuego.
            </p>
          </div>
          <div>
            <span className="font-body text-xs font-bold tracking-[0.16em] text-foreground uppercase mb-1 block">
              Horarios
            </span>
            <p className="font-body text-sm text-muted">
              Lunes a Sábado de 10:00 a 12:30 y de 16:00 a 20:30hs.
            </p>
          </div>
          <div>
            <span className="font-body text-xs font-bold tracking-[0.16em] text-foreground uppercase mb-1 block">
              Envíos
            </span>
            <p className="font-body text-sm text-muted">
              A todo el país.
            </p>
          </div>
          <div>
            <span className="font-body text-xs font-bold tracking-[0.16em] text-foreground uppercase mb-1 block">
              Pagos
            </span>
            <p className="font-body text-sm text-muted">
              Efectivo, transferencia y tarjetas de crédito/débito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
