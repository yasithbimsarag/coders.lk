import React from 'react';
import { motion } from 'framer-motion';
import {
  MonitorSmartphoneIcon,
  DatabaseIcon,
  CreditCardIcon } from
'lucide-react';
const services = [
{
  title: 'Web Development',
  description:
  'High-performance, responsive websites and web applications built with modern frameworks like React and Next.js. Optimized for speed, SEO, and conversion.',
  icon: MonitorSmartphoneIcon,
  color: 'from-blue-400 to-cyan-400'
},
{
  title: 'ERP Solutions',
  description:
  'Custom Enterprise Resource Planning systems to streamline your operations, manage resources, and integrate your business processes into one unified platform.',
  icon: DatabaseIcon,
  color: 'from-purple-400 to-blue-400'
},
{
  title: 'POS Systems',
  description:
  'Modern Point of Sale solutions for retail and hospitality. Cloud-synced, intuitive interfaces with robust inventory and sales analytics built-in.',
  icon: CreditCardIcon,
  color: 'from-cyan-400 to-emerald-400'
}];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              once: true,
              margin: '-100px'
            }}
            className="inline-block mb-4">
            
            <div className="h-1 w-12 bg-accent-primary rounded-full mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Core Services
            </h2>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              delay: 0.1
            }}
            className="text-slate-400 max-w-2xl mx-auto">
            
            We deliver end-to-end technical solutions designed to scale with
            your business and provide measurable ROI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.5
            }}
            className="group relative bg-background-card rounded-2xl p-8 border border-white/5 hover:border-accent-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent-primary/5">
            
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div
                className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10`}>
                
                  <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm"></div>
                  <service.icon className="w-7 h-7 text-white relative z-10 drop-shadow-md" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}