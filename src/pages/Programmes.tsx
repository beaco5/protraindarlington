import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CalendarDays, Clock, MapPin, ShieldCheck, Users, XCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import { LOCATIONS } from '@/lib/site';

type SessionStatus = 'available' | 'full';

type Session = {
  day: string;
  time: string;
  ages?: string;
  status: SessionStatus;
  statusLabel: string;
  note?: string;
};

const MIXED_SESSIONS: Session[] = [
  { day: 'Monday', time: '17:00', status: 'full', statusLabel: 'Fully Booked' },
  { day: 'Tuesday', time: '17:30', status: 'full', statusLabel: 'Fully Booked' },
  { day: 'Tuesday', time: '16:30', ages: 'Ages 11\u201313', status: 'available', statusLabel: 'Places Available', note: 'New session starts 15th September' },
];

const GIRLS_SESSIONS: Session[] = [
  { day: 'Friday', time: '16:30', ages: 'Ages 12\u201315', status: 'available', statusLabel: '3 Places Available', note: 'From 18th September' },
];

const GROUPS: { title: string; sessions: Session[] }[] = [
  { title: 'Mixed Groups', sessions: MIXED_SESSIONS },
  { title: 'Girls Only', sessions: GIRLS_SESSIONS },
];

function StatusBadge({ status, label }: { status: SessionStatus; label: string }) {
  if (status === 'full') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 font-heading text-xs uppercase tracking-wide text-red-700 ring-1 ring-red-200">
        <XCircle size={14} className="shrink-0" />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-heading text-xs uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-200">
      <ShieldCheck size={14} className="shrink-0" />
      {label}
    </span>
  );
}

function SessionRow({ session }: { session: Session }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-oxblood/10 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="inline-flex items-center gap-2 font-heading text-lg uppercase tracking-wide text-oxblood">
          <CalendarDays size={18} className="text-gold-dark" />
          {session.day}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-oxblood-dark/70">
          <Clock size={16} className="text-gold-dark" />
          {session.time}
        </span>
        {session.ages && (
          <span className="rounded-md bg-cream-dark px-2.5 py-0.5 font-heading text-xs uppercase tracking-wide text-oxblood-dark">
            {session.ages}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {session.note && (
          <span className="text-sm italic text-gold-dark">{session.note}</span>
        )}
        <StatusBadge status={session.status} label={session.statusLabel} />
      </div>
    </div>
  );
}

const PROGRAMMES = [
  {
    title: 'Pro Train Darlington',
    ages: 'Ages 11–13',
    audience: 'Mixed groups',
    location: LOCATIONS.darlington,
    blurb:
      'General youth coaching for mixed groups, developing technical ability, game understanding and confidence in a fun, supportive setting.',
    image: `${import.meta.env.BASE_URL}images/mixed-groups-poster.png`,
  },
  {
    title: 'Pro Train Darlington All-Girls',
    ages: 'Ages 12–15',
    audience: 'Girls-only',
    location: LOCATIONS.darlington,
    blurb:
      'A dedicated girls-only programme designed to nurture young female talent in an encouraging, empowering environment.',
    image: `${import.meta.env.BASE_URL}images/all-girls-banner.jpg`,
  },
];

export default function Programmes() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Our Programmes"
        subtitle="Professional-standard coaching for young players in Darlington."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2">
            {PROGRAMMES.map((programme, i) => (
              <Reveal key={programme.title} delay={i * 100}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-oxblood/10 transition-shadow hover:shadow-xl">
                  <div className="relative">
                   {programme.image ? (
  <SmartImage
    src={programme.image}
    alt={programme.title}
    className="aspect-[16/10] w-full object-cover"
  />
) : (
  <div className="flex aspect-[16/10] w-full items-center justify-center bg-oxblood">
    <Users size={48} className="text-gold/70" />
  </div>
)}
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 font-heading text-xs uppercase tracking-wide text-oxblood-dark font-semibold">
                      {programme.audience}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-2xl uppercase leading-tight tracking-wide text-oxblood">
                      {programme.title}
                    </h3>
                    <p className="mt-1 font-heading text-sm uppercase tracking-wide text-gold-dark">
                      {programme.ages}
                    </p>
                    <p className="mt-3 flex items-start gap-2 text-sm text-oxblood-dark/70">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                      {programme.location}
                    </p>
                    <p className="mt-4 flex-1 text-oxblood-dark/80">{programme.blurb}</p>
                    <Link
                      to="/contact"
                      className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-oxblood px-6 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-oxblood-light"
                    >
                      Enquire
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
