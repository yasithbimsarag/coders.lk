import { FormEvent, useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('Message could not be sent now. Please try again in a moment.');

  const submitToEndpoint = async (endpoint: string, payload: Record<string, string>) => {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || data?.success === false) {
      const apiMessage = data?.message || `Request failed (${response.status})`;
      throw new Error(apiMessage);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      company: String(formData.get('company') ?? ''),
      service: String(formData.get('service') ?? ''),
      message: String(formData.get('message') ?? ''),
      website: String(formData.get('website') ?? ''),
    };

    setStatus('sending');
    setErrorMessage('Message could not be sent now. Please try again in a moment.');

    try {
      try {
        await submitToEndpoint('/api/contact', payload);
      } catch {
        // Legacy endpoint fallback for environments still wired to contact-submit.php.
        await submitToEndpoint('/contact-submit.php', payload);
      }

      form.reset();
      setStatus('sent');
    } catch (error) {
      const message =
        error instanceof Error
          ? `${error.message.replace(/[.\s]+$/, '')}. You can also email us directly at hello@coders.lk.`
          : 'Message could not be sent now. Please try again in a moment.';
      setErrorMessage(message);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-surface2 py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/80">Get in touch</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Have a project in mind? Let’s make it happen.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Reach out to Coders.lk for premium digital products, e-commerce systems and custom software built for growth.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-slate-200 bg-surface p-10 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-brand/80">Contact details</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">Ready to start your next digital product?</h3>
              </div>
              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand">Email</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">hello@coders.lk</p>
              </div>
              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand">Phone</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">+94 76 680 0942</p>
              </div>
              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand">Location</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">97/66 A Nagahamulla Rd, Wellampitiya 10600</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-surface p-10 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+94 7X XXX XXXX"
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-900">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-900">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="ERP & POS Systems">ERP & POS Systems</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="SEO & Digital Growth">SEO & Digital Growth</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                </select>
              </div>
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
                aria-hidden="true"
              />
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project briefly"
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                {status === 'sending' ? 'Sending...' : 'Send a Message'}
              </button>
              {status === 'sent' ? <p className="text-sm font-medium text-emerald-600">Message sent successfully. We will get back to you soon.</p> : null}
              {status === 'error' ? <p className="text-sm font-medium text-red-600">{errorMessage}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
