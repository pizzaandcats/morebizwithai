import { Check } from 'lucide-react'

const benefits = ['Review a customer request and photos', 'Identify the details you still need', 'Estimate crew time and material costs', 'Use your company’s real rates and expenses', 'Calculate gross profit and margin', 'Draft a professional customer quote']

export function PromptSamples() {
  return (
    <section className="border-b-2 border-navy bg-background">
      <div className="site-container grid gap-10 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-label">What the prompts help you do</p>
          <h2 className="section-title">Build the estimate without starting from scratch</h2>
          <ul className="mt-7 grid gap-4">
            {benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-lg leading-relaxed text-navy"><span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-green text-white"><Check className="size-4" strokeWidth={3} aria-hidden="true" /></span>{benefit}</li>)}
          </ul>
        </div>
        <button type="button" className="group rounded-2xl border-2 border-navy bg-card p-5 text-left shadow-hard-sm transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <div className="rounded-xl border-2 border-dashed border-navy/40 bg-cream p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Prompt preview</p>
            <h3 className="mt-4 text-2xl font-extrabold text-navy">AI Landscaping Estimate Prompts</h3>
            <div className="mt-6 space-y-3" aria-hidden="true"><span className="block h-3 w-full rounded bg-navy/15" /><span className="block h-3 w-5/6 rounded bg-navy/15" /><span className="block h-3 w-3/4 rounded bg-navy/15" /></div>
            <p className="mt-7 text-base font-bold text-primary group-hover:underline">Preview the prompts</p>
          </div>
        </button>
      </div>
    </section>
  )
}
