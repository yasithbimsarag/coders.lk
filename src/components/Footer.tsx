
import { Code2Icon, GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white">
                <Code2Icon className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                coders.lk
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building digital solutions that drive business growth. Custom
              websites, ERPs, and POS systems for modern enterprises.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn">
                
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub">
                
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  ERP Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  POS Systems
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-accent-primary transition-colors">
                  
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} coders.lk. All rights
            reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Designed with <span className="text-accent-primary">♥</span> in
            Sri Lanka
          </p>
        </div>
      </div>
    </footer>);

}