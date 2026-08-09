import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import Services from '../components/home/Services';
import FeaturedWork from '../components/home/FeaturedWork';
import WhyCoders from '../components/home/WhyCoders';
import Process from '../components/home/Process';
import Technologies from '../components/home/Technologies';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import CTASection from '../components/home/CTASection';
import FaqSection from '../components/home/FaqSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <Services />
      <FeaturedWork />
      <WhyCoders />
      <Process />
      <Technologies />
      <AboutSection />
      <ContactSection />
      <FaqSection />
      <CTASection />
    </main>
  );
}
