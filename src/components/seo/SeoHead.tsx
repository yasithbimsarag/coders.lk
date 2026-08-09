import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_OG_IMAGE = 'https://coders.lk/coders_logo.png';
const DEFAULT_OG_IMAGE_ALT = 'Coders.lk logo and brand identity';

export default function SeoHead({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  twitterCard = 'summary_large_image',
  schema,
}: SeoHeadProps) {
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

    const robotsMeta = ensureMeta('robots');
    robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large');

    const ogTitle = ensurePropertyMeta('og:title');
    ogTitle.setAttribute('content', title);

    const ogDescription = ensurePropertyMeta('og:description');
    ogDescription.setAttribute('content', description);

    const ogType = ensurePropertyMeta('og:type');
    ogType.setAttribute('content', 'website');

    const ogSiteName = ensurePropertyMeta('og:site_name');
    ogSiteName.setAttribute('content', 'Coders.lk');

    const ogImageMeta = ensurePropertyMeta('og:image');
    ogImageMeta.setAttribute('content', ogImage);

    const ogImageAltMeta = ensurePropertyMeta('og:image:alt');
    ogImageAltMeta.setAttribute('content', ogImageAlt);

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

    const twitterCardMeta = ensureMeta('twitter:card');
    twitterCardMeta.setAttribute('content', twitterCard);

    const twitterTitleMeta = ensureMeta('twitter:title');
    twitterTitleMeta.setAttribute('content', title);

    const twitterDescriptionMeta = ensureMeta('twitter:description');
    twitterDescriptionMeta.setAttribute('content', description);

    const twitterImageMeta = ensureMeta('twitter:image');
    twitterImageMeta.setAttribute('content', ogImage);

    const twitterUrlMeta = ensureMeta('twitter:url');
    twitterUrlMeta.setAttribute('content', canonicalHref);

    const existingSchema = document.querySelector('script[data-seo-schema="page"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'page');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, ogImage, ogImageAlt, twitterCard, schema]);

  return null;
}
