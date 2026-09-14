import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/site';
import Logo from '@/components/Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-oxblood/95 shadow-lg backdrop-blur-sm py-2' : 'bg-oxblood py-3'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0" aria-label="Pro Train Darlington home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-heading uppercase tracking-wide text-sm transition-colors ${
                  isActive ? 'text-gold' : 'text-white hover:text-gold-light'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-gold px-5 py-2 font-heading uppercase text-sm tracking-wide text-oxblood-dark font-semibold transition-colors hover:bg-gold-light"
          >
            Book a Session
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 font-heading uppercase tracking-wide text-base transition-colors ${
                  isActive ? 'bg-oxblood-light text-gold' : 'text-white hover:bg-oxblood-light'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 rounded-full bg-gold px-5 py-3 text-center font-heading uppercase tracking-wide text-oxblood-dark font-semibold"
          >
            Book a Session
          </Link>
        </nav>
      </div>
    </header>
  );
}
