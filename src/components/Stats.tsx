import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString().replace(/,/g, ''));
      if (start === end) return;
      const incrementTime = duration / end * 1000;
      // For large numbers, we don't want to update every single digit
      const stepTime = Math.max(incrementTime, 16); // min 16ms (approx 60fps)
      const steps = duration * 1000 / stepTime;
      const stepValue = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>);

}
const stats = [
{
  label: 'Projects Delivered',
  value: 10,
  suffix: '+'
},
{
  label: 'Years Experience',
  value: 2,
  suffix: '+'
},
{
  label: 'Enterprise Clients',
  value: 10,
  suffix: '+'
},
{
  label: 'System Uptime',
  value: 99,
  suffix: '%'
}];

export function Stats() {
  return (
    <section className="py-20 bg-background relative border-y border-white/5">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay [background-image:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_48%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.4
            }}
            className="text-center px-4">
            
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-accent-primary font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}