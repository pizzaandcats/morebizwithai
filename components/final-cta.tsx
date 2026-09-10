import { Zap } from 'lucide-react'
import { EmailSignup } from '@/components/email-signup'

export function FinalCta() {
  return (
    <section id="get" className="border-b-2 border-navy bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
        <Zap className="mx-auto size-10 fill-current" aria-hidden="true" />
        <h2 className="mt-4 font-display text-5xl uppercase leading-[0.95] text-balance sm:text-6xl">
          Get the free prompt pack
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
          Ten prompts that put AI to work for your business today. Enter your
          email and the download starts immediately.
        </p>
        <div className="mx-auto mt-8 max-w-md border-2 border-navy bg-card p-4 shadow-hard">
          <EmailSignup id="footer-cta" buttonLabel="Send it to me" />
        </div>
      </div>
    </section>
  )
}
