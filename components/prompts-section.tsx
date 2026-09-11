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
      <div className="flex flex-col gap-[10px] bg-green px-[26px] py-[20px]">
        <span className="inline-flex h-[30px] items-center self-start rounded-[15px] bg-cream px-4 text-[12px] font-extrabold tracking-[0.08em] text-navy">
          {badge}
        </span>
        <span className="font-display text-[24px] tracking-[0.01em] text-cream">{title}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-[26px]">
        <p className="m-0 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{body}</p>
        <a
          href="#signup"
          aria-label={previewLabel}
          className="group relative mt-auto block rounded-r-[8px] border-l-4 border-green bg-prompt px-5 py-[18px] pr-[46px] font-mono text-[16px] leading-[1.6] text-navy outline-none transition-colors hover:border-red hover:bg-[#eaf3ec] focus-visible:bg-[#eaf3ec] focus-visible:shadow-[0_0_0_3px_rgba(23,128,63,0.45)]"
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
    <section id="prompts" className="border-b-2 border-navy px-6 py-[60px] sm:px-10">
      <div className="mx-auto flex max-w-[1060px] flex-col gap-6">
        <h2 className="mb-[14px] mt-0 text-balance font-display text-[clamp(25px,3.2vw,34px)] font-normal tracking-[-0.01em]">
          Two Prompts: Set up your business <span className="text-red">→</span> Price every new job
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

        <div className="flex flex-wrap items-center justify-center gap-[18px] rounded-[14px] border-2 border-navy bg-card p-6 text-center">
          <div className="text-balance font-display text-[22px] tracking-[0.01em] text-navy">
            That&apos;s just a peek. Get the complete prompt free.
          </div>
          <a
            href="#signup"
            className="inline-flex h-[52px] items-center whitespace-nowrap rounded-[26px] bg-red px-6 font-display text-[18px] tracking-[0.02em] text-cream transition-colors hover:bg-navy hover:text-cream"
          >
            GET THE PROMPTS
          </a>
        </div>
      </div>
    </section>
  )
}
