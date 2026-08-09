# High-Conversion Service Page Template (Publish Ready)

Use this template for each service landing page and local-intent variation.

## URL and Metadata
- URL: /services/{service-slug}
- Title: {Service Name} in Sri Lanka | Coders.lk
- Meta description: Get {service name} in Sri Lanka from Coders.lk. We build {outcomes}. Talk to our team for a tailored plan.
- Canonical: https://coders.lk/services/{service-slug}

## Page Structure

### 1. Hero Section
- H1: {Service Name} in Sri Lanka for Growth-Focused Businesses
- Subheading: Clear outcome statement with trust signal.
- Primary CTA: Start Your Project
- Secondary CTA: View Case Studies

### 2. Problem and Opportunity
- H2: Why Businesses Need {Service Name} Now
- 3 to 5 pain points.
- 3 to 5 measurable outcomes.

### 3. What We Deliver
- H2: What You Get with Our {Service Name}
- H3 blocks:
  - Strategy
  - Design/Build
  - Launch and Optimization

### 4. Process Section
- H2: Our {Service Name} Process
- H3: Discovery
- H3: Planning
- H3: Delivery
- H3: Scale

### 5. Proof and Case Studies
- H2: Real Results from Sri Lankan Businesses
- Link to 2 to 3 relevant project pages.
- Include before/after metrics where possible.

### 6. FAQ Block
- H2: {Service Name} FAQ
- 4 to 6 high-intent questions.

### 7. Final CTA
- H2: Ready to Start {Service Name}?
- CTA: Book a Consultation
- Support CTA: Email / Call

## Conversion Elements Checklist
- Sticky CTA on mobile.
- Trust badges (clients, years, outcomes).
- Lead form above fold on high-intent pages.
- Phone and email visible.
- Fast-loading hero media.

## Internal Linking Rules
Add links to:
- /services
- Related service pages
- /projects and relevant project detail pages
- /contact

## Schema Snippets

### ProfessionalService
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Coders.lk",
  "url": "https://coders.lk/services/{service-slug}",
  "areaServed": "Sri Lanka",
  "serviceType": "{Service Name}"
}

### BreadcrumbList
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://coders.lk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://coders.lk/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{Service Name}",
      "item": "https://coders.lk/services/{service-slug}"
    }
  ]
}

## Ready-to-Use H1 Variants
- Website Development in Sri Lanka That Converts More Visitors
- E-Commerce Website Development in Sri Lanka for Scalable Sales
- Custom Software Development in Sri Lanka for Operational Efficiency
- UI UX Design in Sri Lanka for Better Product Adoption

## Content Quality Rules
- Keep paragraph length short and scannable.
- Use concrete outcomes and numbers where possible.
- Avoid keyword stuffing.
- Keep tone commercial and decision-focused.
