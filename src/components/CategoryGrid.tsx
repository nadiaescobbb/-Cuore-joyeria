
import { categories } from '../data/categories';
import { getWaLink } from '../constants/wa';

export function CategoryGrid() {
  const jewelryCategories = categories.filter(cat => cat.id !== 'relojes');

  return (
    <div className="w-full bg-warm-200">
      <section id="categories" className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 py-12 lg:py-16">
        
        {/* Encabezado */}
        <div className="w-full flex flex-col items-center text-center mb-10 md:mb-14">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-warm-900">
            Nuestro catálogo de joyas.
          </h2>
        </div>

        {/* Grilla Simétrica 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {jewelryCategories.map((category) => (
            <a
              key={category.id}
              href={getWaLink(category.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col w-full aspect-[4/3] focus-visible:outline-accent overflow-hidden rounded-[3px] shadow-sm"
            >
              {/* Imagen de fondo */}
              <img 
                loading="lazy"
                src={category.image} 
                alt={`${category.name} — joyería Cuore`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" 
              />
              
              {/* Overlay oscuro gradiente uniforme para contraste WCAG AA (>4.5:1) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 group-hover:from-black/90 group-hover:via-black/55 transition-colors duration-300 pointer-events-none" />

              {/* Texto centrado en la imagen */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center pointer-events-none z-10">
                <h3 className="font-body text-xs md:text-sm font-bold tracking-[0.25em] text-white uppercase mb-2 drop-shadow-sm">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="font-body text-xs md:text-sm text-warm-200 max-w-xs leading-relaxed drop-shadow-sm">
                    {category.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

      </section>
    </div>
  );
}
