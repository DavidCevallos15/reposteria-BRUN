# Dulce Atelier · Repostería Artesanal

Landing de una página de demo para **Dulce Atelier**, una repostería artesanal en Portoviejo, Ecuador (muestra de portafolio).

Stack: React 18 + Vite + TypeScript strict, Tailwind CSS v4, Motion (`motion/react`). Es una SPA estática sin backend que se despliega en Vercel.

## Correrlo

```bash
npm install
npm run dev          # http://localhost:5180
npm run build        # typecheck + build a dist/
npm run lint
npm test             # Playwright: 390 / 768 / 1440 + reduced motion
```

La primera vez que corras los tests, si Playwright pide el navegador: `npx playwright install chromium`.

## Dónde editar

| Qué | Archivo |
|---|---|
| WhatsApp, teléfono, dirección, horario, rating | `src/config/contact.ts` |
| Redes (vacío = no se muestra) | `src/config/social.ts` |
| Rutas de fotos y videos | `src/config/media.ts` (lista completa en `public/media/README.md`) |
| Orden de secciones, on/off y links del nav | `src/config/sections.ts` |
| Menú y precios (`SHOW_PRICES` para ocultarlos) | `src/data/menu.ts` |
| Textos de cada sección | `src/data/copy.ts`, `about.ts`, `why.ts` |
| Favoritos (el precio sale del menú) | `src/data/favorites.ts` |
| Reseñas (solo reales, con permiso) | `src/data/reviews.ts` |
| Colores, fuentes y keyframes | `src/styles/globals.css` (`@theme`) |

**Botón de pedido:** todos los botones usan `getPrimaryCta()` (`src/lib/whatsapp.ts`). Abre WhatsApp si `contact.whatsapp` tiene número (formato `5939XXXXXXXX`, sin `+`) y si no, Rappi.

## Datos pendientes (TODO)

Para listarlos todos: `grep -rn "TODO" src`

- **WhatsApp / teléfono / email:** no están publicados. Mientras falten, el CTA va a Rappi y el botón de WhatsApp no aparece.
- **Horario del local:** solo está confirmado el domingo (14:00–21:00). Los demás días salen como "por confirmar".
- **Número de reseñas en Google:** `googleReviewsCount` (si es `null`, no se muestra ni va al JSON-LD).
- **TikTok:** vacío, así que no se muestra.
- **Descripciones de los favoritos** y **alts de la galería**.
- **Dominio final** (`site.url`) y link del crédito.
- **Precios:** vienen de Rappi (oct-2026), que suele llevar recargo. Hay que confirmarlos con el local.
- **Fotos:** ver `public/media/README.md`.

## Herramientas del proyecto

- `.mcp.json`: servidor MCP de Playwright (`@playwright/mcp`) para que el agente navegue y pruebe la web.
- `.specify/` + `.github/`: Spec Kit con integración Copilot (`/speckit-specify`, `/speckit-plan`, etc.).
- `.claude/launch.json`: servidor de desarrollo para el preview de Claude.
