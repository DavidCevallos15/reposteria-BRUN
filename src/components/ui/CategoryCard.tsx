import { copy } from '@/data/copy';
import { selectMenuTab } from '@/lib/menuTab';
import type { Category } from '@/types';
import { ArrowUpRight } from './Icons';
import { MediaSlot } from './MediaSlot';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <button
      type="button"
      onClick={() => selectMenuTab(category.menuTarget)}
      className="group flex w-full flex-col items-center gap-4 text-center"
      aria-label={`${category.label}: ${copy.categories.hint}`}
    >
      <span className="relative block aspect-square w-full overflow-hidden rounded-[48px] bg-cream p-[14%] transition-transform duration-500 ease-(--ease-out-brun) group-hover:-translate-y-1.5 motion-reduce:transition-none">
        <MediaSlot
          src={category.image}
          alt=""
          fit="contain"
          className="size-full rounded-[28px] transition-transform duration-500 ease-(--ease-out-brun) group-hover:scale-105 motion-reduce:transition-none"
        />
        <span className="absolute right-4 bottom-4 grid size-9 place-items-center rounded-full bg-ink text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-md:hidden">
          <ArrowUpRight size={16} />
        </span>
      </span>
      <span className="font-display text-h3 text-ink">{category.label}</span>
    </button>
  );
}
