import type { SectionConfig } from '@/types';

// Orden, on/off y links del nav.
export const sections: SectionConfig[] = [
  { id: 'hero', enabled: true },
  { id: 'categorias', enabled: true },
  { id: 'nosotros', enabled: true, navLabel: 'Nosotros' },
  { id: 'favoritos', enabled: true },
  { id: 'menu', enabled: true, navLabel: 'Menú' },
  { id: 'por-que', enabled: true, navLabel: 'Por qué Brun' },
  { id: 'resenas', enabled: true },
  { id: 'galeria', enabled: true, navLabel: 'Galería' },
  { id: 'visitanos', enabled: true, navLabel: 'Visítanos' },
];
