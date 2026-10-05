import { useId } from 'react';
import { cn } from '@/lib/cn';
import { CookieArt } from './CookieArt';

/** M9 → texto circular girando (10s) con la galleta del centro en contra-rotación. */
export function RotatingBadge({ text, className }: { text: string; className?: string }) {
  const id = `ring-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <div className={cn('relative size-36 md:size-44', className)} aria-hidden>
      <div className="absolute inset-0 rounded-full bg-ink/85 shadow-[0_8px_24px_rgb(0_0_0/0.25)]" />
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow motion-reduce:animate-none">
        <defs>
          <path id={id} d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <text className="fill-paper font-display" fontSize="17" letterSpacing="3.2">
          <textPath href={`#${id}`}>{text.repeat(2)}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[30%] animate-spin-slow-rev motion-reduce:animate-none">
        <CookieArt />
      </div>
    </div>
  );
}
