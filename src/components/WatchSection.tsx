import { useState, useCallback, useEffect } from 'react';
import { useReveal } from '../hooks/use-reveal';
import { watches } from '../data/watches';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';

const BRANDS = ['Casio', 'Bulova', 'Tommy Hilfiger', 'Orient', 'Citizen', 'Lorus', 'Montreal', 'Festina'];
const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WatchSection() {
  const ref = useReveal();

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    slidesToScroll: 2,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 4 }
    }
  }, [Fade()]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section id="watches" className="w-full bg-dark-surface text-background" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 pt-section pb-item">
      
      {/* Brands Carousel */}
      <div className="w-full max-w-5xl mx-auto mb-group">
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
          <div className="flex justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-background w-8' : 'bg-background/30 hover:bg-background/50 w-1.5'}`}
                onClick={() => scrollTo(index)}
                aria-label={`Ir a la página ${index + 1}`}
              />
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
              src={watch.image} 
              alt={`Reloj ${watch.title}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
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
