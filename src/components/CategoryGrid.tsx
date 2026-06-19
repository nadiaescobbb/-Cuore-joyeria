import { useReveal } from '../hooks/use-reveal';
import { categories } from '../data/categories';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function CategoryGrid() {
  const ref = useReveal();

  return (
    <section id="categories" className="max-w-[1440px] mx-auto px-4 md:px-20 py-16 md:py-24" ref={ref}>
      <div className="w-full flex flex-col items-start text-left mb-12">
        <span className="font-body text-label font-bold tracking-wide text-muted uppercase mb-4">
          Por dónde empezar
        </span>
        <h2 className="font-heading text-[48px] md:text-[72px] leading-tight tracking-tight text-foreground mb-4">
          Elegí una categoría y escribinos.
        </h2>
        <p className="font-body text-body md:text-lg text-muted max-w-[70ch]">
          Mandanos una referencia, una foto o una captura. Te ayudamos a encontrar lo que estás buscando.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {/* Joyería - 3 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-6">
          {categories.slice(0, 3).map((cat, index) => (
            <a 
              key={cat.id}
              href={getWaLink(cat.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col focus-visible:outline-accent ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
              aria-label={`Consultar por ${cat.name} en WhatsApp`}
            >
              <div className={`w-full overflow-hidden bg-surface mb-4 md:mb-6 ${index === 2 ? 'aspect-[2/1] md:aspect-[4/5]' : 'aspect-square md:aspect-[4/5]'}`}>
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-[24px] md:text-[30px] tracking-tight text-foreground mb-1 md:mb-2">
                {cat.name}
              </h3>
              <p className="font-body text-sm md:text-body text-muted leading-relaxed">
                {cat.description}
              </p>
            </a>
          ))}
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-border"></div>

        {/* Relojería - Big Card */}
        {categories[3] && (
          <a
            href={getWaLink(categories[3].waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center focus-visible:outline-accent bg-surface p-8 md:p-12 lg:p-16 rounded-sm"
            aria-label={`Consultar por ${categories[3].name} en WhatsApp`}
          >
            <div className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden order-1 md:order-2">
              <img 
                src={categories[3].image} 
                alt={categories[3].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-start order-2 md:order-1 text-left w-full">
              <span className="font-body text-[10px] font-bold tracking-[0.20em] text-accent uppercase mb-4">
                La otra mitad de Cuore
              </span>
              <h3 className="font-heading text-[48px] md:text-[56px] lg:text-[72px] leading-none tracking-tight text-foreground mb-4">
                {categories[3].name}
              </h3>
              <p className="font-body text-base md:text-lg text-muted leading-relaxed max-w-md">
                {categories[3].description}
              </p>
              <span className="mt-8 font-body text-sm font-bold tracking-[0.16em] uppercase text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                Ver opciones <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
