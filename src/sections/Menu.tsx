import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { PillButton } from '@/components/ui/PillButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { copy } from '@/data/copy';
import { menu, SHOW_PRICES } from '@/data/menu';
import { cn } from '@/lib/cn';
import { formatPrice } from '@/lib/format';
import { onMenuTab } from '@/lib/menuTab';
import { EASE } from '@/lib/motion';
import { getPrimaryCta } from '@/lib/whatsapp';

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const reduce = useReducedMotion();
  const cta = getPrimaryCta();
  const current = menu.find((c) => c.id === active) ?? menu[0];

  // centra el tab dentro de la tira (solo scroll horizontal; nunca mueve la página)
  const centerTab = (id: string) => {
    const el = tabRefs.current[id];
    const list = el?.parentElement;
    if (!el || !list) return;
    list.scrollTo({
      left: el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2,
      behavior: reduce ? 'auto' : 'smooth',
    });
  };

  const select = (id: string, focus = false) => {
    setActive(id);
    centerTab(id);
    if (focus) tabRefs.current[id]?.focus({ preventScroll: true });
  };

  // las cards de categoría activan un tab
  useEffect(
    () =>
      onMenuTab((id) => {
        setActive(id);
        requestAnimationFrame(() => centerTab(id));
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = menu.findIndex((c) => c.id === active);
    const keys: Record<string, number> = {
      ArrowRight: (i + 1) % menu.length,
      ArrowLeft: (i - 1 + menu.length) % menu.length,
      Home: 0,
      End: menu.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(menu[keys[e.key]].id, true);
    }
  };

  return (
    <section id="menu" aria-labelledby="menu-title" className="on-light bg-cream pt-20 pb-20 md:pt-[110px] md:pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-[18px] md:px-5">
        <SectionHeading id="menu-title" text={copy.menu.heading} className="mb-10 text-center text-cocoa md:mb-14" />

        <div
          role="tablist"
          aria-label={copy.menu.tablistLabel}
          onKeyDown={onKeyDown}
          className="no-scrollbar relative -mx-[18px] flex snap-x snap-mandatory gap-2 overflow-x-auto px-[18px] pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0"
        >
          {menu.map((c) => {
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabRefs.current[c.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls="menu-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(c.id)}
                className={cn(
                  'h-11 shrink-0 snap-start rounded-full px-5 text-[15px] font-semibold whitespace-nowrap transition-colors duration-200',
                  selected ? 'bg-ink text-paper' : 'border border-ink/15 text-ink hover:border-ink/40 hover:bg-paper',
                )}
              >
                {c.short}
              </button>
            );
          })}
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="mt-10 rounded-[48px] bg-paper px-6 py-8 shadow-[0_2px_5px_rgb(58_21_19/0.08)] md:mt-12 md:px-14 md:py-14"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <h3 className="font-display text-h3 mb-6 text-cocoa md:mb-8">{current.name}</h3>
              <ul className="grid gap-x-14 gap-y-4 md:grid-cols-2">
                {current.items.map((item) => (
                  <li key={item.name} className="flex items-end gap-3">
                    <span className="text-[17px] font-medium text-ink">{item.name}</span>
                    {SHOW_PRICES && (
                      <>
                        <span aria-hidden className="mb-1.5 min-w-6 flex-1 border-b-2 border-dotted border-ink/25" />
                        <span className="tabular text-[17px] font-semibold text-cocoa">{formatPrice(item.price)}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 text-center">
          <p className="text-sm text-muted">{copy.menu.note}</p>
          <PillButton href={cta.href} external withCircle variant="dark">
            {cta.label}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
