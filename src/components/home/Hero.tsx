import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="space-y-8">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-brand shadow-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.32em]">
            DIGITAL PRODUCTS • SOFTWARE • GROWTH
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand/90 sm:text-sm sm:tracking-[0.3em]">Premium digital solutions for serious businesses</p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl xl:text-7xl">
              Leading <span className="text-brand">web development company in Sri Lanka</span> for ambitious brands.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
              Coders.lk delivers website development in Sri Lanka, e-commerce website development, custom software development, UI UX design, and digital solutions built for measurable business growth.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-600">
              Start Your Project
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
              Explore Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
