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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <a 
            key={cat.id}
            href={getWaLink(cat.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col focus-visible:outline-accent"
            aria-label={`Consultar por ${cat.name} en WhatsApp`}
          >
            <div className="w-full aspect-square overflow-hidden bg-surface mb-6">
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-heading text-[30px] md:text-[36px] tracking-tight text-foreground mb-2">
              {cat.name}
            </h3>
            <p className="font-body text-body text-muted leading-relaxed">
              {cat.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
