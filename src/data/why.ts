import type { Feature } from '@/types';

export const whyHeading = 'POR QUÉ BRUN';
export const whyImageAlt = 'Galleta de Brun partida por la mitad';

export const features: Feature[] = [
  {
    title: 'Hecho a mano',
    lines: ['Repostería artesanal de verdad:', 'cada galleta se forma y se hornea aquí.'],
    side: 'left',
  },
  {
    title: 'Sabores de autor',
    lines: ['Pistacho frambuesa, limón brûlée', 'y manjar de olla con crema de queso.'],
    side: 'left',
  },
  {
    title: 'Para regalar',
    lines: ['Cajas de 3 y 6 galletas,', 'o de 8 y 12 minis para compartir.'],
    side: 'right',
  },
  {
    title: 'A domicilio',
    lines: ['¿No puedes venir?', 'Pide por Rappi y llega a tu puerta.'],
    side: 'right',
  },
];
