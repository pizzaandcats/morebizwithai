import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-6">
        <a href="#top" className="flex items-center" aria-label="More Business with AI — home">
          <Image
            src="/logo-primary.svg"
            alt="More Business with AI"
            width={180}
            height={150}
            priority
            className="h-16 w-auto sm:h-[66px]"
          />
        </a>
      </div>
    </header>
  )
}
