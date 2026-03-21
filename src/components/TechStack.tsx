import React from 'react';
import { motion } from 'framer-motion';
const technologies = [
'React',
'Next.js',
'TypeScript',
'Node.js',
'Python',
'PostgreSQL',
'MongoDB',
'Redis',
'AWS',
'Docker',
'Kubernetes',
'GraphQL',
'Tailwind CSS',
'Framer Motion',
'Stripe',
'Vercel'];

export function TechStack() {
  return (
    <section id="tech" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="md:w-1/3">
            
            <div className="h-1 w-12 bg-accent-primary rounded-full mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern Tech Stack
            </h2>
            <p className="text-slate-400">
              We leverage the latest and most reliable technologies to build
              scalable, secure, and high-performance solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="md:w-2/3 flex flex-wrap gap-3 justify-start md:justify-end">
            
            {technologies.map((tech, index) =>
            <motion.div
              key={tech}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05
              }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-accent-primary/50 hover:text-white transition-colors cursor-default">
              
                {tech}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}