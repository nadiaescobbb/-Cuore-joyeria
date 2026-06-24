import { useReveal } from '../hooks/use-reveal';
import { watches } from '../data/watches';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WatchSection() {
  const ref = useReveal();

  return (
    <section id="watches" className="max-w-[1440px] mx-auto px-4 md:px-20 pt-8 pb-16 md:pt-12 md:pb-24 bg-dark-surface text-background" ref={ref}>
      <div className="flex flex-col items-start text-left mb-16 w-full overflow-hidden">
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0) }
            to { transform: translateX(-50%) }
          }
        `}</style>
        <div 
          className="flex font-marquee uppercase font-bold tracking-[0.02em] text-4xl md:text-5xl lg:text-6xl text-background leading-none w-max"
          style={{ 
            animation: 'marquee 30s linear infinite',
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-12 lg:gap-16 pr-12 lg:pr-16">
              {['Casio', 'Bulova', 'Tommy Hilfiger', 'Orient', 'Citizen', 'Seiko'].map((brand, index) => (
                <div key={index} className="flex items-center whitespace-nowrap">
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full max-w-md md:max-w-2xl lg:max-w-none mx-auto md:auto-rows-[600px] lg:auto-rows-[600px]">
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
    </section>
  );
}
