import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="border-b-2 border-navy bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="#top" className="flex items-center" aria-label="More Business with AI — home">
          <Image
            src="/logo-horizontal.svg"
            alt="More Business with AI"
            width={260}
            height={87}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </a>
        <nav className="flex items-center gap-6" aria-label="Primary">
          <a
            href="#inside"
            className="hidden font-display text-sm uppercase tracking-wide text-navy hover:text-primary sm:block"
          >
            What&apos;s inside
          </a>
          <a
            href="#how"
            className="hidden font-display text-sm uppercase tracking-wide text-navy hover:text-primary sm:block"
          >
            How it works
          </a>
          <a
            href="#get"
            className="border-2 border-navy bg-secondary px-4 py-2 font-display text-sm uppercase tracking-wide text-secondary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get the prompts
          </a>
        </nav>
      </div>
    </header>
  )
}
