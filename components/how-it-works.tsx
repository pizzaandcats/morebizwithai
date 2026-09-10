import { AlertTriangle } from 'lucide-react'

export function HowItWorks() {
  return (
    <section className="border-b-2 border-navy bg-cream">
      <div className="site-container py-10 md:py-14">
        <div className="flex max-w-4xl gap-4 rounded-2xl border-2 border-navy bg-card p-5 md:p-6">
          <AlertTriangle className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h2 className="text-xl font-extrabold text-navy">Review the estimate before you send it</h2>
            <p className="mt-2 text-base leading-relaxed text-navy/80 md:text-lg">AI can help you prepare an estimate, but it can make mistakes. Review the job details, measurements, costs, assumptions, and final price before sending a quote to a customer.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
