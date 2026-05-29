import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

const waNumber = "542964557378";
const getWaLink = (msg: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

const mainContact = getWaLink("Hola Cuore, quería ver opciones disponibles");

const navItems = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Alianzas", href: "#alianzas" },
  { label: "Relojes", href: "#relojes" },
  { label: "Local", href: "#local" },
];

const categories = [
  {
    name: "Anillos",
    detail: "Plata 925, modelos para todos los días y regalos",
    image: "/images/anillos.jpg",
    alt: "anillos de plata 925 disponibles en Cuore",
    msg: "Hola Cuore, quería ver anillos disponibles",
  },
  {
    name: "Collares",
    detail: "Cadenas, dijes y piezas simples para usar seguido",
    image: "/images/collares.jpg",
    alt: "collares y dijes de plata para consultar en Cuore",
    msg: "Hola Cuore, quería ver collares y dijes disponibles",
  },
  {
    name: "Alianzas",
    detail: "Medida, material, ancho y grabado a pedido",
    image: "/images/alianzas.avif",
    alt: "alianzas a medida con grabado hechas en taller",
    msg: "Hola Cuore, quería cotizar alianzas",
  },
  {
    name: "Relojes",
    detail: "Casio, clásicos, digitales y otras marcas",
    image: "/images/relojescasio.jpg",
    alt: "relojes Casio disponibles para consultar por WhatsApp",
    msg: "Hola Cuore, quería ver modelos de relojes disponibles",
  },
];

const mostAsked = [
  {
    title: "Algo para regalar",
    text: "Mandanos para quién es y te pasamos opciones que haya en el local.",
    cta: "Recibir ideas",
    msg: "Hola Cuore, quería ver opciones para regalar",
  },
  {
    title: "Plata 925",
    text: "Anillos, cadenas y dijes fáciles de usar todos los días.",
    cta: "Consultar plata 925",
    msg: "Hola Cuore, quería ver plata 925 disponible",
  },
  {
    title: "Vi este modelo",
    text: "Si tenés una captura, mandala y vemos stock o algo parecido.",
    cta: "Consultar con captura",
    msg: "Hola Cuore, quería mandar una captura para consultar disponibilidad",
  },
];

const watchLines = [
  {
    image: "/images/edefice1.avif",
    cat: "Edifice",
    title: "Acero para todos los días",
    msg: "Hola Cuore, quería consultar por relojes Edifice",
  },
  {
    image: "/images/clasico.avif",
    cat: "Vintage",
    title: "Clásicos de siempre",
    msg: "Hola Cuore, quería consultar por relojes vintage",
  },
  {
    image: "/images/gshock.avif",
    cat: "G-Shock",
    title: "Resistentes",
    msg: "Hola Cuore, quería consultar por relojes G-Shock",
  },
];

const trustItems = [
  "Retiro en Av. Belgrano 616",
  "Envíos en toda la provincia",
  "Grabado y trabajos de taller",
  "Tarjetas, efectivo, transferencia y links de pago",
];

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 560);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={mainContact}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar opciones por WhatsApp"
        className="inline-flex min-h-14 items-center justify-center gap-3 bg-accent px-5 text-[10px] font-bold tracking-[0.16em] text-background shadow-warm transition-colors hover:bg-tierra"
      >
        <span className="text-base" aria-hidden>
          +
        </span>
        <span className="hidden sm:inline">Consultar por WhatsApp</span>
      </a>
    </div>
  );
};

const Cuore = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent/10">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-foreground focus:shadow-warm"
      >
        Saltar al contenido principal
      </a>
      <div className="bg-noise fixed inset-0 z-0 pointer-events-none" />

      <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-20 lg:px-10">
          <div className="flex flex-1 items-center">
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex min-h-11 min-w-11 flex-col items-start justify-center gap-1.5 md:hidden"
            >
              <span
                className={`h-px w-6 bg-foreground transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-foreground transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-px w-6 bg-foreground transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>

            <nav className="hidden items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-muted md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="#top"
            className="inline-flex min-h-11 items-center font-heading text-4xl text-foreground md:text-5xl"
            onClick={() => setMenuOpen(false)}
          >
            Cuore
          </a>

          <div className="flex flex-1 justify-end">
            <a
              href={mainContact}
              target="_blank"
              rel="noreferrer"
              aria-label="Consultar por WhatsApp"
              className="hidden min-h-11 min-w-11 items-center justify-center text-[10px] font-bold tracking-[0.16em] text-muted transition-colors hover:text-accent md:inline-flex"
            >
              wpp
            </a>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
        >
          <nav className="border-t border-border bg-background px-5 py-5 shadow-warm">
            <div className="grid gap-px bg-border">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-14 items-center justify-between bg-background px-4 font-heading text-3xl text-foreground"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="font-body text-[10px] font-bold tracking-[0.18em] text-accent"
                  >
                    Ir
                  </span>
                </a>
              ))}
            </div>
            <a
              href={mainContact}
              target="_blank"
              rel="noreferrer"
              aria-label="Consultar por WhatsApp"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex min-h-14 w-full items-center justify-center bg-accent px-6 text-center text-[10px] font-bold tracking-[0.16em] text-background transition-colors hover:bg-tierra"
            >
              Consultar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section
          id="top"
          className="relative z-10 grid bg-background text-foreground lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[0.95fr_1.05fr] lg:bg-[#1f1a15] lg:text-background"
        >
          <div className="relative order-1 flex min-h-[38svh] items-end overflow-hidden bg-[#1f1a15] sm:min-h-[44svh] lg:min-h-0">
            <img
              src="/images/hero.avif"
              alt="collar y anillo de Cuore sobre piel"
              width="1023"
              height="1537"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[54%_center] opacity-95 lg:object-[58%_center] lg:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a15]/70 via-[#1f1a15]/5 to-transparent lg:from-[#1f1a15]/82 lg:via-[#1f1a15]/10" />
            <div className="relative w-full p-5 sm:p-8 lg:p-10">
              <p className="max-w-[19rem] text-[13px] leading-relaxed text-background/88 sm:text-sm lg:max-w-sm lg:text-background/78">
                Si algo te gusta, mandanos la referencia por WhatsApp y te
                decimos disponibilidad, precio o modelos parecidos.
              </p>
            </div>
          </div>

          <div className="order-2 flex flex-col justify-between px-5 py-6 sm:px-8 lg:min-h-[580px] lg:px-12 lg:py-14">
            <div className="flex items-start justify-between gap-6">
              <a
                href="https://maps.google.com/?q=Av.+Belgrano+616,+Rio+Grande,+Tierra+del+Fuego"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir ubicación de Cuore en Google Maps"
                className="inline-flex max-w-full border border-border px-4 py-2 text-[9px] font-bold tracking-[0.14em] text-muted transition-colors hover:border-accent/40 hover:text-accent lg:border-background/18 lg:text-background/78 lg:hover:border-background/42 lg:hover:text-background"
              >
                Av. Belgrano 616 · Río Grande
              </a>
              <span className="hidden text-right text-[10px] font-bold tracking-[0.2em] text-background/45 sm:block">
                Joyería y relojería
              </span>
            </div>

            <div className="py-5 lg:py-12">
              <p className="mb-4 text-[10px] font-bold tracking-[0.2em] text-accent lg:mb-5 lg:tracking-[0.24em] lg:text-[#d8c79f]">
                Catálogo consultable
              </p>
              <h1 className="max-w-[20rem] font-heading text-[2.75rem] leading-[0.92] text-foreground sm:max-w-3xl sm:text-7xl lg:text-8xl lg:text-background">
                Joyas para mirar,
                <span className="block italic text-accent lg:text-[#d8c79f]">
                  Preguntar
                  <span className="block sm:inline"> y elegir</span>
                </span>
              </h1>
              <p className="mt-4 max-w-[21rem] text-sm leading-relaxed text-muted sm:max-w-xl sm:text-lg lg:mt-7 lg:text-background/76">
                Mirá estilos, mandanos una referencia y te respondemos con
                stock, precio o modelos parecidos.
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={mainContact}
                target="_blank"
                rel="noreferrer"
                aria-label="Consultar opciones disponibles por WhatsApp"
                className="inline-flex min-h-14 items-center justify-center bg-accent px-7 text-center text-[10px] font-bold tracking-[0.14em] text-background transition-colors hover:bg-tierra"
              >
                Consultar opciones por WhatsApp
              </a>
              <a
                href="#catalogo"
                className="inline-flex min-h-14 items-center justify-center border border-border px-7 text-center text-[10px] font-bold tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent lg:border-background/22 lg:text-background lg:hover:border-background/60 lg:hover:bg-background/8"
              >
                Ver catálogo
              </a>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-border bg-background">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px px-4 py-4 text-[9px] font-bold tracking-[0.08em] text-muted sm:text-[10px] md:grid-cols-4 lg:px-10">
            {trustItems.map((item) => (
              <div key={item} className="bg-surface/55 px-4 py-4">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="catalogo" className="relative z-10 bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="mb-8 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
              <Reveal>
                <div>
                  <p className="mb-4 text-[10px] font-bold tracking-[0.24em] text-accent">
                    Por dónde empezar
                  </p>
                  <h2 className="max-w-xl font-heading text-5xl leading-none md:text-6xl">
                    Elegí una categoría y escribinos
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="max-w-lg text-sm leading-relaxed text-muted md:ml-auto">
                  No hace falta saber el nombre exacto: te respondemos con
                  disponibilidad, precio o alternativas.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <Reveal key={category.name} delay={index * 80} className="h-full">
                  <a
                    href={getWaLink(category.msg)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Consultar ${category.name} por WhatsApp`}
                    className="group flex h-full flex-col border border-border bg-background transition-colors hover:border-accent/40"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-surface">
                      <img
                        src={category.image}
                        alt={category.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-8 p-5">
                      <div>
                        <p className="font-heading text-4xl">
                          {category.name}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {category.detail}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.16em] text-accent">
                        Consultar {category.name.toLowerCase()}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-[#f3eee6] py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[0.72fr_1fr] lg:px-10">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="mb-4 text-[10px] font-bold tracking-[0.24em] text-accent">
                  Lo que más preguntan
                </p>
                <h2 className="font-heading text-5xl leading-none md:text-7xl">
                  Opciones para resolver rápido
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                  Si venís de Instagram y no sabés qué pedir, empezá por acá.
                  Te orientamos con opciones reales del local.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-px bg-border sm:grid-cols-3">
              {mostAsked.map((item, index) => (
                <Reveal key={item.title} delay={index * 100} className="h-full">
                  <a
                    href={getWaLink(item.msg)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.cta} por WhatsApp`}
                    className="group flex h-full min-h-[280px] flex-col justify-between bg-background p-6 transition-colors hover:bg-[#fbfaf6]"
                  >
                    <span className="font-heading text-3xl italic text-accent">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.16em] text-foreground transition-colors group-hover:text-accent">
                      {item.cta}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="alianzas" className="relative z-10 bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <Reveal>
              <div className="overflow-hidden bg-surface">
                <img
                  src="/images/craf.avif"
                  alt="joyero trabajando una pieza en taller"
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-center">
                <p className="mb-4 text-[10px] font-bold tracking-[0.24em] text-accent">
                  Taller y alianzas
                </p>
                <h2 className="font-heading text-5xl italic leading-none md:text-7xl">
                  Alianzas a medida
                </h2>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
                  Elegís material, medida, ancho y grabado. Te pasamos
                  presupuesto por WhatsApp antes de pasar.
                </p>
                <div className="mt-8 grid gap-px bg-border sm:grid-cols-3">
                  {["Referencia", "Medida y material", "Grabado y entrega"].map(
                    (step) => (
                      <div key={step} className="bg-surface/55 p-4 text-sm">
                        {step}
                      </div>
                    ),
                  )}
                </div>
                <a
                  href={getWaLink("Hola Cuore, quería cotizar alianzas")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Cotizar alianzas por WhatsApp"
                  className="mt-8 inline-flex min-h-14 w-full items-center justify-center bg-foreground px-7 text-center text-[10px] font-bold tracking-[0.16em] text-background transition-colors hover:bg-accent sm:w-fit"
                >
                  Cotizar alianzas por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="relojes" className="relative z-10 bg-[#201b16] py-16 text-background lg:py-24">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="mb-10 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
              <Reveal>
                <div>
                  <p className="mb-4 text-[10px] font-bold tracking-[0.24em] text-[#d8c79f]">
                    Relojería
                  </p>
                  <h2 className="max-w-4xl font-heading text-5xl leading-none md:text-7xl">
                    Casio y otras marcas para consultar
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="max-w-md text-sm leading-relaxed text-background/66 md:ml-auto">
                  Mandanos captura del modelo que viste. Si no está, buscamos
                  una alternativa parecida.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-px bg-background/10 md:grid-cols-3">
              {watchLines.map((watch, index) => (
                <Reveal key={watch.cat} delay={index * 100} className="h-full">
                  <a
                    href={getWaLink(watch.msg)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Consultar relojes ${watch.cat} por WhatsApp`}
                    className="group block h-full bg-[#262018] p-5 transition-colors hover:bg-[#2b241b]"
                  >
                    <div className="aspect-square overflow-hidden bg-background/5">
                      <img
                        src={watch.image}
                        alt={`${watch.title} - ${watch.cat}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-6 text-[10px] font-bold tracking-[0.24em] text-[#d8c79f]">
                      {watch.cat}
                    </p>
                    <h3 className="mt-2 font-heading text-4xl">
                      {watch.title}
                    </h3>
                    <p className="mt-6 text-[10px] font-bold tracking-[0.16em] text-background/70">
                      Consultar disponibilidad
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="local" className="relative z-10 bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[0.8fr_1fr] lg:px-10">
            <Reveal>
              <div>
                <p className="mb-4 text-[10px] font-bold tracking-[0.24em] text-accent">
                  Datos para confiar
                </p>
                <h2 className="font-heading text-5xl leading-none md:text-7xl">
                  Consultá antes de pasar
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
                  Estamos en el centro de Río Grande. Podés preguntar por stock,
                  mandar una referencia o coordinar retiro.
                </p>
                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                  <a
                    href={getWaLink(
                      "Hola Cuore, quería consultar antes de pasar por el local",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Consultar por WhatsApp antes de pasar por el local"
                    className="inline-flex min-h-14 items-center justify-center bg-accent px-7 text-center text-[10px] font-bold tracking-[0.16em] text-background transition-colors hover:bg-tierra"
                  >
                    Consultar antes de pasar
                  </a>
                  <a
                    href="https://instagram.com/joyeria.relojeria.cuore"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Abrir Instagram de Cuore"
                    className="inline-flex min-h-14 items-center justify-center border border-border px-7 text-center text-[10px] font-bold tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Ver Instagram
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-px bg-border">
                {[
                  ["Dirección", "Av. Belgrano 616, Río Grande"],
                  ["Horarios", "Lunes a sábado · 10:00-13:00 / 16:00-20:30"],
                  ["Envíos", "Entregas en toda la provincia"],
                  ["Pagos", "Tarjetas, efectivo, transferencias y links"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-3 bg-surface/45 p-5 text-sm sm:grid-cols-[140px_1fr]"
                  >
                    <dt className="text-[10px] font-bold tracking-[0.18em] text-muted">
                      {label}
                    </dt>
                    <dd className="text-foreground">{value}</dd>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border bg-[#f3eee6] px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <p className="font-heading text-7xl md:text-9xl">
                Cuore
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                Joyería y relojería en Río Grande. Catálogo consultable por
                WhatsApp.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-10 gap-y-2 text-[10px] font-bold tracking-[0.18em] text-muted md:justify-end">
              {[...navItems, { label: "Instagram", href: "https://instagram.com/joyeria.relojeria.cuore" }].map(
                (item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                ),
              )}
              <a
                href={mainContact}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
              >
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[10px] font-bold tracking-[0.14em] text-muted md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Cuore joyería y relojería</p>
            <p>Mandanos captura, medida o presupuesto</p>
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
};

export default Cuore;
