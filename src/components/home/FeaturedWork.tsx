import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="bg-background py-24 [background-image:radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.08),transparent_35%)]"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.42em] text-brand/90">Our Projects</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
            Innovative <span className="text-brand">Solutions.</span> Real Impact.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore some of the powerful platforms we have built to help businesses grow and scale.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} routePath={`/projects/${project.id}`} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
