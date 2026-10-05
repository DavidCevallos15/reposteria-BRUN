import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/cn';

type Crumb = {
  kind: 'chip' | 'crumb';
  className: string; // posición absoluta + tamaño
  delay: number;
  depth: number; // factor de parallax
  rotate: number;
};

const presets: Record<'hero' | 'visit' | 'favorites', Crumb[]> = {
  hero: [
    { kind: 'chip', className: 'left-[6%] top-[22%] size-7', delay: 0, depth: 1, rotate: 20 },
    { kind: 'crumb', className: 'left-[44%] top-[14%] size-5', delay: 1.2, depth: 0.6, rotate: -10 },
    { kind: 'chip', className: 'left-[38%] bottom-[16%] size-9', delay: 0.6, depth: 1.4, rotate: -35 },
    { kind: 'crumb', className: 'left-[3%] bottom-[24%] size-6', delay: 2, depth: 0.8, rotate: 45 },
    { kind: 'chip', className: 'right-[8%] top-[16%] size-6 max-lg:hidden', delay: 1.6, depth: 1.2, rotate: 10 },
  ],
  favorites: [
    { kind: 'chip', className: 'right-[4%] top-[8%] size-8', delay: 0.4, depth: 1, rotate: 25 },
    { kind: 'crumb', className: 'left-[5%] top-[14%] size-6', delay: 1.4, depth: 0.7, rotate: -20 },
  ],
  visit: [
    { kind: 'chip', className: 'left-[5%] top-[12%] size-8', delay: 0.2, depth: 1, rotate: -15 },
    { kind: 'crumb', className: 'right-[6%] top-[18%] size-6', delay: 1.1, depth: 0.7, rotate: 30 },
    { kind: 'chip', className: 'right-[10%] bottom-[12%] size-7 max-md:hidden', delay: 2.1, depth: 1.3, rotate: 60 },
  ],
};

function Shape({ kind, rotate }: { kind: Crumb['kind']; rotate: number }) {
  return (
    <svg viewBox="0 0 40 40" className="size-full" style={{ transform: `rotate(${rotate}deg)` }}>
      {kind === 'chip' ? (
        <>
          <path d="M20 4c6 0 15 13 15 21 0 7-7 11-15 11S5 32 5 25C5 17 14 4 20 4Z" className="fill-cocoa" />
          <ellipse cx="15" cy="20" rx="4" ry="2.4" fill="#fff" opacity=".25" />
        </>
      ) : (
        <path
          d="M8 14 18 6l14 5 4 13-9 10-15-2-6-10Z"
          className="fill-accent stroke-accent-deep"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function CrumbItem({ crumb, progress, reduce }: { crumb: Crumb; progress: MotionValue<number>; reduce: boolean }) {
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : -60 * crumb.depth]);
  return (
    <motion.span className={cn('absolute', crumb.className)} style={{ y }}>
      <span
        className="block size-full animate-float motion-reduce:animate-none"
        style={{ animationDelay: `${crumb.delay}s`, animationDuration: `${4 + crumb.depth * 1.5}s` }}
      >
        <Shape kind={crumb.kind} rotate={crumb.rotate} />
      </span>
    </motion.span>
  );
}

/** M12 → migas y chips SVG propios que flotan, con parallax ligero al scroll. */
export function FloatingCrumbs({ preset, className }: { preset: keyof typeof presets; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  return (
    <div ref={ref} aria-hidden className={cn('pointer-events-none absolute inset-0 z-0', className)}>
      {presets[preset].map((c, i) => (
        <CrumbItem key={i} crumb={c} progress={scrollYProgress} reduce={reduce} />
      ))}
    </div>
  );
}
