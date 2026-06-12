import { useReveal } from '../hooks/use-reveal';
import { trustPoints } from '../data/trust';

export function TrustSection() {
  const ref = useReveal();

  const [taller, experiencia, variedad, asesoramiento] = trustPoints;

  return (
    <section id="trust" className="bg-surface relative" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Left Column (Sticky Headline) */}
          <div className="md:col-span-5 md:sticky md:top-32">
            <h2 className="font-heading text-[48px] md:text-[64px] leading-[1.1] tracking-tight text-foreground mb-6 md:pr-4">
              Hay joyas que se compran una vez.<br className="hidden md:block" /> Y otras que se usan durante años.
            </h2>
            <p className="font-body text-base md:text-lg text-muted max-w-[40ch]">
              Por eso fabricamos, reparamos y personalizamos en nuestro propio taller.
            </p>
          </div>

          {/* Right Column (Asymmetric Editorial Layout) */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-16 md:gap-20 pt-8 md:pt-0">
            
            {/* Top row: 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
              {/* Item 1 */}
              <div className="border-t border-border pt-6">
                <span className="font-heading text-lg text-accent/80 block mb-3">01.</span>
                <h3 className="font-heading text-[32px] text-foreground tracking-tight leading-tight mb-3">
                  {taller.title}
                </h3>
                <p className="font-body text-base text-muted leading-relaxed">
                  {taller.description}
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="border-t border-border pt-6">
                <span className="font-heading text-lg text-accent/80 block mb-3">02.</span>
                <h3 className="font-heading text-[32px] text-foreground tracking-tight leading-tight mb-3">
                  {experiencia.title}
                </h3>
                <p className="font-body text-base text-muted leading-relaxed">
                  {experiencia.description}
                </p>
              </div>
            </div>

            {/* Break rhythm: Full width, larger type, left border on desktop */}
            <div className="border-t border-border pt-8 sm:pt-0 sm:pl-8 sm:border-l sm:border-t-0">
              <span className="font-heading text-lg text-accent/80 block mb-4">03.</span>
              <h3 className="font-heading text-[36px] sm:text-[40px] md:text-[56px] text-foreground tracking-tight leading-[1.05] mb-5 max-w-[15ch]">
                {variedad.title}
              </h3>
              <p className="font-body text-lg text-muted leading-relaxed max-w-[45ch]">
                {variedad.description}
              </p>
            </div>

            {/* Closing item: Soft background inversion */}
            <div className="bg-background/80 backdrop-blur-sm p-8 sm:p-10 border border-border">
              <span className="font-heading text-lg text-accent/80 block mb-3">04.</span>
              <h3 className="font-heading text-[32px] text-foreground tracking-tight leading-tight mb-3">
                {asesoramiento.title}
              </h3>
              <p className="font-body text-base text-muted leading-relaxed">
                {asesoramiento.description}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
