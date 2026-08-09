import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="space-y-8">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand shadow-sm">
            DIGITAL PRODUCTS • SOFTWARE • GROWTH
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand/90">Premium digital solutions for serious businesses</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl xl:text-7xl">
              We build <span className="text-brand">digital products</span> that move businesses forward.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Coders.lk designs and develops high-performance websites, e-commerce platforms and custom software built for real businesses.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
