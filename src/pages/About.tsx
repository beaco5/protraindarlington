import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, Trophy } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';

const PHOTOS = [
  {
    src: `${import.meta.env.BASE_URL}images/david-playing.jpg`,
    label: 'David Hodgson – playing days',
  },
  {
    src: `${import.meta.env.BASE_URL}images/david-coaching.jpg`,
    label: 'David Hodgson – coaching',
  },
  {
    src: `${import.meta.env.BASE_URL}images/david-action2.jpg`,
    label: 'David Hodgson – in action',
  },
];

const HIGHLIGHTS = [
  { icon: Trophy, value: '450', label: 'Darlington FC managerial appearances' },
  { icon: Award, value: '1 European Cup', label: '& five domestic trophies' },
  { icon: Globe, value: '44 players', label: 'Scouted across South America' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Founder"
        title="Founded in 2025 by David Hodgson"
        subtitle="A professional footballer's lifetime of experience, brought home to the next generation of players in County Durham."
      />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {PHOTOS.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 100}>
                <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-oxblood/10">
                  <SmartImage
                    src={photo.src}
                    alt={photo.label}
                    label={photo.label}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="flex items-center gap-4 rounded-2xl bg-oxblood px-6 py-6 text-white">
                  <item.icon size={36} className="shrink-0 text-gold" />
                  <div>
                    <p className="font-heading text-2xl uppercase leading-none tracking-wide text-gold">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-cream/80">{item.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-oxblood-dark/90">
              <p>
                David Hodgson is a former professional footballer who represented both Liverpool and
                Middlesbrough before going on to manage Darlington FC. Across a distinguished career
                in the game he amassed an extensive track record in football management &mdash;
                including 450 managerial appearances for Darlington FC, achieving league titles, a
                European Cup, and five domestic trophies.
              </p>
              <p>
                Pro Train Darlington provides comprehensive training for players aged 10&ndash;16,
                giving them genuine insight into the training regimens used by professional players.
                It is an environment built by someone who has lived the game at the very top.
              </p>
              <p>
                During his own career David was coached by some of the finest minds in football,
                including Terry Venables, Dave Sexton and Howard Wilkinson, and played under managers
                such as John Neal, Ron Atkinson, Ken Brown, Bob Paisley and Joe Fagan. That knowledge
                now flows directly to the young players he coaches.
              </p>
              <p>
                Beyond a 15-year playing and managerial career, David also worked as a scout,
                identifying young talent across the world. He discovered 44 players in South America
                alone &mdash; 32 of whom moved to European clubs and 16 who went on to play in the
                World Cup.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 rounded-2xl border-l-4 border-gold bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl uppercase tracking-wide text-oxblood">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-oxblood-dark/90">
                Talented young players are too often overlooked. Pro Train Darlington makes sure every
                gifted player gets the attention and development they need to reach their full
                potential.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-12 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-heading text-base uppercase tracking-wide text-oxblood-dark font-semibold transition-colors hover:bg-gold-light"
            >
              Enrol Your Child
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
