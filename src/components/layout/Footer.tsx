import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-surface py-16 text-sm text-slate-600">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-950">
            <img src="/coders_logo.png" alt="Coders.lk logo" className="h-10 w-10 rounded-2xl object-cover shadow-glow" />
            <div>
              <p className="font-semibold text-slate-950">Coders.lk</p>
              <p className="text-slate-500">Building digital products for ambitious businesses.</p>
            </div>
          </div>
          <p className="max-w-sm leading-7 text-slate-600">A premium Sri Lankan technology company focused on websites, e-commerce and enterprise software.</p>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-slate-950">Navigation</p>
          <div className="space-y-3">
            <Link to="/" className="block hover:text-brand">Home</Link>
            <Link to="/services" className="block hover:text-brand">Services</Link>
            <Link to="/projects" className="block hover:text-brand">Our Work</Link>
            <Link to="/about" className="block hover:text-brand">About Us</Link>
            <Link to="/contact" className="block hover:text-brand">Contact</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-slate-950">Services</p>
          <div className="space-y-3">
            <Link to="/services/website-development" className="block hover:text-brand">Website Development</Link>
            <Link to="/services/ecommerce-solutions" className="block hover:text-brand">E-Commerce Solutions</Link>
            <Link to="/services/custom-software" className="block hover:text-brand">Custom Software</Link>
            <Link to="/services/erp-pos-systems" className="block hover:text-brand">ERP & POS Systems</Link>
            <Link to="/services/ui-ux-design" className="block hover:text-brand">UI/UX Design</Link>
            <Link to="/services/seo-digital-growth" className="block hover:text-brand">SEO & Digital Growth</Link>
            <Link to="/services/social-media-marketing" className="block hover:text-brand">Social Media Marketing</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-slate-950">Contact</p>
          <div className="space-y-3">
            <p>Email: <a href="mailto:hello@coders.lk" className="text-brand hover:text-blue-600">hello@coders.lk</a></p>
            <p>Phone: <a href="tel:+94766800942" className="text-brand hover:text-blue-600">+94 76 680 0942</a></p>
            <p>Location: <a href="https://www.google.com/maps/search/?api=1&query=97%2F66%20A%20Nagahamulla%20Rd%2C%20Wellampitiya%2010600" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-blue-600">97/66 A Nagahamulla Rd, Wellampitiya 10600</a></p>
            <div className="flex flex-wrap gap-3 pt-2 text-slate-600">
              <a href="https://www.linkedin.com/company/coderslk" target="_blank" rel="noopener noreferrer" className="hover:text-brand">LinkedIn</a>
              <a href="https://www.facebook.com/share/1U5ByDSq3p/" target="_blank" rel="noopener noreferrer" className="hover:text-brand">Facebook</a>
              <a href="https://www.instagram.com/coders.lk?igsh=dWdvNWQzb2p2MXNv" target="_blank" rel="noopener noreferrer" className="hover:text-brand">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1320px] px-6 text-center text-xs text-slate-500 lg:px-8">
        © 2026 Coders.lk. All rights reserved.
      </div>
    </footer>
  );
}
