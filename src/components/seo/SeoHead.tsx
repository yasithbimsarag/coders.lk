import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
}

export default function SeoHead({ title, description, canonicalPath }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      return meta;
    };

    const ensurePropertyMeta = (property: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      return meta;
    };

    const descriptionMeta = ensureMeta('description');
    descriptionMeta.setAttribute('content', description);

    const ogTitle = ensurePropertyMeta('og:title');
    ogTitle.setAttribute('content', title);

    const ogDescription = ensurePropertyMeta('og:description');
    ogDescription.setAttribute('content', description);

    const canonicalHref = `https://coders.lk${canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;

    const ogUrl = ensurePropertyMeta('og:url');
    ogUrl.setAttribute('content', canonicalHref);
  }, [title, description, canonicalPath]);

  return null;
}
