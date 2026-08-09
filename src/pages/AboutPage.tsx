import SeoHead from '../components/seo/SeoHead';
import AboutSection from '../components/home/AboutSection';
import WhyCoders from '../components/home/WhyCoders';

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us | Coders.lk"
        description="Learn how Coders.lk builds premium digital products for ambitious businesses across Sri Lanka."
        canonicalPath="/about"
      />
      <main>
        <AboutSection />
        <WhyCoders />
      </main>
    </>
  );
}
