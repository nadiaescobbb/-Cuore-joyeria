import { useReveal } from '../hooks/use-reveal';
import { watches } from '../data/watches';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WatchSection() {
  const ref = useReveal();

  return (
    <section id="watches" className="max-w-[1440px] mx-auto px-4 md:px-20 py-16 md:py-24 bg-dark-surface text-background" ref={ref}>
      <div className="flex flex-col items-start text-left mb-16 w-full overflow-hidden">
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0) }
            to { transform: translateX(-50%) }
          }
        `}</style>
        <div 
          className="flex font-marquee uppercase font-bold tracking-[0.02em] text-4xl lg:text-6xl text-background leading-none w-max"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center">
              {['Casio', 'Bulova', 'Tommy Hilfiger', 'Orient', 'Citizen', 'Seiko'].map((brand, index) => (
                <div key={index} className="flex items-center whitespace-nowrap">
                  <span>{brand}</span>
                  <span className="text-gold text-[0.4em] mx-6 lg:mx-10">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 min-h-[600px]">
        <a 
          href={getWaLink(watches[0].waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col focus-visible:outline-accent overflow-hidden min-h-[400px] lg:min-h-0"
          aria-label={`Consultar por reloj ${watches[0].title} en WhatsApp`}
        >
          <img 
            src={watches[0].image} 
            alt={`Reloj ${watches[0].title}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/70 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 z-10 flex flex-col">
            <span className="font-body text-[10px] tracking-wide text-gold uppercase mb-1">
              {watches[0].category}
            </span>
            <h3 className="font-heading text-xl text-background leading-none">
              {watches[0].title}
            </h3>
          </div>
        </a>

        <div className="flex flex-col gap-3">
          {watches.slice(1).map((watch) => (
            <a 
              key={watch.id}
              href={getWaLink(watch.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 focus-visible:outline-accent overflow-hidden min-h-[300px] lg:min-h-0"
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
