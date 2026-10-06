import type { MenuCategory } from '@/types';

// demo de portafolio: sin precios reales
export const PRICE_LABEL = 'Consultar';
export const SHOW_PRICES = true;

export const menu: MenuCategory[] = [
  {
    id: 'galletas-x3',
    name: 'Galletas · Caja x3',
    short: 'Caja x3',
    items: [
      { name: 'Pistacho Frambuesa', price: PRICE_LABEL },
      { name: 'Crema de Avellanas', price: PRICE_LABEL },
      { name: 'Cream Cheese y Canela', price: PRICE_LABEL },
      { name: 'Blanquitas', price: PRICE_LABEL },
      { name: 'Limón Brûlée', price: PRICE_LABEL },
      { name: 'Kinder', price: PRICE_LABEL },
      { name: 'Clásicas', price: PRICE_LABEL },
      { name: 'Doble Chocolate', price: PRICE_LABEL },
      { name: 'Mantequilla de Maní Salpireta', price: PRICE_LABEL },
      { name: 'Un Mix Inolvidable', price: PRICE_LABEL },
      { name: 'El Clásico', price: PRICE_LABEL },
      { name: 'Las Más Originales', price: PRICE_LABEL },
    ],
  },
  {
    id: 'galletas-x6',
    name: 'Galletas · Caja x6',
    short: 'Caja x6',
    items: [
      { name: 'Clásica y Cremosa', price: PRICE_LABEL },
      { name: 'Dulce y Equilibrada', price: PRICE_LABEL },
      { name: '3 Canela + 3 Blanquita', price: PRICE_LABEL },
    ],
  },
  {
    id: 'mini-x8',
    name: 'Galletas mini · Caja x8',
    short: 'Mini x8',
    items: [
      { name: 'Crema de Avellanas', price: PRICE_LABEL },
      { name: 'Sabores Únicos', price: PRICE_LABEL },
      { name: 'Crunch y Apetecible', price: PRICE_LABEL },
      { name: 'Cream Cheese y Canela', price: PRICE_LABEL },
      { name: 'Clásicas', price: PRICE_LABEL },
      { name: 'Doble Chocolate', price: PRICE_LABEL },
    ],
  },
  {
    id: 'mini-x12',
    name: 'Galletas mini · Caja x12',
    short: 'Mini x12',
    items: [{ name: 'Degustación Box', price: PRICE_LABEL }],
  },
  {
    id: 'ny-rolls',
    name: 'NY Rolls',
    short: 'NY Rolls',
    items: [
      { name: 'Pistacho', price: PRICE_LABEL },
      { name: 'Blanquita y Frutos Rojos', price: PRICE_LABEL },
      { name: 'Cookies and Cream', price: PRICE_LABEL },
      { name: 'Ganache de Chocolate Semiamargo', price: PRICE_LABEL },
      { name: 'Manjar de Olla y Crema de Queso', price: PRICE_LABEL },
      { name: 'Jamón de Pavo', price: PRICE_LABEL },
      { name: 'Roast Beef', price: PRICE_LABEL },
    ],
  },
  {
    id: 'pots',
    name: 'Pots cucharables',
    short: 'Pots',
    items: [
      { name: 'Tiramisú de Milo', price: PRICE_LABEL },
      { name: 'Cookies and Cream', price: PRICE_LABEL },
      { name: 'Blanquita', price: PRICE_LABEL },
      { name: 'Pie de Limón y Frutos Rojos', price: PRICE_LABEL },
    ],
  },
  {
    id: 'waffle-sticks',
    name: 'Waffle Sticks',
    short: 'Waffle Sticks',
    items: [
      { name: 'Dulces', price: PRICE_LABEL },
      { name: 'Salados', price: PRICE_LABEL },
    ],
  },
  {
    id: 'combos',
    name: 'Combos',
    short: 'Combos',
    items: [
      { name: 'Cazuela de Galleta + Helado', price: PRICE_LABEL },
      { name: 'Combo NY', price: PRICE_LABEL },
      { name: 'Coffee Run', price: PRICE_LABEL },
    ],
  },
  {
    id: 'bebidas-calientes',
    name: 'Bebidas calientes',
    short: 'Calientes',
    items: [
      { name: 'Americano', price: PRICE_LABEL },
      { name: 'Capuccino', price: PRICE_LABEL },
      { name: 'Mocaccino', price: PRICE_LABEL },
      { name: 'Chocolate Caliente', price: PRICE_LABEL },
    ],
  },
  {
    id: 'bebidas-frias',
    name: 'Bebidas frías',
    short: 'Frías',
    items: [
      { name: 'Soda Frutos Rojos y Bubble Tea', price: PRICE_LABEL },
      { name: 'Ice Caramel Latte', price: PRICE_LABEL },
      { name: 'Matcha Frío', price: PRICE_LABEL },
      { name: 'Ice Latte', price: PRICE_LABEL },
      { name: 'Limonada de Café', price: PRICE_LABEL },
      { name: 'Maracuyá Cream', price: PRICE_LABEL },
      { name: 'Jamaica Naranja Bubble Tea', price: PRICE_LABEL },
      { name: 'Ice Matcha y Frutos Rojos', price: PRICE_LABEL },
      { name: 'Agua', price: PRICE_LABEL },
    ],
  },
];

export function findMenuItem(menuId: string, itemName: string) {
  return menu.find((c) => c.id === menuId)?.items.find((i) => i.name === itemName);
}
