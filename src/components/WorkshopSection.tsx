

import { getWaLink } from '../constants/wa';

export function WorkshopSection() {
  return (
    <section className="w-full bg-warm-100 relative pt-16 md:pt-20 lg:pt-24 pb-24 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full">

          {/* CARD 1 - FABRICACIÓN PROPIA */}
          <div id="workshop" className="flex flex-col w-full overflow-hidden bg-warm-200 border border-warm-300 rounded-[3px]">
            {/* Top Image */}
            <div className="w-full aspect-[4/3] relative overflow-hidden bg-warm-200">
              <img
                loading="lazy"
                src="/alianzasrepair.avif"
                alt="Trabajo artesanal en el taller de Cuore"
                className="w-full h-full object-cover object-[center_80%]"
              />
            </div>

            {/* Bottom Card Content */}
            <div className="w-full p-8 md:p-10 flex flex-col justify-between flex-1 items-start text-left gap-6">
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <span className="font-mono text-micro font-medium uppercase tracking-[0.2em] text-brand-gold">
                  Fabricación propia
                </span>

                <h2 className="font-heading text-2xl md:text-h2 font-normal leading-tight text-warm-900">
                  Alianzas: En oro 18kt · Plata con Oro · Plata 925
                </h2>

                <p className="font-body text-subtle md:text-body text-warm-800 leading-relaxed">
                  Elegís el material, la medida y el grabado. Cada alianza se hace acá, en Río Grande.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={getWaLink("Hola Cuore, quería cotizar alianzas")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cotizar alianzas por WhatsApp"
                className="w-fit px-8 py-4 bg-action-primary text-warm-100 font-body text-tag font-semibold tracking-[0.16em] uppercase flex items-center justify-center hover:bg-action-primary-hover transition-colors duration-150 ease-linear focus-visible:outline-accent mt-2"
              >
                Cotizar alianzas
              </a>
            </div>
          </div>

          {/* CARD 2 - REPARACIONES */}
          <div id="repairs" className="flex flex-col w-full overflow-hidden bg-warm-200 border border-warm-300 rounded-[3px]">
            {/* Top Image */}
            <div className="w-full aspect-[4/3] relative overflow-hidden bg-warm-200">
              <img
                loading="lazy"
                src="/repair_workshop.png"
                alt="Servicio de reparación de joyas"
                className="w-full h-full object-cover object-[center_65%]"
              />
            </div>

            {/* Bottom Card Content */}
            <div className="w-full p-8 md:p-10 flex flex-col justify-between flex-1 items-start text-left gap-6">
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <span className="font-mono text-micro font-medium uppercase tracking-[0.2em] text-brand-gold">
                  Reparaciones
                </span>

                <h2 className="font-heading text-2xl md:text-h2 font-normal leading-tight text-warm-900">
                  Reparamos las piezas que querés usar.
                </h2>

                <p className="font-body text-subtle md:text-body text-warm-800 leading-relaxed">
                  Joyas en plata y oro. Si algo se rompió o necesita un ajuste, traelo y lo arreglamos acá.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={getWaLink("Hola Cuore, quería consultar por una reparación")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultá por una reparación por WhatsApp"
                className="w-fit px-8 py-4 bg-action-primary text-warm-100 font-body text-tag font-semibold tracking-[0.16em] uppercase flex items-center justify-center hover:bg-action-primary-hover transition-colors duration-150 ease-linear focus-visible:outline-accent mt-2"
              >
                Consulta por reparación
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
