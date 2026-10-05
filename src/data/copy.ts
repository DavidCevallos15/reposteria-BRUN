// Textos de interfaz por sección (las secciones no llevan copy hardcodeado).
export const copy = {
  nav: { cta: 'Pedir ahora', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', home: 'Brun, ir al inicio' },
  hero: {
    label: 'Repostería artesanal · Portoviejo',
    title: ['GALLETAS', 'CON MORDIDA'],
    // del bio real de Instagram (@brun_ec)
    lead: ['Hechas para morder, cucharear y repetir.', 'Las galletas de Manabí, horneadas en Portoviejo.'],
    secondary: 'Ver menú',
    badge: 'REPOSTERÍA ARTESANAL · PORTOVIEJO · ',
    cookieAlt: 'Galleta de Brun con chips de chocolate',
    bgAlt: 'Mostrador de Brun',
  },
  categories: { heading: '¿QUÉ SE TE ANTOJA?', hint: 'Ver en el menú' },
  favorites: { heading: 'LOS FAVORITOS', cta: 'Pedir' },
  menu: {
    heading: 'EL MENÚ',
    tablistLabel: 'Categorías del menú',
    note: 'Precios referenciales; pueden variar en tienda.',
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
    fachadaAlt: 'Fachada del local de Brun en la Av. 5 de Junio',
  },
  footer: {
    pages: 'Explora',
    social: 'Síguenos',
    find: 'Encuéntranos',
    rappi: 'Pide por Rappi',
    rights: 'Repostería Artesanal',
    credit: 'Sitio por',
    wordmark: 'BRUN',
  },
  floating: { label: 'Hacer un pedido' },
  media: { missing: 'Falta:' },
} as const;
