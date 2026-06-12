import { useReveal } from '../hooks/use-reveal';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function Hero() {
  const ref = useReveal();

  return (
    <section id="hero" className="relative w-full h-[100dvh]" ref={ref}>
      <img 
        src="/images/hero.avif" 
        alt="Nuestras manos trabajando en joyería Cuore"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark/60 to-transparent pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-full px-4 pb-10 md:px-8 md:pb-12 lg:px-16 lg:pb-16">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="max-w-2xl flex flex-col items-start text-left">
            <h1 className="font-heading text-[40px] md:text-6xl lg:text-7xl leading-none tracking-tight font-normal text-background mb-4 drop-shadow-md">
              Fabricamos alianzas, reparamos joyas y asesoramos hace más de 40 <i>años</i>.
            </h1>
            <p className="font-body text-sm lg:text-base text-background/90 max-w-lg mb-6 leading-relaxed drop-shadow-sm">
              Mirá estilos, mandanos una referencia y te respondemos con stock, precio o modelos parecidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a 
                href={getWaLink("Consultá por WhatsApp")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultá por WhatsApp"
                className="inline-flex items-center justify-center px-6 md:px-8 min-h-12 bg-accent text-background font-body font-bold text-sm md:text-body tracking-normal hover:bg-tierra transition-colors duration-200 focus-visible:outline-accent text-center shadow-md"
              >
                Consultá por WhatsApp
              </a>
              <a 
                href="#trust"
                className="inline-flex items-center justify-center px-6 md:px-8 min-h-12 bg-transparent text-background border border-background/60 font-body font-bold text-sm md:text-body tracking-normal hover:bg-background/10 transition-colors duration-200 focus-visible:outline-accent text-center shadow-sm backdrop-blur-sm"
              >
                Ver qué hacemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
