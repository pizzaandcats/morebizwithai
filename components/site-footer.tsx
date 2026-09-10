import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream">
      <div className="site-container flex flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between">
        <Image src="/logo-horizontal.svg" alt="More Business with AI" width={240} height={80} className="h-9 w-auto rounded-lg bg-cream px-2 py-1" />
        <div className="flex flex-wrap items-center gap-5 text-sm"><a href="#" className="inline-flex items-center gap-2 hover:text-white"><span aria-hidden="true">▶</span>YouTube</a><a href="#" className="hover:text-white">Privacy</a><span className="text-cream/70">© {new Date().getFullYear()} More Business with AI</span></div>
      </div>
    </footer>
  )
}
