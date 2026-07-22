import { useState, useCallback, useEffect } from 'react';

import { watches } from '../data/watches';
import useEmblaCarousel from 'embla-carousel-react';
import { getWaLink } from '../constants/wa';
import { ImageOverlay } from './ImageOverlay';
import { GalleryModal } from './GalleryModal';
import { ArrowRight } from 'lucide-react';

const BRANDS = ['Casio', 'Bulova', 'Festina', 'Orient', 'Tissot', 'Swatch', 'Citizen', 'Tommy Hilfiger', 'Seiko', 'Ferrari', 'Hummer', 'Hugo Boss', 'Tressa', 'Montreal', 'Máxima', 'Puma'];

export function WatchSection() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps'
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [selectedGallery, setSelectedGallery] = useState<{title: string, images: string[], waMessage: string} | null>(null);

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

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(1, clickX / rect.width));
    const pageIndex = Math.min(Math.floor(progress * totalPages), totalPages - 1);
    scrollToPage(pageIndex);
  }, [totalPages, scrollToPage]);

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
        <div className="flex items-center justify-center mt-[var(--spacing-item)] w-full px-4">
          <div 
            className="w-full max-w-xs h-8 flex items-center cursor-pointer group"
            onClick={handleProgressClick}
            role="progressbar"
            aria-valuenow={activeDotIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalPages}
            aria-label="Progreso del carousel de marcas"
          >
            <div className="w-full h-1.5 bg-background/30 rounded-full relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-background transition-all duration-300 ease-in-out rounded-full"
                style={{ width: `${((activeDotIndex + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-item w-full max-w-md md:max-w-2xl lg:max-w-none mx-auto md:auto-rows-[600px] lg:auto-rows-[600px]">
        {watches.map((watch) => {
          const content = (
            <>
              <img 
                loading="lazy"
                src={watch.image} 
                alt={`Reloj ${watch.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <ImageOverlay className="group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-4 z-10 flex flex-col px-6 md:px-8">
                <span className="font-body text-[10px] tracking-wide text-accent uppercase mb-1">
                  {watch.category}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl text-background leading-none">
                  {watch.title}
                </h3>
                {watch.galleryImages && (
                  <span className="mt-4 flex items-center text-sm font-body font-bold uppercase tracking-wider text-background/0 group-hover:text-background transition-colors duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Ver colección <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                )}
              </div>
            </>
          );

          if (watch.galleryImages) {
            return (
              <button
                key={watch.id}
                onClick={() => setSelectedGallery({ title: watch.title, images: watch.galleryImages!, waMessage: watch.waMessage })}
                className="group relative flex flex-col focus-visible:outline-accent overflow-hidden min-h-[450px] md:min-h-0 text-left cursor-pointer"
                aria-label={`Ver colección de relojes ${watch.title}`}
              >
                {content}
              </button>
            );
          }

          return (
            <a 
              key={watch.id}
              href={getWaLink(watch.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col focus-visible:outline-accent overflow-hidden min-h-[450px] md:min-h-0"
              aria-label={`Consultar por reloj ${watch.title} en WhatsApp`}
            >
              {content}
            </a>
          );
        })}
      </div>
      </div>

      <GalleryModal
        isOpen={!!selectedGallery}
        onClose={() => setSelectedGallery(null)}
        title={selectedGallery?.title || ''}
        images={selectedGallery?.images || []}
        waMessage={selectedGallery?.waMessage || ''}
      />
    </section>
  );
}
