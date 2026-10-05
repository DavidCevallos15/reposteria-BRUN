import { media } from '@/config/media';
import type { Favorite } from '@/types';

// El precio sale del menú (menuId + itemName); no se duplica aquí.
export const favorites: Favorite[] = [
  {
    id: 'roll-pistacho',
    menuId: 'ny-rolls',
    itemName: 'Pistacho',
    title: 'NY Roll Pistacho',
    description: '', // TODO: descripción del cliente
    image: media.favorites.rollPistacho,
  },
  {
    id: 'caja-pistacho-frambuesa',
    menuId: 'galletas-x3',
    itemName: 'Pistacho Frambuesa',
    title: 'Caja x3 Pistacho Frambuesa',
    description: '', // TODO: descripción del cliente
    image: media.favorites.cajaPistacho,
  },
  {
    id: 'pot-tiramisu-milo',
    menuId: 'pots',
    itemName: 'Tiramisú de Milo',
    title: 'Pot Tiramisú de Milo',
    description: '', // TODO: descripción del cliente
    image: media.favorites.potTiramisu,
  },
];
