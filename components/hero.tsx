import Image from 'next/image'
import { EmailSignup } from './email-signup'

export function Hero() {
  return (
    <section
      id="signup"
      aria-labelledby="hero-heading"
      className="relative flex aspect-[2.4/1] min-h-[450px] w-full items-center overflow-hidden border-b-2 border-navy px-6 py-7 sm:px-10"
    >
      <div data-hero-bg="true" className="absolute inset-0">
        <Image
          src="/images/hero-landscaper.png"
          alt="A landscaper kneeling to plant shrubs in a manicured yard, with open lawn on the left"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative box-border flex w-full max-w-[620px] flex-col gap-[15px] rounded-[18px] border-2 border-navy bg-cream px-8 py-[30px]">
        <span className="inline-flex h-[30px] shrink-0 items-center self-start rounded-[15px] bg-green px-4 text-[12px] font-extrabold tracking-[0.1em] text-cream">
          PROMPTS FOR LANDSCAPING BUSINESSES
        </span>

        <h1
          id="hero-heading"
          className="mb-0 mt-[6px] text-balance font-display text-[clamp(26px,6.6vw,30px)] font-normal uppercase leading-[0.9] tracking-[-0.015em] sm:text-[clamp(30px,4.3vw,45px)]"
        >
          <span className="block text-green sm:whitespace-nowrap">USE AI TO PRICE JOBS</span>
          <span className="block text-navy sm:whitespace-nowrap">AND PROTECT YOUR PROFIT</span>
        </h1>

        <p className="m-0 text-pretty text-[17px] leading-[1.5] text-ink">
          Get <strong className="text-navy">two free prompts</strong> that use the customer&apos;s
          request, photos, and your real costs to help you build a better estimate.
        </p>

        <EmailSignup variant="light" />
      </div>
    </section>
  )
}
