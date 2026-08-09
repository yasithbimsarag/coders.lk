import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: 'Which is the best web development company in Sri Lanka for business websites?',
    answer:
      'Coders.lk helps Sri Lankan businesses launch fast, SEO-ready websites with modern UI, strong conversion flows, and scalable architecture.',
  },
  {
    question: 'Do you provide e-commerce website development in Sri Lanka?',
    answer:
      'Yes. We build e-commerce websites with product catalogs, payment integration, order management, and analytics for growth-focused brands.',
  },
  {
    question: 'Can you build custom software for our company workflow?',
    answer:
      'Yes. Our custom software development process starts with workflow mapping, then we build secure systems for operations, reporting, and automation.',
  },
  {
    question: 'Do you offer UI UX design for existing systems?',
    answer:
      'We redesign existing products with user research, interface improvements, and performance-focused UX decisions to increase engagement and retention.',
  },
];

export default function FaqSection() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/80">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Questions about website and software development in Sri Lanka
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Quick answers from our team. Explore services, pricing fit, and delivery process before starting your project.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{item.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
          <Link to="/services" className="rounded-full border border-slate-200 bg-white px-5 py-2 hover:border-brand hover:text-brand">
            Browse Services
          </Link>
          <Link to="/projects" className="rounded-full border border-slate-200 bg-white px-5 py-2 hover:border-brand hover:text-brand">
            View Projects
          </Link>
          <Link to="/contact" className="rounded-full border border-slate-200 bg-white px-5 py-2 hover:border-brand hover:text-brand">
            Request a Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}
