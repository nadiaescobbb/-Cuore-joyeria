

import { getWaLink } from '../constants/wa';

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-warm-100 py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
            <span className="font-body text-xs font-bold tracking-[0.20em] text-brand-gold uppercase">
              Contacto
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-warm-900">
              Consultas, arreglos y presupuestos.
            </h2>
            <p className="font-body text-sm md:text-base text-warm-800 max-w-lg leading-relaxed">
              Te respondemos por WhatsApp. Podés mandarnos una foto, preguntar por precios o pedir una referencia. Sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <a 
                href={getWaLink("Hola Cuore, quería hacer una consulta antes de pasar")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribinos por WhatsApp"
                className="inline-flex items-center justify-center gap-2 bg-action-primary text-warm-100 min-h-12 px-7 py-3.5 font-body font-bold text-xs md:text-sm tracking-[0.16em] uppercase hover:bg-action-primary-hover transition-colors duration-150 ease-linear focus-visible:outline-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-warm-100"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Escribirnos por WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/cuore_joyas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Instagram de Cuore"
                className="inline-flex items-center justify-center border border-warm-900 text-warm-900 min-h-12 px-7 py-3.5 font-body font-bold text-xs md:text-sm tracking-[0.16em] uppercase hover:bg-warm-200 transition-colors duration-150 ease-linear focus-visible:outline-accent"
              >
                Ver Instagram
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Info Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 pt-2">
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-brand-gold uppercase mb-2 block">
                Dirección
              </span>
              <p className="font-body text-sm text-warm-800 leading-relaxed">
                Av. Belgrano 616, Río Grande, Tierra del Fuego.
              </p>
            </div>
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-brand-gold uppercase mb-2 block">
                Horarios
              </span>
              <p className="font-body text-sm text-warm-800 leading-relaxed">
                Lunes a Sábado de 10:00 a 13:00 y de 16:00 a 20:30 hs.
              </p>
            </div>
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-brand-gold uppercase mb-2 block">
                Envíos
              </span>
              <p className="font-body text-sm text-warm-800 leading-relaxed">
                Enviamos dentro de Tierra del Fuego.
              </p>
            </div>
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-brand-gold uppercase mb-2 block">
                Pagos
              </span>
              <p className="font-body text-sm text-warm-800 leading-relaxed">
                Efectivo, transferencia y tarjetas de débito y crédito.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
