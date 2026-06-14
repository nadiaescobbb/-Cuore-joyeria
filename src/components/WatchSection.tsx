import { useReveal } from '../hooks/use-reveal';
import { watches } from '../data/watches';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function WatchSection() {
  const ref = useReveal();

  return (
    <section id="watches" className="max-w-[1440px] mx-auto px-4 md:px-20 py-16 md:py-24 bg-dark-surface text-background" ref={ref}>
      <div className="flex flex-col items-start text-left mb-16 w-full overflow-hidden">
        <span className="font-body text-label font-bold tracking-wide text-gold uppercase mb-4">
          Relojería
        </span>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0) }
            to { transform: translateX(-50%) }
          }
        `}</style>
        <div 
          className="flex font-heading text-5xl lg:text-7xl font-normal text-background leading-none w-max"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center">
              {['Casio', 'Tommy Hilfiger', 'Oriental', 'Bulova', 'Casio', 'Tommy Hilfiger', 'Oriental', 'Bulova'].map((brand, index) => (
                <div key={index} className="flex items-center whitespace-nowrap">
                  <span>{brand}</span>
                  <span className="text-gold mx-8 lg:mx-12">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {watches.map((watch) => (
          <a 
            key={watch.id}
            href={getWaLink(watch.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col focus-visible:outline-accent"
            aria-label={`Consultar por reloj ${watch.title} en WhatsApp`}
          >
            <div className="w-full aspect-square overflow-hidden bg-dark mb-6">
              <img 
                src={watch.image} 
                alt={`Reloj ${watch.title}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>
            <span className="font-body text-label font-bold tracking-wide text-gold uppercase mb-2">
              {watch.category}
            </span>
            <h3 className="font-heading text-[30px] md:text-[36px] tracking-tight text-background">
              {watch.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
