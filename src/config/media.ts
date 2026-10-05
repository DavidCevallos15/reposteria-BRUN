// Rutas esperadas. Los archivos los sube David (ver public/media/README.md).
export const media = {
  logo: '/media/brand/logo.png',
  heroBg: '/media/hero/hero-bg.jpg', // puede ser .mp4
  heroCookie: '/media/hero/cookie-cutout.png', // PNG transparente (si falta, se dibuja la galleta SVG)
  categories: {
    galletas: '/media/categories/galletas.png',
    nyRolls: '/media/categories/ny-rolls.png',
    pots: '/media/categories/pots.png',
    waffleSticks: '/media/categories/waffle-sticks.png',
    bebidas: '/media/categories/bebidas.png',
  },
  favorites: {
    rollPistacho: '/media/favorites/roll-pistacho.jpg',
    cajaPistacho: '/media/favorites/caja-pistacho-frambuesa.jpg',
    potTiramisu: '/media/favorites/pot-tiramisu-milo.jpg',
  },
  aboutPills: ['/media/about/pill-1.jpg', '/media/about/pill-2.jpg', '/media/about/pill-3.jpg'],
  whyCenter: '/media/why/galleta-partida.png',
  gallery: ['01', '02', '03', '04', '05', '06'].map((n) => `/media/gallery/${n}.jpg`),
  fachada: '/media/visit/fachada.jpg',
} as const;
