import { motion } from 'framer-motion';

const points = [
  { title: 'Custom Built', description: 'Solutions designed around your business.' },
  { title: 'Performance First', description: 'Fast, scalable and production-ready systems.' },
  { title: 'Long-Term Partnership', description: 'We build products and help them grow.' },
];

export default function TrustSection() {
  return (
    <section className="border-t border-slate-200 bg-surface2 py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">Built for businesses that want more from digital.</p>
            <p className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-slate-950 sm:mt-6 sm:text-3xl">Built for businesses that want more from digital.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {points.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-surface p-5 text-slate-600 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
