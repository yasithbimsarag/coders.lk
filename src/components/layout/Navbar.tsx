import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Our Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = !scrolled;
  const linkColor = isDark ? 'text-white hover:text-slate-200' : 'text-slate-900 hover:text-brand';
  const brandColor = isDark ? 'text-white' : 'text-slate-900';
  const mobileButtonClass = isDark ? 'inline-flex items-center justify-center rounded-full border border-slate-100/30 bg-slate-950/90 p-3 text-white shadow-lg lg:hidden' : 'inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-800 shadow-lg lg:hidden';
  const mobileMenuBg = isDark ? 'border-t border-slate-900/20 bg-slate-950/95' : 'border-t border-slate-200 bg-white';
  const mobileLinkClass = isDark ? 'rounded-2xl bg-slate-900/90 px-5 py-4 text-base font-medium text-white transition hover:bg-slate-800/95' : 'rounded-2xl bg-slate-50 px-5 py-4 text-base font-medium text-slate-900 transition hover:bg-slate-100';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isDark ? 'backdrop-blur-xl bg-slate-950/95' : 'backdrop-blur-xl bg-white/95 shadow-sm border-b border-slate-200'} `}>
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] ${brandColor}`}>
          <img src="/coders_logo.png" alt="Coders.lk logo" className="h-10 w-10 rounded-2xl object-cover shadow-glow" />
          <span>Coders.lk</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={`text-sm transition ${linkColor}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-600">
            Start a Project
          </Link>
        </div>

        <button className={mobileButtonClass} onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} className={`${mobileMenuBg} lg:hidden`}>
          <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 py-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={mobileLinkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="rounded-2xl bg-brand px-5 py-4 text-center text-base font-semibold text-white transition hover:bg-blue-600" onClick={() => setOpen(false)}>
              Start a Project
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
