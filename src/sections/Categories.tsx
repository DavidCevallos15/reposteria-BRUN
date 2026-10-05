import { CategoryCard } from '@/components/ui/CategoryCard';
import { DeckGrid, DeckItem } from '@/components/ui/DeckGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { categories } from '@/data/categories';
import { copy } from '@/data/copy';

export function Categories() {
  return (
    <section id="categorias" aria-labelledby="categorias-title" className="on-light bg-paper pt-20 pb-8 md:pt-[120px] md:pb-12">
      <div className="mx-auto max-w-[1320px] px-[18px] md:px-5">
        <SectionHeading id="categorias-title" text={copy.categories.heading} className="mb-10 text-center text-cocoa md:mb-16" />
        <DeckGrid className="grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {categories.map((c, i) => (
            <DeckItem
              key={c.id}
              className={i === categories.length - 1 ? 'max-sm:col-span-2 max-sm:mx-auto max-sm:w-1/2' : undefined}
            >
              <CategoryCard category={c} />
            </DeckItem>
          ))}
        </DeckGrid>
      </div>
    </section>
  );
}
