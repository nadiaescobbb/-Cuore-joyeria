import { Reveal } from "../components/Reveal";
import { useEffect, useState } from "react";

const waNumber = "542964557378";
const getWaLink = (msg: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
const mainContact = getWaLink("hola cuore, queria ver opciones disponibles");

const catalogItems = [
  {
    name: "anillos de plata",
    category: "plata 925",
    description: "para usar todos los días",
    image: "/images/plata.avif",
    msg: "hola cuore, queria ver anillos de plata 925 disponibles",
  },
  {
    name: "alianzas a medida",
    category: "alianzas",
    description: "con grabado",
    image: "/images/alianzas.avif",
    msg: "hola cuore, queria cotizar alianzas",
  },
  {
    name: "collares y dijes",
    category: "regalos",
    description: "regalos fáciles",
    image: "/images/collarportada.avif",
    msg: "hola cuore, queria ver collares y dijes disponibles",
  },
  {
    name: "casio retro",
    category: "relojes",
    description: "clásicos que combinan",
    image: "/images/reloj.avif",
    msg: "hola cuore, queria ver modelos casio disponibles",
  },
  {
    name: "casio edifice",
    category: "relojes",
    description: "acero y analógicos",
    image: "/images/edefice1.avif",
    msg: "hola cuore, queria consultar por relojes casio edifice",
  },
  {
    name: "casio vintage",
    category: "relojes",
    description: "retro de todos los días",
    image: "/images/clasico.avif",
    msg: "hola cuore, queria consultar por relojes casio vintage",
  },
  {
    name: "g-shock",
    category: "relojes",
    description: "para uso fuerte",
    image: "/images/gshock.avif",
    msg: "hola cuore, queria consultar por relojes g-shock",
  },
  {
    name: "trabajos de taller",
    category: "taller",
    description: "grabado y ajustes",
    image: "/images/craf.avif",
    msg: "hola cuore, queria consultar por un trabajo de taller",
  },
];

const featuredPiece = catalogItems[1];
const displayPieces = catalogItems.filter(
  (piece) => piece.name !== featuredPiece.name,
);

const quickCategories = [
  {
    title: "quiero regalar",
    text: "decinos presupuesto, edad o estilo y te mandamos opciones",
    cta: "pedir ideas",
    msg: "hola cuore, queria ver opciones para regalar",
  },
  {
    title: "plata 925",
    text: "anillos, cadenas y dijes para usar todos los días",
    cta: "ver plata disponible",
    msg: "hola cuore, queria ver plata 925 disponible",
  },
  {
    title: "alianzas",
    text: "cotizamos material, medida, ancho y grabado por whatsapp",
    cta: "cotizar alianzas",
    msg: "hola cuore, queria cotizar alianzas",
  },
  {
    title: "vi un modelo",
    text: "mandanos captura y vemos si está o qué alternativa hay",
    cta: "mandar captura",
    msg: "hola cuore, queria mandar una captura para consultar disponibilidad",
  },
];

const trustPoints = [
  "respondemos por whatsapp",
  "retiro en belgrano 616",
  "envíos en la provincia",
  "grabado en taller",
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
    <div
      className={`fixed right-5 bottom-5 z-50 transition-all duration-700 sm:bottom-8 sm:right-8 ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <a
        href={mainContact}
        target="_blank"
        rel="noreferrer"
        aria-label="escribinos por whatsapp"
        className="flex items-center justify-center gap-3 bg-accent text-background p-4 sm:px-6 sm:py-4 rounded-full shadow-2xl shadow-foreground/40 hover:bg-tierra transition-all duration-500 sm:hover:scale-105 group"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-5 sm:h-5"
          aria-hidden
        >
          <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.37a9.94 9.94 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.55 2 12.04 2zm5.84 14.06c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.99-.32-1.7-.63-3-1.3-4.95-4.31-5.1-4.51-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.32-.13.62.18.3.8 1.32 1.71 2.13 1.18 1.05 2.17 1.37 2.47 1.52.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
        </svg>
        <span className="hidden sm:block text-[10px] tracking-[0.2em] uppercase font-bold">
          ver opciones por whatsapp
        </span>
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
          plata 925 · regalos · alianzas · relojes · taller
        </p>
      </div>

      <header className="relative z-50 bg-background/90 backdrop-blur-md border-b border-soft sticky top-0">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <div className="flex-1 flex items-center">
            <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-semibold">
              <a
                href="#catalogo"
                className="hover:text-accent transition-colors"
              >
                catálogo
              </a>
              <a
                href="#categorias"
                className="hover:text-accent transition-colors"
              >
                consultas
              </a>
              <a href="#oficio" className="hover:text-accent transition-colors">
                alianzas
              </a>
              <a
                href="#relojes"
                className="hover:text-accent transition-colors"
              >
                relojes
              </a>
            </nav>
            <a
              href="#catalogo"
              className="md:hidden text-[9px] uppercase tracking-[0.3em] text-foreground/45 font-semibold hover:text-accent transition-colors"
            >
              catálogo
            </a>
          </div>

          <a
            href="#top"
            className="font-heading text-3xl md:text-4xl tracking-[-0.05em] text-lowercase flex-shrink-0"
          >
            cuore
          </a>

          <div className="flex-1 flex justify-end items-center">
            <a
              href={mainContact}
              target="_blank"
              rel="noreferrer"
              className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/45 transition-colors hover:text-accent md:text-[10px]"
            >
              whatsapp
            </a>
          </div>
        </div>
      </header>

      <header
        id="top"
        className="relative min-h-[calc(86svh-4rem)] md:min-h-[calc(100svh-5rem)] w-full flex items-end overflow-hidden"
      >
        <img
          src="/images/hero.avif"
          alt="joyas de cuore listas para consultar por whatsapp"
          width="1023"
          height="1537"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[0.2]"
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
              joyas para usar,
              <br />
              <span className="italic text-tierra">
                regalar o elegir con calma
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-7 max-w-lg text-base text-background/78 leading-relaxed text-lowercase md:text-lg">
              mandanos una foto, una idea o el presupuesto que tenés. te
              respondemos por whatsapp con opciones reales del local.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={getWaLink("hola cuore, queria ver opciones disponibles")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-accent px-7 py-4 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-background transition-colors hover:bg-tierra md:tracking-[0.2em]"
              >
                ver opciones por whatsapp
                <span aria-hidden className="text-lg">
                  →
                </span>
              </a>
              <a
                href="#catalogo"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-background/25 px-7 py-4 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-background backdrop-blur-sm transition-colors hover:border-accent hover:text-accent md:tracking-[0.2em]"
              >
                ver catálogo
              </a>
            </div>
            <p className="mt-4 text-xs text-background/55">
              podés mandar captura, medida o presupuesto
            </p>
          </Reveal>
        </div>
      </header>

      <section className="relative z-10 border-b border-soft bg-background py-4">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/55 md:grid-cols-4 md:px-12 md:tracking-[0.18em]">
          {trustPoints.map((point) => (
            <div key={point} className="bg-surface/30 px-4 py-4">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section
        id="catalogo"
        className="relative z-10 border-b border-soft bg-background py-12 md:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 lg:px-12">
          <div className="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent md:tracking-[0.28em]">
                vidriera cuore
              </p>
              <h2 className="mt-3 max-w-3xl font-heading text-4xl leading-[0.98] text-lowercase md:text-6xl">
                piezas para mirar, guardar y preguntar
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/55">
              si algo te gusta, mandanos la referencia por whatsapp y te decimos
              disponibilidad, precio o modelos parecidos.
            </p>
          </div>

          <div className="mb-7 flex gap-2 overflow-x-auto pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/45 md:tracking-[0.14em]">
            {["plata 925", "regalos", "alianzas", "relojes", "taller"].map(
              (tag) => (
                <a
                  key={tag}
                  href={getWaLink(`hola cuore, queria consultar por ${tag}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap border border-soft px-4 py-2 transition-colors hover:border-accent hover:text-accent"
                >
                  {tag}
                </a>
              ),
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_1.7fr] lg:items-start">
            <a
              href={getWaLink(featuredPiece.msg)}
              target="_blank"
              rel="noreferrer"
              className="group block border-y border-soft py-5 lg:border-y-0 lg:py-0"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={featuredPiece.image}
                  alt={featuredPiece.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[0.08] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-5 flex items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                    pieza destacada
                  </p>
                  <h3 className="mt-2 font-heading text-4xl leading-none text-lowercase">
                    {featuredPiece.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/52">
                    {featuredPiece.description}
                  </p>
                </div>
                <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/45 transition-colors group-hover:text-accent sm:block">
                  pedir info →
                </span>
              </div>
            </a>

            <div>
              <p className="mb-3 text-xs text-foreground/45 sm:hidden">
                deslizá para ver más piezas
              </p>
              <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
                {displayPieces.map((piece) => (
                  <a
                    key={piece.name}
                    href={getWaLink(piece.msg)}
                    target="_blank"
                    rel="noreferrer"
                    className="group min-w-[46vw] snap-start sm:min-w-0"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-surface">
                      <img
                        src={piece.image}
                        alt={piece.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover grayscale-[0.12] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                        {piece.category}
                      </p>
                      <h3 className="mt-1 font-heading text-2xl leading-none text-lowercase">
                        {piece.name}
                      </h3>
                      <p className="mt-1 text-xs text-foreground/45">
                        {piece.description}
                      </p>
                      <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/40 transition-colors group-hover:text-accent">
                        preguntar →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-2 border-t border-soft pt-5 text-xs text-foreground/52 sm:grid-cols-3">
            <p>Retiro en Av. Belgrano 616.</p>
            <p>Podés consultar antes de pasar.</p>
            <p>Envíos en toda la provincia.</p>
          </div>
        </div>
      </section>

      <section
        id="categorias"
        className="relative z-10 bg-background py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1400px] px-5 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                  consulta rápida
                </span>
                <h2 className="max-w-2xl font-heading text-4xl leading-tight text-lowercase md:text-6xl">
                  mandanos lo que viste y vemos opciones
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="max-w-sm text-sm leading-relaxed text-foreground/55">
                no hace falta saber el nombre exacto. si lo viste en instagram,
                pinterest o en otra joyería, mandanos captura.
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
                  <h3 className="font-heading text-3xl text-lowercase md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="max-w-[42ch] text-sm leading-relaxed text-foreground/58">
                    {item.text}
                  </p>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/45 transition-colors group-hover:text-accent md:tracking-[0.25em]">
                    {item.cta} →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="oficio"
        className="py-20 md:py-28 bg-surface/25 border-y border-soft overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <span className="text-accent uppercase tracking-[0.3em] text-[11px] mb-5 block font-bold">
                alianzas
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 italic text-lowercase">
                alianzas hechas acá
              </h2>
              <p className="max-w-[44ch] text-foreground/70 mb-10 leading-relaxed text-lowercase">
                elegís material, medida, ancho y grabado. las hacemos en nuestro
                taller y te pasamos presupuesto por whatsapp sin compromiso.
              </p>
            </Reveal>

            <ul className="space-y-0">
              {[
                {
                  n: "01",
                  t: "mandás la idea",
                  d: "puede ser una foto, una medida o una referencia",
                },
                {
                  n: "02",
                  t: "vemos presupuesto",
                  d: "material, ancho, acabado y tipo de grabado",
                },
                {
                  n: "03",
                  t: "sale del taller",
                  d: "lista para retirar o coordinar entrega",
                },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <li className="flex items-baseline gap-6 py-5 border-b border-soft">
                    <span className="font-heading italic text-accent text-2xl shrink-0">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-foreground text-sm tracking-wide font-bold text-lowercase">
                        {s.t}
                      </p>
                      <p className="text-foreground/50 text-sm mt-1 text-lowercase">
                        {s.d}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <a
                href={getWaLink("hola cuore, queria cotizar alianzas")}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-[10px] font-bold uppercase tracking-[0.16em] text-background transition-colors hover:bg-accent md:tracking-[0.25em]"
              >
                cotizar alianzas →
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden border border-soft shadow-warm">
                <img
                  src="/images/craf.avif"
                  alt="manos de joyero trabajando un anillo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="relojes"
        className="py-20 md:py-28 bg-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
            <Reveal>
              <div>
                <span className="text-accent uppercase tracking-[0.3em] text-[11px] block mb-5 font-bold">
                  relojes
                </span>
                <h2 className="font-heading text-4xl md:text-5xl text-background text-lowercase leading-tight">
                  casio, clásicos y modelos para todos los días
                </h2>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="max-w-sm">
                <p className="text-sm leading-relaxed text-background/58">
                  si viste un modelo, mandanos captura. te decimos si está
                  disponible o qué alternativa tenemos.
                </p>
                <a
                  href={getWaLink("hola cuore, queria consultar por un reloj")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center bg-accent px-6 text-[10px] font-bold uppercase tracking-[0.16em] text-background transition-colors hover:bg-tierra md:tracking-[0.25em]"
                >
                  ver relojes disponibles →
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
                  href={getWaLink(
                    `hola cuore, queria consultar por relojes ${w.cat}`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group block bg-foreground p-8 transition-colors hover:bg-background/[0.02] md:p-10"
                >
                  <div className="aspect-square overflow-hidden mb-10 bg-background/5 border border-background/5">
                    <img
                      src={w.img}
                      alt={`${w.title} - ${w.cat}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.05]"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                    {w.cat}
                  </span>
                  <h3 className="font-heading text-3xl text-background mt-3 mb-4 text-lowercase">
                    {w.title}
                  </h3>
                  <p className="text-sm text-background/45 max-w-[32ch] text-lowercase leading-relaxed">
                    {w.desc}
                  </p>
                  <span className="mt-8 inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-accent md:tracking-[0.25em]">
                    consultar si está disponible →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="visita"
        className="py-20 md:py-28 bg-background border-t border-soft"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <span className="text-accent uppercase tracking-[0.3em] text-[11px] mb-5 block font-bold">
                vení al local
              </span>
              <h2 className="font-heading text-4xl md:text-6xl text-foreground text-lowercase mb-6 leading-tight">
                mandanos mensaje o vení
                <br />a mirar tranqui
              </h2>
              <p className="mb-10 max-w-md text-sm leading-relaxed text-foreground/60">
                estamos en el centro de río grande. si venís con una idea, una
                foto o una medida, te orientamos ahí mismo.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mb-10 grid gap-3 sm:grid-cols-2">
                {[
                  "más de 40 años en joyería y relojería",
                  "grabado láser y trabajos de taller",
                  "podés consultar antes de pasar",
                  "opciones para retirar o coordinar envío",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-soft bg-surface/20 px-4 py-4 text-sm leading-relaxed text-foreground/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <dl className="space-y-6 text-sm">
                {[
                  {
                    k: "dirección",
                    v: (
                      <a
                        href="https://maps.google.com/?q=Av.+Belgrano+616,+Rio+Grande,+Tierra+del+Fuego"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-accent underline decoration-soft underline-offset-4 transition-colors"
                      >
                        av. belgrano 616, río grande
                      </a>
                    ),
                  },
                  {
                    k: "horarios",
                    v: "lunes a sábado · 10:00-13:00 / 16:00-20:30",
                  },
                  {
                    k: "medios de pago",
                    v: "tarjetas, efectivo, transferencias y links de pago",
                  },
                  { k: "envíos", v: "entregas en toda la provincia" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="flex justify-between gap-6 border-b border-soft pb-4"
                  >
                    <dt className="text-foreground/45 uppercase text-[10px] tracking-widest font-bold">
                      {item.k}
                    </dt>
                    <dd className="text-foreground text-right italic">
                      {item.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:gap-6">
                <a
                  href={getWaLink(
                    "hola cuore, queria consultar antes de pasar por el local",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center bg-accent px-8 py-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-background transition-colors hover:bg-tierra md:tracking-[0.3em]"
                >
                  consultar antes de pasar
                </a>
                <a
                  href="https://instagram.com/joyeria.relojeria.cuore"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center border border-soft px-8 py-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent md:tracking-[0.3em]"
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
                style={{ border: 0, minHeight: "400px" }}
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
            <div className="font-heading text-6xl lg:text-9xl tracking-[-0.06em] mb-16 text-lowercase opacity-90">
              cuore
            </div>
            <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 mb-24">
              <a
                href="https://instagram.com/joyeria.relojeria.cuore"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                instagram
              </a>
              <a
                href={mainContact}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                whatsapp
              </a>
              <a
                href="#catalogo"
                className="hover:text-accent transition-colors"
              >
                catálogo
              </a>
              <a href="#oficio" className="hover:text-accent transition-colors">
                el taller
              </a>
            </div>
            <div className="pt-16 border-t border-soft flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] text-foreground/20 font-bold">
              <p>© {new Date().getFullYear()} cuore joyería · río grande</p>
              <p className="italic">mandanos captura por whatsapp</p>
            </div>
          </Reveal>
        </div>
      </footer>
      <StickyCTA />
    </div>
  );
};

export default Cuore;
