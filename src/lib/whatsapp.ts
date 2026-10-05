import { contact } from '@/config/contact';
import type { PrimaryCta } from '@/types';

export function buildWhatsAppUrl(phone: string, msg: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

export const hasWhatsApp = contact.whatsapp.trim().length > 0;

/** WhatsApp si hay número; si no, Rappi. Todos los botones de pedido pasan por aquí. */
export function getPrimaryCta(): PrimaryCta {
  if (hasWhatsApp) {
    return {
      label: 'Pedir por WhatsApp',
      href: buildWhatsAppUrl(contact.whatsapp, contact.whatsappMessage),
      kind: 'whatsapp',
    };
  }
  return { label: 'Pedir por Rappi', href: contact.rappiUrl, kind: 'rappi' };
}
