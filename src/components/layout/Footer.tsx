import {
  Briefcase,
  Facebook,
  FolderKanban,
  Globe,
  Heart,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Monitor,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleInternalNavigate = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-blue-900/30 bg-[#031126] pt-12 text-sm text-blue-100">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_12%_16%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.15),transparent_33%),linear-gradient(to_bottom,rgba(2,6,23,0.95),rgba(2,8,23,0.98))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[radial-gradient(circle_at_30%_120%,rgba(37,99,235,0.22),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 p-2 shadow-[0_0_20px_rgba(59,130,246,0.45)]">
              <img src="/coders_logo.png" alt="Coders.lk logo" className="h-8 w-8 rounded-lg object-cover" />
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-white">Coders.lk</p>
              <p className="mt-0.5 text-sm text-blue-100/85">Building digital products for ambitious businesses.</p>
            </div>
          </div>

          <div className="h-0.5 w-7 rounded-full bg-blue-400/80" />

          <p className="max-w-md text-base leading-7 text-blue-100/90">
            A premium Sri Lankan technology company focused on websites, e-commerce and enterprise software.
          </p>

          <div className="relative mt-2 overflow-hidden rounded-2xl border border-blue-400/20 bg-[#041933]/75 p-4 shadow-[0_14px_36px_rgba(6,40,110,0.3)]">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-blue-300/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-100">Web Development</span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-100">Custom Software</span>
              <span className="rounded-full border border-indigo-300/30 bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-100">Growth Systems</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xl font-semibold text-white">Navigation</p>
          <div className="h-0.5 w-7 rounded-full bg-blue-400/80" />
          <div className="space-y-3">
            <Link to="/" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Home size={16} /> Home</Link>
            <Link to="/services" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Briefcase size={16} /> Services</Link>
            <Link to="/projects" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><FolderKanban size={16} /> Our Work</Link>
            <Link to="/about" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Globe size={16} /> About Us</Link>
            <Link to="/contact" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Mail size={16} /> Contact</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xl font-semibold text-white">Services</p>
          <div className="h-0.5 w-7 rounded-full bg-blue-400/80" />
          <div className="space-y-3">
            <Link to="/services/website-development" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Monitor size={16} /> Website Development</Link>
            <Link to="/services/ecommerce-solutions" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><ShoppingCart size={16} /> E-Commerce Solutions</Link>
            <Link to="/services/custom-software" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Globe size={16} /> Custom Software</Link>
            <Link to="/services/erp-pos-systems" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Layers size={16} /> ERP & POS Systems</Link>
            <Link to="/services/ui-ux-design" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Briefcase size={16} /> UI/UX Design</Link>
            <Link to="/services/seo-digital-growth" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Search size={16} /> SEO & Digital Growth</Link>
            <Link to="/services/social-media-marketing" onClick={handleInternalNavigate} className="flex items-center gap-2.5 py-1 text-base text-blue-100/90 transition hover:text-blue-300"><Megaphone size={16} /> Social Media Marketing</Link>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-xl font-semibold text-white">Contact</p>
          <div className="h-0.5 w-7 rounded-full bg-blue-400/80" />
          <div className="space-y-3">
            <p className="flex items-start gap-2.5 text-base text-blue-100/95"><Mail size={16} className="mt-1 text-blue-300" /> <span>Email<br /><a href="mailto:hello@coders.lk" className="text-white transition hover:text-blue-300">hello@coders.lk</a></span></p>
            <p className="flex items-start gap-2.5 text-base text-blue-100/95"><Phone size={16} className="mt-1 text-blue-300" /> <span>Phone<br /><a href="tel:+94766800942" className="text-white transition hover:text-blue-300">+94 76 680 0942</a></span></p>
            <p className="flex items-start gap-2.5 text-base text-blue-100/95">
              <MapPin size={16} className="mt-1 text-blue-300" />
              <span>
                Location
                <br />
                <a href="https://www.google.com/maps/search/?api=1&query=97%2F66%20A%20Nagahamulla%20Rd%2C%20Wellampitiya%2010600" target="_blank" rel="noopener noreferrer" className="text-white transition hover:text-blue-300">
                  97/66 A Nagahamulla Rd,
                  <br />
                  Wellampitiya 10600
                </a>
              </span>
            </p>
          </div>

          <div className="pt-2">
            <p className="text-base font-medium text-white">Follow Us</p>
            <div className="mt-3 flex gap-2.5">
              <a href="https://www.linkedin.com/company/coderslk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/35 bg-blue-500/10 text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20 hover:text-white"><Linkedin size={16} /></a>
              <a href="https://www.facebook.com/share/1U5ByDSq3p/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/35 bg-blue-500/10 text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20 hover:text-white"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/coders.lk?igsh=dWdvNWQzb2p2MXNv" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/35 bg-blue-500/10 text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20 hover:text-white"><Instagram size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 border-t border-blue-500/20 bg-[#020d1d]/80">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-4 text-sm text-blue-100/85 lg:flex-row lg:px-8">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={18} className="text-blue-300" />
            <p>
              <span className="font-semibold text-white">Trusted by businesses</span>
              {' '}
              to deliver reliable digital solutions.
            </p>
          </div>
          <p className="text-blue-100/80">© 2026 Coders.lk. All rights reserved.</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-blue-100/90">
            <span className="text-base">🇱🇰</span>
            <span>Proudly Sri Lankan</span>
            <Heart size={14} className="text-blue-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}
