import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-background py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-brand/80">SELECTED WORK</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Built for real businesses.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From high-performance e-commerce platforms to enterprise software systems, we build technology that solves real problems.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-[32px] border border-slate-200 bg-surface p-7 shadow-sm">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Trusted portfolio</p>
            <p className="mt-4 text-xl font-semibold text-slate-950">Three major projects showing our strength in e-commerce, business software and enterprise systems.</p>
          </motion.div>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} routePath={`/projects/${project.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
