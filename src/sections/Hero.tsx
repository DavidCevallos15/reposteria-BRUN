import { motion, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { media } from '@/config/media';
import { copy } from '@/data/copy';
import { useScrollCookie } from '@/hooks/useScrollCookie';
import { EASE } from '@/lib/motion';
import { getPrimaryCta } from '@/lib/whatsapp';
import { BiteEdge } from '@/components/ui/BiteEdge';
import { CookieArt } from '@/components/ui/CookieArt';
import { FloatingCrumbs } from '@/components/ui/FloatingCrumbs';
import { MediaSlot } from '@/components/ui/MediaSlot';
import { PillButton } from '@/components/ui/PillButton';
import { RotatingBadge } from '@/components/ui/RotatingBadge';
import { SplitText } from '@/components/ui/SplitText';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { rotate, scale, y, textY } = useScrollCookie(ref);
  const reduce = useReducedMotion();
  const cta = getPrimaryCta();

  return (
    <section
      id="hero"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-ink text-paper"
    >
      {/* fondo: foto o video del cliente */}
      <div className="absolute inset-0 -z-10">
        <MediaSlot src={media.heroBg} alt={copy.hero.bgAlt} tone="dark" priority className="size-full border-0" />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_80%_50%,rgb(248_181_94/0.16),transparent_70%)]" />
      </div>

      <FloatingCrumbs preset="hero" />

      {/* S1: galleta gigante ligada al scroll */}
      <div className="pointer-events-none absolute -right-[20vw] bottom-[3%] w-[74vw] max-w-[760px] sm:-right-[14vw] sm:w-[58vw] lg:top-1/2 lg:-right-[8vw] lg:bottom-auto lg:w-[52vw] lg:-translate-y-1/2">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.85, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        >
        <motion.div style={{ rotate, scale, y }} className="will-change-transform">
          <MediaSlot
            src={media.heroCookie}
            alt={copy.hero.cookieAlt}
            priority
            fit="contain"
            ratio="1/1"
            fallback={<CookieArt className="drop-shadow-[0_30px_40px_rgb(0_0_0/0.35)]" />}
          />
        </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto w-full max-w-[1480px] px-[18px] pt-28 pb-[68vw] sm:pb-[52vw] md:px-5 lg:pt-32 lg:pb-28"
      >
        <div className="max-w-[760px]">
          <motion.div
            className="mb-6 flex items-center gap-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="text-sm font-medium tracking-[0.14em] text-paper/85 uppercase">{copy.hero.label}</span>
            <span aria-hidden className="h-px w-24 bg-linear-to-r from-accent to-transparent md:w-40" />
          </motion.div>

          <SplitText
            as="h1"
            id="hero-title"
            by="letter"
            trigger="load"
            lines={[...copy.hero.title]}
            lineClassNames={['text-accent', 'text-paper']}
            className="font-display text-h1"
            delay={0.15}
          />

          <SplitText
            by="line"
            trigger="load"
            lines={[...copy.hero.lead]}
            delay={0.7}
            className="mt-7 max-w-[46ch] text-lg leading-relaxed text-paper/85 md:text-xl"
          />

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
          >
            <PillButton href={cta.href} external withCircle>
              {cta.label}
            </PillButton>
            <PillButton href="#menu" variant="ghost-light">
              {copy.hero.secondary}
            </PillButton>
          </motion.div>
        </div>
      </motion.div>

      <RotatingBadge
        text={copy.hero.badge}
        className="absolute bottom-[8%] left-[5vw] z-10 max-sm:size-28 lg:right-[38vw] lg:bottom-[12%] lg:left-auto"
      />

      <BiteEdge color="paper" position="bottom" seed={7} />
    </section>
  );
}
