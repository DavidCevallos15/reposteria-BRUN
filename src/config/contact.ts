import type { OpeningHours } from '@/types';

export const contact = {
  whatsapp: '593990000000', // placeholder de demo
  whatsappMessage: 'Hola Dulce Atelier, quiero hacer un pedido 🍪',
  phone: '+593 99 000 0000', // placeholder de demo
  email: '', // TODO
  rappiUrl: 'https://www.rappi.com.ec/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Portoviejo%2C+Manab%C3%AD',
  address: 'Portoviejo, Manabí',
  street: 'Portoviejo, Manabí',
  postalCode: '',
  plusCode: 'Ecuador',
  coords: { lat: -1.0546, lng: -80.4545 }, // centro de Portoviejo (genérico)
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
