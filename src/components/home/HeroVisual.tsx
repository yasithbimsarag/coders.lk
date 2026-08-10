import { TextCursor } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const translateX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 80,
    damping: 20,
    mass: 0.9,
  });
  const translateY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 80,
    damping: 20,
    mass: 0.9,
  });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), {
    stiffness: 70,
    damping: 18,
    mass: 1,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 70,
    damping: 18,
    mass: 1,
  });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(Math.max(-0.5, Math.min(0.5, x)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, y)));
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[560px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="relative overflow-hidden rounded-[26px] border border-slate-800/60 bg-slate-950/95 p-3 shadow-[0_40px_120px_rgba(30,58,138,0.28)] sm:rounded-[32px] sm:p-5">
        <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_40%)] sm:rounded-[32px]" />
        <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br from-slate-950/70 via-slate-950/30 to-transparent sm:rounded-[32px]" />
        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[22px] sm:min-h-[440px] sm:rounded-[28px]">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 bg-[radial-gradient(circle,_rgba(56,189,248,0.06),_transparent_55%)] blur-2xl sm:h-[420px] sm:w-[420px]"
            animate={reduceMotion ? { opacity: 0.55 } : { opacity: [0.45, 0.72, 0.45], scale: [0.97, 1.03, 0.97] }}
            transition={{ duration: reduceMotion ? 0 : 7, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[238px] w-[238px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 sm:h-[356px] sm:w-[356px]"
            animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
            transition={{ duration: reduceMotion ? 0 : 48, repeat: reduceMotion ? 0 : Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 sm:h-[320px] sm:w-[320px]"
            animate={reduceMotion ? { rotate: 0 } : { rotate: -360 }}
            transition={{ duration: reduceMotion ? 0 : 36, repeat: reduceMotion ? 0 : Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[186px] w-[186px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/15 sm:h-[274px] sm:w-[274px]"
            animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
            transition={{ duration: reduceMotion ? 0 : 60, repeat: reduceMotion ? 0 : Infinity, ease: 'linear' }}
          />

          <motion.div
            className="absolute left-[18%] top-[22%] h-12 w-12 rounded-full border border-cyan-300/25 bg-cyan-300/10 blur-sm"
            animate={reduceMotion ? { opacity: 0.5 } : { opacity: [0.35, 0.55, 0.35], y: [0, -6, 0] }}
            transition={{ duration: reduceMotion ? 0 : 8, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[18%] top-[28%] h-10 w-10 rounded-full border border-blue-400/25 bg-blue-400/10 blur-sm"
            animate={reduceMotion ? { opacity: 0.45 } : { opacity: [0.28, 0.5, 0.28], y: [0, 6, 0] }}
            transition={{ duration: reduceMotion ? 0 : 9, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[12%] bottom-[26%] h-14 w-14 rounded-full border border-slate-100/10 bg-slate-800/60"
            animate={reduceMotion ? { opacity: 0.4 } : { opacity: [0.26, 0.42, 0.26], y: [0, -5, 0] }}
            transition={{ duration: reduceMotion ? 0 : 10, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[12%] bottom-[20%] h-10 w-10 rounded-full border border-slate-100/15 bg-slate-800/70"
            animate={reduceMotion ? { opacity: 0.4 } : { opacity: [0.2, 0.36, 0.2], y: [0, 5, 0] }}
            transition={{ duration: reduceMotion ? 0 : 11, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />

          <motion.span
            className="absolute left-[24%] top-[18%] h-2 w-2 rounded-full bg-cyan-200/45"
            animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.2, 0.6, 0.2], y: [0, -6, 0] }}
            transition={{ duration: reduceMotion ? 0 : 6, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute right-[22%] top-[22%] h-1.5 w-1.5 rounded-full bg-sky-200/45"
            animate={reduceMotion ? { opacity: 0.3 } : { opacity: [0.15, 0.45, 0.15], y: [0, 5, 0] }}
            transition={{ duration: reduceMotion ? 0 : 7, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
          <motion.span
            className="absolute left-[20%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-blue-200/40"
            animate={reduceMotion ? { opacity: 0.28 } : { opacity: [0.12, 0.4, 0.12], y: [0, -4, 0] }}
            transition={{ duration: reduceMotion ? 0 : 8, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: 1.2 }}
          />
          <motion.span
            className="absolute right-[20%] bottom-[24%] h-2 w-2 rounded-full bg-cyan-200/35"
            animate={reduceMotion ? { opacity: 0.3 } : { opacity: [0.18, 0.5, 0.18], y: [0, 6, 0] }}
            transition={{ duration: reduceMotion ? 0 : 9, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.9 }}
          />

          <motion.div
            initial={false}
            animate={
              reduceMotion
                ? { y: 0, rotateZ: 0, rotateY: 0 }
                : { y: [0, -10, 0], rotateZ: [0, 1.4, 0], rotateY: [-1.5, 1.5, -1.5] }
            }
            transition={{ duration: reduceMotion ? 0 : 7, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
            className="relative z-10"
            style={{
              perspective: 1200,
              x: reduceMotion ? 0 : translateX,
              y: reduceMotion ? 0 : translateY,
              rotateX: reduceMotion ? 0 : rotateX,
              rotateY: reduceMotion ? 0 : rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border border-cyan-300/15 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-5 shadow-[inset_0_0_80px_rgba(59,130,246,0.14),0_40px_80px_rgba(14,42,78,0.45)] sm:h-[320px] sm:w-[320px] sm:p-7">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_30%)]" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_45%)]" />
              <motion.div
                className="absolute inset-0 rounded-full border border-white/5 shadow-[0_0_120px_rgba(59,130,246,0.25)]"
                animate={reduceMotion ? { opacity: 0.7, scale: 1 } : { opacity: [0.5, 0.88, 0.5], scale: [0.98, 1.03, 0.98] }}
                transition={{ duration: reduceMotion ? 0 : 6, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
              />
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 via-slate-900/60 to-slate-950/90 shadow-[0_18px_50px_rgba(14,42,78,0.55)]">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-[2.2rem] font-black uppercase tracking-[0.22em] text-white shadow-[0_35px_80px_rgba(59,130,246,0.32)] sm:h-40 sm:w-40 sm:text-[4rem] sm:tracking-[0.3em]">
                  {'</>'}
                </div>

                <motion.div
                  className="absolute left-1/2 top-1/2 hidden sm:block"
                  animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
                  transition={{ duration: reduceMotion ? 0 : 17, repeat: reduceMotion ? 0 : Infinity, ease: 'linear' }}
                >
                  <motion.div
                    className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-900/75 text-cyan-200 shadow-[0_15px_30px_rgba(56,189,248,0.18)]"
                    style={{ x: -136, y: -40 }}
                    animate={reduceMotion ? { y: -40 } : { y: [-40, -46, -40] }}
                    transition={{ duration: reduceMotion ? 0 : 4.8, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
                  >
                    {'{}'}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute left-1/2 top-1/2 hidden sm:block"
                  animate={reduceMotion ? { rotate: 0 } : { rotate: -360 }}
                  transition={{ duration: reduceMotion ? 0 : 20, repeat: reduceMotion ? 0 : Infinity, ease: 'linear' }}
                >
                  <motion.div
                    className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/20 bg-slate-900/75 text-sky-200 shadow-[0_15px_30px_rgba(96,165,250,0.18)]"
                    style={{ x: 112, y: 92 }}
                    animate={reduceMotion ? { y: 92 } : { y: [92, 86, 92] }}
                    transition={{ duration: reduceMotion ? 0 : 5.2, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.4 }}
                  >
                    <TextCursor size={16} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute left-1/2 top-1/2 hidden md:block"
                  animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
                  transition={{ duration: reduceMotion ? 0 : 23, repeat: reduceMotion ? 0 : Infinity, ease: 'linear' }}
                >
                  <motion.div
                    className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950/50 text-sky-200 shadow-[0_15px_30px_rgba(59,130,246,0.18)]"
                    style={{ x: 0, y: -146 }}
                    animate={reduceMotion ? { y: -146 } : { y: [-146, -152, -146] }}
                    transition={{ duration: reduceMotion ? 0 : 6, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.7 }}
                  >
                    {'<>'}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
