import SeoHead from '../components/seo/SeoHead';
import Home from './Home';

export default function HomePage() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Coders.lk',
        url: 'https://coders.lk/',
        inLanguage: 'en-LK',
      },
      {
        '@type': 'ProfessionalService',
        name: 'Coders.lk',
        url: 'https://coders.lk/',
        logo: 'https://coders.lk/coders_logo.png',
        areaServed: 'Sri Lanka',
        serviceType: [
          'Website Development Sri Lanka',
          'E-commerce Website Development Sri Lanka',
          'Custom Software Development Sri Lanka',
          'UI UX Design Sri Lanka',
          'Digital Solutions Sri Lanka',
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="Web Development Company in Sri Lanka | Coders.lk"
        description="Coders.lk is a software company in Sri Lanka delivering website development, e-commerce website development, custom software, UI UX design, and digital solutions for growth-focused businesses."
        canonicalPath="/"
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt="Coders.lk web development and software company in Sri Lanka"
        schema={homeSchema}
      />
      <Home />
    </>
  );
}
