import SeoHead from '../components/seo/SeoHead';
import ContactSection from '../components/home/ContactSection';

export default function ContactPage() {
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
        name: 'Contact',
        item: 'https://coders.lk/contact',
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="Contact Coders.lk | Website and Software Development Sri Lanka"
        description="Contact Coders.lk to discuss website development, e-commerce website development, custom software development, and UI UX design services in Sri Lanka."
        canonicalPath="/contact"
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt="Contact Coders.lk web development team in Sri Lanka"
        schema={schema}
      />
      <main>
        <h1 className="sr-only">Contact Coders.lk for web and software development in Sri Lanka</h1>
        <ContactSection />
      </main>
    </>
  );
}
