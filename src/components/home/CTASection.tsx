import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-surface via-surface2 to-slate-50 py-16 sm:py-24">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 lg:flex-row lg:gap-10 lg:px-8 lg:text-left">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">Have an idea worth building?</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">Let's turn it into a digital product built for the future.</h2>
          <p className="mt-6 max-w-xl leading-8 text-slate-600">
            Work with Coders.lk to create a high-performance website, commerce platform or enterprise system that represents your brand with clarity and confidence.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-600">
            Start a Project
          </Link>
          <a href="mailto:hello@coders.lk" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-surface px-8 py-4 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
