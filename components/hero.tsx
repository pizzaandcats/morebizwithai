import Image from 'next/image'
import { EmailSignup } from './email-signup'

export function Hero() {
  return (
    <section
      id="signup"
      aria-labelledby="hero-heading"
      className="relative flex w-full items-end overflow-hidden border-b-2 border-navy bg-cream px-5 pb-8 pt-[340px] sm:aspect-[2.4/1] sm:min-h-[450px] sm:items-center sm:bg-transparent sm:px-10 sm:py-7 sm:pl-16 lg:pl-24"
    >
      <div data-hero-bg="true" className="absolute inset-x-0 top-0 h-[380px] sm:inset-0 sm:h-auto">
        <Image
          src="/images/hero-landscaper.png"
          alt="A landscaper kneeling to plant shrubs in a manicured yard, with open lawn on the left"
          fill
          priority
          sizes="100vw"
          className="origin-right scale-[1.5] object-cover object-right sm:scale-100 sm:object-center"
        />
      </div>

      <div className="relative box-border flex w-full max-w-[620px] flex-col gap-3.5 rounded-[18px] border-2 border-navy bg-cream px-5 pb-3 pt-6 sm:gap-[15px] sm:px-8 sm:pb-[20px] sm:pt-[30px]">
        <span className="hidden self-start rounded-full bg-green px-4 py-2 text-[11px] font-extrabold leading-[1.35] tracking-[0.08em] text-cream sm:inline-block sm:text-[12px] sm:tracking-[0.1em]">
          PROMPTS FOR LANDSCAPING BUSINESSES
        </span>

        <h1
          id="hero-heading"
          className="mb-0 mt-1 font-display text-[clamp(26px,7.2vw,30px)] font-normal uppercase leading-[0.98] tracking-[-0.01em] sm:mt-[6px] sm:text-balance sm:text-[clamp(30px,4.3vw,45px)] sm:leading-[0.9] sm:tracking-[-0.015em]"
        >
          <span className="sm:hidden">
            <span className="block whitespace-nowrap text-green">USE AI TO PRICE JOBS</span>
            <span className="block whitespace-nowrap text-navy">AND PROTECT YOUR PROFIT</span>
          </span>
          <span className="hidden sm:block">
            <span className="block whitespace-nowrap text-green">USE AI TO PRICE JOBS</span>
            <span className="block whitespace-nowrap text-navy">AND PROTECT YOUR PROFIT</span>
          </span>
        </h1>

        <p className="m-0 text-pretty text-[18px] leading-[1.5] text-ink sm:text-[17px]">
          Get <strong className="text-navy">two free prompts</strong> that use the customer&apos;s
          request, photos, and your real costs to help you build a better estimate.
        </p>

        <EmailSignup variant="light" />

        <p className="m-0 flex items-center gap-1.5 text-[13px] leading-[1.4] text-ink/70">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4 shrink-0 text-green"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
              clipRule="evenodd"
            />
          </svg>
          Works in the free version of ChatGPT or Claude.
        </p>
      </div>
    </section>
  )
}
