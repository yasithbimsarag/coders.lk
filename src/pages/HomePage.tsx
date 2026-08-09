import SeoHead from '../components/seo/SeoHead';
import Home from './Home';

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Coders.lk | Premium Websites, E-commerce & ERP Software"
        description="Coders.lk creates premium websites, e-commerce platforms, ERP software and custom business systems for Sri Lankan companies."
        canonicalPath="/"
      />
      <Home />
    </>
  );
}
