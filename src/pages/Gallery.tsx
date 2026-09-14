import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';

const GALLERY = [
  { src: '/images/gallery1.jpg', label: 'Training session' },
  { src: '/images/gallery2.jpg', label: 'Squad photo' },
  { src: '/images/gallery3.jpg', label: 'Match day' },
  { src: '/images/gallery4.jpg', label: 'Skills practice' },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="In pictures"
        title="Gallery"
        subtitle="Moments from our training sessions and squads in Darlington."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {GALLERY.map((photo, i) => (
              <Reveal key={photo.src} delay={(i % 3) * 100} className="break-inside-avoid">
                <div className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-oxblood/10">
                  <SmartImage
                    src={photo.src}
                    alt={photo.label}
                    label={photo.label}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      i % 2 === 0 ? 'aspect-square' : 'aspect-[3/4]'
                    }`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
