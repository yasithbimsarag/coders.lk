export interface ServicePageData {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  heading: string;
  description: string;
  keyFeatures: string[];
  tools: string[];
  ctaLabel: string;
  ctaPath: string;
  related: string[];
}

export const servicePages: ServicePageData[] = [
  {
    id: 'service-web-development',
    slug: 'website-development',
    title: 'Website Development Services in Sri Lanka | Coders.lk',
    metaDescription: 'Build modern, fast and conversion-focused websites with professional website development services from Coders.lk.',
    heading: 'Website Development That Builds Strong Digital Presence',
    description:
      'Modern, fast and responsive websites built to strengthen your online presence and convert visitors into customers.',
    keyFeatures: ['Responsive layouts', 'Performance optimization', 'SEO-ready structure', 'Conversion-focused UI', 'Secure deployment'],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    ctaLabel: 'Start Your Website Project',
    ctaPath: '/contact',
    related: ['ecommerce-solutions', 'ui-ux-design', 'seo-digital-growth'],
  },
  {
    id: 'service-ecommerce',
    slug: 'ecommerce-solutions',
    title: 'E-Commerce Solutions in Sri Lanka | Coders.lk',
    metaDescription: 'Launch secure and scalable e-commerce solutions with payments, product management and smooth customer journeys.',
    heading: 'E-Commerce Solutions Built for Sales Growth',
    description:
      'Secure and scalable online stores with product management, payments, orders and a seamless customer experience.',
    keyFeatures: ['Catalog management', 'Payment integration', 'Order workflows', 'Inventory sync', 'Customer accounts'],
    tools: ['React', 'PHP', 'MySQL', 'Stripe', 'Analytics'],
    ctaLabel: 'Build My Online Store',
    ctaPath: '/contact',
    related: ['website-development', 'custom-software', 'seo-digital-growth'],
  },
  {
    id: 'service-custom-software',
    slug: 'custom-software',
    title: 'Custom Software Development in Sri Lanka | Coders.lk',
    metaDescription: 'Get custom software tailored to your business workflows, operations and growth plans with Coders.lk.',
    heading: 'Custom Software Designed Around Your Business',
    description:
      'Tailor-made software solutions designed around your specific business workflows and operational needs.',
    keyFeatures: ['Workflow automation', 'Role-based access', 'System integrations', 'Data reporting', 'Scalable architecture'],
    tools: ['PHP', 'TypeScript', 'MySQL', 'REST APIs', 'Cloud Hosting'],
    ctaLabel: 'Discuss Custom Software',
    ctaPath: '/contact',
    related: ['erp-pos-systems', 'ui-ux-design', 'website-development'],
  },
  {
    id: 'service-erp-pos',
    slug: 'erp-pos-systems',
    title: 'ERP & POS Systems in Sri Lanka | Coders.lk',
    metaDescription: 'Centralize inventory, sales, customers and operations with ERP and POS systems by Coders.lk.',
    heading: 'ERP & POS Systems for Smarter Operations',
    description:
      'Centralized business management systems for inventory, sales, customers, transactions and operations.',
    keyFeatures: ['Inventory control', 'Sales tracking', 'Branch management', 'POS integration', 'Operational dashboards'],
    tools: ['PHP', 'MySQL', 'Bootstrap', 'Reporting Modules', 'Access Control'],
    ctaLabel: 'Get ERP/POS Consultation',
    ctaPath: '/contact',
    related: ['custom-software', 'ecommerce-solutions', 'seo-digital-growth'],
  },
  {
    id: 'service-uiux',
    slug: 'ui-ux-design',
    title: 'UI/UX Design Services in Sri Lanka | Coders.lk',
    metaDescription: 'Create intuitive, modern and high-performing digital experiences with professional UI/UX design services from Coders.lk.',
    heading: 'UI/UX Design That Makes Digital Products Better',
    description:
      'Modern, intuitive interfaces focused on usability, clarity and exceptional digital experiences.',
    keyFeatures: ['UX research', 'Wireframing', 'Visual systems', 'Prototype testing', 'Design handoff'],
    tools: ['Figma', 'Design Systems', 'User Flows', 'Prototyping', 'Accessibility Guidelines'],
    ctaLabel: 'Request UI/UX Design',
    ctaPath: '/contact',
    related: ['website-development', 'custom-software', 'social-media-marketing'],
  },
  {
    id: 'service-seo',
    slug: 'seo-digital-growth',
    title: 'SEO & Digital Growth Services in Sri Lanka | Coders.lk',
    metaDescription: 'Improve search visibility and lead generation with SEO and digital growth strategies by Coders.lk.',
    heading: 'SEO & Digital Growth for Sustainable Lead Flow',
    description:
      'SEO, analytics and digital growth strategies designed to improve visibility and generate quality leads.',
    keyFeatures: ['Technical SEO', 'Keyword strategy', 'Content optimization', 'Conversion tracking', 'Growth reporting'],
    tools: ['Google Analytics', 'Search Console', 'SEO Audits', 'Heatmaps', 'Performance Monitoring'],
    ctaLabel: 'Grow My Visibility',
    ctaPath: '/contact',
    related: ['website-development', 'ecommerce-solutions', 'social-media-marketing'],
  },
  {
    id: 'service-social-media',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing Services in Sri Lanka | Coders.lk',
    metaDescription: 'Reach and engage more customers with creative social media campaigns and strategic content by Coders.lk.',
    heading: 'Social Media Marketing That Builds Engagement',
    description:
      'Creative content and strategic social media campaigns that help businesses reach and engage more customers.',
    keyFeatures: ['Campaign planning', 'Creative content', 'Audience targeting', 'Performance optimization', 'Lead-focused strategy'],
    tools: ['Meta Ads', 'Content Calendars', 'Canva', 'Analytics Dashboards', 'A/B Testing'],
    ctaLabel: 'Launch Social Campaigns',
    ctaPath: '/contact',
    related: ['seo-digital-growth', 'ui-ux-design', 'website-development'],
  },
];

export const servicePageMap = Object.fromEntries(servicePages.map((service) => [service.slug, service]));
