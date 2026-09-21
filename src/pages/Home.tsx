import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { FaqSection } from '@/components/Faq';
import { FACEBOOK_URL } from '@/lib/site';

const SQUAD_PHOTOS = [
  { src: `${import.meta.env.BASE_URL}images/squad1.jpg`, label: 'Squad photo 1' },
  { src: `${import.meta.env.BASE_URL}images/squad2.jpg`, label: 'Training session' },
  { src: `${import.meta.env.BASE_URL}images/squad3.jpg`, label: 'Squad photo 3' },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-oxblood text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(201,162,75,0.35), transparent 45%), radial-gradient(circle at 85% 70%, rgba(201,162,75,0.25), transparent 40%)',
          }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-oxblood-light/40 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.25em] text-gold">
              Darlington, County Durham
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-6xl leading-none tracking-wide sm:text-7xl lg:text-8xl">
              PRO TRAIN DARLINGTON
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-cream/85 sm:text-xl">
              Elite youth football coaching from a professional&apos;s perspective.
            </p>
          </Reveal>

          {/* SESSION TIMETABLE */}
          <Reveal delay={200}>
            <div className="mt-8 w-full max-w-3xl rounded-2xl border border-gold/20 bg-white/10 p-6 backdrop-blur">
              <div className="mb-5">
                <p className="font-heading uppercase tracking-[0.25em] text-gold text-xs">
                  Current Availability
                </p>
                <h3 className="mt-1 font-heading text-2xl uppercase tracking-wide">
                  Session Timetable
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                  <div>
                    <p className="font-heading text-lg uppercase">Monday 17:00</p>
                    <p className="text-sm text-cream/70">Mixed Groups</p>
                  </div>
                  <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-200">
                    FULLY BOOKED
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                  <div>
                    <p className="font-heading text-lg uppercase">Tuesday 17:30</p>
                    <p className="text-sm text-cream/70">Mixed Groups</p>
                  </div>
                  <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-200">
                    FULLY BOOKED
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                  <div>
                    <p className="font-heading text-lg uppercase">Tuesday 16:30</p>
                    <p className="text-sm text-cream/70">
                      Ages 11–13 • New session from 29nd September
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    PLACES AVAILABLE
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                  <div>
                    <p className="font-heading text-lg uppercase">Friday 16:30</p>
                    <p className="text-sm text-cream/70">
                      Girls Only 12–15 • From 18th September
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    2 PLACES AVAILABLE
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm text-gold">
                Shin pads compulsory • Competitive club football experience required.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-heading text-base uppercase tracking-wide text-oxblood-dark font-semibold transition-colors hover:bg-gold-light"
              >
                Book a Session
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-heading text-base uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
              >
                Meet David Hodgson
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xl leading-relaxed text-oxblood-dark/90 sm:text-2xl">
              Pro Train specialise in nurturing young talent and instilling a love
              for football. Programmes are tailored to ensure every young player
              reaches their full potential in a fun and supportive environment.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection />

      <section className="bg-oxblood text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
          <Reveal>
            <div className="flex items-center gap-3">
              <MapPin size={32} className="text-gold" />
              <p className="font-heading text-2xl uppercase tracking-wide sm:text-3xl">
                Based in Darlington, County Durham
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 font-heading uppercase tracking-wide text-white transition-colors hover:bg-gold hover:text-oxblood-dark"
            >
              <Facebook size={20} />
              Follow us on Facebook
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <p className="font-heading uppercase tracking-[0.3em] text-gold-dark text-sm">
              On the pitch
            </p>
            <h2 className="mt-2 text-4xl uppercase text-oxblood sm:text-5xl">
              Training &amp; Squads
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {SQUAD_PHOTOS.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-oxblood/10">
                  <SmartImage
                    src={photo.src}
                    alt={photo.label}
                    label={photo.label}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-heading uppercase tracking-wide text-oxblood transition-colors hover:text-gold-dark"
            >
              View full gallery
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}