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
    <footer className="relative overflow-hidden border-t border-blue-900/30 bg-[#031126] pt-16 text-sm text-blue-100">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_12%_16%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.15),transparent_33%),linear-gradient(to_bottom,rgba(2,6,23,0.95),rgba(2,8,23,0.98))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[radial-gradient(circle_at_30%_120%,rgba(37,99,235,0.25),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1.45fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-7">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-2.5 shadow-[0_0_26px_rgba(59,130,246,0.55)]">
              <img src="/coders_logo.png" alt="Coders.lk logo" className="h-10 w-10 rounded-xl object-cover" />
            </div>
            <div>
              <p className="text-4xl font-semibold tracking-tight text-white">Coders.lk</p>
              <p className="mt-1 text-xl text-blue-100/90">Building digital products for ambitious businesses.</p>
            </div>
          </div>

          <div className="h-1 w-8 rounded-full bg-blue-400/80" />

          <p className="max-w-lg text-2xl leading-relaxed text-blue-100/95">
            A premium Sri Lankan technology company focused on websites, e-commerce and enterprise software.
          </p>

          <div className="relative mt-5 overflow-hidden rounded-[26px] border border-blue-400/20 bg-[#041933]/80 p-5 shadow-[0_20px_55px_rgba(6,40,110,0.35)]">
            <img src="/projects/gembook-preview-real.png" alt="Coders.lk software dashboard preview" className="h-44 w-full rounded-2xl object-cover opacity-95" loading="lazy" decoding="async" />
            <div className="absolute left-4 top-4 rounded-xl border border-blue-300/30 bg-blue-500/20 px-3 py-2 text-xs font-semibold text-blue-100">Scalable Systems</div>
            <div className="absolute bottom-5 right-4 rounded-xl border border-cyan-300/30 bg-cyan-500/20 px-3 py-2 text-xs font-semibold text-cyan-100">Growth Ready</div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-semibold text-white">Navigation</p>
          <div className="h-1 w-8 rounded-full bg-blue-400/80" />
          <div className="space-y-3">
            <Link to="/" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Home size={20} /> Home</Link>
            <Link to="/services" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Briefcase size={20} /> Services</Link>
            <Link to="/projects" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><FolderKanban size={20} /> Our Work</Link>
            <Link to="/about" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Globe size={20} /> About Us</Link>
            <Link to="/contact" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Mail size={20} /> Contact</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-semibold text-white">Services</p>
          <div className="h-1 w-8 rounded-full bg-blue-400/80" />
          <div className="space-y-3">
            <Link to="/services/website-development" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Monitor size={20} /> Website Development</Link>
            <Link to="/services/ecommerce-solutions" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><ShoppingCart size={20} /> E-Commerce Solutions</Link>
            <Link to="/services/custom-software" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Globe size={20} /> Custom Software</Link>
            <Link to="/services/erp-pos-systems" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Layers size={20} /> ERP & POS Systems</Link>
            <Link to="/services/ui-ux-design" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Briefcase size={20} /> UI/UX Design</Link>
            <Link to="/services/seo-digital-growth" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Search size={20} /> SEO & Digital Growth</Link>
            <Link to="/services/social-media-marketing" onClick={handleInternalNavigate} className="flex items-center gap-3 py-1.5 text-2xl text-blue-100/90 transition hover:text-blue-300"><Megaphone size={20} /> Social Media Marketing</Link>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-3xl font-semibold text-white">Contact</p>
          <div className="h-1 w-8 rounded-full bg-blue-400/80" />
          <div className="space-y-3">
            <p className="flex items-start gap-3 text-2xl text-blue-100/95"><Mail size={20} className="mt-1 text-blue-300" /> <span>Email<br /><a href="mailto:hello@coders.lk" className="text-white transition hover:text-blue-300">hello@coders.lk</a></span></p>
            <p className="flex items-start gap-3 text-2xl text-blue-100/95"><Phone size={20} className="mt-1 text-blue-300" /> <span>Phone<br /><a href="tel:+94766800942" className="text-white transition hover:text-blue-300">+94 76 680 0942</a></span></p>
            <p className="flex items-start gap-3 text-2xl text-blue-100/95">
              <MapPin size={20} className="mt-1 text-blue-300" />
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

          <div className="pt-3">
            <p className="text-2xl font-medium text-white">Follow Us</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/company/coderslk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/35 bg-blue-500/10 text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20 hover:text-white"><Linkedin size={19} /></a>
              <a href="https://www.facebook.com/share/1U5ByDSq3p/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/35 bg-blue-500/10 text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20 hover:text-white"><Facebook size={19} /></a>
              <a href="https://www.instagram.com/coders.lk?igsh=dWdvNWQzb2p2MXNv" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/35 bg-blue-500/10 text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20 hover:text-white"><Instagram size={19} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-14 border-t border-blue-500/20 bg-[#020d1d]/80">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 px-6 py-6 text-lg text-blue-100/85 lg:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-blue-300" />
            <p>
              <span className="font-semibold text-white">Trusted by businesses</span>
              {' '}
              to deliver reliable digital solutions.
            </p>
          </div>
          <p className="text-blue-100/80">© 2026 Coders.lk. All rights reserved.</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-blue-100/90">
            <span className="text-2xl">🇱🇰</span>
            <span>Proudly Sri Lankan</span>
            <Heart size={16} className="text-blue-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}
