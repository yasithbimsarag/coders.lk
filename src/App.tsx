import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-background text-slate-400 font-sans selection:bg-accent-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>);

}