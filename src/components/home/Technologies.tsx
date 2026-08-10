const technologies = ['React', 'Next.js', 'Laravel', 'PHP', 'JavaScript', 'TypeScript', 'MySQL', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap', 'Vercel', 'GitHub'];

export default function Technologies() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">Built with modern technology.</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Built with modern technology.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech} className="rounded-3xl border border-slate-200 bg-surface p-6 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand hover:bg-slate-50">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
