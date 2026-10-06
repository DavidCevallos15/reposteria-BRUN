export type SectionId =
  | 'hero'
  | 'categorias'
  | 'nosotros'
  | 'favoritos'
  | 'menu'
  | 'por-que'
  | 'resenas'
  | 'galeria'
  | 'visitanos';

export type SectionConfig = { id: SectionId; enabled: boolean; navLabel?: string };

export type MenuItem = { name: string; price: number | string; description?: string };
export type MenuCategory = { id: string; name: string; short: string; items: MenuItem[] };

export type Category = { id: string; label: string; menuTarget: string; image: string };

export type Favorite = {
  id: string;
  menuId: string;
  itemName: string;
  title: string;
  description: string;
  image: string;
};

export type Feature = { title: string; lines: string[]; side: 'left' | 'right' };

export type Review = { quote: string; author: string; source?: string };

export type MediaAsset = { src: string; alt: string };

export type OpeningHours = { day: string; open: string; close: string };

export type PrimaryCta = { label: string; href: string; kind: 'whatsapp' | 'rappi' };
