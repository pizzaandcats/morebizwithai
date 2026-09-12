import Image from 'next/image'
import { EmailSignup } from './email-signup'

export function Hero() {
  return (
    <section
      id="signup"
      aria-labelledby="hero-heading"
      className="relative flex w-full items-end overflow-hidden border-b-2 border-navy bg-cream px-5 pb-8 pt-[240px] sm:aspect-[2.4/1] sm:min-h-[450px] sm:items-center sm:bg-transparent sm:px-10 sm:py-7 sm:pl-16 lg:pl-24"
    >
      <div data-hero-bg="true" className="absolute inset-x-0 top-0 h-[300px] sm:inset-0 sm:h-auto">
        <Image
          src="/images/hero-landscaper.png"
          alt="A landscaper kneeling to plant shrubs in a manicured yard, with open lawn on the left"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-center"
        />
      </div>

      <div className="relative box-border flex w-full max-w-[620px] flex-col gap-3.5 rounded-[18px] border-2 border-navy bg-cream px-5 pb-[18px] pt-6 sm:gap-[15px] sm:px-8 sm:pb-[20px] sm:pt-[30px]">
        <span className="inline-block self-start rounded-full bg-green px-4 py-2 text-[11px] font-extrabold leading-[1.35] tracking-[0.08em] text-cream sm:text-[12px] sm:tracking-[0.1em]">
          PROMPTS FOR LANDSCAPING BUSINESSES
        </span>

        <h1
          id="hero-heading"
          className="mb-0 mt-1 font-display text-[clamp(38px,10.5vw,44px)] font-normal uppercase leading-[0.98] tracking-normal sm:mt-[6px] sm:text-balance sm:text-[clamp(30px,4.3vw,45px)] sm:leading-[0.9] sm:tracking-[-0.015em]"
        >
          <span className="block text-green sm:whitespace-nowrap">USE AI TO PRICE JOBS</span>
          <span className="block text-navy sm:whitespace-nowrap">AND PROTECT YOUR PROFIT</span>
        </h1>

        <p className="m-0 text-pretty text-[16px] leading-[1.45] text-ink sm:text-[17px] sm:leading-[1.5]">
          Get <strong className="text-navy">two free prompts</strong> that use the customer&apos;s
          request, photos, and your real costs to help you build a better estimate.
        </p>

        <EmailSignup variant="light" />
      </div>
    </section>
  )
}
