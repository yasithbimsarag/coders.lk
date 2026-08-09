import SeoHead from '../components/seo/SeoHead';
import FeaturedWork from '../components/home/FeaturedWork';

export default function ProjectsPage() {
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
        name: 'Projects',
        item: 'https://coders.lk/projects',
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="Software and Web Development Projects in Sri Lanka | Coders.lk"
        description="Explore Coders.lk project case studies including website development, e-commerce, and custom software solutions delivered for businesses in Sri Lanka."
        canonicalPath="/projects"
        ogImage="https://coders.lk/coders_logo.png"
        ogImageAlt="Coders.lk project case studies in Sri Lanka"
        schema={schema}
      />
      <main>
        <h1 className="sr-only">Web development and custom software projects in Sri Lanka</h1>
        <FeaturedWork />
      </main>
    </>
  );
}
