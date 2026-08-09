import { Link, Navigate, useParams } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const metaDescription = `${project.name} by Coders.lk: ${project.description}`;

  return (
    <>
      <SeoHead title={`${project.name} Project | Coders.lk`} description={metaDescription} canonicalPath={`/projects/${project.id}`} />
      <main className="bg-background py-20">
        <section className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/80">Project Case Study</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">{project.name}</h1>
          <p className="mt-3 text-lg font-medium text-brand">{project.category}</p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">{project.description}</p>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-surface">
            <img src={project.image} alt={project.name} className="h-[320px] w-full object-cover sm:h-[460px]" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-surface p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Technologies Used</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-surface p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="text-slate-600">• {feature}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
              {project.actionLabel}
            </a>
            <Link to="/projects" className="inline-flex items-center rounded-full border border-slate-200 bg-surface px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
              Back to Projects
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
