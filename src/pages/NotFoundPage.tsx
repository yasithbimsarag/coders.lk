import { Link } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';

export default function NotFoundPage() {
  return (
    <>
      <SeoHead title="Page Not Found | Coders.lk" description="The page you are looking for could not be found." canonicalPath="/404" />
      <main className="bg-background py-16 sm:py-24">
        <section className="mx-auto max-w-[1320px] px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-brand/80 sm:text-sm sm:tracking-[0.32em]">404</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-5xl">Page not found</h1>
          <p className="mt-5 text-slate-600">The page you requested does not exist.</p>
          <Link to="/" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 sm:w-auto">
            Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
