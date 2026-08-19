
import { SwatchCard } from '@/components/ui/SwatchCard';
import { swatchItems } from '@/data/swatches';

export function TrustSection() {
  return (
    <section id="trust" className="bg-background relative pt-12 pb-12 lg:pt-16 lg:pb-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20">
        
        {/* Encabezado de Sección */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground text-center mb-10 lg:mb-14">
          Por qué elegir Cuore.
        </h2>

        {/* Muestrario Grid (6 columnas en desktop, 1 columna en mobile, items-stretch) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 w-full items-stretch">
          {swatchItems.map((item) => (
            <SwatchCard
              key={item.id}
              label={item.label}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              textColor={item.textColor}
              labelColor={item.labelColor}
              colSpanClass={item.colSpanClass}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

