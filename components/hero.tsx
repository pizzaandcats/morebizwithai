import { EmailSignup } from '@/components/email-signup'

export function Hero() {
  return (
    <section id="top" className="border-b-2 border-navy bg-background">
      <div className="site-container grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
        <div>
          <p className="eyebrow">Free prompts for landscapers</p>
          <h1 className="mt-5 font-display text-[2.75rem] leading-[0.98] text-navy text-balance sm:text-6xl lg:text-7xl">
            Price Landscaping Jobs <span className="text-primary">With AI</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-navy">
            Get two free prompts that help you turn customer requests and photos into better job estimates.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy/80">
            Use your real labor costs, rates, expenses, and local pricing to build an estimate and see whether the job actually makes money.
          </p>
          <div className="mt-7 max-w-xl rounded-2xl border-2 border-navy bg-card p-5 shadow-hard">
            <EmailSignup id="hero" />
          </div>
        </div>

        <div className="order-first lg:order-none">
          <div className="overflow-hidden rounded-2xl border-2 border-navy bg-green-soft shadow-hard">
            <div className="flex aspect-[4/3] flex-col justify-end bg-[linear-gradient(145deg,#dcebdc_0%,#fffdf5_52%,#cbdccf_100%)] p-6">
              <div className="max-w-sm rounded-xl border-2 border-navy bg-cream/95 p-5">
                <p className="font-bold text-navy">Landscaping hero photo</p>
                <p className="mt-1 text-base leading-relaxed text-navy/75">
                  A small landscaping crew pricing a real residential job beside their work truck.
                </p>
                <p className="mt-3 text-sm font-semibold text-green">/images/landscaping/estimates-hero.jpg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
