import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
const categories = ['All', 'Websites', 'ERP', 'POS'];
const projects = [
{
  id: 1,
  title: 'Techmart.lk',
  category: 'Websites',
  description:
  'Sri Lankan e-commerce platform for smartphones, electronics, accessories, and online shopping.',
  gradient: 'from-blue-600 to-cyan-600',
   url: 'https://techmart.lk'

},
{
  id: 2,
  title: 'Nexus Enterprise',
  category: 'ERP',
  description:
  'Custom manufacturing resource planning system with automated inventory tracking.',
  gradient: 'from-purple-600 to-blue-600'
},
{
  id: 3,
  title: 'RetailSync',
  category: 'POS',
  description:
  'Cloud-based point of sale system for a multi-location retail franchise.',
  gradient: 'from-emerald-500 to-teal-700'
},
{
  id: 4,
  title: 'HealthCare Portal',
  category: 'Websites',
  description:
  'Patient management and telemedicine platform with secure messaging.',
  gradient: 'from-cyan-500 to-blue-500'
},
{
  id: 5,
  title: 'Logistics Core',
  category: 'ERP',
  description:
  'End-to-end supply chain management software with fleet tracking.',
  gradient: 'from-indigo-600 to-purple-600'
},
{
  id: 6,
  title: 'BistroTouch',
  category: 'POS',
  description:
  'Restaurant management system with kitchen display integration and table mapping.',
  gradient: 'from-orange-500 to-red-600'
}];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const filteredProjects = projects.filter(
    (project) => activeTab === 'All' || project.category === activeTab
  );
  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}>
            
            <div className="h-1 w-12 bg-accent-primary rounded-full mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore our recent projects across web development, enterprise
              systems, and retail solutions.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${activeTab === category ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
            
              {activeTab === category &&
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.6
              }} />

            }
              <span className="relative z-10">{category}</span>
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <AnimatePresence mode="popLayout">
           {filteredProjects.map((project) =>
  <motion.a
    key={project.id}
    layout
    href={project.url || '#'}
    target={project.url ? '_blank' : '_self'}
    rel="noopener noreferrer"
    initial={{
      opacity: 0,
      scale: 0.9
    }}
    animate={{
      opacity: 1,
      scale: 1
    }}
    exit={{
      opacity: 0,
      scale: 0.9
    }}
    transition={{
      duration: 0.3
    }}
    className="group block bg-background-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent-primary/30 transition-colors"
  >
              
                {/* Image Placeholder (Gradient) */}
                <div
                className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.1),transparent_38%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.08),transparent_42%)]"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="px-4 py-2 bg-white text-background font-semibold rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details <ExternalLinkIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider text-accent-primary uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}