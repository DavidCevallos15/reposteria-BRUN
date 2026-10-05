import type { OpeningHours } from '@/types';

export const contact = {
  whatsapp: '', // TODO: 5939XXXXXXXX — no publicado
  whatsappMessage: 'Hola Brun, quiero hacer un pedido 🍪',
  phone: '', // TODO
  email: '', // TODO
  rappiUrl: 'https://www.rappi.com.ec/restaurantes/42987-brun',
  mapsUrl:
    'https://www.google.com/maps/place/BRUN_EC/@-1.0473029,-80.4783629,17z/data=!4m6!3m5!1s0x902bf3003424398d:0xf325c8643fe3eb35!8m2!3d-1.0473029!4d-80.4783629!16s%2Fg%2F11mlspfq4z',
  address: 'Diagonal a la Quinta San Juan, Av. 5 de Junio, Portoviejo, Ecuador',
  street: 'Av. 5 de Junio, diagonal a la Quinta San Juan',
  postalCode: '130150',
  plusCode: 'XG3C+3M Portoviejo',
  coords: { lat: -1.0473029, lng: -80.4783629 },
  googleRating: 4.6,
  googleReviewsCount: null as number | null, // TODO
  hours: [
    { day: 'Lunes', open: '', close: '' }, // TODO
    { day: 'Martes', open: '', close: '' }, // TODO
    { day: 'Miércoles', open: '', close: '' }, // TODO
    { day: 'Jueves', open: '', close: '' }, // TODO
    { day: 'Viernes', open: '', close: '' }, // TODO
    { day: 'Sábado', open: '', close: '' }, // TODO
    { day: 'Domingo', open: '14:00', close: '21:00' },
  ] satisfies OpeningHours[],
} as const;
