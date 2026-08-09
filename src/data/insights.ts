export interface InsightSection {
  heading: string;
  body: string;
}

export interface InsightPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  publishedAt: string;
  readTime: string;
  sections: InsightSection[];
  ctaLabel: string;
  ctaPath: string;
}

export const insights: InsightPost[] = [
  {
    slug: 'web-development-company-sri-lanka-pricing-guide',
    title: 'Web Development Company in Sri Lanka: Pricing Guide for 2026',
    description:
      'Understand how website project pricing works in Sri Lanka, what affects cost, and how to choose the right development partner for long-term growth.',
    keyword: 'web development company sri lanka',
    publishedAt: '2026-08-10',
    readTime: '7 min read',
    sections: [
      {
        heading: 'What really affects website development pricing',
        body:
          'Pricing usually depends on scope, integrations, custom features, content readiness, and growth goals. A brochure website is priced very differently from a conversion-focused business platform with analytics and CRM integrations.',
      },
      {
        heading: 'How to compare proposals from agencies',
        body:
          'Do not compare only total cost. Compare process quality, technical stack, SEO readiness, page speed, conversion UX, and post-launch support. The best web development company in Sri Lanka should give both technical clarity and commercial outcomes.',
      },
      {
        heading: 'Budget range planning for 2026',
        body:
          'For growth-focused businesses, plan budget in tiers: launch scope, conversion optimization, and scaling phase. This avoids rework and protects performance when traffic increases.',
      },
    ],
    ctaLabel: 'Get a tailored quote',
    ctaPath: '/contact',
  },
  {
    slug: 'ecommerce-website-development-sri-lanka-checklist',
    title: 'E-Commerce Website Development in Sri Lanka: Complete Launch Checklist',
    description:
      'A practical checklist for planning, building, and launching high-performance e-commerce websites in Sri Lanka that convert visitors into paying customers.',
    keyword: 'e-commerce website development sri lanka',
    publishedAt: '2026-08-10',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Pre-launch strategy and catalog structure',
        body:
          'Before design, define category architecture, product attributes, search filters, and conversion goals. Strong information architecture is critical for discoverability and SEO.',
      },
      {
        heading: 'Checkout, payment, and trust elements',
        body:
          'Your checkout must be fast and frictionless. Include local trust signals, transparent policies, delivery details, and recovery flows for abandoned carts.',
      },
      {
        heading: 'Post-launch growth checklist',
        body:
          'Set up analytics, conversion events, product feed quality checks, and SEO tracking from day one. E-commerce website development in Sri Lanka should be treated as an ongoing growth system, not a one-time build.',
      },
    ],
    ctaLabel: 'Build my online store',
    ctaPath: '/services/ecommerce-solutions',
  },
  {
    slug: 'custom-software-development-sri-lanka-vs-saas',
    title: 'Custom Software Development in Sri Lanka vs SaaS: Which Is Better?',
    description:
      'Compare custom software and SaaS across cost, flexibility, control, and long-term ROI to make the right technology decision for your business.',
    keyword: 'custom software development sri lanka',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    sections: [
      {
        heading: 'When SaaS is the right option',
        body:
          'If your workflow matches standard industry processes and you need speed, SaaS may deliver short-term value. It can reduce upfront effort and simplify maintenance in early stages.',
      },
      {
        heading: 'When custom software creates stronger ROI',
        body:
          'If your operations are unique, compliance-heavy, or integration-dependent, custom software often creates better long-term value by removing bottlenecks and manual work.',
      },
      {
        heading: 'Decision framework for business leaders',
        body:
          'Evaluate growth horizon, process complexity, data ownership, and integration needs. Custom software development in Sri Lanka becomes strategic when your system directly influences efficiency and revenue.',
      },
    ],
    ctaLabel: 'Discuss custom software',
    ctaPath: '/services/custom-software',
  },
];

export const insightMap = Object.fromEntries(insights.map((post) => [post.slug, post]));
