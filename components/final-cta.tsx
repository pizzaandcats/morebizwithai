import { EmailSignup } from '@/components/email-signup'

export function FinalCta() {
  return (
    <section id="get" className="border-b-2 border-navy bg-green-soft">
      <div className="site-container py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Ready to price your next job?</p>
          <h2 className="section-title">Get the two free prompts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-navy/80">Enter your email and get immediate access to the landscaping estimate prompts.</p>
          <div className="mx-auto mt-7 max-w-xl rounded-2xl border-2 border-navy bg-card p-5 shadow-hard"><EmailSignup id="footer-cta" /></div>
        </div>
      </div>
    </section>
  )
}
