import { motion } from 'framer-motion';
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
    <motion.article whileHover={{ y: -6 }} className="group relative flex h-full min-h-[700px] flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-surface transition">
      <div className="flex flex-1 flex-col p-8">
        <span className="text-xs uppercase tracking-[0.35em] text-brand/80">{category}</span>
        <div className="mt-4 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Project {number}</p>
            <h3 className="mt-3 min-h-[76px] text-3xl font-semibold text-slate-950 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">{name}</h3>
          </div>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-brand">{number}</div>
        </div>
        <p className="mt-6 min-h-[84px] max-w-2xl leading-7 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{description}</p>
        <div className="mt-8 min-h-[82px] flex flex-wrap content-start gap-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden border-t border-slate-200 bg-slate-50 p-6">
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-surface">
          <img src={image} alt={name} className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[320px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-200/40 via-transparent to-transparent" />
        </div>
        <Link to={routePath} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-blue-600">
          View Project
        </Link>
      </div>
    </motion.article>
  );
}
