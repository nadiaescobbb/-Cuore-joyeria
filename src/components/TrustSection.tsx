import { useReveal } from '../hooks/use-reveal';
import { trustPoints } from '../data/trust';

export function TrustSection() {
  const ref = useReveal();

  return (
    <section id="trust" className="max-w-[1440px] mx-auto px-4 md:px-20 py-16 md:py-24 bg-surface" ref={ref}>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-4 md:col-span-12 lg:col-span-10 text-left mb-12">
          <h2 className="font-heading text-[48px] md:text-[72px] leading-tight tracking-tight text-foreground mb-6">
            Hay joyas que se compran una vez. Y otras que se usan durante años.
          </h2>
          <p className="font-body text-body md:text-lg text-muted max-w-[70ch] text-left">
            Por eso fabricamos, reparamos y personalizamos en nuestro propio taller.
          </p>
        </div>

        {trustPoints.map((point) => (
          <div key={point.id} className="col-span-4 md:col-span-6 lg:col-span-6 flex flex-col text-left pr-4">
            <h3 className="font-heading text-[30px] md:text-[36px] text-accent mb-4 tracking-tight leading-tight">
              {point.title}
            </h3>
            <p className="font-body text-body text-muted leading-relaxed max-w-[70ch]">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
