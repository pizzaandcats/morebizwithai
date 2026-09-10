import Image from 'next/image'
import { EmailSignup } from '@/components/email-signup'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-navy md:min-h-[720px]"
    >
      {/* Desktop: full-bleed photograph, anchored right so the landscaper stays visible */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/landscaper-hero.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Approved stacked logo — centered across the ENTIRE hero, near the top.
          Thin cream edge separates it from the photo; a restrained navy shadow
          lifts it. Red-and-navy artwork colors are preserved. */}
      <div className="absolute inset-x-0 top-6 z-20 flex justify-center md:top-12">
        <Image
          src="/logo-primary.svg"
          alt="More Business with AI"
          width={180}
          height={150}
          priority
          className="h-[120px] w-auto sm:h-[144px] md:h-[168px]"
          style={{
            filter:
              'drop-shadow(2px 0 0 #FFFBF0) drop-shadow(-2px 0 0 #FFFBF0) drop-shadow(0 2px 0 #FFFBF0) drop-shadow(0 -2px 0 #FFFBF0) drop-shadow(0 3px 8px rgba(7, 53, 99, 0.45))',
          }}
        />
      </div>

      {/* Mobile: dedicated photo area cropped to the landscaper on the right */}
      <div className="relative h-[340px] w-full md:hidden">
        <Image
          src="/landscaper-hero.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '92% center' }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 pb-10 md:pb-16 md:pt-[248px]">
        {/* Offer panel — overlaps the bottom of the mobile photo; left column on desktop */}
        <div className="relative mx-auto -mt-8 w-full max-w-[560px] md:mx-0 md:mt-0">
          <div
            className="w-full rounded-[18px] border-[3px] border-navy p-6 shadow-[4px_4px_0_0_#073563] sm:p-8 md:shadow-[7px_7px_0_0_#073563]"
            style={{ backgroundColor: '#FFFBF0' }}
          >
            <p className="mb-4 inline-block border-2 border-navy bg-secondary px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest text-secondary-foreground">
              Free Prompts for Landscapers
            </p>

            <h1 className="font-sans text-4xl font-black uppercase leading-[0.95] text-navy text-balance sm:text-5xl">
              Price Landscaping Jobs With AI
            </h1>

            <p className="mt-4 text-lg font-medium leading-relaxed text-navy">
              Get two free prompts that help you turn customer requests and
              photos into better job estimates.
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
      </div>
    </section>
  )
}
