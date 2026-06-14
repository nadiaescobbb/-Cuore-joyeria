import { useReveal } from '../hooks/use-reveal';

export function TrustSection() {
  const ref = useReveal();

  return (
    <section id="trust" className="bg-surface relative" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] xl:grid-cols-[0.9fr_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column (Sticky Headline) */}
          <div className="lg:sticky lg:top-24">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-none text-foreground">
              Por qué elegir Cuore.
            </h2>
          </div>

          {/* Right Column (Simple Rows) */}
          <div className="flex flex-col gap-10 lg:gap-14">
            
            <div>
              <h3 className="font-heading text-4xl lg:text-5xl font-medium text-foreground">
                Taller propio
              </h3>
              <p className="font-body text-sm text-muted mt-2">
                Fabricamos y reparamos en el local.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-4xl lg:text-5xl font-medium text-foreground">
                Más de 40 años
              </h3>
              <p className="font-body text-sm text-muted mt-2">
                En el mismo local, con el mismo oficio.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-4xl lg:text-5xl font-medium text-foreground">
                Una de las joyerías más grandes de la provincia
              </h3>
              <p className="font-body text-sm text-muted mt-2">
                Más de 30 marcas de relojes. Stock con renovación permanente. Variedad real para elegir.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-4xl lg:text-5xl font-medium text-foreground">
                Asesoramiento real
              </h3>
              <p className="font-body text-sm text-muted mt-2">
                Contanos qué necesitás. Te ayudamos a elegir sin apuro.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
