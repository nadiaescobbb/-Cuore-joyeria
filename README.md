# Cuore Joyería — Landing Page & Lead Generator

Una landing page optimizada para conversión diseñada para Cuore, una joyería y relojería ubicada en Río Grande, Tierra del Fuego. 

El objetivo de negocio de este proyecto no era crear un e-commerce tradicional, sino una herramienta de **generación de leads**: mostrar el catálogo y los servicios (taller propio, alianzas a medida) para derivar consultas altamente intencionadas y con contexto directamente al WhatsApp de la tienda.

**Live site:** [cuore-joyeria.vercel.app](https://cuore-joyeria.vercel.app)

---

## 🧠 Decisiones Técnicas y Arquitectura

Este proyecto fue construido pensando en rendimiento, mantenibilidad y adopción temprana de nuevas tecnologías. 

### 1. Stack Tecnológico
*   **React 19 & TypeScript:** Tipado estricto para evitar errores en tiempo de ejecución y aprovechamiento de la última versión de React.
*   **Tailwind CSS v4:** Adopción temprana del nuevo motor de Tailwind, reemplazando el tradicional `tailwind.config.js` por un sistema de variables de CSS puro (`@theme`), reduciendo la sobrecarga de configuración.
*   **Vite:** Herramienta de build ultra rápida para una mejor experiencia de desarrollo.

### 2. Animaciones sin dependencias externas
Para mantener el bundle lo más ligero posible, decidí **no utilizar librerías como Framer Motion o GSAP**. 
Implementé un sistema de animaciones en scroll utilizando la **API nativa Intersection Observer**. 
*   Se creó un custom hook `useReveal` que observa cuándo los elementos entran al viewport.
*   El componente wrapper `<Reveal />` aplica clases de CSS basadas en el estado, manejando duraciones y `animation-delay` directamente por props.

### 3. Generación Dinámica de Leads
Para reducir la fricción en el contacto, los botones de llamado a la acción (CTAs) generan URLs dinámicas de `wa.me`. Dependiendo de la sección desde donde el usuario hace clic (por ejemplo, "Relojes" o "Reparaciones"), el mensaje pre-cargado de WhatsApp cambia. Esto otorga contexto inmediato al vendedor antes de responder.

### 4. Optimización de Medios (CDN)
La aplicación cuenta con una abstracción utilitaria (`getImageUrl`) para inyectar una variable de entorno (`VITE_CDN_URL`). Esto permite cambiar instantáneamente la carga de imágenes locales hacia un CDN como Cloudinary, habilitando formatos modernos y compresión dinámica (`f_auto,q_auto`) sin modificar la lógica de los componentes.

### 5. Arquitectura de Componentes
El proyecto comenzó como un solo archivo pero fue refactorizado hacia un diseño modular y escalable.
*   **`App.tsx`** actúa como el layout principal.
*   Las secciones están divididas lógicamente en `src/components/` (ej: `Hero.tsx`, `CategoryGrid.tsx`, `WorkshopSection.tsx`).
*   No se utilizó un sistema de enrutamiento (React Router) ni manejo de estado global (Redux/Zustand) debido a que es una Single Page Application (SPA) pura; agregar esas librerías habría añadido complejidad y peso innecesarios a la carga de la página.

---

## 📂 Estructura del Proyecto

```text
src/
├── components/          # Componentes modulares por sección de la landing
│   ├── Reveal.tsx       # Wrapper reutilizable para animaciones de scroll
│   └── ...              # Hero, Navbar, CategoryGrid, TrustSection, etc.
├── hooks/
│   └── use-reveal.ts    # Lógica de Intersection Observer encapsulada
├── index.css            # Tokens de diseño de Tailwind v4 y utilidades custom
├── App.tsx              # Componente principal que ensambla las secciones
└── main.tsx             # Entry point de React
```

---

## 🚀 Instalación y Desarrollo Local

Para correr este proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🔮 Próximos Pasos (Roadmap)
Si el negocio requiere escalar la plataforma, la base de código está preparada para:
- **Integración de Headless CMS:** Para que el cliente pueda actualizar imágenes y productos sin requerir despliegues de código.
- **Analíticas:** Integración de Google Tag Manager para trackear eventos de conversión (clics en botones de WhatsApp).

---

*Desarrollado por Nadia Escobar — [Trama Studio](https://tramaestudio.com)*
