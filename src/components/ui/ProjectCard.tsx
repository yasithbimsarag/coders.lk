import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Gem, ShoppingCart } from 'lucide-react';
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
  const cardTheme =
    number === '01'
      ? {
          badgeBg: 'bg-blue-500',
          ctaText: 'text-blue-600 hover:text-blue-700',
          categoryText: 'text-blue-500',
          icon: ShoppingCart,
        }
      : number === '02'
        ? {
            badgeBg: 'bg-violet-500',
            ctaText: 'text-violet-600 hover:text-violet-700',
            categoryText: 'text-violet-500',
            icon: Gem,
          }
        : {
            badgeBg: 'bg-emerald-500',
            ctaText: 'text-emerald-600 hover:text-emerald-700',
            categoryText: 'text-emerald-500',
            icon: BriefcaseBusiness,
          };

  const Icon = cardTheme.icon;

  return (
    <motion.article
      whileHover={{ y: -7 }}
      className="group relative flex h-full min-h-[620px] flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_22px_56px_rgba(37,99,235,0.11)] transition duration-300 hover:border-slate-300 sm:min-h-[700px]"
    >
      <div className="relative px-4 pt-4">
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
          <img
            src={image}
            alt={`${name} project preview by Coders.lk`}
            loading="lazy"
            decoding="async"
            className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[280px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>
        <div className={`absolute left-7 top-[226px] inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg sm:left-8 sm:top-[258px] sm:h-14 sm:w-14 ${cardTheme.badgeBg}`}>
          <Icon size={20} />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-10 sm:px-6 sm:pb-6 sm:pt-12">
        <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.32em] ${cardTheme.categoryText}`}>{category}</span>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.38em] text-slate-500">Project {number}</p>
        <h3 className="mt-3 min-h-[62px] text-[1.5rem] font-semibold leading-tight text-slate-950 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden sm:min-h-[74px] sm:text-[2rem]">
          {name}
        </h3>
        <p className="mt-5 min-h-[84px] max-w-2xl leading-7 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden sm:mt-6">{description}</p>
        <div className="mt-6 min-h-[82px] flex flex-wrap content-start gap-2.5 sm:mt-8 sm:gap-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 sm:px-4 sm:py-2 sm:text-sm">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={routePath}
          className={`mt-6 inline-flex items-center gap-2 text-xl font-semibold transition sm:mt-7 sm:text-2xl ${cardTheme.ctaText}`}
        >
          View Case Study
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
