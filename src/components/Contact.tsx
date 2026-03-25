import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration - Replace with your actual IDs from EmailJS dashboard
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create an email service (Gmail, Outlook, etc.)
    // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{company}}, {{message}}
    // 4. Get your Service ID, Template ID, and Public Key from the dashboard
    const serviceId = 'service_9nd89xp';
    const templateId = 'template_f7rqvxe';
    const publicKey = 'BmtAvL-h66MxYJWVN';

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setIsSubmitting(false);
        // You can add error handling here, e.g., show an error message
      });
  };
  return (
    <section
      id="contact"
      className="py-24 bg-background-alt relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
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
            
            <div className="h-1 w-12 bg-accent-primary rounded-full mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Ready to transform your business with custom digital solutions?
              Reach out to our team to discuss your project requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-slate-400">hello@coders.lk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-slate-400">+94 77 834 5443</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-slate-400">
                    100 Innovation Drive
                    <br />
                    Tech District, CA 94103
                  </p>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Right Side: Form */}
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
            }}
            transition={{
              delay: 0.2
            }}
            className="bg-background-card p-8 rounded-2xl border border-white/5">
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300">
                    
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors"
                    placeholder="John Doe" />
                  
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300">
                    
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors"
                    placeholder="john@company.com" />
                  
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-slate-300">
                  
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors"
                  placeholder="Your Company Ltd." />
                
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-300">
                  
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements...">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-white text-background hover:bg-slate-200 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                
                {isSubmitting ?
                <span className="flex items-center gap-2">
                    <svg
                    className="animate-spin h-5 w-5 text-background"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    
                      <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4">
                    </circle>
                      <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                    </svg>
                    Sending...
                  </span> :
                isSubmitted ?
                <span className="text-green-600 flex items-center gap-2">
                    Message Sent!
                  </span> :

                <>
                    Send Message <SendIcon className="w-4 h-4" />
                  </>
                }
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}