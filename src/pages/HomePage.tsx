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
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which is the best web development company in Sri Lanka for business websites?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Coders.lk helps Sri Lankan businesses launch fast, SEO-ready websites with modern UI, strong conversion flows, and scalable architecture.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide e-commerce website development in Sri Lanka?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We build e-commerce websites with product catalogs, payment integration, order management, and analytics for growth-focused brands.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you build custom software for our company workflow?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our custom software development process starts with workflow mapping, then we build secure systems for operations, reporting, and automation.',
            },
          },
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
