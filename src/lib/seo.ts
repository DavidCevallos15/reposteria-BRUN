import { contact } from '@/config/contact';
import { media } from '@/config/media';
import { site } from '@/config/site';
import { social } from '@/config/social';

const DAY_MAP: Record<string, string> = {
  Lunes: 'Monday',
  Martes: 'Tuesday',
  Miércoles: 'Wednesday',
  Jueves: 'Thursday',
  Viernes: 'Friday',
  Sábado: 'Saturday',
  Domingo: 'Sunday',
};

/** JSON-LD Bakery generado desde config/ (solo con datos reales). */
export function buildBakeryJsonLd() {
  const hours = contact.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${DAY_MAP[h.day]}`,
      opens: h.open,
      closes: h.close,
    }));

  const sameAs = Object.values(social).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: site.name,
    description: site.description,
    image: media.logo,
    ...(site.url ? { url: site.url } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.street,
      addressLocality: site.city,
      postalCode: contact.postalCode,
      addressCountry: 'EC',
    },
    geo: { '@type': 'GeoCoordinates', latitude: contact.coords.lat, longitude: contact.coords.lng },
    hasMap: contact.mapsUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: contact.googleRating,
      bestRating: 5,
      ...(contact.googleReviewsCount !== null ? { reviewCount: contact.googleReviewsCount } : {}),
    },
    ...(hours.length ? { openingHoursSpecification: hours } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function injectJsonLd() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(buildBakeryJsonLd());
  document.head.appendChild(script);
}
