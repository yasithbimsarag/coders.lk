
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
const testimonials = [
{
  quote:
  'coders.lk completely transformed our manufacturing process. The custom ERP they built reduced our inventory waste by 30% in the first quarter alone.',
  name: 'Sarah Jenkins',
  role: 'Operations Director',
  company: 'Stellar Manufacturing'
},
{
  quote:
  'The POS system is incredibly intuitive. Training new staff takes half the time it used to, and the cloud syncing means I can check sales from anywhere.',
  name: 'Marcus Chen',
  role: 'Owner',
  company: 'Urban Roast Coffee Co.'
},
{
  quote:
  "Our new web platform handles 10x the traffic without breaking a sweat. The team's attention to performance and modern architecture is unmatched.",
  name: 'Elena Rodriguez',
  role: 'CTO',
  company: 'FinServe Digital'
}];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background-alt relative border-t border-white/5">
      
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
              once: true
            }}>
            
            <div className="h-1 w-12 bg-accent-primary rounded-full mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={index}
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
            }}
            transition={{
              delay: index * 0.15
            }}
            className="bg-background-card p-8 rounded-2xl border border-white/5 relative">
            
              <QuoteIcon className="w-10 h-10 text-white/5 absolute top-6 right-6" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) =>
              <svg
                key={i}
                className="w-5 h-5 text-accent-primary"
                fill="currentColor"
                viewBox="0 0 20 20">
                
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
              )}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold text-lg border border-white/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}