import { copy } from '@/data/copy';
import { findMenuItem, SHOW_PRICES } from '@/data/menu';
import { formatPrice } from '@/lib/format';
import { getPrimaryCta } from '@/lib/whatsapp';
import type { Favorite } from '@/types';
import { MediaSlot } from './MediaSlot';
import { PillButton } from './PillButton';

export function ProductCard({ product }: { product: Favorite }) {
  const item = findMenuItem(product.menuId, product.itemName);
  const cta = getPrimaryCta();
  return (
    <article className="group flex h-full flex-col">
      <div className="relative">
        <MediaSlot
          src={product.image}
          alt={product.title}
          ratio="411/500"
          tone="dark"
          className="rounded-[32px]"
          mediaClassName="transition-transform duration-700 ease-(--ease-out-brun) group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        {/* M10: aparece en hover/foco en desktop; siempre visible en mobile */}
        <div className="absolute inset-x-0 bottom-5 flex justify-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
          <PillButton
            href={cta.href}
            external
            withCircle
            ariaLabel={`${copy.favorites.cta} ${product.title} (${cta.label})`}
          >
            {copy.favorites.cta}
          </PillButton>
        </div>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-h3 text-paper">{product.title}</h3>
        {SHOW_PRICES && item && (
          <p className="tabular shrink-0 text-xl font-semibold text-accent">{formatPrice(item.price)}</p>
        )}
      </div>
      {product.description && <p className="mt-2 max-w-[42ch] text-paper/75">{product.description}</p>}
    </article>
  );
}
