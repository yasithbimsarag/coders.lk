import SeoHead from '../components/seo/SeoHead';
import AboutSection from '../components/home/AboutSection';
import WhyCoders from '../components/home/WhyCoders';

export default function AboutPage() {
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
        name: 'About',
        item: 'https://coders.lk/about',
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="About Coders.lk | Software Company in Sri Lanka"
        description="Learn about Coders.lk, a software company in Sri Lanka focused on website development, custom software, UI UX design, and measurable digital solutions."
        canonicalPath="/about"
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt="About Coders.lk software company in Sri Lanka"
        schema={schema}
      />
      <main>
        <h1 className="sr-only">About Coders.lk software company in Sri Lanka</h1>
        <AboutSection />
        <WhyCoders />
      </main>
    </>
  );
}
