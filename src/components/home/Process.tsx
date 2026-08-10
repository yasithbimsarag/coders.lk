const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your business, users and objectives.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We define the experience and create the product direction.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We build clean, scalable and production-ready technology.',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description: 'We deploy, optimize and support the next stage of growth.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-surface2 py-16 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">HOW WE WORK</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Simple process. Serious execution.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-[32px] border border-slate-200 bg-surface p-6 shadow-sm sm:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-brand text-2xl font-semibold">{step.number}</div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950 sm:mt-6 sm:text-2xl">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
