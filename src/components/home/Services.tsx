import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Boxes, Database, Layers, TrendingUp, ArrowRight, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { servicePages } from '../../data/servicePages';

const icons = {
  Globe,
  ShoppingCart,
  Boxes,
  Database,
  Layers,
  TrendingUp,
  Megaphone,
};

export default function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/80">WHAT WE DO</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">From idea to digital product.</h2>
        </div>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const serviceRoute = servicePages.find((item) => item.id === service.id);
            return (
              <motion.article
                id={service.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-surface p-8 transition"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-brand">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{service.description}</p>
                <Link
                  to={serviceRoute ? `/services/${serviceRoute.slug}` : '/services'}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition group-hover:text-blue-600"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
