import { useState, useCallback, useEffect } from 'react';

import { watches } from '../data/watches';
import useEmblaCarousel from 'embla-carousel-react';

const BRANDS = ['Casio', 'Bulova', 'Festina', 'Orient', 'Tissot', 'Swatch', 'Citizen', 'Tommy Hilfiger', 'Seiko', 'Ferrari', 'Hummer', 'Hugo Boss', 'Tressa', 'Montreal', 'Máxima', 'Puma'];
import { getWaLink } from '../constants/wa';

export function WatchSection() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps'
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 4 : 2);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(BRANDS.length / itemsPerPage);
  const activeDotIndex = Math.min(Math.floor(selectedIndex / itemsPerPage), Math.max(0, totalPages - 1));

  const scrollToPage = useCallback((pageIndex: number) => {
    if (emblaApi) emblaApi.scrollTo(pageIndex * itemsPerPage);
  }, [emblaApi, itemsPerPage]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="watches" className="w-full bg-dark-surface text-background">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 pt-section pb-item">
      
      {/* Brands Carousel */}
      <div className="w-full max-w-5xl mx-auto mb-item">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex backface-hidden touch-pan-y flex-row -ml-4 md:-ml-8">
            {BRANDS.map((brand, index) => (
              <div 
                key={index} 
                className="flex-none min-w-0 w-1/2 lg:w-1/4 pl-4 md:pl-8"
              >
                <div className="flex items-center justify-center text-center whitespace-nowrap w-full font-marquee uppercase font-bold tracking-[0.02em] text-2xl md:text-3xl lg:text-4xl text-background leading-none select-none cursor-grab active:cursor-grabbing">
                  <span>{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-[var(--spacing-item)]">
          <div className="flex justify-center gap-3 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className="w-11 h-11 flex items-center justify-center focus-visible:outline-accent group"
                onClick={() => scrollToPage(index)}
                aria-label={`Ir a la página ${index + 1}`}
              >
                <span className={`h-1.5 rounded-full transition-all duration-300 ease-in-out ${index === activeDotIndex ? 'bg-background w-8' : 'bg-background/30 group-hover:bg-background/50 w-1.5'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-item w-full max-w-md md:max-w-2xl lg:max-w-none mx-auto md:auto-rows-[600px] lg:auto-rows-[600px]">
        {watches.map((watch) => (
          <a 
            key={watch.id}
            href={getWaLink(watch.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col focus-visible:outline-accent overflow-hidden min-h-[450px] md:min-h-0"
            aria-label={`Consultar por reloj ${watch.title} en WhatsApp`}
          >
            <img 
              loading="lazy"
              src={watch.image} 
              alt={`Reloj ${watch.title}`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/70 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 z-10 flex flex-col">
              <span className="font-body text-[10px] tracking-wide text-gold uppercase mb-1">
                {watch.category}
              </span>
              <h3 className="font-heading text-xl text-background leading-none">
                {watch.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
}
