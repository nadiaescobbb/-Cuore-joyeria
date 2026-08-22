# Cuore — Joyería y Relojería

Landing de conversión para un taller de joyería y relojería artesanal en Tierra del Fuego, con más de 40 años de oficio.

[En preparación para lanzamiento](#)

## El punto de partida

Cuore no vende online: el cierre de cada venta pasa por WhatsApp, con el taller respondiendo con el contexto del catálogo. Eso cambia qué tiene que hacer la página. No es una vidriera que necesita mostrar todo el catálogo con la mayor fidelidad posible — es el paso previo a una conversación, y tiene que llegar rápido al celular de alguien que venía mirando Instagram.

Esa restricción es la que ordena el resto de las decisiones técnicas: nada de librerías de animación pesadas, nada de router para navegar entre secciones que en realidad son una sola página, y cada categoría del catálogo arma su propio link de WhatsApp con el contexto de origen precargado, para que la conversación no empiece de cero.

## Por qué sin librerías de animación

Framer Motion pesa cerca de 50kb, GSAP cerca de 34kb — para una landing que compite por segundos de atención en una conexión de celular, ese peso extra no se justifica cuando el navegador ya trae una API que resuelve lo mismo. El scroll reveal usa `IntersectionObserver` directamente y se desuscribe apenas el elemento entra en pantalla una vez, para no dejar observers vivos de más:

```ts
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options;
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
}
```

Cuando el sistema detecta `prefers-reduced-motion`, las animaciones de entrada se desactivan y los elementos aparecen con opacidad completa desde el principio — no es un detalle de accesibilidad aparte, es el mismo hook respetando una preferencia del sistema.

## Tokens y tipografía

La paleta HSL define superficie, acento y color de marca sobre variables nativas de Tailwind v4 (`@theme`), sin archivo de configuración JavaScript aparte. Tipografía: Cormorant Garamond para los títulos editoriales, Hanken Grotesk para el cuerpo, Space Mono para el detalle técnico de la sección de relojería.

## Estructura

```
src/
├── components/
│   ├── ui/                  # SwatchCard y componentes atómicos
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── WorkshopSection.tsx  # Propuesta de valor del taller propio
│   ├── CategoryGrid.tsx
│   ├── WatchSection.tsx
│   ├── Reveal.tsx
│   └── FloatingWhatsApp.tsx
├── data/                    # Datasets estáticos (watches, categories, swatches)
├── hooks/
│   └── use-reveal.ts
├── constants/                # Generador de links y mensajes de WhatsApp
├── index.css
├── App.tsx
└── main.tsx
```

## Desarrollo local

```bash
git clone https://github.com/nadiaescobbb/-Cuore-joyeria.git
cd -Cuore-joyeria
npm install
npm run dev
npm run build
```

## Créditos

Diseñado y desarrollado por Nadia Escobar — heytrama.
