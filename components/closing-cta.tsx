import { EmailSignup } from './email-signup'

export function ClosingCta() {
  return (
    <section
      data-cta-band="true"
      aria-labelledby="closing-heading"
      className="flex flex-col items-center gap-4 bg-navy px-5 pb-10 pt-11 text-center sm:px-10 sm:pb-[50px] sm:pt-[58px]"
    >
      <h2
        id="closing-heading"
        className="max-w-[12ch] font-display text-[40px] font-normal leading-[0.98] text-cream sm:max-w-none sm:text-[clamp(28px,4vw,44px)] sm:leading-none"
      >
        BUILD BETTER ESTIMATES
      </h2>
      <p className="m-0 max-w-[52ch] text-[20px] leading-[1.5] text-[#e4e7f5] sm:text-[18.5px]">
        Use our free AI prompts to price your next job off your real labor, material, and overhead
        numbers.
      </p>
      <div className="mt-1 flex w-full max-w-[620px] flex-col items-center gap-4">
        <EmailSignup variant="dark" />
      </div>
    </section>
  )
}
