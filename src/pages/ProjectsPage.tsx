import SeoHead from '../components/seo/SeoHead';
import FeaturedWork from '../components/home/FeaturedWork';

export default function ProjectsPage() {
  return (
    <>
      <SeoHead
        title="Projects | Coders.lk"
        description="Explore Coders.lk project portfolio including Techmart, GemBook and GemBook ERP implementations."
        canonicalPath="/projects"
      />
      <main>
        <FeaturedWork />
      </main>
    </>
  );
}
