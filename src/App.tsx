import { MotionConfig } from 'motion/react';
import type { ComponentType } from 'react';
import { FloatingCTA } from '@/components/layout/FloatingCTA';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { sections } from '@/config/sections';
import { About } from '@/sections/About';
import { Categories } from '@/sections/Categories';
import { Favorites } from '@/sections/Favorites';
import { Gallery } from '@/sections/Gallery';
import { Hero } from '@/sections/Hero';
import { Menu } from '@/sections/Menu';
import { Reviews } from '@/sections/Reviews';
import { Visit } from '@/sections/Visit';
import { WhyBrun } from '@/sections/WhyBrun';
import type { SectionId } from '@/types';

const registry: Record<SectionId, ComponentType> = {
  hero: Hero,
  categorias: Categories,
  nosotros: About,
  favoritos: Favorites,
  menu: Menu,
  'por-que': WhyBrun,
  resenas: Reviews,
  galeria: Gallery,
  visitanos: Visit,
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only z-[60] rounded-full bg-accent px-5 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        {sections
          .filter((s) => s.enabled)
          .map(({ id }) => {
            const Section = registry[id];
            return <Section key={id} />;
          })}
      </main>
      <Footer />
      <FloatingCTA />
    </MotionConfig>
  );
}
