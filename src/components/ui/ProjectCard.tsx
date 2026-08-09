import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  routePath: string;
}

export default function ProjectCard({ number, category, name, description, tags, image, routePath }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative flex h-full min-h-[700px] flex-col overflow-hidden rounded-[32px] border border-slate-200/90 bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_42%,#eef4ff_100%)] shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:border-brand/35 hover:shadow-[0_34px_80px_rgba(37,99,235,0.2)]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl transition group-hover:bg-blue-300/45" />
      <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-cyan-200/35 blur-3xl transition group-hover:bg-cyan-300/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="flex flex-1 flex-col p-8">
        <span className="inline-flex w-fit rounded-full border border-brand/20 bg-blue-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-brand/90">
          {category}
        </span>
        <div className="mt-4 flex items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Project {number}</p>
            <h3 className="mt-3 min-h-[76px] text-3xl font-semibold text-slate-950 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">{name}</h3>
          </div>
          <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white text-brand shadow-[0_14px_32px_rgba(37,99,235,0.24)] ring-1 ring-blue-100">
            <span className="text-base font-semibold">{number}</span>
            <span className="absolute -inset-[3px] -z-10 rounded-3xl bg-gradient-to-br from-blue-200/50 via-cyan-200/40 to-indigo-200/45 blur-md" />
          </div>
        </div>
        <p className="mt-6 min-h-[84px] max-w-2xl leading-7 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{description}</p>
        <div className="mt-8 min-h-[82px] flex flex-wrap content-start gap-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm text-slate-600 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden border-t border-slate-200 bg-white/80 p-6">
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <img
            src={image}
            alt={`${name} project preview by Coders.lk`}
            loading="lazy"
            decoding="async"
            className="h-[300px] w-full object-cover saturate-110 contrast-105 transition duration-500 group-hover:scale-105 sm:h-[320px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-slate-950/5 to-transparent" />
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background-image:linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.35)_40%,transparent_60%)]" />
          <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow">
            Case Study
          </div>
        </div>
        <Link
          to={routePath}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand/40 hover:bg-blue-100/85 hover:text-blue-700"
        >
          View Project
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
