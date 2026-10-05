import { BiteEdge } from '@/components/ui/BiteEdge';
import { DeckGrid, DeckItem } from '@/components/ui/DeckGrid';
import { RatingBadge } from '@/components/ui/RatingBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { copy } from '@/data/copy';
import { reviews } from '@/data/reviews';

export function Reviews() {
  return (
    <section id="resenas" aria-labelledby="resenas-title" className="on-light relative bg-paper pt-20 pb-28 md:pt-[120px] md:pb-[150px]">
      <div className="mx-auto max-w-[1320px] px-[18px] md:px-5">
        <SectionHeading id="resenas-title" text={copy.reviews.heading} className="mb-10 text-center text-cocoa md:mb-14" />
        <RatingBadge />
        {reviews.length > 0 && (
          <DeckGrid className="mt-14 gap-4 md:grid-cols-3 md:gap-6">
            {reviews.map((r) => (
              <DeckItem key={r.author}>
                <figure className="flex h-full flex-col rounded-[48px] bg-cream p-8 md:p-10">
                  <span aria-hidden className="font-display text-7xl leading-none text-accent-deep">
                    “
                  </span>
                  <blockquote className="font-display mt-2 flex-1 text-2xl leading-tight text-ink">{r.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5 font-semibold text-ink">
                    {r.author}
                    {r.source && <span className="font-normal text-muted"> · {r.source}</span>}
                  </figcaption>
                </figure>
              </DeckItem>
            ))}
          </DeckGrid>
        )}
      </div>
      <BiteEdge color="ink" seed={64} />
    </section>
  );
}
