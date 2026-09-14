import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/Reveal';

const FAQS = [
  {
    q: 'What age groups do you cater to?',
    a: 'Mixed Groups: ages 11\u201313. Girls Only: ages 12\u201315. Both sessions require competitive club football experience.',
  },
  {
    q: 'How do I enrol my child?',
    a: 'Contact us via the website or phone for registration details.',
  },
  {
    q: 'What equipment does my child need?',
    a: 'Comfortable sportswear, football boots suitable for 4G astro, shin pads (compulsory), and a water bottle.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-oxblood/10 rounded-2xl bg-white shadow-sm ring-1 ring-oxblood/10">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg uppercase tracking-wide text-oxblood">
                {item.q}
              </span>
              <ChevronDown
                size={22}
                className={`shrink-0 text-gold transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-6 transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="min-h-0 text-oxblood-dark/80">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <p className="font-heading uppercase tracking-[0.3em] text-gold-dark text-sm">
            Good to know
          </p>
          <h2 className="mt-2 text-4xl uppercase text-oxblood sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </div>
    </section>
  );
}
