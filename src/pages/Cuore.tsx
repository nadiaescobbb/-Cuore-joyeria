import { Reveal } from "../components/Reveal";
import { useEffect, useState } from "react";

const waNumber = "542964557378";
const getWaLink = (msg: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
const mainContact = getWaLink("hola cuore, queria hacer una consulta");

const iconicPieces = [
  {
    name: "anillo de plata 925",
    description: "plata 925",
    image: "/images/plata.avif",
    msg: "hola cuore, queria consultar por el anillo de plata 925",
  },
  {
    name: "alianza clasica",
    description: "hecha en taller",
    image: "/images/alianzas.avif",
    msg: "hola cuore, queria consultar por alianzas",
  },
  {
    name: "collar",
    description: "para todos los dias",
    image: "/images/collarportada.avif",
    msg: "hola cuore, queria consultar por collares",
  },
  {
    name: "reloj casio retro",
    description: "modelos casio",
    image: "/images/reloj.avif",
    msg: "hola cuore, queria consultar por relojes casio",
  },
];

const quickCategories = [
  {
    title: "plata 925",
    text: "anillos, cadenas, dijes y regalos listos para retirar",
    cta: "ver plata",
    msg: "hola cuore, queria consultar por plata 925",
  },
  {
    title: "alianzas",
    text: "hechas en taller, con medida y grabado",
    cta: "pedir presupuesto",
    msg: "hola cuore, queria pedir presupuesto por alianzas",
  },
  {
    title: "relojes casio",
    text: "mandanos captura del modelo y vemos stock",
    cta: "consultar casio",
    msg: "hola cuore, queria consultar por relojes casio",
  },
  {
    title: "arreglos",
    text: "pilas, mallas, ajustes y reparaciones",
    cta: "consultar arreglo",
    msg: "hola cuore, queria consultar por un arreglo",
  },
];

const trustPoints = [
  "envíos en la provincia",
  "taller y grabado láser",
  "más de 40 años",
  "todos los medios de pago",
];

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed right-5 bottom-5 z-50 transition-all duration-700 sm:bottom-8 sm:right-8 ${show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <a
        href={mainContact}
        target="_blank"
        rel="noreferrer"
        aria-label="escribinos por whatsapp"
        className="flex items-center justify-center gap-3 bg-accent text-background p-4 sm:px-6 sm:py-4 rounded-full shadow-2xl shadow-foreground/40 hover:bg-tierra transition-all duration-500 sm:hover:scale-105 group"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-5 sm:h-5" aria-hidden>
          <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.37a9.94 9.94 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.55 2 12.04 2zm5.84 14.06c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.99-.32-1.7-.63-3-1.3-4.95-4.31-5.1-4.51-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.32-.13.62.18.3.8 1.32 1.71 2.13 1.18 1.05 2.17 1.37 2.47 1.52.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
        </svg>
        <span className="hidden sm:block text-[10px] tracking-[0.2em] uppercase font-bold">escribinos por whatsapp</span>
      </a>
    </div>
  );
};

const Cuore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-accent/10 overflow-x-hidden">
      <div className="bg-noise fixed inset-0 z-0 pointer-events-none" />
      
      <div className="relative z-50 bg-background/50 backdrop-blur-sm py-2 text-center border-b border-soft">
        <p className="text-[9px] uppercase tracking-[0.4em] text-accent/70 font-medium">
          plata 925 · alianzas · relojes · taller
        </p>
      </div>


      <header className="relative z-50 bg-background/90 backdrop-blur-md border-b border-soft sticky top-0">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <div className="flex-1 flex items-center">
            <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-semibold">
              <a href="#piezas" className="hover:text-accent transition-colors">joyas</a>
              <a href="#oficio" className="hover:text-accent transition-colors">taller</a>
              <a href="#relojes" className="hover:text-accent transition-colors">relojes</a>
            </nav>
            <a href="#piezas" className="md:hidden text-[9px] uppercase tracking-[0.3em] text-foreground/45 font-semibold hover:text-accent transition-colors">
              colección
            </a>
          </div>
          
          <a href="#top" className="font-heading text-3xl md:text-4xl tracking-[-0.05em] text-lowercase flex-shrink-0">
            cuore
          </a>
          
          <div className="flex-1 flex justify-end items-center">
            <a href={mainContact} target="_blank" rel="noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/45 transition-colors hover:text-accent md:text-[10px]">
               consultar
            </a>
          </div>
        </div>
      </header>

      <header id="top" className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] w-full flex items-end overflow-hidden">
        <img 
          src="/images/HERO.png" 
          alt="alianzas de oro fabricadas en el taller de cuore" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[0.2] group-hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/30 to-foreground" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 md:px-6 md:pb-24 md:pt-28 w-full">
          <Reveal delay={100}>
            <a 
              href="https://maps.google.com/?q=Av.+Belgrano+616,+Rio+Grande,+Tierra+del+Fuego" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex rounded-full border border-background/15 bg-background/10 px-4 py-2 text-[10px] tracking-[0.24em] uppercase text-background/80 backdrop-blur-sm transition-colors hover:bg-background/20 hover:text-background md:text-[11px]"
            >
              av. belgrano 616 · río grande
            </a>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="mt-6 max-w-5xl font-heading text-5xl leading-[0.96] text-background text-lowercase md:text-7xl lg:text-8xl">
              joyas, alianzas y relojes<br />
              <span className="italic text-tierra">sin vueltas</span>
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="mt-7 max-w-lg text-base text-background/78 leading-relaxed text-lowercase md:text-lg">
              escribinos por whatsapp, mandanos una foto o contanos qué estás buscando.
              te respondemos con opciones reales del local.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={getWaLink("hola cuore, queria consultar por una joya o reloj")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-accent px-7 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-tierra"
              >
                escribir por whatsapp
                <span aria-hidden className="text-lg">→</span>
              </a>
              <a
                href="#categorias"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-background/25 px-7 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-background backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                ver productos
              </a>
            </div>
            <p className="mt-4 text-xs text-background/55">
              respondemos en horario del local
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-background/10 bg-background/10 backdrop-blur-sm md:max-w-3xl md:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point} className="bg-foreground/45 px-4 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-background/75">
                  {point}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 right-12 flex flex-col items-center gap-4 text-background/20">
          <div className="w-px h-12 bg-background/10" />
        </div>
      </header>

      <section id="categorias" className="relative z-10 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                  consulta rápida
                </span>
                <h2 className="max-w-2xl font-heading text-4xl leading-tight text-lowercase md:text-6xl">
                  elegí por dónde empezar
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="max-w-sm text-sm leading-relaxed text-foreground/55">
                no hace falta saber el nombre exacto. mandanos una referencia y te guiamos.
              </p>
            </Reveal>
          </div>

          <div className="border-y border-soft">
            {quickCategories.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <a
                  href={getWaLink(item.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 border-b border-soft py-7 transition-colors last:border-b-0 hover:bg-surface/30 md:grid-cols-[72px_1fr_1.2fr_auto] md:items-center md:px-4"
                >
                  <span className="font-heading text-2xl italic text-accent md:text-3xl">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-3xl text-lowercase md:text-4xl">{item.title}</h3>
                  <p className="max-w-[42ch] text-sm leading-relaxed text-foreground/58">
                    {item.text}
                  </p>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/45 transition-colors group-hover:text-accent">
                    {item.cta} →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="oficio" className="py-20 md:py-28 bg-surface/25 border-y border-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <span className="text-accent uppercase tracking-[0.3em] text-[11px] mb-5 block font-bold">
                alianzas
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 italic text-lowercase">
                hechas acá, a tu medida
              </h2>
              <p className="max-w-[44ch] text-foreground/70 mb-10 leading-relaxed text-lowercase">
                las fabricamos en el taller de joyería más grande de la provincia. elegís el material,
                la medida y el grabado (láser o manual); nosotros te pasamos presupuesto por whatsapp.
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
                className="mt-10 inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-[10px] font-bold uppercase tracking-[0.25em] text-background transition-colors hover:bg-accent"
              >
                pedir presupuesto →
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden border border-soft shadow-warm">
                <img
                  src="/images/craf.avif"
                  alt="manos de joyero trabajando un anillo"
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="piezas" className="py-20 lg:py-32 bg-background border-y border-soft">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 md:mb-24">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 stagger-grid">
            {iconicPieces.map((p, i) => (
              <Reveal key={p.name} delay={i * 150}>
                <a href={getWaLink(p.msg)} target="_blank" rel="noreferrer" className="group block">
                  <div className="aspect-[3/4] bg-background border border-soft overflow-hidden mb-6 transition-all duration-1000 group-hover:shadow-warm">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    />
                  </div>
                  <div className="space-y-2 px-2">
                    <h3 className="font-heading text-3xl text-lowercase tracking-tight leading-none">{p.name}</h3>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 font-bold italic">{p.description}</p>
                    <span className="inline-block pt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                      consultar este →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="relojes" className="py-20 md:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
            <Reveal>
              <div>
                <span className="text-accent uppercase tracking-[0.3em] text-[11px] block mb-5 font-bold">
                  relojes
                </span>
                <h2 className="font-heading text-4xl md:text-5xl text-background text-lowercase leading-tight">
                  casio y más de 30 marcas
                </h2>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="max-w-sm">
                <p className="text-sm leading-relaxed text-background/58">
                  si viste un modelo, mandanos captura por whatsapp. te decimos si está disponible o qué alternativas hay.
                </p>
                <a
                  href={getWaLink("hola cuore, queria consultar por un reloj")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center bg-accent px-6 text-[10px] font-bold uppercase tracking-[0.25em] text-background transition-colors hover:bg-tierra"
                >
                  consultar reloj →
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/5 border border-background/5 shadow-2xl">
            {[
              {
                img: "/images/edefice1.avif",
                cat: "edifice",
                title: "para todos los días",
                desc: "modelos de acero, digitales y analógicos",
              },
              {
                img: "/images/clasico.avif",
                cat: "vintage",
                title: "retro y clásicos",
                desc: "los casio de siempre y modelos fáciles de combinar",
              },
              {
                img: "/images/gshock.avif",
                cat: "g-shock",
                title: "para uso fuerte",
                desc: "opciones resistentes para trabajo, estudio o deporte",
              },
            ].map((w, i) => (
              <Reveal key={w.cat} delay={i * 150}>
                <a
                  href={getWaLink(`hola cuore, queria consultar por relojes ${w.cat}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="group block bg-foreground p-8 transition-colors hover:bg-background/[0.02] md:p-10"
                >
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
                  <p className="text-sm text-background/45 max-w-[32ch] text-lowercase leading-relaxed">{w.desc}</p>
                  <span className="mt-8 inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                    preguntar por whatsapp →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="visita" className="py-20 md:py-28 bg-background border-t border-soft">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <span className="text-accent uppercase tracking-[0.3em] text-[11px] mb-5 block font-bold">
                visitanos
              </span>
              <h2 className="font-heading text-4xl md:text-6xl text-foreground text-lowercase mb-6 leading-tight">
                escribinos o pasá<br />por el local
              </h2>
              <p className="mb-10 max-w-md text-sm leading-relaxed text-foreground/60">
                estamos en el centro. si venís con una idea, una foto o una medida, te orientamos ahí mismo.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <dl className="space-y-6 text-sm">
                {[
                  { k: "dirección", v: <a href="https://maps.google.com/?q=Av.+Belgrano+616,+Rio+Grande,+Tierra+del+Fuego" target="_blank" rel="noreferrer" className="hover:text-accent underline decoration-soft underline-offset-4 transition-colors">av. belgrano 616, río grande</a> },
                  { k: "horarios", v: "lunes a sábado · 10:00-13:00 / 16:00-20:30" },
                  { k: "medios de pago", v: "tarjetas, efectivo, transferencias y links de pago" },
                  { k: "envíos", v: "entregas en toda la provincia" },
                ].map((item) => (
                  <div key={item.k} className="flex justify-between gap-6 border-b border-soft pb-4">
                    <dt className="text-foreground/45 uppercase text-[10px] tracking-widest font-bold">{item.k}</dt>
                    <dd className="text-foreground text-right italic">{item.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:gap-6">
                <a
                  href={getWaLink("hola cuore, queria consultar para pasar por el local")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center bg-accent px-8 py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-background transition-colors hover:bg-tierra"
                >
                  escribir por whatsapp
                </a>
                <a
                  href="https://instagram.com/joyeria.relojeria.cuore"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center border border-soft px-8 py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-accent hover:text-accent"
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


      <footer className="pt-24 pb-32 sm:pb-24 bg-surface/20 border-t border-soft relative z-10">
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
