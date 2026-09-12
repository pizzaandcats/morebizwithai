import { BrandLogo } from './brand-logo'

export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-b-2 border-navy px-5 py-4 sm:justify-start sm:py-[18px] sm:pl-14 sm:pr-10"
    >
      <BrandLogo size={32} />
      <div className="hidden items-center justify-center gap-[26px] text-[16px] font-bold sm:ml-auto sm:flex sm:w-auto">
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
          className="inline-flex h-11 items-center rounded-[22px] border-2 border-navy bg-primary px-5 font-display text-[15px] tracking-[0.03em] text-primary-foreground transition-colors hover:bg-primary-hover hover:text-primary-foreground sm:px-[22px] sm:text-[17px]"
        >
          GET THE PROMPTS
        </a>
      </div>
    </nav>
  )
}
