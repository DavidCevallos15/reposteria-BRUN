import { motion, useReducedMotion } from 'motion/react';
import { Fragment } from 'react';
import { media } from '@/config/media';
import { aboutFootnote, aboutPillAlts, aboutStamp, aboutStatement } from '@/data/about';
import { inView, lineParent, statementLine } from '@/lib/motion';
import { BiteEdge } from '@/components/ui/BiteEdge';
import { HandStamp } from '@/components/ui/HandStamp';
import { MediaSlot } from '@/components/ui/MediaSlot';

const PILL = /\{pill:(\d+)\}/g;

function renderLine(text: string) {
  const parts = text.split(PILL);
  // split con grupo de captura: [texto, índice, texto, índice, ...]
  return parts.map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    const n = Number(part);
    return (
      <MediaSlot
        key={i}
        src={media.aboutPills[n]}
        alt={aboutPillAlts[n] ?? ''}
        inline
        className="mx-[0.12em] inline-block h-[1em] w-[2.2em] rounded-full border-[1.5px] border-accent-deep/50 bg-accent/25 p-0 align-[-0.12em] [&>span]:hidden"
      />
    );
  });
}

export function About() {
  const reduce = useReducedMotion();
  const plain = aboutStatement.map((l) => l.replace(PILL, '').trim()).join(' ');

  return (
    <section id="nosotros" aria-label="Nosotros" className="on-light relative bg-paper pt-16 pb-28 md:pt-24 md:pb-[160px]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center px-[18px] text-center md:px-5">
        <HandStamp text={aboutStamp} className="relative z-10 mb-6 md:mb-8" />
        <motion.p
          className="font-display text-statement text-ink [text-wrap:balance]"
          aria-label={plain}
          variants={reduce ? undefined : lineParent(0)}
          {...(reduce ? {} : inView)}
        >
          {aboutStatement.map((l, i) => (
            <motion.span key={i} aria-hidden className="block py-[0.08em]" variants={reduce ? undefined : statementLine}>
              {renderLine(l)}
            </motion.span>
          ))}
        </motion.p>
        <p className="mt-8 max-w-[52ch] text-muted">{aboutFootnote}</p>
      </div>
      <BiteEdge color="ink" seed={21} />
    </section>
  );
}
