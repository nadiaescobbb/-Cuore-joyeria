# Cuore Joyería y Relojería — Landing Page & Lead Generator

Una landing page de alto rendimiento y conversión diseñada para **Cuore**, joyería, relojería y taller propio ubicado en Río Grande, Tierra del Fuego.

El objetivo central del proyecto es la **generación de leads cualificados**: presentar el catálogo, la propuesta de valor y los servicios del taller para derivar consultas directamente al WhatsApp de la tienda con contexto inmediato.

**Live site:** [cuore-joyeria.vercel.app](https://cuore-joyeria.vercel.app)

---

## 🧠 Arquitectura & Decisiones Técnicas

Este proyecto fue estructurado con foco en rendimiento, escalabilidad modular y código limpio.

### 1. Stack Tecnológico
* **React 19 & TypeScript:** Tipado estricto para confiabilidad y mantenibilidad.
* **Tailwind CSS v4:** Sistema de diseño configurado mediante variables CSS nativas (`@theme`), sin sobrecarga de configuración JS.
* **Vite:** Empaquetador ligero y ultra rápido con soporte de path alias (`@/*` -> `src/*`).

### 2. Animaciones Nativas (`useReveal`)
Se implementó un sistema ligero de revelado en scroll mediante la **API nativa Intersection Observer** sin librerías pesadas externas (sin Framer Motion ni GSAP):
* Custom hook **`useReveal`** en `@/hooks/use-reveal.ts` que observa la intersección con el viewport.
* Componente wrapper **`<Reveal />`** en `@/components/Reveal.tsx` que aplica las clases CSS de revelado y retardos (`delay`).

### 3. Generación Dinámica de Leads
Los llamados a la acción (CTAs) generan URLs dinámicas de `wa.me` a través de utilidades en `@/constants/wa.ts`. Dependiendo de la sección (Alianzas, Relojes, Reparaciones), se inyecta un mensaje pre-cargado con contexto directo para la atención al cliente.

### 4. Sistema de Componentes Atomizado
* **`src/components/ui/`**: Componentes atómicos reutilizables de UI (`SwatchCard`).
* **`src/components/`**: Secciones y módulos UI (`Hero`, `Navbar`, `TrustSection`, `WorkshopSection`, `CategoryGrid`, `WatchSection`, `ContactSection`, `Footer`, `Reveal`, `ImageOverlay`, `FloatingWhatsApp`).
* **`src/data/`**: Fuentes de datos estáticas e interfaces tipadas (`swatches.ts`, `categories.ts`, `watches.ts`, `nav.ts`).

---

## 📂 Estructura del Proyecto

```text
src/
├── components/          # Secciones modulares y componentes de UI
│   ├── ui/              # SwatchCard (componentes atómicos)
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── TrustSection.tsx
│   ├── WorkshopSection.tsx
│   ├── CategoryGrid.tsx
│   ├── WatchSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx
│   ├── ImageOverlay.tsx
│   └── FloatingWhatsApp.tsx
├── data/                # Datos estáticos e interfaces (categories, watches, swatches, nav)
├── hooks/
│   └── use-reveal.ts    # Hook custom para Intersection Observer
├── index.css            # Tokens de diseño HSL en Tailwind v4 y fuentes
├── App.tsx              # Ensamblado principal de la aplicación
└── main.tsx             # Punto de entrada React
```

---

## 🚀 Instalación y Desarrollo Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/nadiaescobbb/-Cuore-joyeria.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Compila para producción:
   ```bash
   npm run build
   ```

---

*Desarrollado por Nadia Escobar — [heytrama](https://heytrama.com)*
