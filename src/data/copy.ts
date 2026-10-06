// Textos de interfaz por sección (las secciones no llevan copy hardcodeado).
export const copy = {
  nav: { cta: 'Pedir ahora', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', home: 'Dulce Atelier, ir al inicio' },
  hero: {
    label: 'Repostería artesanal · Portoviejo',
    title: ['GALLETAS', 'CON MORDIDA'],
    lead: ['Hechas para morder, cucharear y repetir.', 'Las galletas de Manabí, horneadas en Portoviejo.'],
    secondary: 'Ver menú',
    badge: 'REPOSTERÍA ARTESANAL · PORTOVIEJO · ',
    cookieAlt: 'Galleta de Dulce Atelier con chips de chocolate',
    bgAlt: 'Mostrador de Dulce Atelier',
  },
  categories: { heading: '¿QUÉ SE TE ANTOJA?', hint: 'Ver en el menú' },
  favorites: { heading: 'LOS FAVORITOS', cta: 'Pedir' },
  menu: {
    heading: 'EL MENÚ',
    tablistLabel: 'Categorías del menú',
    note: 'Pide tu cotización; el valor depende de tu pedido.',
  },
  reviews: {
    heading: 'LO QUE DICE PORTOVIEJO',
    ratingLabel: 'en Google',
    link: 'Ver reseñas en Google',
    reviewsSuffix: 'reseñas',
  },
  gallery: { heading: 'DE NUESTRO HORNO', follow: 'Más en Instagram' },
  visit: {
    heading: 'VEN POR TU CAJA',
    addressTitle: 'Dirección',
    hoursTitle: 'Horario del local',
    hoursMissing: 'El resto de la semana: horario por confirmar.', // TODO: horario completo
    deliveryNote: 'Delivery por Rappi todos los días.',
    directions: 'Cómo llegar',
    rappi: 'Pide por Rappi',
    whatsapp: 'WhatsApp',
    fachadaAlt: 'Fachada del local de Dulce Atelier en Portoviejo',
  },
  footer: {
    pages: 'Explora',
    social: 'Síguenos',
    find: 'Encuéntranos',
    rappi: 'Pide por Rappi',
    rights: 'Repostería Artesanal',
    credit: 'Sitio por',
    wordmark: 'DULCE',
  },
  floating: { label: 'Hacer un pedido' },
  media: { missing: 'Falta:' },
} as const;
