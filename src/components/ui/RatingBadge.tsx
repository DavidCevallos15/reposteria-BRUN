import { contact } from '@/config/contact';
import { copy } from '@/data/copy';
import { formatRating } from '@/lib/format';
import { ArrowUpRight, StarIcon } from './Icons';

export function RatingBadge() {
  const rating = contact.googleRating;
  const count = contact.googleReviewsCount;
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="flex items-end gap-4">
        <span className="font-display text-[clamp(6rem,4rem+10vw,12rem)] leading-[0.8] text-cocoa tabular">
          {formatRating(rating)}
        </span>
        <div className="flex flex-col items-start gap-2 pb-2">
          <div className="flex text-accent-deep" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} size={28} fillLevel={Math.min(Math.max(rating - i, 0), 1)} />
            ))}
          </div>
          <p className="text-lg font-semibold text-ink">
            {copy.reviews.ratingLabel}
            {count !== null && (
              <span className="font-normal text-muted">
                {' '}
                · {count} {copy.reviews.reviewsSuffix}
              </span>
            )}
          </p>
        </div>
      </div>
      <p className="sr-only">
        {formatRating(rating)} de 5 estrellas {copy.reviews.ratingLabel}
      </p>
      <a
        href={contact.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 font-semibold text-cocoa underline decoration-accent-deep decoration-2 underline-offset-[6px]"
      >
        {copy.reviews.link}
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
        />
      </a>
    </div>
  );
}
