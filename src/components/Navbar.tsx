import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, Code2Icon } from 'lucide-react';
import logo from '../assets/logo.png';


const navLinks = [
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Tech Stack',
  href: '#tech'
},
{
  name: 'Testimonials',
  href: '#testimonials'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="coders.lk Home">
            
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-accent-primary/40 transition-all">
  <img 
    src={logo} 
    alt="coders.lk logo" 
    className="w-full h-full object-cover"
  />
</div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              coders.lk
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-accent-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary">
              
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu">
            
            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-background-alt border-b border-white/5 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white py-2">
              
                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-medium">
              
                Get Started
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}