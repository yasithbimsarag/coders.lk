import { motion } from 'framer-motion';

const points = [
  { title: 'Custom Built', description: 'Solutions designed around your business.' },
  { title: 'Performance First', description: 'Fast, scalable and production-ready systems.' },
  { title: 'Long-Term Partnership', description: 'We build products and help them grow.' },
];

export default function TrustSection() {
  return (
    <section className="bg-surface2 border-t border-slate-200 py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-brand/80">Built for businesses that want more from digital.</p>
            <p className="mt-6 max-w-xl text-3xl font-semibold leading-tight text-slate-950">Built for businesses that want more from digital.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {points.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-surface p-6 text-slate-600 shadow-sm">
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
