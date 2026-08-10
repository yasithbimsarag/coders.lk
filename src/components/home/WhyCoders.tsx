const reasons = [
  {
    number: '01',
    title: 'Built Around Your Business',
    description: "We don't force your business into generic templates.",
  },
  {
    number: '02',
    title: 'Design Meets Engineering',
    description: 'We combine modern product design with practical development.',
  },
  {
    number: '03',
    title: 'Built to Scale',
    description: 'Our systems are designed with growth and maintainability in mind.',
  },
  {
    number: '04',
    title: 'One Technology Partner',
    description: 'From websites to enterprise software, we help build your digital foundation.',
  },
];

export default function WhyCoders() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">Why teams choose Coders.lk.</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Why teams choose Coders.lk.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.number} className="rounded-[32px] border border-slate-200 bg-surface p-6 transition hover:border-brand hover:bg-slate-50 sm:p-10">
              <div className="text-brand text-4xl font-semibold opacity-20 sm:text-5xl">{reason.number}</div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950 sm:mt-6 sm:text-2xl">{reason.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
