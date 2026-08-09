export interface InsightSection {
  heading: string;
  body: string;
}

export interface InsightFaq {
  question: string;
  answer: string;
}

export interface InsightPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  topic: 'Web Development' | 'E-Commerce' | 'Custom Software' | 'UI/UX' | 'SEO' | 'ERP/POS' | 'Case Study' | 'Digital Strategy';
  intent: 'Commercial' | 'Consideration' | 'Informational';
  publishedAt: string;
  readTime: string;
  sections: InsightSection[];
  faqs: InsightFaq[];
  ctaLabel: string;
  ctaPath: string;
}

export const insights: InsightPost[] = [
  {
    slug: 'web-development-company-sri-lanka-pricing-guide',
    title: 'Web Development Company in Sri Lanka: Pricing Guide for 2026',
    description: 'Understand how website project pricing works in Sri Lanka, what affects cost, and how to choose the right development partner for long-term growth.',
    keyword: 'web development company sri lanka',
    topic: 'Web Development',
    intent: 'Commercial',
    publishedAt: '2026-08-10',
    readTime: '7 min read',
    sections: [
      {
        heading: 'What really affects website development pricing',
        body: 'Pricing usually depends on scope, integrations, custom features, content readiness, and growth goals. A brochure website is priced very differently from a conversion-focused business platform with analytics and CRM integrations.',
      },
      {
        heading: 'How to compare proposals from agencies',
        body: 'Do not compare only total cost. Compare process quality, technical stack, SEO readiness, page speed, conversion UX, and post-launch support. The best web development company in Sri Lanka should give both technical clarity and commercial outcomes.',
      },
      {
        heading: 'Budget range planning for 2026',
        body: 'For growth-focused businesses, plan budget in tiers: launch scope, conversion optimization, and scaling phase. This avoids rework and protects performance when traffic increases.',
      },
    ],
    faqs: [
      {
        question: 'How much does a business website cost in Sri Lanka?',
        answer: 'Cost depends on page count, feature complexity, integrations, and conversion requirements. Reliable estimates come after discovery and scope definition.',
      },
      {
        question: 'Should I choose the cheapest proposal?',
        answer: 'Not always. Low-cost builds often miss SEO, performance, and conversion foundations that cost more to fix later.',
      },
    ],
    ctaLabel: 'Get a tailored quote',
    ctaPath: '/contact',
  },
  {
    slug: 'ecommerce-website-development-sri-lanka-checklist',
    title: 'E-Commerce Website Development in Sri Lanka: Complete Launch Checklist',
    description: 'A practical checklist for planning, building, and launching high-performance e-commerce websites in Sri Lanka that convert visitors into paying customers.',
    keyword: 'e-commerce website development sri lanka',
    topic: 'E-Commerce',
    intent: 'Commercial',
    publishedAt: '2026-08-10',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Pre-launch strategy and catalog structure',
        body: 'Before design, define category architecture, product attributes, search filters, and conversion goals. Strong information architecture is critical for discoverability and SEO.',
      },
      {
        heading: 'Checkout, payment, and trust elements',
        body: 'Your checkout must be fast and frictionless. Include local trust signals, transparent policies, delivery details, and recovery flows for abandoned carts.',
      },
      {
        heading: 'Post-launch growth checklist',
        body: 'Set up analytics, conversion events, product feed quality checks, and SEO tracking from day one. E-commerce website development in Sri Lanka should be treated as an ongoing growth system, not a one-time build.',
      },
    ],
    faqs: [
      {
        question: 'What is the first step before building an e-commerce site?',
        answer: 'Define catalog structure, customer journey, and conversion goals before UI design starts.',
      },
      {
        question: 'How do I improve e-commerce conversions?',
        answer: 'Improve page speed, checkout flow, trust signals, and product page clarity while tracking conversion events.',
      },
    ],
    ctaLabel: 'Build my online store',
    ctaPath: '/services/ecommerce-solutions',
  },
  {
    slug: 'custom-software-development-sri-lanka-vs-saas',
    title: 'Custom Software Development in Sri Lanka vs SaaS: Which Is Better?',
    description: 'Compare custom software and SaaS across cost, flexibility, control, and long-term ROI to make the right technology decision for your business.',
    keyword: 'custom software development sri lanka',
    topic: 'Custom Software',
    intent: 'Consideration',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    sections: [
      {
        heading: 'When SaaS is the right option',
        body: 'If your workflow matches standard industry processes and you need speed, SaaS may deliver short-term value. It can reduce upfront effort and simplify maintenance in early stages.',
      },
      {
        heading: 'When custom software creates stronger ROI',
        body: 'If your operations are unique, compliance-heavy, or integration-dependent, custom software often creates better long-term value by removing bottlenecks and manual work.',
      },
      {
        heading: 'Decision framework for business leaders',
        body: 'Evaluate growth horizon, process complexity, data ownership, and integration needs. Custom software development in Sri Lanka becomes strategic when your system directly influences efficiency and revenue.',
      },
    ],
    faqs: [
      {
        question: 'When should I choose custom software over SaaS?',
        answer: 'Choose custom software when you need deep workflow alignment, strict integrations, or long-term control over product roadmap and data.',
      },
      {
        question: 'Is custom software more expensive?',
        answer: 'Initial cost is often higher, but long-term ROI can be stronger when SaaS limitations create operational inefficiency.',
      },
    ],
    ctaLabel: 'Discuss custom software',
    ctaPath: '/services/custom-software',
  },
  {
    slug: 'ui-ux-design-sri-lanka-conversion-mistakes',
    title: 'UI UX Design in Sri Lanka: 9 Conversion Mistakes Most Sites Make',
    description: 'Learn the most common UI UX mistakes that reduce conversion rates and how Sri Lankan businesses can fix them to improve lead and sales performance.',
    keyword: 'ui ux design sri lanka',
    topic: 'UI/UX',
    intent: 'Informational',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Poor hierarchy and unclear CTA flow',
        body: 'When visual hierarchy is weak, users struggle to decide where to click. Strong UI UX design in Sri Lanka should prioritize one clear goal per screen with supportive secondary actions.',
      },
      {
        heading: 'Heavy layouts and slow interaction feedback',
        body: 'Slow pages and delayed feedback reduce trust quickly. Optimize assets, simplify interactions, and make action states clear to protect conversion intent.',
      },
      {
        heading: 'No user journey validation before launch',
        body: 'Use real user scenarios before publishing. Validate form flows, mobile navigation, and checkout paths to reduce drop-offs and increase qualified conversions.',
      },
    ],
    faqs: [
      {
        question: 'How does UI UX impact SEO and leads?',
        answer: 'Better UX improves engagement and conversion signals, which supports stronger search performance and lead generation.',
      },
      {
        question: 'Should we redesign before running ads?',
        answer: 'If landing page UX is weak, improving it first usually increases paid campaign ROI.',
      },
    ],
    ctaLabel: 'Request a UX audit',
    ctaPath: '/services/ui-ux-design',
  },
  {
    slug: 'software-company-sri-lanka-selection-framework',
    title: 'How to Choose a Software Company in Sri Lanka: A Decision Framework',
    description: 'A practical framework to evaluate software partners in Sri Lanka based on delivery process, technical quality, communication, and business outcomes.',
    keyword: 'software company sri lanka',
    topic: 'Digital Strategy',
    intent: 'Commercial',
    publishedAt: '2026-08-10',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Evaluate process, not portfolio alone',
        body: 'A polished portfolio is not enough. Assess discovery quality, technical planning, QA rigor, and post-launch support. Reliable teams can explain trade-offs clearly.',
      },
      {
        heading: 'Look for business-aligned delivery metrics',
        body: 'The right software company in Sri Lanka should discuss performance metrics, conversion outcomes, and operational efficiency rather than design trends alone.',
      },
      {
        heading: 'Use a weighted scorecard before final selection',
        body: 'Score vendors on communication speed, architecture quality, SEO readiness, scalability, and total ownership cost. This reduces emotional decision bias.',
      },
    ],
    faqs: [
      {
        question: 'What should I ask before hiring a software company?',
        answer: 'Ask about discovery process, architecture choices, delivery timeline, QA methods, and post-launch support scope.',
      },
      {
        question: 'How do I compare two agencies fairly?',
        answer: 'Use a weighted scorecard that includes technical quality, communication clarity, and expected business outcomes.',
      },
    ],
    ctaLabel: 'Start a discovery call',
    ctaPath: '/contact',
  },
  {
    slug: 'website-development-sri-lanka-seo-architecture',
    title: 'Website Development in Sri Lanka: SEO Architecture That Ranks',
    description: 'Build websites with technical SEO foundations such as clean routing, schema, internal linking, and performance-focused structure for better rankings.',
    keyword: 'website development sri lanka',
    topic: 'SEO',
    intent: 'Informational',
    publishedAt: '2026-08-10',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Build crawlable, indexable site structure first',
        body: 'Create predictable URL hierarchy, canonical consistency, and robust internal linking. Architecture errors cause ranking loss even with good content.',
      },
      {
        heading: 'Align page templates with search intent',
        body: 'Use intent-focused templates for services, case studies, and insights. Each template should include unique metadata, one H1, and clear conversion actions.',
      },
      {
        heading: 'Pair architecture with speed and UX',
        body: 'SEO architecture works best when combined with fast rendering, image optimization, and frictionless navigation across mobile and desktop.',
      },
    ],
    faqs: [
      {
        question: 'What is SEO architecture for a business site?',
        answer: 'It is the structured foundation of URLs, metadata, internal links, schemas, and performance setup that helps search engines understand and rank pages.',
      },
      {
        question: 'Can I rank with content only?',
        answer: 'Good content helps, but weak architecture can block discovery and reduce ranking potential.',
      },
    ],
    ctaLabel: 'Get technical SEO audit',
    ctaPath: '/services/seo-digital-growth',
  },
  {
    slug: 'erp-pos-systems-sri-lanka-buy-vs-build',
    title: 'ERP and POS Systems in Sri Lanka: Buy vs Build Guide',
    description: 'Compare off-the-shelf ERP/POS tools with custom-built systems to choose the right operational model for your business stage and complexity.',
    keyword: 'erp pos systems sri lanka',
    topic: 'ERP/POS',
    intent: 'Consideration',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    sections: [
      {
        heading: 'When buying off-the-shelf works best',
        body: 'If operations are standard and implementation speed matters most, prebuilt ERP/POS tools can be effective in the short term.',
      },
      {
        heading: 'When custom ERP/POS is better',
        body: 'Custom systems are stronger when branch workflows, approvals, and reporting logic are unique to your organization.',
      },
      {
        heading: 'Decision criteria for long-term ROI',
        body: 'Assess integration depth, reporting requirements, user adoption complexity, and long-term licensing cost before finalizing build-vs-buy strategy.',
      },
    ],
    faqs: [
      {
        question: 'When should I build custom ERP/POS?',
        answer: 'Build custom when your workflows are complex, branch-specific, and difficult to model in standard software.',
      },
      {
        question: 'Is hybrid rollout possible?',
        answer: 'Yes, many businesses start with core modules and scale features phase by phase based on operational priorities.',
      },
    ],
    ctaLabel: 'Get ERP consultation',
    ctaPath: '/services/erp-pos-systems',
  },
  {
    slug: 'digital-solutions-sri-lanka-for-smbs',
    title: 'Digital Solutions in Sri Lanka for SMEs: What to Prioritize First',
    description: 'A priority roadmap for SMEs to choose the right digital investments across websites, e-commerce, software automation, and growth channels.',
    keyword: 'digital solutions sri lanka',
    topic: 'Digital Strategy',
    intent: 'Informational',
    publishedAt: '2026-08-10',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Start with revenue-linked priorities',
        body: 'Focus first on assets that directly impact leads or sales: high-converting website pages, clear inquiry funnels, and measurable tracking.',
      },
      {
        heading: 'Then automate recurring operational pain points',
        body: 'Move next to software automations for inventory, order handling, and reporting where manual errors are expensive and repetitive.',
      },
      {
        heading: 'Build a 90-day improvement cycle',
        body: 'Use short execution cycles with KPI reviews each month. Digital solutions in Sri Lanka perform best when investment and iteration are continuous.',
      },
    ],
    faqs: [
      {
        question: 'What should SMEs prioritize first?',
        answer: 'Start with revenue-impact channels such as website conversion pages and measurable lead capture flow.',
      },
      {
        question: 'How often should digital strategy be reviewed?',
        answer: 'Use monthly KPI reviews and quarterly planning to align execution with business outcomes.',
      },
    ],
    ctaLabel: 'Plan my growth roadmap',
    ctaPath: '/contact',
  },
  {
    slug: 'website-redesign-sri-lanka-checklist',
    title: 'Website Redesign Checklist for Sri Lankan Companies',
    description: 'Use this practical redesign checklist to improve website speed, SEO architecture, UX clarity, and conversion performance.',
    keyword: 'website redesign sri lanka',
    topic: 'Web Development',
    intent: 'Consideration',
    publishedAt: '2026-08-10',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Audit performance and user behavior first',
        body: 'Before redesigning visuals, audit bounce points, loading speed, and conversion drop-offs to avoid cosmetic-only changes.',
      },
      {
        heading: 'Rebuild architecture for search and conversion',
        body: 'Use cleaner navigation, intent-focused pages, and better internal linking so users and search engines understand your offer quickly.',
      },
      {
        heading: 'Launch with measurement in place',
        body: 'Track form submissions, call clicks, and lead quality after launch to validate redesign ROI and prioritize next optimizations.',
      },
    ],
    faqs: [
      {
        question: 'How often should a website be redesigned?',
        answer: 'Most business websites benefit from major UX and conversion refreshes every 2 to 4 years based on market and performance changes.',
      },
      {
        question: 'Can redesign hurt SEO?',
        answer: 'Yes, if URL mapping and technical SEO are ignored. Plan redirects, metadata, and structure carefully before launch.',
      },
    ],
    ctaLabel: 'Get redesign quote',
    ctaPath: '/services/website-development',
  },
  {
    slug: 'seo-digital-growth-sri-lanka-roadmap',
    title: 'SEO and Digital Growth Roadmap for Sri Lankan B2B Companies',
    description: 'A practical SEO and digital growth roadmap to improve visibility, lead quality, and pipeline contribution for B2B companies in Sri Lanka.',
    keyword: 'seo sri lanka',
    topic: 'SEO',
    intent: 'Informational',
    publishedAt: '2026-08-10',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Build technical SEO baseline first',
        body: 'Start with indexability, canonical consistency, speed, schema, and clean routing. These foundations protect ranking potential as content grows.',
      },
      {
        heading: 'Publish intent-focused content clusters',
        body: 'Create service intent, comparison, and case-led content around high-value keywords. Interlink pages to pass authority to conversion pages.',
      },
      {
        heading: 'Optimize for revenue, not traffic alone',
        body: 'Track organic traffic-to-lead and lead-to-deal quality to align SEO with business outcomes, not vanity metrics.',
      },
    ],
    faqs: [
      {
        question: 'How long does SEO take for B2B?',
        answer: 'Initial movement can appear in 4 to 12 weeks, while meaningful lead impact usually compounds over 3 to 6 months.',
      },
      {
        question: 'Should we run SEO and paid ads together?',
        answer: 'Yes, paid campaigns can validate messaging quickly while SEO builds long-term acquisition efficiency.',
      },
    ],
    ctaLabel: 'Request SEO plan',
    ctaPath: '/services/seo-digital-growth',
  },
  {
    slug: 'best-web-development-company-sri-lanka-faq',
    title: 'Best Web Development Company in Sri Lanka: Buyer FAQ',
    description: 'Common buyer questions answered about selecting the best web development company in Sri Lanka for long-term business growth.',
    keyword: 'best web development company sri lanka',
    topic: 'Web Development',
    intent: 'Commercial',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Questions to ask before signing a contract',
        body: 'Ask about technical stack, project governance, QA process, SEO-readiness, and ownership transfer to avoid vendor lock-in.',
      },
      {
        heading: 'How to evaluate business fit',
        body: 'The best partner understands your revenue model, sales process, and customer journey rather than delivering design alone.',
      },
      {
        heading: 'How to reduce project risk',
        body: 'Use phased milestones, shared success metrics, and transparent communication cadence with clear decision checkpoints.',
      },
    ],
    faqs: [
      {
        question: 'What makes a web development company the best choice?',
        answer: 'Strong technical quality, business understanding, transparent process, and measurable post-launch support make the biggest difference.',
      },
      {
        question: 'Should I pick based on portfolio style?',
        answer: 'Portfolio matters, but delivery discipline and growth outcomes are stronger predictors of project success.',
      },
    ],
    ctaLabel: 'Start your project',
    ctaPath: '/contact',
  },
];

export const insightMap = Object.fromEntries(insights.map((post) => [post.slug, post]));

export const insightTopics = ['All', ...new Set(insights.map((post) => post.topic))] as const;
export const insightIntents = ['All', ...new Set(insights.map((post) => post.intent))] as const;
