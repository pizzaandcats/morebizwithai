import Image from 'next/image'
import { Zap } from 'lucide-react'
import { EmailSignup } from '@/components/email-signup'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-navy">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        {/* Left: headline + form */}
        <div className="relative z-10">
          <p className="mb-4 inline-block border-2 border-navy bg-secondary px-3 py-1 font-display text-xs uppercase tracking-widest text-secondary-foreground">
            For owners, operators &amp; solopreneurs
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.92] text-navy text-balance sm:text-6xl lg:text-7xl">
            More business.
            <br />
            <span className="text-primary">Less busywork.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-navy/80">
            The battle-tested AI prompts that help you win more customers, reply
            faster, and claw back hours every week. Drop your email and grab the
            pack — on us.
          </p>

          <div className="mt-7 max-w-md border-2 border-navy bg-card p-4 shadow-hard">
            <EmailSignup id="hero" buttonLabel="Download free" />
          </div>
        </div>

        {/* Right: collage */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            {/* Red backdrop card, rotated for the sticker look */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 border-2 border-navy bg-primary" />
            <div className="relative -rotate-2 border-2 border-navy bg-secondary p-2">
              <Image
                src="/hero-collage.png"
                alt="Business owner using AI to grow their business"
                width={520}
                height={520}
                priority
                className="h-auto w-[min(78vw,420px)] object-cover"
              />
            </div>
            {/* Robot sticker overlapping */}
            <div className="absolute -bottom-6 -left-6 w-24 rotate-[8deg] sm:w-28">
              <Image
                src="/sticker-robot.png"
                alt=""
                aria-hidden="true"
                width={140}
                height={140}
                className="h-auto w-full drop-shadow-[3px_3px_0_#073563]"
              />
            </div>
            <Zap
              className="absolute -right-3 -top-4 size-12 rotate-12 fill-primary text-navy"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
