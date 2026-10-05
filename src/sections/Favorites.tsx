import { BiteEdge } from '@/components/ui/BiteEdge';
import { DeckGrid, DeckItem } from '@/components/ui/DeckGrid';
import { FloatingCrumbs } from '@/components/ui/FloatingCrumbs';
import { ProductCard } from '@/components/ui/ProductCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { copy } from '@/data/copy';
import { favorites } from '@/data/favorites';

export function Favorites() {
  return (
    <section
      id="favoritos"
      aria-labelledby="favoritos-title"
      className="relative overflow-hidden bg-ink pt-16 pb-28 text-paper md:pt-24 md:pb-[140px]"
    >
      <FloatingCrumbs preset="favorites" />
      <div className="relative mx-auto max-w-[1320px] px-[18px] md:px-5">
        <SectionHeading id="favoritos-title" text={copy.favorites.heading} className="mb-10 text-center text-paper md:mb-16" />
        <DeckGrid className="gap-10 md:grid-cols-3 md:gap-6">
          {favorites.map((f) => (
            <DeckItem key={f.id}>
              <ProductCard product={f} />
            </DeckItem>
          ))}
        </DeckGrid>
      </div>
      <BiteEdge color="cream" seed={33} />
    </section>
  );
}
