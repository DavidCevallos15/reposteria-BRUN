import { motion, useReducedMotion } from 'motion/react';
import { contact } from '@/config/contact';
import { media } from '@/config/media';
import { BiteEdge } from '@/components/ui/BiteEdge';
import { FloatingCrumbs } from '@/components/ui/FloatingCrumbs';
import { ChatIcon, ClockIcon, PinIcon } from '@/components/ui/Icons';
import { MediaSlot } from '@/components/ui/MediaSlot';
import { PillButton } from '@/components/ui/PillButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { copy } from '@/data/copy';
import { EASE } from '@/lib/motion';
import { buildWhatsAppUrl, hasWhatsApp } from '@/lib/whatsapp';

export function Visit() {
  const reduce = useReducedMotion();
  const known = contact.hours.filter((h) => h.open && h.close);
  const incomplete = known.length < contact.hours.length;

  return (
    <section id="visitanos" aria-labelledby="visitanos-title" className="on-accent relative overflow-hidden bg-accent pt-20 pb-28 md:pt-[120px] md:pb-[150px]">
      <FloatingCrumbs preset="visit" />
      <div className="relative mx-auto max-w-[1480px] px-[18px] md:px-5">
        <SectionHeading id="visitanos-title" text={copy.visit.heading} className="mb-10 text-center text-cocoa md:mb-16" />

        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <MediaSlot src={media.fachada} alt={copy.visit.fachadaAlt} ratio="4/3" className="rounded-[32px] border-accent-deep/60 bg-paper/50" />

          <div className="flex flex-col gap-8 text-ink">
            <div className="flex gap-4">
              <PinIcon size={26} className="mt-1 shrink-0 text-cocoa" />
              <div>
                <h3 className="font-display text-h3 text-cocoa">{copy.visit.addressTitle}</h3>
                <address className="mt-2 text-lg not-italic">{contact.address}</address>
                <p className="mt-1 text-ink/70">{contact.plusCode}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <ClockIcon size={26} className="mt-1 shrink-0 text-cocoa" />
              <div className="w-full max-w-md">
                <h3 className="font-display text-h3 text-cocoa">{copy.visit.hoursTitle}</h3>
                {known.length > 0 && (
                  <table className="mt-3 w-full text-lg">
                    <tbody>
                      {known.map((h) => (
                        <tr key={h.day} className="border-b border-ink/15">
                          <th scope="row" className="py-2 text-left font-medium">
                            {h.day}
                          </th>
                          <td className="tabular py-2 text-right font-semibold">
                            {h.open} – {h.close}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {incomplete && <p className="mt-3 text-ink/75">{copy.visit.hoursMissing}</p>}
                <p className="mt-1 text-ink/75">{copy.visit.deliveryNote}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <PillButton href={contact.mapsUrl} external withCircle variant="dark">
                {copy.visit.directions}
              </PillButton>
              <PillButton href={contact.rappiUrl} external variant="ghost-dark">
                {copy.visit.rappi}
              </PillButton>
              {hasWhatsApp && (
                <PillButton
                  href={buildWhatsAppUrl(contact.whatsapp, contact.whatsappMessage)}
                  external
                  variant="ghost-dark"
                  icon={<ChatIcon size={18} />}
                >
                  {copy.visit.whatsapp}
                </PillButton>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      <BiteEdge color="ink" seed={91} />
    </section>
  );
}
