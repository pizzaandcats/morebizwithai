type PromptCardProps = {
  badge: string
  title: string
  body: string
  preview: string
  previewLabel: string
}

function PromptCard({ badge, title, body, preview, previewLabel }: PromptCardProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[14px] border-2 border-navy bg-card">
      <div className="flex flex-col gap-[10px] bg-green px-5 py-[18px] sm:px-[26px] sm:py-[20px]">
        <span className="inline-block self-start rounded-full bg-cream px-4 py-2 text-[11px] font-extrabold leading-[1.35] tracking-[0.07em] text-navy sm:text-[12px] sm:tracking-[0.08em]">
          {badge}
        </span>
        <span className="font-display text-[23px] leading-[1.1] tracking-[0.01em] text-cream sm:text-[24px]">{title}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-[26px]">
        <p className="m-0 max-w-[46ch] text-[16px] leading-[1.5] text-ink sm:text-[17px] sm:leading-[1.55]">{body}</p>
        <a
          href="#signup"
          aria-label={previewLabel}
          className="group relative mt-auto block rounded-r-[8px] border-l-4 border-green bg-prompt px-4 py-4 pr-11 font-mono text-[14px] leading-[1.55] text-navy outline-none transition-colors hover:border-red hover:bg-[#eaf3ec] focus-visible:bg-[#eaf3ec] focus-visible:shadow-[0_0_0_3px_rgba(23,128,63,0.45)] sm:px-5 sm:py-[18px] sm:pr-[46px] sm:text-[16px] sm:leading-[1.6]"
        >
          {preview}
          <span
            aria-hidden="true"
            className="absolute right-[14px] top-[14px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-green font-sans text-[13px] font-extrabold text-cream"
          >
            ↗
          </span>
        </a>
      </div>
    </div>
  )
}

export function PromptsSection() {
  return (
    <section id="prompts" className="border-b-2 border-navy px-5 py-11 sm:px-10 sm:py-[60px]">
      <div className="mx-auto flex max-w-[1060px] flex-col gap-6">
        <h2 className="mb-2 mt-0 font-display text-[28px] font-normal leading-[1.08] tracking-[-0.01em] sm:mb-[14px] sm:text-balance sm:text-[clamp(25px,3.2vw,34px)] sm:leading-normal">
          <span className="block sm:inline">Two Prompts:</span>{' '}
          <span className="block sm:inline">Set up your business</span>{' '}
          <span className="my-1 block text-red sm:my-0 sm:inline">→</span>{' '}
          <span className="block sm:inline">Price every new job</span>
        </h2>

        <div
          data-prompt-row="true"
          className="grid grid-cols-1 gap-9 md:grid-cols-2"
        >
          <PromptCard
            badge="PROMPT 1 · DO THIS ONCE"
            title="TEACH AI YOUR BUSINESS"
            body="Tell AI about your labor costs, rates, expenses, markup, service area, and how you normally price jobs. Save your answers so you do not have to start over next time."
            previewLabel="Preview of Prompt 1 — get the full prompt by signing up"
            preview="First, ask me about my landscaping business, including what my crew costs, what I charge, my expenses, material markup, and how I normally price jobs..."
          />

          <PromptCard
            badge="PROMPT 2 · USE FOR EVERY JOB"
            title="PRICE THE JOB"
            body="Add the customer's request and photos. AI helps you find missing details, estimate labor and materials, check your numbers, and write a professional quote."
            previewLabel="Preview of Prompt 2 — get the full prompt by signing up"
            preview="Review this customer request and the attached photos. Tell me what information is missing before you estimate the labor, materials, costs, and final price..."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-3 text-center sm:flex-row sm:gap-[18px] sm:pt-4">
          <div className="max-w-[28ch] text-balance font-display text-[21px] leading-[1.2] tracking-[0.01em] text-navy sm:max-w-none sm:text-[22px]">
            That&apos;s just a peek. Get the complete prompt free.
          </div>
          <a
            href="#signup"
            className="inline-flex h-[52px] items-center whitespace-nowrap rounded-[26px] border-2 border-navy bg-red px-6 font-display text-[18px] tracking-[0.02em] text-cream transition-colors hover:bg-navy hover:text-cream"
          >
            GET THE PROMPTS
          </a>
        </div>
      </div>
    </section>
  )
}
