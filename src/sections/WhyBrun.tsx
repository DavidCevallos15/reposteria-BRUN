import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { media } from '@/config/media';
import { features, whyHeading, whyImageAlt } from '@/data/why';
import { cn } from '@/lib/cn';
import { BiteEdge } from '@/components/ui/BiteEdge';
import { CookieArt } from '@/components/ui/CookieArt';
import { MediaSlot } from '@/components/ui/MediaSlot';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SplitText } from '@/components/ui/SplitText';
import type { Feature } from '@/types';

function FeatureItem({ feature }: { feature: Feature }) {
  const left = feature.side === 'left';
  const title = left ? `- ${feature.title}` : `${feature.title} -`;
  return (
    <div className={cn('flex flex-col gap-3 text-center', left ? 'lg:text-left' : 'lg:text-right')}>
      <SplitText as="h3" by="letter" lines={[title.toUpperCase()]} className="font-display text-h3 text-ink" />
      <SplitText by="line" lines={feature.lines} className="text-[17px] leading-relaxed text-ink/80" delay={0.2} />
    </div>
  );
}

export function WhyBrun() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 25]);
  const left = features.filter((f) => f.side === 'left');
  const right = features.filter((f) => f.side === 'right');

  return (
    <section
      id="por-que"
      ref={ref}
      aria-labelledby="por-que-title"
      className="on-accent relative overflow-hidden bg-accent py-28 md:py-[180px]"
    >
      <BiteEdge color="cream" position="top" seed={45} />
      <div className="mx-auto max-w-[1480px] px-[18px] md:px-5">
        <SectionHeading id="por-que-title" text={whyHeading} className="mb-12 text-center text-cocoa md:mb-20" />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(320px,520px)_1fr] lg:gap-10">
          <div className="flex flex-col gap-12 lg:gap-20">
            {left.map((f) => (
              <FeatureItem key={f.title} feature={f} />
            ))}
          </div>
          <motion.div style={{ rotate }} className="mx-auto w-[78%] max-w-[520px] will-change-transform max-lg:order-first lg:w-full">
            <MediaSlot
              src={media.whyCenter}
              alt={whyImageAlt}
              fit="contain"
              ratio="1/1"
              fallback={<CookieArt split title={whyImageAlt} className="drop-shadow-[0_24px_30px_rgb(94_4_3/0.3)]" />}
            />
          </motion.div>
          <div className="flex flex-col gap-12 lg:gap-20">
            {right.map((f) => (
              <FeatureItem key={f.title} feature={f} />
            ))}
          </div>
        </div>
      </div>
      <BiteEdge color="paper" seed={52} />
    </section>
  );
}
