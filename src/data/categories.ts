import { media } from '@/config/media';
import type { Category } from '@/types';

export const categories: Category[] = [
  { id: 'galletas', label: 'Galletas', menuTarget: 'galletas-x3', image: media.categories.galletas },
  { id: 'ny-rolls', label: 'NY Rolls', menuTarget: 'ny-rolls', image: media.categories.nyRolls },
  { id: 'pots', label: 'Pots', menuTarget: 'pots', image: media.categories.pots },
  { id: 'waffle-sticks', label: 'Waffle Sticks', menuTarget: 'waffle-sticks', image: media.categories.waffleSticks },
  { id: 'bebidas', label: 'Bebidas', menuTarget: 'bebidas-frias', image: media.categories.bebidas },
];
