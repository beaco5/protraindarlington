import { Link } from 'react-router-dom';
import { Facebook, MapPin } from 'lucide-react';
import { FACEBOOK_URL, NAV_LINKS } from '@/lib/site';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-oxblood-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Logo variant="footer" />
          <p className="mt-4 max-w-xs text-sm text-cream/70">
            Elite youth football coaching from a professional's perspective, run by David Hodgson.
          </p>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-wide text-gold text-lg">Explore</h4>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-cream/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-wide text-gold text-lg">Locations</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-cream/80">
            <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
            Pro Train Darlington, County Durham, UK
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-sm text-white transition-colors hover:bg-gold hover:text-oxblood-dark"
          >
            <Facebook size={18} />
            Follow us on Facebook
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-cream/60">
          &copy; 2025&ndash;2026 Pro Train Darlington. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
