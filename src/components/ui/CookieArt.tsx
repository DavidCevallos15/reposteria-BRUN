import { useId } from 'react';
import { cn } from '@/lib/cn';

/**
 * Galleta mordida dibujada a mano en SVG, con los colores del isotipo de Brun.
 * Sirve de ilustración de marca mientras no exista la foto recortada del cliente.
 */
const CHIPS: Array<[number, number, number, number]> = [
  // cx, cy, r, rotación
  [72, 58, 11, 20],
  [128, 48, 9, -15],
  [154, 98, 12, 35],
  [108, 104, 13, 0],
  [64, 136, 10, -30],
  [122, 152, 12, 15],
  [160, 146, 7, 50],
  [92, 76, 6, 10],
  [140, 76, 5, -40],
  [86, 168, 6, 25],
];

const CRUMBS: Array<[number, number, number]> = [
  [100, 40, 2.2],
  [58, 96, 1.8],
  [136, 124, 2],
  [176, 120, 1.6],
  [96, 140, 1.8],
  [150, 178, 1.5],
  [118, 74, 1.4],
];

type Props = { className?: string; split?: boolean; title?: string };

export function CookieArt({ className, split = false, title }: Props) {
  const raw = useId().replace(/[^a-zA-Z0-9]/g, '');
  const bite = `bite-${raw}`;
  const left = `left-${raw}`;
  const right = `right-${raw}`;

  const cookie = (
    <g mask={`url(#${bite})`}>
      <circle cx="104" cy="104" r="92" fill="var(--color-accent-deep)" />
      <circle cx="104" cy="100" r="86" fill="var(--color-accent)" />
      {CRUMBS.map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="var(--color-accent-deep)" opacity=".7" />
      ))}
      {CHIPS.map(([cx, cy, r, rot]) => (
        <g key={`${cx}-${cy}`} transform={`rotate(${rot} ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.82} fill="var(--color-cocoa)" />
          <ellipse cx={cx - r * 0.3} cy={cy - r * 0.3} rx={r * 0.32} ry={r * 0.2} fill="#fff" opacity=".28" />
        </g>
      ))}
    </g>
  );

  return (
    <svg
      viewBox="0 0 208 208"
      className={cn('block h-auto w-full', className)}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <mask id={bite}>
          <rect width="208" height="208" fill="#fff" />
          <circle cx="12" cy="72" r="24" fill="#000" />
          <circle cx="4" cy="106" r="22" fill="#000" />
          <circle cx="14" cy="140" r="20" fill="#000" />
        </mask>
        <clipPath id={left}>
          <path d="M0 0h96l12 40-14 30 16 36-12 34 10 68H0Z" />
        </clipPath>
        <clipPath id={right}>
          <path d="M96 0h112v208H108l-10-68 12-34-16-36 14-30Z" />
        </clipPath>
      </defs>
      {split ? (
        <>
          <g transform="translate(-10 4) rotate(-8 104 104)" clipPath={`url(#${left})`}>
            {cookie}
          </g>
          <g transform="translate(10 -4) rotate(7 104 104)" clipPath={`url(#${right})`}>
            {cookie}
          </g>
        </>
      ) : (
        cookie
      )}
    </svg>
  );
}
