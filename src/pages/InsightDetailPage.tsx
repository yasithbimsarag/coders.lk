import { Link, Navigate, useParams } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import { insightMap, insights } from '../data/insights';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const post = slug ? insightMap[slug] : null;

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://coders.lk/insights/${post.slug}`,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          '@type': 'Organization',
          name: 'Coders.lk',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Coders.lk',
          logo: {
            '@type': 'ImageObject',
            url: 'https://coders.lk/coders_logo.png',
          },
        },
        mainEntityOfPage: `https://coders.lk/insights/${post.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const relatedPosts = insights.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SeoHead
        title={`${post.title} | Coders.lk`}
        description={post.description}
        canonicalPath={`/insights/${post.slug}`}
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt={post.title}
        schema={schema}
      />

      <main className="bg-background py-16 sm:py-20">
        <article className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand/80 sm:text-xs sm:tracking-[0.35em]">{post.keyword}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{post.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">{section.heading}</h2>
                <p className="mt-4 leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-7">
            <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">Frequently asked questions</h2>
            <div className="mt-6 space-y-5">
              {post.faqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-7">
            <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">Need a practical plan for your business?</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Our team helps companies execute website development, e-commerce growth, and custom software roadmaps with measurable outcomes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to={post.ctaPath} className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-600">
                {post.ctaLabel}
              </Link>
              <Link to="/services" className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">Related insights</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link key={item.slug} to={`/insights/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-brand/40">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-brand/80 sm:text-xs sm:tracking-[0.28em]">{item.keyword}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
