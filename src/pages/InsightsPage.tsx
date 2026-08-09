import { Link } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import { insights } from '../data/insights';

export default function InsightsPage() {
  const schema = {
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
        name: 'Insights',
        item: 'https://coders.lk/insights',
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="SEO Insights and Digital Growth Articles | Coders.lk"
        description="Read practical insights on web development, e-commerce website development, custom software, and SEO strategy for Sri Lankan businesses."
        canonicalPath="/insights"
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt="Coders.lk SEO and digital growth insights"
        schema={schema}
      />
      <main className="bg-background py-20">
        <section className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            SEO and digital growth insights for Sri Lankan businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Actionable guides on website development, e-commerce, custom software, and conversion-focused strategy to help you rank, convert, and scale.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {insights.map((post) => (
              <article key={post.slug} className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.35em] text-brand/80">{post.keyword}</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{post.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{post.description}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>{post.readTime}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <Link to={`/insights/${post.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-brand hover:text-blue-600">
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
