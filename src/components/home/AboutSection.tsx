export default function AboutSection() {
  return (
    <section id="about" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">We build more than websites.</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">We build more than websites.</h2>
          <p className="max-w-xl leading-8 text-slate-600">
            Coders.lk is a digital technology company focused on creating websites, software and digital systems that help businesses operate, grow and compete.
          </p>
          <p className="max-w-xl leading-8 text-slate-600">
            We work across product design, engineering and digital strategy to turn business ideas into practical technology.
          </p>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-surface2 p-6 shadow-sm sm:p-10">
          <div className="rounded-3xl border border-slate-200 bg-surface p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 p-5 text-slate-700">
                <span className="font-semibold text-slate-950">Strategy</span>
                <span className="text-brand">Focused</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 p-5 text-slate-700">
                <span className="font-semibold text-slate-950">Design</span>
                <span className="text-brand">User-led</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 p-5 text-slate-700">
                <span className="font-semibold text-slate-950">Development</span>
                <span className="text-brand">Built to scale</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 p-5 text-slate-700">
                <span className="font-semibold text-slate-950">Growth</span>
                <span className="text-brand">Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
