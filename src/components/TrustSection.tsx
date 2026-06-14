import { useReveal } from '../hooks/use-reveal';

export function TrustSection() {
  const ref = useReveal();

  return (
    <section id="trust" className="bg-surface relative" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column (Sticky Headline) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-heading text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-foreground mb-6">
              Por qué elegir Cuore.
            </h2>
            <p className="font-body text-sm text-muted max-w-[40ch]">
              Por eso fabricamos, reparamos y personalizamos en nuestro propio taller.
            </p>
          </div>

          {/* Right Column (Simple Rows) */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="py-10">
              <h3 className="font-heading text-2xl lg:text-3xl font-normal text-foreground mb-2">
                Taller propio
              </h3>
              <p className="font-body text-sm text-muted">
                Fabricamos y reparamos en el local.
              </p>
            </div>
            
            <div className="py-10">
              <h3 className="font-heading text-2xl lg:text-3xl font-normal text-foreground mb-2">
                Más de 40 años
              </h3>
              <p className="font-body text-sm text-muted">
                Más de 40 años en Río Grande.
              </p>
            </div>

            <div className="py-10">
              <h3 className="font-heading text-2xl lg:text-3xl font-normal text-foreground mb-2">
                Una de las joyerías más grandes de la provincia
              </h3>
              <p className="font-body text-sm text-muted">
                Más de 30 marcas de relojes. Stock con renovación permanente. Variedad real para elegir.
              </p>
            </div>

            <div className="py-10">
              <h3 className="font-heading text-2xl lg:text-3xl font-normal text-foreground mb-2">
                Asesoramiento real
              </h3>
              <p className="font-body text-sm text-muted">
                Contanos qué necesitás. Te ayudamos a elegir sin apuro.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
