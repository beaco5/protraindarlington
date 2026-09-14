import { useState, type FormEvent } from 'react';
import { CheckCircle2, Facebook, MapPin, ShieldAlert } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { FACEBOOK_URL, LOCATIONS } from '@/lib/site';

type RadioGroupProps = {
  legend: string;
  name: string;
  options: string[];
  required?: boolean;
};

function RadioGroup({ legend, name, options, required }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="mb-2 font-heading text-sm uppercase tracking-wide text-oxblood">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-oxblood/15 bg-cream px-4 py-2.5 text-sm text-oxblood-dark transition-colors hover:border-gold has-[:checked]:border-gold has-[:checked]:bg-gold/15"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              className="h-4 w-4 accent-oxblood"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

const inputClasses =
  'w-full rounded-xl border border-oxblood/15 bg-cream px-4 py-3 text-oxblood-dark placeholder:text-oxblood-dark/40 outline-none transition-colors focus:border-oxblood focus:ring-2 focus:ring-oxblood/20';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Ready to get started? Send us a few details and we'll be in touch about registration."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            {submitted ? (
              <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-oxblood/10">
                <CheckCircle2 size={56} className="mx-auto text-gold" />
                <h2 className="mt-6 font-heading text-3xl uppercase tracking-wide text-oxblood">
                  Thank You!
                </h2>
                <p className="mt-4 text-lg text-oxblood-dark/80">
                  Thanks for reaching out to Pro Train Darlington. We've received your enquiry and
                  will get back to you shortly with registration details.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-oxblood/20 px-6 py-3 font-heading text-sm uppercase tracking-wide text-oxblood transition-colors hover:bg-oxblood hover:text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
             <form
  action="https://formspree.io/f/moeqybky"
  method="POST"
  className="space-y-7 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-oxblood/10 sm:p-10"
>
                <div className="mt-10 rounded-2xl border border-gold/20 bg-cream p-6">
  <h3 className="font-heading text-2xl uppercase text-oxblood mb-4">
    Before You Book
  </h3>

  <div className="space-y-4 text-oxblood-dark">
    <div>
      <h4 className="font-semibold">Taster Sessions</h4>
      <p>
        All players are entitled to 2 taster sessions before making any commitment
        to the programme.
      </p>
    </div>

    <div>
      <h4 className="font-semibold">Cancellation Policy</h4>
      <p>
        Cancellations must be made in writing and take effect immediately. Any
        outstanding fees will be refunded immediately. No one month's notice is
        required.
      </p>
    </div>
  </div>
</div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-heading text-sm uppercase tracking-wide text-oxblood">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-heading text-sm uppercase tracking-wide text-oxblood">
                      Email address
                    </label>
                    <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@example.com" />
                  </div>
                </div>

                <RadioGroup legend="Gender" name="gender" options={['Girl', 'Boy']} required />

               <RadioGroup
  legend="Child's current age"
  name="child_age"
                  options={['Ages 11\u201313', 'Ages 12\u201315']}
                  required
                />

                <RadioGroup
                  legend="Session applying for"
                  name="session"
                  options={['Mixed Groups (Ages 11\u201313)', 'Girls Only (Ages 12\u201315)']}
                  required
                />

                <RadioGroup
                  legend="Desired location"
                  name="location"
                  options={[LOCATIONS.darlington]}
                  required
                />

               <RadioGroup
  legend="Has your child taken part in competitive football before?"
  name="competitive_experience"
                  options={['Yes', 'No']}
                  required
                />

                <div className="flex items-start gap-3 rounded-xl border-l-4 border-gold bg-cream p-4">
                  <ShieldAlert size={20} className="mt-0.5 shrink-0 text-gold-dark" />
                  <p className="text-sm text-oxblood-dark/80">
                    <span className="font-heading uppercase tracking-wide text-oxblood">Minimum standard: </span>
                    Competitive club football experience required for all sessions.
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-heading text-sm uppercase tracking-wide text-oxblood">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={inputClasses}
                    placeholder="Tell us a little about your child and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-8 py-4 font-heading text-base uppercase tracking-wide text-oxblood-dark font-semibold transition-colors hover:bg-gold-light"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 rounded-2xl bg-oxblood p-8 text-white">
              <h3 className="font-heading text-xl uppercase tracking-wide text-gold">
                Locations &mdash; Pro Train Darlington
              </h3>
              <p className="mt-3 flex items-start gap-2 text-cream/85">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                {LOCATIONS.darlington}
              </p>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm text-white transition-colors hover:bg-gold hover:text-oxblood-dark"
              >
                <Facebook size={18} />
                Follow us on Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
