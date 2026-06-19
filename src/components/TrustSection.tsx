import { useReveal } from '../hooks/use-reveal';

export function TrustSection() {
  const ref = useReveal();

  return (
    <section id="trust" className="bg-surface relative" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-5 py-16 md:px-20 md:py-32">
        <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-[0.8fr_1fr] xl:grid-cols-[0.9fr_1fr] gap-0 md:gap-16 lg:gap-24 items-start">
          
          {/* Left Column (Sticky Headline) */}
          <div className="lg:sticky lg:top-24 mb-0">
            <h2 className="font-heading text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-none text-foreground overflow-visible">
              Por qué elegir Cuore.
            </h2>
          </div>

          {/* Right Column (Editorial Numbers on mobile / Simple Rows on desktop) */}
          <div className="flex flex-col gap-10 md:gap-10 lg:gap-14 mt-10 md:mt-0">
            
            <div className="relative">
              <span className="absolute -top-5 -left-2 font-heading text-[8rem] leading-none text-foreground/6 pointer-events-none select-none z-0 md:hidden">
                01
              </span>
              <div className="relative z-10">
                <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal md:font-medium leading-tight md:leading-tight text-foreground">
                  Taller propio
                </h3>
                <p className="font-body text-sm text-muted mt-1 md:mt-2">
                  Fabricamos y reparamos en el local.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <span className="absolute -top-5 -left-2 font-heading text-[8rem] leading-none text-foreground/6 pointer-events-none select-none z-0 md:hidden">
                02
              </span>
              <div className="relative z-10">
                <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal md:font-medium leading-tight md:leading-tight text-foreground">
                  Más de 40 años
                </h3>
                <p className="font-body text-sm text-muted mt-1 md:mt-2">
                  En el mismo local, con el mismo oficio.
                </p>
              </div>
            </div>

            <div className="relative">
              <span className="absolute -top-5 -left-2 font-heading text-[8rem] leading-none text-foreground/6 pointer-events-none select-none z-0 md:hidden">
                03
              </span>
              <div className="relative z-10">
                <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal md:font-medium leading-tight md:leading-tight text-foreground">
                  Una de las joyerías más grandes de la provincia
                </h3>
                <p className="font-body text-sm text-muted mt-1 md:mt-2">
                  Más de 30 marcas de relojes. Stock con renovación permanente. Variedad real para elegir.
                </p>
              </div>
            </div>

            <div className="relative">
              <span className="absolute -top-5 -left-2 font-heading text-[8rem] leading-none text-foreground/6 pointer-events-none select-none z-0 md:hidden">
                04
              </span>
              <div className="relative z-10">
                <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal md:font-medium leading-tight md:leading-tight text-foreground">
                  Asesoramiento real
                </h3>
                <p className="font-body text-sm text-muted mt-1 md:mt-2">
                  Contanos qué necesitás. Te ayudamos a elegir sin apuro.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
