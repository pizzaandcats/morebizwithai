import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <span className="inline-flex border-2 border-cream/20 bg-cream px-4 py-3">
            <Image
              src="/logo-horizontal.svg"
              alt="More Business with AI"
              width={240}
              height={80}
              className="h-8 w-auto"
            />
          </span>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
            <a href="#inside" className="text-sm hover:text-primary">
              What&apos;s inside
            </a>
            <a href="#how" className="text-sm hover:text-primary">
              How it works
            </a>
            <a href="#get" className="text-sm hover:text-primary">
              Get the prompts
            </a>
          </nav>
        </div>
      </div>
      <div className="overflow-hidden border-t-2 border-cream/20 py-6">
        <p className="text-center font-display text-[13vw] uppercase leading-none text-primary md:text-[8rem]">
          Grow with AI
        </p>
      </div>
      <div className="border-t-2 border-cream/20 py-4">
        <p className="px-4 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} More Business with AI. Free prompts, zero fluff.
        </p>
      </div>
    </footer>
  )
}
