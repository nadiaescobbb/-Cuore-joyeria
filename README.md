# ✨ Cuore Joyería y Relojería

> Landing page de alto rendimiento y generación de leads comerciales para taller de joyería y relojería artesanal en Tierra del Fuego.

[![React 19](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Live Demo](https://img.shields.io/badge/Demo-cuore--joyeria.vercel.app-111111?style=flat-square&logo=vercel&logoColor=white)](https://cuore-joyeria.vercel.app)

---

## 🎯 Objetivo & Enfoque

Cuore combina tradición artesanal de más de 40 años con precisión técnica. La aplicación está diseñada como un **motor de conversión directa**: estructura el catálogo, la propuesta de valor del taller propio y los servicios de relojería para derivar consultas calificadas a WhatsApp con contexto comercial precargado.

---

## 🧠 Decisiones Técnicas & Performance

| Área | Implementación | Decisión de Ingeniería |
| :--- | :--- | :--- |
| **⚡ Animaciones** | `IntersectionObserver` API en `useReveal` | **Zero-dependency:** Evita sobrecargas de librerías como Framer Motion (~50kb) o GSAP (~34kb) logrando transiciones fluidas en scroll sin penalizar el LCP. |
| **🎨 Design Tokens** | Tailwind CSS v4 `@theme` | Variables CSS nativas y rampa de color HSL cálida, eliminando archivos de configuración JavaScript pesados. |
| **📲 Lead Routing** | Generador de URLs dinámicas (`wa.me`) | Inyecta mensajes estructurados según la sección de origen (*Alianzas*, *Taller*, *Relojería*), reduciendo la fricción de contacto. |
| **♿ Accesibilidad** | Respeto a `prefers-reduced-motion` | Desactiva animaciones de entrada y asegura opacidad completa para usuarios con sensibilidad al movimiento. |

---

## 💡 Aspectos Destacados de Código

### Animaciones Nativas con `useReveal` (`src/hooks/use-reveal.ts`)
Hook desacoplado que observa la entrada de elementos al viewport y se desuscribe automáticamente tras la primera intersección para evitar *memory leaks*:

```typescript
export function useReveal<T HTMLElement="HTMLDivElement" extends>(options: UseRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options;
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node); // Limpieza inmediata tras el primer render
      }
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
}

```

---

## 📁 Estructura del Proyecto

```text
src/
├── 🎨 components/
│   ├── ui/                  # Componentes atómicos (SwatchCard)
│   ├── Hero.tsx             # Sección principal con tipografía responsive
│   ├── Navbar.tsx           # Navegación y anclas de catálogo
│   ├── WorkshopSection.tsx  # Propuesta de valor del taller propio
│   ├── CategoryGrid.tsx     # Grilla de joyas y alianzas
│   ├── WatchSection.tsx     # Catálogo de relojería
│   ├── Reveal.tsx           # Wrapper de animación por viewport
│   └── FloatingWhatsApp.tsx # Botón contextual persistente
├── 📊 data/                 # Datasets estáticos e interfaces (watches, categories, swatches)
├── ⚙️ hooks/                # Custom hooks (use-reveal.ts)
├── 🔧 constants/            # Generador de links y mensajes para WhatsApp
├── 💅 index.css             # Tokens HSL y estilos base en Tailwind v4
├── App.tsx                  # Estructura general de la vista
└── main.tsx                 # Entry point de la aplicación

```

---

## 🚀 Setup & Desarrollo Local

### 1. Clonar el repositorio

```bash
git clone [https://github.com/nadiaescobbb/-Cuore-joyeria.git](https://github.com/nadiaescobbb/-Cuore-joyeria.git)
cd -Cuore-joyeria

```

### 2. Instalar dependencias

```bash
npm install

```

### 3. Iniciar entorno de desarrollo

```bash
npm run dev

```

### 4. Compilar para producción

```bash
npm run build

```

---

## 📬 Créditos

Diseñado y desarrollado por **Nadia Escobar** — [HeyTrama](https://heytrama.com).
