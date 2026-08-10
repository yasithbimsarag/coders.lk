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
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://coders.lk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://coders.lk/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.name,
        item: `https://coders.lk/projects/${project.id}`,
      },
    ],
  };

  return (
    <>
      <SeoHead
        title={`${project.name} Project | Coders.lk`}
        description={metaDescription}
        canonicalPath={`/projects/${project.id}`}
        ogImage={`https://coders.lk${project.image}`}
        ogImageAlt={`${project.name} project screenshot by Coders.lk`}
        schema={breadcrumbSchema}
      />
      <main className="bg-background py-16 sm:py-20">
        <section className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">Project Case Study</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-5xl">{project.name}</h1>
          <p className="mt-3 text-lg font-medium text-brand">{project.category}</p>
          <p className="mt-6 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{project.description}</p>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-surface">
            <img
              src={project.image}
              alt={`${project.name} project preview for ${project.category} by Coders.lk`}
              loading="eager"
              decoding="async"
              className="h-[220px] w-full object-cover sm:h-[340px] lg:h-[460px]"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-surface p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-semibold text-slate-950">Technologies Used</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 sm:px-4 sm:py-2 sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-surface p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-semibold text-slate-950">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="text-slate-600">• {feature}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 sm:w-auto">
              {project.actionLabel}
            </a>
            <Link to="/projects" className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-surface px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand sm:w-auto">
              Back to Projects
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
