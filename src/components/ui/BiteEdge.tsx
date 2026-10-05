import { useMemo } from 'react';
import { cn } from '@/lib/cn';

type EdgeColor = 'ink' | 'paper' | 'cream' | 'accent';

const fillClass: Record<EdgeColor, string> = {
  ink: 'fill-ink',
  paper: 'fill-paper',
  cream: 'fill-cream',
  accent: 'fill-accent',
};

/** PRNG determinista (mulberry32): mismo seed → mismo borde. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 1440;
const H = 40;
const BASE = 6;

/** Borde de "mordida": arcos cóncavos de radios irregulares. */
function bitePath(seed: number) {
  const rand = rng(seed);
  let x = 0;
  let d = `M0,${BASE}`;
  while (x < W) {
    const w = Math.min(W - x, 70 + rand() * 90);
    const depth = 12 + rand() * 20;
    x += w;
    d += ` A${(w / 2).toFixed(1)},${depth.toFixed(1)} 0 0 0 ${x.toFixed(1)},${BASE}`;
  }
  return `${d} L${W},${H} L0,${H} Z`;
}

type Props = { color: EdgeColor; position?: 'top' | 'bottom'; seed?: number; className?: string };

/**
 * Se coloca dentro de una sección `relative`. `color` es el color de la sección vecina:
 * bottom → la siguiente "muerde" el final de esta; top → la anterior muerde el inicio.
 */
export function BiteEdge({ color, position = 'bottom', seed = 1, className }: Props) {
  const d = useMemo(() => bitePath(seed), [seed]);
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={cn(
        'pointer-events-none absolute inset-x-0 z-10 block h-6 w-full md:h-10',
        position === 'bottom' ? '-bottom-px' : '-top-px rotate-180',
        fillClass[color],
        className,
      )}
    >
      <path d={d} />
    </svg>
  );
}
