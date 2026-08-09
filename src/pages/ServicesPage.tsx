import SeoHead from '../components/seo/SeoHead';
import Services from '../components/home/Services';

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services | Coders.lk"
        description="Explore website development, e-commerce, custom software, ERP, UI/UX, SEO and social media services by Coders.lk."
        canonicalPath="/services"
      />
      <main>
        <Services />
      </main>
    </>
  );
}
