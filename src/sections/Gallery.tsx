import { social } from '@/config/social';
import { BiteEdge } from '@/components/ui/BiteEdge';
import { DeckGrid, DeckItem } from '@/components/ui/DeckGrid';
import { InstagramIcon } from '@/components/ui/Icons';
import { MediaSlot } from '@/components/ui/MediaSlot';
import { PillButton } from '@/components/ui/PillButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { copy } from '@/data/copy';
import { gallery } from '@/data/gallery';

export function Gallery() {
  return (
    <section id="galeria" aria-labelledby="galeria-title" className="relative bg-ink pt-20 pb-28 text-paper md:pt-[120px] md:pb-[150px]">
      <div className="mx-auto max-w-[1320px] px-[18px] md:px-5">
        <SectionHeading id="galeria-title" text={copy.gallery.heading} className="mb-10 text-center text-paper md:mb-16" />
        <DeckGrid className="gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {gallery.map((g) => (
            <DeckItem key={g.src}>
              <MediaSlot src={g.src} alt={g.alt} ratio="0.87" tone="dark" className="rounded-[32px]" />
            </DeckItem>
          ))}
        </DeckGrid>
        {social.instagram && (
          <div className="mt-12 flex justify-center">
            <PillButton href={social.instagram} external withCircle variant="ghost-light" icon={<InstagramIcon size={18} />}>
              {copy.gallery.follow}
            </PillButton>
          </div>
        )}
      </div>
      <BiteEdge color="accent" seed={78} />
    </section>
  );
}
