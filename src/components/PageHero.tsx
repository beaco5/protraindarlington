import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-oxblood pt-32 pb-16 text-white sm:pt-40 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 25%, rgba(201,162,75,0.35), transparent 45%), radial-gradient(circle at 90% 80%, rgba(201,162,75,0.2), transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && (
            <p className="font-heading uppercase tracking-[0.3em] text-gold text-sm">{eyebrow}</p>
          )}
          <h1 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && <div className="mt-5 max-w-2xl text-lg text-cream/85">{subtitle}</div>}
        </Reveal>
      </div>
    </section>
  );
}
