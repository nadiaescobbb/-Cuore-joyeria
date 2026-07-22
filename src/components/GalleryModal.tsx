import { useEffect } from 'react';
import { X } from 'lucide-react';
import { getWaLink } from '../constants/wa';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  waMessage: string;
}

export function GalleryModal({ isOpen, onClose, title, images, waMessage }: GalleryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      
      <div className="bg-background w-full max-w-6xl max-h-full rounded-sm flex flex-col relative overflow-hidden z-10 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-surface">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground uppercase tracking-wide">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-full transition-colors focus-visible:outline-accent"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Scrollable Gallery */}
        <div className="flex-1 overflow-y-auto p-6 bg-surface">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="aspect-[3/4] rounded-sm overflow-hidden bg-background shadow-sm">
                <img 
                  src={src} 
                  alt={`Reloj ${title} — modelo ${idx + 1} de la colección en Cuore, Río Grande`} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-surface flex flex-col md:flex-row items-center justify-between gap-4 bg-background">
          <p className="font-body text-sm text-foreground/80 max-w-md text-center md:text-left">
            ¿Te interesó algún modelo en particular de esta línea? Escribinos por WhatsApp para consultar stock y precios.
          </p>
          <a
            href={getWaLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center px-8 min-h-12 bg-cta text-background font-body font-bold text-sm tracking-normal uppercase hover:bg-cta-hover transition-colors duration-150 focus-visible:outline-accent"
          >
            CONSULTAR POR WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}
