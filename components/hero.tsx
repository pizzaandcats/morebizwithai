import Image from 'next/image'
import { EmailSignup } from '@/components/email-signup'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[560px] items-center overflow-hidden border-b-2 border-navy md:min-h-[690px]"
    >
      {/* Full-bleed photograph, anchored right so the landscaper stays visible */}
      <Image
        src="/landscaper-hero.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-right"
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 py-10 md:py-14">
        {/* Single raised cream panel */}
        <div
          className="w-full max-w-[560px] rounded-[18px] border-[3px] border-navy p-6 shadow-[4px_4px_0_0_#073563] sm:p-8 md:shadow-[7px_7px_0_0_#073563]"
          style={{ backgroundColor: 'rgba(255, 251, 240, 0.96)' }}
        >
          {/* Approved stacked logo */}
          <Image
            src="/logo-primary.svg"
            alt="More Business with AI"
            width={180}
            height={150}
            priority
            className="mx-auto mb-6 h-20 w-auto sm:h-24 md:h-28"
          />

          <p className="mb-4 inline-block border-2 border-navy bg-secondary px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest text-secondary-foreground">
            Free Prompts for Landscapers
          </p>

          <h1 className="font-sans text-4xl font-black uppercase leading-[0.95] text-navy text-balance sm:text-5xl">
            Price Landscaping Jobs With AI
          </h1>

          <p className="mt-4 text-lg font-medium leading-relaxed text-navy">
            Get two free prompts that help you turn customer requests and photos
            into better job estimates.
          </p>

          <p className="mt-3 text-base leading-relaxed text-navy/75">
            Use your real labor costs, rates, expenses, and local pricing to
            build an estimate and see whether the job actually makes money.
          </p>

          {/* Simple navy divider before the form */}
          <hr className="my-6 border-t-2 border-navy/70" />

          <EmailSignup id="hero" buttonLabel="Get the Free Prompts" />
        </div>
      </div>
    </section>
  )
}
