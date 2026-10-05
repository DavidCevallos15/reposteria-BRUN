import { media } from '@/config/media';
import type { MediaAsset } from '@/types';

export const gallery: MediaAsset[] = media.gallery.map((src, i) => ({
  src,
  alt: `Producto o local de Brun, foto ${i + 1}`, // TODO: alt descriptivo por foto
}));
