import { Reveal } from "../components/Reveal";
import { SearchIcon, HeartIcon, UserIcon, ShoppingBagIcon } from "../components/Icons";
import { useEffect } from "react";

const waNumber = "542964557378";
const getWaLink = (msg: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
const mainContact = getWaLink("hola cuore, queria hacer una consulta");

const iconicPieces = [
  {
    name: "anillo de plata 925",
    description: "plata 925",
    image: "/images/plata025.jpg",
    msg: "hola cuore, queria consultar por el anillo de plata 925",
  },
  {
    name: "alianza clasica",
    description: "hecha en taller",
    image: "/images/alianzas.jpg",
    msg: "hola cuore, queria consultar por alianzas",
  },
  {
    name: "collar",
    description: "para todos los dias",
    image: "/images/IMG2.jpg",
    msg: "hola cuore, queria consultar por collares",
  },
  {
    name: "reloj casio retro",
    description: "modelos casio",
    image: "/images/reloj.jpg",
    msg: "hola cuore, queria consultar por relojes casio",
  },
];

const StickyCTA = () => (
  <div className="fixed bottom-8 right-8 z-50 animate-fade-up [animation-delay:1000ms]">
    <a
      href={mainContact}
      target="_blank"
      rel="noreferrer"
      aria-label="escribinos por whatsapp"
      className="flex items-center gap-4 bg-accent text-background px-6 py-4 rounded-full shadow-2xl shadow-foreground/40 hover:bg-tierra transition-all duration-500 hover:scale-105 group"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.37a9.94 9.94 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.55 2 12.04 2zm5.84 14.06c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.99-.32-1.7-.63-3-1.3-4.95-4.31-5.1-4.51-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.32-.13.62.18.3.8 1.32 1.71 2.13 1.18 1.05 2.17 1.37 2.47 1.52.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
      </svg>
      <span className="text-[10px] tracking-[0.2em] uppercase font-bold hidden sm:inline">whatsapp</span>
    </a>
  </div>
);

const Cuore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-accent/10 overflow-x-hidden">
      <div className="bg-noise fixed inset-0 z-0 pointer-events-none" />
      
      <div className="relative z-50 bg-background/50 backdrop-blur-sm py-2 text-center border-b border-soft">
        <p className="text-[9px] uppercase tracking-[0.4em] text-accent/70 font-medium">
          joyería y relojería en río grande
        </p>
      </div>


      <header className="relative z-50 bg-background/80 backdrop-blur-md border-b border-soft sticky top-0">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex-1 flex gap-10 items-center">
            <button className="text-foreground/30 hover:text-accent transition-colors">
              <SearchIcon className="w-4 h-4" />
            </button>
            <nav className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-semibold">
              <a href="#piezas" className="hover:text-accent transition-colors">joyas</a>
              <a href="#oficio" className="hover:text-accent transition-colors">taller</a>
            </nav>
          </div>
          
          <a href="#top" className="font-heading text-4xl tracking-[-0.05em] text-lowercase flex-shrink-0">
            cuore
          </a>
          
          <div className="flex-1 flex justify-end gap-8 items-center">
            <div className="hidden lg:flex gap-8 text-foreground/30">
               <HeartIcon className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
               <UserIcon className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
            </div>
            <a href={mainContact} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/60 hover:text-accent transition-colors group">
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden md:block">consultar</span>
               <ShoppingBagIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <header id="top" className="relative h-[100svh] min-h-[640px] w-full flex items-end overflow-hidden">
        <img 
          src="/images/HERO.png" 
          alt="alianzas de oro fabricadas en el taller de cuore" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[0.2] group-hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/30 to-foreground" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <Reveal delay={100}>
            <span className="block text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
              av. belgrano 616 · río grande
            </span>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-background max-w-4xl text-lowercase">
              joyas, alianzas<br />
              <span className="italic text-tierra">y relojes para elegir bien</span>
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="mt-8 max-w-md text-base md:text-lg text-background/70 leading-relaxed text-lowercase italic">
              escribinos por whatsapp, mandanos una foto o contanos qué estás buscando.
              te respondemos con opciones reales del local.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={getWaLink("hola cuore, queria consultar por una joya o reloj")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-background px-8 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-tierra transition-colors"
              >
                escribir por whatsapp
                <span aria-hidden className="text-lg">→</span>
              </a>
              <a
                href="#oficio"
                className="inline-flex items-center gap-3 border border-background/25 text-background px-8 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:border-accent hover:text-accent transition-colors backdrop-blur-sm"
              >
                ver qué hacemos
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 right-12 flex flex-col items-center gap-4 text-background/20">
          <div className="w-px h-12 bg-background/10" />
        </div>
      </header>

      <section id="oficio" className="py-24 md:py-32 bg-background border-y border-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <span className="text-accent uppercase tracking-[0.3em] text-[11px] mb-5 block font-bold">
                alianzas
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 italic text-lowercase">
                hechas acá, a tu medida
              </h2>
              <p className="max-w-[44ch] text-foreground/70 mb-12 leading-relaxed text-lowercase italic">
                las hacemos en nuestro taller de río grande. elegís el material,
                la medida y el grabado; nosotros te pasamos presupuesto por whatsapp.
              </p>
            </Reveal>

            <ul className="space-y-0">
              {[
                { n: "01", t: "nos escribís", d: "mandanos una idea, una foto o la medida" },
                { n: "02", t: "te asesoramos", d: "vemos material, ancho, acabado y presupuesto" },
                { n: "03", t: "la hacemos", d: "la alianza sale de nuestro taller lista para retirar" },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <li className="flex items-baseline gap-6 py-5 border-b border-soft">
                    <span className="font-heading italic text-accent text-2xl shrink-0">{s.n}</span>
                    <div>
                      <p className="text-foreground text-sm tracking-wide font-bold text-lowercase">{s.t}</p>
                      <p className="text-foreground/50 text-sm mt-1 text-lowercase">{s.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <a
                href={getWaLink("hola cuore, queria pedir un presupuesto por alianzas")}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-block text-accent text-xs font-bold uppercase tracking-[0.3em] border-b border-accent/30 pb-1 hover:border-accent transition-colors"
              >
                pedir presupuesto →
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden border border-soft shadow-warm">
                <img
                  src="/images/craf.jpg"
                  alt="manos de joyero trabajando un anillo"
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="piezas" className="py-24 lg:py-48 bg-surface/30 border-y border-soft">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
            <Reveal>
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-6 block font-bold">joyas</span>
                <h2 className="font-heading text-6xl text-lowercase tracking-tight">lo que más nos piden</h2>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <a href={mainContact} className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-soft pb-2 hover:text-accent transition-colors">consultar stock</a>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 stagger-grid">
            {iconicPieces.map((p, i) => (
              <Reveal key={p.name} delay={i * 150}>
                <a href={getWaLink(p.msg)} target="_blank" rel="noreferrer" className="group block">
                  <div className="aspect-[3/4] bg-background border border-soft overflow-hidden mb-10 transition-all duration-1000 group-hover:shadow-warm">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    />
                  </div>
                  <div className="space-y-2 px-2">
                    <h3 className="font-heading text-3xl text-lowercase tracking-tight leading-none">{p.name}</h3>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 font-bold italic">{p.description}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="relojes" className="py-24 md:py-32 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
            <Reveal>
              <div>
                <span className="text-accent uppercase tracking-[0.3em] text-[11px] block mb-5 font-bold">
                  relojes
                </span>
                <h2 className="font-heading text-4xl md:text-5xl text-background text-lowercase leading-tight">
                  casio y otras marcas
                </h2>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-background/50 max-w-xs text-sm italic text-lowercase leading-relaxed">
                si viste un modelo, mandanos captura por whatsapp. te decimos si está disponible o qué alternativas hay.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/5 border border-background/5 shadow-2xl">
            {[
              {
                img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&h=800&auto=format&fit=crop",
                cat: "edifice",
                title: "para todos los días",
                desc: "modelos de acero, digitales y analógicos",
              },
              {
                img: "https://images.unsplash.com/photo-1522337360788-8b13df772ec2?q=80&w=800&h=800&auto=format&fit=crop",
                cat: "vintage",
                title: "retro y clásicos",
                desc: "los casio de siempre y modelos fáciles de combinar",
              },
              {
                img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=800&h=800&auto=format&fit=crop",
                cat: "g-shock",
                title: "para uso fuerte",
                desc: "opciones resistentes para trabajo, estudio o deporte",
              },
            ].map((w, i) => (
              <Reveal key={w.cat} delay={i * 150}>
                <article className="bg-foreground p-10 group transition-colors hover:bg-background/[0.02]">
                  <div className="aspect-square overflow-hidden mb-10 bg-background/5 border border-background/5">
                    <img
                      src={w.img}
                      alt={`${w.title} - ${w.cat}`}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.05]"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                    {w.cat}
                  </span>
                  <h3 className="font-heading text-3xl text-background mt-3 mb-4 text-lowercase">{w.title}</h3>
                  <p className="text-sm text-background/40 max-w-[32ch] text-lowercase leading-relaxed italic">{w.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="visita" className="py-24 md:py-32 bg-background border-t border-soft">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <span className="text-accent uppercase tracking-[0.3em] text-[11px] mb-5 block font-bold">
                visitanos
              </span>
              <h2 className="font-heading text-4xl md:text-6xl text-foreground text-lowercase mb-10 leading-tight">
                te esperamos<br />en el local
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <dl className="space-y-6 text-sm">
                {[
                  ["dirección", "av. belgrano 616, río grande"],
                  ["horarios", "lunes a sábado · 10:00-13:00 / 16:00-20:30"],
                  ["whatsapp", "+54 2964 557378"],
                  ["instagram", "@joyeria.relojeria.cuore"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-soft pb-4">
                    <dt className="text-foreground/45 uppercase text-[10px] tracking-widest font-bold">{k}</dt>
                    <dd className="text-foreground text-right italic">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-12 flex flex-wrap gap-6">
                <a
                  href={getWaLink("hola cuore, queria consultar para pasar por el local")}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent text-background px-8 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-tierra transition-colors"
                >
                  escribir por whatsapp
                </a>
                <a
                  href="https://instagram.com/joyeria.relojeria.cuore"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-soft text-foreground px-8 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:border-accent hover:text-accent transition-colors"
                >
                  ver instagram
                </a>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={300} className="h-full min-h-[400px]">
            <div className="h-full w-full border border-soft grayscale hover:grayscale-0 transition-all duration-[2s] overflow-hidden shadow-warm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2342.341517404177!2d-67.7011986230553!3d-53.78572017241857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b176718d7f941%3A0xc3f6a27318721c5b!2sAv.%20Belgrano%20616%2C%20V9420%20R%C3%ADo%20Grande%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1715545000000!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="cuore joyería ubicación"
              />
            </div>
          </Reveal>
        </div>
      </section>


      <footer className="py-24 bg-surface/20 border-t border-soft">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <Reveal>
            <div className="font-heading text-6xl lg:text-9xl tracking-[-0.06em] mb-16 text-lowercase opacity-90">cuore</div>
            <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 mb-24">
              <a href="https://instagram.com/joyeria.relojeria.cuore" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">instagram</a>
              <a href={mainContact} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">whatsapp</a>
              <a href="#piezas" className="hover:text-accent transition-colors">piezas</a>
              <a href="#oficio" className="hover:text-accent transition-colors">el taller</a>
            </div>
            <div className="pt-16 border-t border-soft flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] text-foreground/20 font-bold">
              <p>© {new Date().getFullYear()} cuore joyería · río grande</p>
              <p className="italic">escribinos por whatsapp</p>
            </div>
          </Reveal>
        </div>
      </footer>
      <StickyCTA />
    </div>
  );
};

export default Cuore;
