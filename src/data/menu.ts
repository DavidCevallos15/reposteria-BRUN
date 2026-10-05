import type { MenuCategory } from '@/types';

// fuente: Rappi oct-2026 — confirmar precios en local
export const SHOW_PRICES = true;

export const menu: MenuCategory[] = [
  {
    id: 'galletas-x3',
    name: 'Galletas · Caja x3',
    short: 'Caja x3',
    items: [
      { name: 'Pistacho Frambuesa', price: 13.5 },
      { name: 'Crema de Avellanas', price: 9.65 },
      { name: 'Cream Cheese y Canela', price: 9.65 },
      { name: 'Blanquitas', price: 9.65 },
      { name: 'Limón Brûlée', price: 9.65 },
      { name: 'Kinder', price: 11.7 },
      { name: 'Clásicas', price: 7.75 },
      { name: 'Doble Chocolate', price: 9.65 },
      { name: 'Mantequilla de Maní Salpireta', price: 11.7 },
      { name: 'Un Mix Inolvidable', price: 10.3 },
      { name: 'El Clásico', price: 9.0 },
      { name: 'Las Más Originales', price: 10.3 },
    ],
  },
  {
    id: 'galletas-x6',
    name: 'Galletas · Caja x6',
    short: 'Caja x6',
    items: [
      { name: 'Clásica y Cremosa', price: 20.0 },
      { name: 'Dulce y Equilibrada', price: 19.3 },
      { name: '3 Canela + 3 Blanquita', price: 19.3 },
    ],
  },
  {
    id: 'mini-x8',
    name: 'Galletas mini · Caja x8',
    short: 'Mini x8',
    items: [
      { name: 'Crema de Avellanas', price: 12.9 },
      { name: 'Sabores Únicos', price: 13.85 },
      { name: 'Crunch y Apetecible', price: 13.5 },
      { name: 'Cream Cheese y Canela', price: 12.9 },
      { name: 'Clásicas', price: 10.3 },
      { name: 'Doble Chocolate', price: 12.9 },
    ],
  },
  {
    id: 'mini-x12',
    name: 'Galletas mini · Caja x12',
    short: 'Mini x12',
    items: [{ name: 'Degustación Box', price: 20.0 }],
  },
  {
    id: 'ny-rolls',
    name: 'NY Rolls',
    short: 'NY Rolls',
    items: [
      { name: 'Pistacho', price: 7.75 },
      { name: 'Blanquita y Frutos Rojos', price: 6.5 },
      { name: 'Cookies and Cream', price: 6.5 },
      { name: 'Ganache de Chocolate Semiamargo', price: 6.5 },
      { name: 'Manjar de Olla y Crema de Queso', price: 6.5 },
      { name: 'Jamón de Pavo', price: 9.0 },
      { name: 'Roast Beef', price: 9.0 },
    ],
  },
  {
    id: 'pots',
    name: 'Pots cucharables',
    short: 'Pots',
    items: [
      { name: 'Tiramisú de Milo', price: 5.5 },
      { name: 'Cookies and Cream', price: 5.5 },
      { name: 'Blanquita', price: 5.5 },
      { name: 'Pie de Limón y Frutos Rojos', price: 5.5 },
    ],
  },
  {
    id: 'waffle-sticks',
    name: 'Waffle Sticks',
    short: 'Waffle Sticks',
    items: [
      { name: 'Dulces', price: 5.15 },
      { name: 'Salados', price: 5.15 },
    ],
  },
  {
    id: 'combos',
    name: 'Combos',
    short: 'Combos',
    items: [
      { name: 'Cazuela de Galleta + Helado', price: 9.0 },
      { name: 'Combo NY', price: 15.75 },
      { name: 'Coffee Run', price: 10.95 },
    ],
  },
  {
    id: 'bebidas-calientes',
    name: 'Bebidas calientes',
    short: 'Calientes',
    items: [
      { name: 'Americano', price: 2.6 },
      { name: 'Capuccino', price: 3.25 },
      { name: 'Mocaccino', price: 3.85 },
      { name: 'Chocolate Caliente', price: 3.85 },
    ],
  },
  {
    id: 'bebidas-frias',
    name: 'Bebidas frías',
    short: 'Frías',
    items: [
      { name: 'Soda Frutos Rojos y Bubble Tea', price: 5.15 },
      { name: 'Ice Caramel Latte', price: 4.85 },
      { name: 'Matcha Frío', price: 5.15 },
      { name: 'Ice Latte', price: 4.2 },
      { name: 'Limonada de Café', price: 4.85 },
      { name: 'Maracuyá Cream', price: 5.15 },
      { name: 'Jamaica Naranja Bubble Tea', price: 5.15 },
      { name: 'Ice Matcha y Frutos Rojos', price: 6.4 },
      { name: 'Agua', price: 0.75 },
    ],
  },
];

export function findMenuItem(menuId: string, itemName: string) {
  return menu.find((c) => c.id === menuId)?.items.find((i) => i.name === itemName);
}
