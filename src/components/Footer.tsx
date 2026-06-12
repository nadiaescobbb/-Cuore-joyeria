import { navItems } from '../data/nav';

const getWaLink = (msg: string) => `https://wa.me/542964557378?text=${encodeURIComponent(msg)}`;

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-dark-surface py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="flex flex-col gap-12 mb-16 w-full">
          <span className="font-heading text-[72px] md:text-[96px] leading-none tracking-tight text-background">
            Cuore
          </span>
          
          <div className="flex flex-col items-start gap-6 bg-dark-surface p-6 md:p-8 w-full md:max-w-[60ch]">
            <p className="font-body text-body text-background leading-relaxed">
              Si querés ver opciones o resolver una duda, escribinos. En Cuore te ayudamos a elegir.
            </p>
            <a 
              href={getWaLink("Hola Cuore")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribinos por WhatsApp"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-body font-bold text-body tracking-normal hover:bg-tierra transition-colors duration-200 focus-visible:outline-accent w-fit"
            >
              Escribinos
            </a>
          </div>

          <nav className="flex flex-row flex-wrap gap-x-8 gap-y-4" aria-label="Navegación del pie de página">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="font-body text-body tracking-normal text-muted hover:text-background transition-colors focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-dark-surface pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-caption text-muted tracking-wide uppercase">
            © {new Date().getFullYear()} Joyería Cuore. Río Grande, TDF.
          </p>
        </div>
      </div>
    </footer>
  );
}
