import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { deckItem, deckParent, inView } from '@/lib/motion';

/** M4/M5: las cards entran deslizándose; la última entra primero. */
export function DeckGrid({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.ul
      className={cn('grid overflow-x-clip', className)}
      variants={reduce ? undefined : deckParent}
      {...(reduce ? {} : inView)}
    >
      {children}
    </motion.ul>
  );
}

export function DeckItem({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.li className={className} variants={reduce ? undefined : deckItem}>
      {children}
    </motion.li>
  );
}
