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
  {
    slug: 'ui-ux-design-sri-lanka-conversion-mistakes',
    title: 'UI UX Design in Sri Lanka: 9 Conversion Mistakes Most Sites Make',
    description:
      'Learn the most common UI UX mistakes that reduce conversion rates and how Sri Lankan businesses can fix them to improve lead and sales performance.',
    keyword: 'ui ux design sri lanka',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Poor hierarchy and unclear CTA flow',
        body:
          'When visual hierarchy is weak, users struggle to decide where to click. Strong UI UX design in Sri Lanka should prioritize one clear goal per screen with supportive secondary actions.',
      },
      {
        heading: 'Heavy layouts and slow interaction feedback',
        body:
          'Slow pages and delayed feedback reduce trust quickly. Optimize assets, simplify interactions, and make action states clear to protect conversion intent.',
      },
      {
        heading: 'No user journey validation before launch',
        body:
          'Use real user scenarios before publishing. Validate form flows, mobile navigation, and checkout paths to reduce drop-offs and increase qualified conversions.',
      },
    ],
    ctaLabel: 'Request a UX audit',
    ctaPath: '/services/ui-ux-design',
  },
  {
    slug: 'software-company-sri-lanka-selection-framework',
    title: 'How to Choose a Software Company in Sri Lanka: A Decision Framework',
    description:
      'A practical framework to evaluate software partners in Sri Lanka based on delivery process, technical quality, communication, and business outcomes.',
    keyword: 'software company sri lanka',
    publishedAt: '2026-08-10',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Evaluate process, not portfolio alone',
        body:
          'A polished portfolio is not enough. Assess discovery quality, technical planning, QA rigor, and post-launch support. Reliable teams can explain trade-offs clearly.',
      },
      {
        heading: 'Look for business-aligned delivery metrics',
        body:
          'The right software company in Sri Lanka should discuss performance metrics, conversion outcomes, and operational efficiency rather than design trends alone.',
      },
      {
        heading: 'Use a weighted scorecard before final selection',
        body:
          'Score vendors on communication speed, architecture quality, SEO readiness, scalability, and total ownership cost. This reduces emotional decision bias.',
      },
    ],
    ctaLabel: 'Start a discovery call',
    ctaPath: '/contact',
  },
  {
    slug: 'website-development-sri-lanka-seo-architecture',
    title: 'Website Development in Sri Lanka: SEO Architecture That Ranks',
    description:
      'Build websites with technical SEO foundations such as clean routing, schema, internal linking, and performance-focused structure for better rankings.',
    keyword: 'website development sri lanka',
    publishedAt: '2026-08-10',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Build crawlable, indexable site structure first',
        body:
          'Create predictable URL hierarchy, canonical consistency, and robust internal linking. Architecture errors cause ranking loss even with good content.',
      },
      {
        heading: 'Align page templates with search intent',
        body:
          'Use intent-focused templates for services, case studies, and insights. Each template should include unique metadata, one H1, and clear conversion actions.',
      },
      {
        heading: 'Pair architecture with speed and UX',
        body:
          'SEO architecture works best when combined with fast rendering, image optimization, and frictionless navigation across mobile and desktop.',
      },
    ],
    ctaLabel: 'Get technical SEO audit',
    ctaPath: '/services/seo-digital-growth',
  },
  {
    slug: 'erp-pos-systems-sri-lanka-buy-vs-build',
    title: 'ERP and POS Systems in Sri Lanka: Buy vs Build Guide',
    description:
      'Compare off-the-shelf ERP/POS tools with custom-built systems to choose the right operational model for your business stage and complexity.',
    keyword: 'erp pos systems sri lanka',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    sections: [
      {
        heading: 'When buying off-the-shelf works best',
        body:
          'If operations are standard and implementation speed matters most, prebuilt ERP/POS tools can be effective in the short term.',
      },
      {
        heading: 'When custom ERP/POS is better',
        body:
          'Custom systems are stronger when branch workflows, approvals, and reporting logic are unique to your organization.',
      },
      {
        heading: 'Decision criteria for long-term ROI',
        body:
          'Assess integration depth, reporting requirements, user adoption complexity, and long-term licensing cost before finalizing build-vs-buy strategy.',
      },
    ],
    ctaLabel: 'Get ERP consultation',
    ctaPath: '/services/erp-pos-systems',
  },
  {
    slug: 'digital-solutions-sri-lanka-for-smbs',
    title: 'Digital Solutions in Sri Lanka for SMEs: What to Prioritize First',
    description:
      'A priority roadmap for SMEs to choose the right digital investments across websites, e-commerce, software automation, and growth channels.',
    keyword: 'digital solutions sri lanka',
    publishedAt: '2026-08-10',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Start with revenue-linked priorities',
        body:
          'Focus first on assets that directly impact leads or sales: high-converting website pages, clear inquiry funnels, and measurable tracking.',
      },
      {
        heading: 'Then automate recurring operational pain points',
        body:
          'Move next to software automations for inventory, order handling, and reporting where manual errors are expensive and repetitive.',
      },
      {
        heading: 'Build a 90-day improvement cycle',
        body:
          'Use short execution cycles with KPI reviews each month. Digital solutions in Sri Lanka perform best when investment and iteration are continuous.',
      },
    ],
    ctaLabel: 'Plan my growth roadmap',
    ctaPath: '/contact',
  },
];

export const insightMap = Object.fromEntries(insights.map((post) => [post.slug, post]));
