import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="border-b-2 border-navy bg-background">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <a href="#top" aria-label="More Business with AI home"><Image src="/logo-horizontal.svg" alt="More Business with AI" width={260} height={87} priority className="h-10 w-auto sm:h-12" /></a>
        <a href="#get" className="rounded-xl border-2 border-navy bg-primary px-4 py-3 text-sm font-extrabold text-white shadow-hard-button transition-transform hover:-translate-y-0.5 sm:text-base">Get the Free Prompts</a>
      </div>
    </header>
  )
}
