

import { getWaLink } from '../constants/wa';
import { WhatsappLogo } from '@phosphor-icons/react';

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#FAF8F3] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
            <span className="font-body text-xs font-bold tracking-[0.20em] text-[#B89B5E] uppercase">
              Contacto
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground">
              Consultas, arreglos y presupuestos.
            </h2>
            <p className="font-body text-sm md:text-base text-tierra/90 max-w-lg leading-relaxed">
              Te respondemos por WhatsApp. Podés mandarnos una foto, preguntar por precios o pedir una referencia. Sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <a 
                href={getWaLink("Hola Cuore, quería hacer una consulta antes de pasar")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribinos por WhatsApp"
                className="inline-flex items-center justify-center gap-2 bg-[#2A2421] text-background min-h-12 px-7 py-3.5 font-body font-bold text-xs md:text-sm tracking-[0.16em] uppercase hover:bg-black transition-colors duration-150 ease-linear focus-visible:outline-accent"
              >
                <WhatsappLogo className="w-5 h-5 text-background" weight="fill" />
                <span>Escribirnos por WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/cuore_joyas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Instagram de Cuore"
                className="inline-flex items-center justify-center border border-[#2A2421] text-[#2A2421] min-h-12 px-7 py-3.5 font-body font-bold text-xs md:text-sm tracking-[0.16em] uppercase hover:bg-[#2A2421]/5 transition-colors duration-150 ease-linear focus-visible:outline-accent"
              >
                Ver Instagram
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Info Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 pt-2">
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-[#B89B5E] uppercase mb-2 block">
                Dirección
              </span>
              <p className="font-body text-sm text-tierra/90 leading-relaxed">
                Av. Belgrano 616, Río Grande, Tierra del Fuego.
              </p>
            </div>
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-[#B89B5E] uppercase mb-2 block">
                Horarios
              </span>
              <p className="font-body text-sm text-tierra/90 leading-relaxed">
                Lunes a Sábado de 10:00 a 13:00 y de 16:00 a 20:30 hs.
              </p>
            </div>
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-[#B89B5E] uppercase mb-2 block">
                Envíos
              </span>
              <p className="font-body text-sm text-tierra/90 leading-relaxed">
                Enviamos dentro de Tierra del Fuego.
              </p>
            </div>
            <div>
              <span className="font-body text-xs font-bold tracking-[0.20em] text-[#B89B5E] uppercase mb-2 block">
                Pagos
              </span>
              <p className="font-body text-sm text-tierra/90 leading-relaxed">
                Efectivo, transferencia y tarjetas de débito y crédito.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
