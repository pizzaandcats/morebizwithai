import { EmailSignup } from './email-signup'

export function ClosingCta() {
  return (
    <section
      data-cta-band="true"
      aria-labelledby="closing-heading"
      className="flex flex-col items-center gap-4 bg-navy px-10 pb-[50px] pt-[58px] text-center"
    >
      <h2
        id="closing-heading"
        className="font-display text-[clamp(28px,4vw,44px)] font-normal leading-none text-cream"
      >
        BUILD BETTER ESTIMATES
      </h2>
      <p className="m-0 max-w-[52ch] text-[18.5px] leading-[1.5] text-[#e4e7f5]">
        Use our free AI prompts to price your next job off your real labor, material, and overhead
        numbers.
      </p>
      <div className="mt-1 flex w-full max-w-[620px] flex-col items-center gap-4">
        <EmailSignup variant="dark" />
      </div>
    </section>
  )
}
