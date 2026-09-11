import { BrandLogo } from './brand-logo'

export function SiteFooter() {
  return (
    <footer
      data-footer="true"
      className="flex flex-wrap items-start gap-[22px] bg-green px-10 py-[26px]"
    >
      <div className="flex flex-col gap-[6px]">
        <BrandLogo size={24} onDark />
        <div className="text-[15px] text-cream">Practical AI help for small business owners.</div>
        <div className="text-[13.5px] text-cream">© 2026 More Business with AI</div>
      </div>

      <div
        data-footer-links="true"
        className="ml-0 flex w-full flex-col items-start justify-start gap-1 text-left text-[15px] font-bold sm:ml-auto sm:w-auto sm:flex-row sm:items-center sm:gap-6"
      >
        <a
          href="#video"
          className="inline-flex min-h-[44px] items-center gap-2 px-[2px] text-cream outline-none hover:text-cream hover:underline focus-visible:rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-cream"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-[17px] w-6 items-center justify-center rounded-[5px] bg-cream"
          >
            <span className="ml-[2px] h-0 w-0 border-y-[4.5px] border-l-[7px] border-y-transparent border-l-green" />
          </span>
          YouTube
        </a>
        <a
          href="#prompts"
          className="inline-flex min-h-[44px] items-center px-[2px] text-cream outline-none hover:text-cream hover:underline focus-visible:rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-cream"
        >
          The Prompts
        </a>
        <a
          href="#signup"
          className="inline-flex min-h-[44px] items-center px-[2px] text-cream outline-none hover:text-cream hover:underline focus-visible:rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-cream"
        >
          Privacy
        </a>
      </div>
    </footer>
  )
}
