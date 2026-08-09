import SeoHead from '../components/seo/SeoHead';
import ContactSection from '../components/home/ContactSection';

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact | Coders.lk"
        description="Contact Coders.lk to discuss websites, e-commerce systems, software and digital growth services."
        canonicalPath="/contact"
      />
      <main>
        <ContactSection />
      </main>
    </>
  );
}
