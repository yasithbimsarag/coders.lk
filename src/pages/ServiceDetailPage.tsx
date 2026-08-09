import { Link, Navigate, useParams } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import { servicePageMap, servicePages } from '../data/servicePages';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? servicePageMap[slug] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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
        name: 'Services',
        item: 'https://coders.lk/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.heading,
        item: `https://coders.lk/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <SeoHead
        title={service.title}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}`}
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt={`${service.heading} by Coders.lk`}
        schema={breadcrumbSchema}
      />
      <main className="bg-background py-20">
        <section className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/80">Service</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">{service.heading}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.description}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-surface p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {service.keyFeatures.map((item) => (
                  <li key={item} className="text-slate-600">• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-surface p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Technologies & Tools</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {service.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to={service.ctaPath} className="inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
              {service.ctaLabel}
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-full border border-slate-200 bg-surface px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
              View All Services
            </Link>
          </div>

          <div className="mt-12 rounded-[28px] border border-slate-200 bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Related Services</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.related.map((relatedSlug) => {
                const relatedService = servicePages.find((item) => item.slug === relatedSlug);
                if (!relatedService) return null;
                return (
                  <Link
                    key={relatedService.slug}
                    to={`/services/${relatedService.slug}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    {relatedService.title.replace(' Services in Sri Lanka | Coders.lk', '')}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
