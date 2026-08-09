import SeoHead from '../components/seo/SeoHead';
import Services from '../components/home/Services';

export default function ServicesPage() {
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
        name: 'Services',
        item: 'https://coders.lk/services',
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="Website Development and Digital Services in Sri Lanka | Coders.lk"
        description="Explore website development, e-commerce website development, custom software development, UI UX design, SEO, and digital growth services by Coders.lk in Sri Lanka."
        canonicalPath="/services"
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt="Coders.lk service portfolio in Sri Lanka"
        schema={schema}
      />
      <main>
        <h1 className="sr-only">Website development and digital solutions services in Sri Lanka</h1>
        <Services />
      </main>
    </>
  );
}
