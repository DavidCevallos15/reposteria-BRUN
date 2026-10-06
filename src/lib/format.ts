const usd = new Intl.NumberFormat('es-EC', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export function formatPrice(value: number | string) {
  return typeof value === 'string' ? value : usd.format(value);
}

export function formatRating(value: number) {
  return value.toLocaleString('es-EC', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
