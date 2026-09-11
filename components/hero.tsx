import Image from 'next/image'
import { EmailSignup } from './email-signup'

export function Hero() {
  return (
    <section
      id="signup"
      aria-labelledby="hero-heading"
      className="relative flex w-full items-center overflow-hidden border-b-2 border-navy px-5 py-6 sm:aspect-[2.4/1] sm:min-h-[450px] sm:px-10 sm:py-7 sm:pl-16 lg:pl-24"
    >
      <div data-hero-bg="true" className="absolute inset-0">
        <Image
          src="/images/hero-landscaper.png"
          alt="A landscaper kneeling to plant shrubs in a manicured yard, with open lawn on the left"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[67%_center] sm:object-center"
        />
      </div>

      <div className="relative box-border flex w-full max-w-[620px] flex-col gap-3.5 rounded-[18px] border-2 border-navy bg-cream px-5 pb-[18px] pt-6 sm:gap-[15px] sm:px-8 sm:pb-[20px] sm:pt-[30px]">
        <span className="inline-flex min-h-[30px] items-center self-start rounded-[15px] bg-green px-3.5 py-1.5 text-[10px] font-extrabold leading-[1.25] tracking-[0.08em] text-cream sm:px-4 sm:py-0 sm:text-[12px] sm:tracking-[0.1em]">
          PROMPTS FOR LANDSCAPING BUSINESSES
        </span>

        <h1
          id="hero-heading"
          className="mb-0 mt-1 text-balance font-display text-[clamp(28px,8.6vw,36px)] font-normal uppercase leading-[0.92] tracking-[-0.015em] sm:mt-[6px] sm:text-[clamp(30px,4.3vw,45px)] sm:leading-[0.9]"
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
