**Cuore — Consultable Landing Page**

Landing page for Cuore, a jewelry and watchmaking store in Río Grande, Tierra del Fuego. The goal is simple: help customers discover products and reach the store directly via WhatsApp without friction.

**Live site:** cuore-joyeria.vercel.app

---

**Why It Exists**

Cuore had no web presence. Customers arrived through Instagram and asked about prices via DM with no visual context. This page solves that: it displays the catalog by category, communicates the store's strengths (in-house workshop, custom wedding bands, 30+ watch brands) and routes every inquiry to WhatsApp with a pre-filled message based on the selected category.

Prices are intentionally hidden — a client decision to keep every interaction as a direct conversation.

---

**Technical Decisions**

**Single page component**
Everything lives in `Cuore.tsx`. For a landing with no shared state between routes and no business logic complexity, splitting into multiple pages adds overhead with no real benefit.

**Animations with native IntersectionObserver**
The `useReveal` hook observes elements and adds a class when they enter the viewport. No animation library — CSS handles the work with `cubic-bezier` and `animation-delay` passed as a prop. This avoids a dependency for something the platform already provides.

**Pre-filled WhatsApp CTAs**
Each section generates a `wa.me` link with a category-specific message via `getWaLink(msg)`. The store receives context before replying, which reduces friction on both sides.

**Tailwind CSS v4**
First project using v4. The new `@theme` token system replaces `tailwind.config.js` and sits closer to native CSS custom properties. The adaptation from v3 was minimal.

---

**Stack**

| Layer | Tool |
|---|---|
| UI | React 19 |
| Language | TypeScript |
| Styles | Tailwind CSS v4 |
| Animations | IntersectionObserver API |
| Build | Vite |
| Deploy | Vercel |

---

**Structure**

```
src/
├── components/
│   └── Reveal.tsx          # Viewport-triggered animation wrapper
├── hooks/
│   └── use-reveal.ts       # Encapsulated IntersectionObserver
├── pages/
│   └── Cuore.tsx           # Full landing page
└── index.css               # Design tokens, animations, utilities
```

---

**Scope**

| Current state | Reason | Next step |
|---|---|---|
| No cart or checkout | Client sells via WhatsApp, not online | Integrate MercadoPago if online sales are needed |
| No CMS | Static catalog, client didn't require self-editing | Connect to a headless CMS if inventory grows |
| Images in `/public` | Portfolio project without CDN | Migrate to Cloudinary or similar in real production |
| No analytics | Out of initial scope | Add GA4 with WhatsApp click tracking |

---

**Getting Started**

```bash
npm install
npm run dev
```

---

**Author**

Nadia Escobar — [Trama Studio](https://tramaestudio.com)
