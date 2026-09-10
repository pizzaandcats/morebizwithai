import { ArrowRight } from 'lucide-react'

const prompts = [
  { number: '1', title: 'Set Up Your Business', body: 'Answer questions about your labor costs, rates, expenses, material markup, service area, and other details needed to price work.', note: 'Do this once. Reuse the information for future estimates.', accent: 'bg-green' },
  { number: '2', title: 'Price Each New Job', body: 'Review the customer request and photos, find missing details, estimate labor and materials, calculate potential profit, and draft a quote.', note: 'Use this prompt for every new customer request.', accent: 'bg-primary' },
]

export function WhatYouGet() {
  return (
    <section id="inside" className="border-b-2 border-navy bg-cream">
      <div className="site-container py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="section-label">Two prompts. One simple workflow.</p>
          <h2 className="section-title">Set up your business once. Price each new job.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          {prompts.map((prompt, index) => (
            <div key={prompt.number} className="contents">
              <article className="rounded-2xl border-2 border-navy bg-card p-6 shadow-hard-sm md:p-8">
                <span className={`inline-flex size-11 items-center justify-center rounded-full border-2 border-navy ${prompt.accent} font-bold text-white`}>{prompt.number}</span>
                <h3 className="mt-5 text-2xl font-extrabold text-navy">{prompt.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-navy/80">{prompt.body}</p>
                <p className="mt-5 border-t border-navy/20 pt-4 text-base font-bold text-navy">{prompt.note}</p>
              </article>
              {index === 0 && <div className="flex items-center justify-center py-1 text-primary md:px-1"><ArrowRight className="size-8 rotate-90 md:rotate-0" aria-hidden="true" /></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
