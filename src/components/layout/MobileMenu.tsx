import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { copy } from '@/data/copy';
import { navLinks } from '@/data/nav';
import { EASE } from '@/lib/motion';
import { getPrimaryCta } from '@/lib/whatsapp';
import { CloseIcon } from '../ui/Icons';
import { PillButton } from '../ui/PillButton';

type Props = { open: boolean; onClose: () => void };

/** M13: overlay full-screen con stagger de links. */
export function MobileMenu({ open, onClose }: Props) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const cta = getPrimaryCta();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 z-50 flex flex-col bg-ink px-[18px] py-4 text-paper lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={copy.nav.menuClose}
              className="grid size-12 place-items-center rounded-full border border-paper/30"
            >
              <CloseIcon size={22} />
            </button>
          </div>
          <motion.ul
            className="flex flex-1 flex-col items-center justify-center gap-6"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          >
            {navLinks.map((l) => (
              <motion.li
                key={l.href}
                variants={{
                  hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
                }}
              >
                <a href={l.href} onClick={onClose} className="font-display text-[24px] tracking-wide text-paper hover:text-accent">
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <div className="flex justify-center pb-6">
            <PillButton href={cta.href} external withCircle onClick={onClose}>
              {copy.nav.cta}
            </PillButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
