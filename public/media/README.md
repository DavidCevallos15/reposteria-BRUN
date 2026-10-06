# Media de Dulce Atelier

Sube aquí las fotos y videos del cliente con estos nombres exactos (las rutas están en `src/config/media.ts`).
Si un archivo falta, la web muestra un placeholder con el texto `Falta: /media/...` en su lugar, con el mismo tamaño.

| Ruta | Uso | Ratio | Medida recomendada | Notas |
|---|---|---|---|---|
| `brand/favicon.svg` | Favicon (el logo del nav/footer es un wordmark en texto) | 1:1 | vector | ✅ Ya está |
| `brand/og.jpg` | Imagen al compartir en redes | 1.91:1 | 1200×630 | Logo + galletas sobre fondo granate |
| `hero/hero-bg.jpg` o `.mp4` | Fondo del hero (lleva overlay oscuro al 60%) | 16:9 | 1920×1080 (video ≤ 2.5 MB, sin audio) | Si usas .mp4, cambia la extensión en `media.ts` |
| `hero/cookie-cutout.png` | Galleta gigante que gira con el scroll | 1:1 | 1200×1200, **fondo transparente** | Si falta, se usa la galleta ilustrada en SVG |
| `categories/galletas.png` | Card "Galletas" | 1:1 | 800×800, fondo transparente | Producto recortado |
| `categories/ny-rolls.png` | Card "NY Rolls" | 1:1 | 800×800, fondo transparente | |
| `categories/pots.png` | Card "Pots" | 1:1 | 800×800, fondo transparente | |
| `categories/waffle-sticks.png` | Card "Waffle Sticks" | 1:1 | 800×800, fondo transparente | |
| `categories/bebidas.png` | Card "Bebidas" | 1:1 | 800×800, fondo transparente | |
| `favorites/roll-pistacho.jpg` | Favorito 1 | 411:500 (≈ 4:5) | 822×1000 | Puede ser .mp4 corto en loop |
| `favorites/caja-pistacho-frambuesa.jpg` | Favorito 2 | 411:500 | 822×1000 | |
| `favorites/pot-tiramisu-milo.jpg` | Favorito 3 | 411:500 | 822×1000 | |
| `about/pill-1.jpg` … `pill-3.jpg` | Fotos pequeñas dentro del texto "Nosotros" | 2.2:1 | 440×200 | Encuadre horizontal y apretado |
| `why/galleta-partida.png` | Imagen central de "Por qué Dulce Atelier" (gira con el scroll) | 1:1 | 1000×1000, fondo transparente | Si falta, se usa la galleta partida en SVG |
| `gallery/01.jpg` … `06.jpg` | Galería "De nuestro horno" | 0.87:1 | 870×1000 | Local, mostrador, cajas y producto |
| `visit/fachada.jpg` | Fachada del local en "Visítanos" | 4:3 | 1600×1200 | La foto del letrero sirve |

Consejos:

- Exporta en JPG con calidad 80 (o WebP). Los PNG solo cuando necesiten transparencia.
- Para recortar productos con fondo transparente: remove.bg o Higgsfield `remove_background`.
- Usa solo fotos propias, de stock o con permiso del titular.
