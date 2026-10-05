import { motion, useReducedMotion } from 'motion/react';
import type { ElementType } from 'react';
import { cn } from '@/lib/cn';
import { inView, letter, letterParent, line, lineParent } from '@/lib/motion';

type Props = {
  as?: ElementType;
  by?: 'letter' | 'line';
  /** Una línea por item. */
  lines: string[];
  trigger?: 'load' | 'inView';
  className?: string;
  /** Clases por línea (p. ej. color de la primera). */
  lineClassNames?: string[];
  delay?: number;
  id?: string;
};

/**
 * M1/M3 (por letra) y M2 (por línea con máscara).
 * El texto completo va en aria-label; los spans animados son aria-hidden.
 */
export function SplitText({
  as: Tag = 'p',
  by = 'letter',
  lines,
  trigger = 'inView',
  className,
  lineClassNames = [],
  delay = 0,
  id,
}: Props) {
  const reduce = useReducedMotion();
  const label = lines.join(' ');

  if (reduce) {
    return (
      <Tag id={id} className={className}>
        {lines.map((l, i) => (
          <span key={i} className={cn('block', lineClassNames[i])}>
            {l}
          </span>
        ))}
      </Tag>
    );
  }

  const play = trigger === 'load' ? { initial: 'hidden', animate: 'show' } : inView;

  if (by === 'line') {
    return (
      <Tag id={id} className={className} aria-label={label}>
        <motion.span className="block" variants={lineParent(delay)} {...play} aria-hidden>
          {lines.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span className={cn('block', lineClassNames[i])} variants={line}>
                {l}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  const avg = Math.max(1, Math.round(label.length / lines.length));

  return (
    <Tag id={id} className={className} aria-label={label}>
      <motion.span className="block" variants={letterParent(avg, 0.3, delay)} {...play} aria-hidden>
        {lines.map((l, i) => (
          // padding vertical para no recortar tildes ni la ¿ con leading < 1
          <span key={i} className={cn('-my-[0.1em] block overflow-hidden py-[0.1em]', lineClassNames[i])}>
            {l.split(' ').map((word, w, words) => (
              <span key={w} className="inline-block whitespace-nowrap">
                {Array.from(word).map((ch, c) => (
                  <motion.span key={c} className="inline-block" variants={letter}>
                    {ch}
                  </motion.span>
                ))}
                {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
