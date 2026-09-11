import { BrandLogo } from './brand-logo'

export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      className="flex flex-wrap items-center gap-6 border-b-2 border-navy py-[18px] pl-14 pr-10"
    >
      <BrandLogo size={26} />
      <div className="ml-auto flex items-center gap-[26px] text-[16px] font-bold">
        <a
          href="#prompts"
          data-nav-link="true"
          className="inline-flex min-h-[44px] items-center px-1 text-navy"
        >
          The Prompts
        </a>
        <a
          href="#video"
          data-nav-link="true"
          className="inline-flex min-h-[44px] items-center px-1 text-navy"
        >
          How to Use AI
        </a>
        <a
          href="#signup"
          className="inline-flex h-11 items-center rounded-[22px] bg-navy px-[22px] font-display text-[17px] tracking-[0.03em] text-cream transition-colors hover:bg-green hover:text-cream"
        >
          GET THE PROMPTS
        </a>
      </div>
    </nav>
  )
}
