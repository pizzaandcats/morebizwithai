import { ArrowRight } from 'lucide-react'

const samples = [
  {
    tag: 'Marketing',
    title: 'The 30-day content calendar',
    body: 'Hand it your business type and audience — get a month of posts with hooks, captions, and CTAs ready to schedule.',
  },
  {
    tag: 'Sales',
    title: 'The follow-up that closes',
    body: 'A 3-email sequence for the lead who went quiet after a quote. Friendly, short, and built to get a reply.',
  },
  {
    tag: 'Operations',
    title: 'The 10-minute SOP',
    body: 'Turn any repeatable task into a clear step-by-step process a new hire can follow without asking you twice.',
  },
]

export function PromptSamples() {
  return (
    <section className="border-b-2 border-navy bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-display text-sm uppercase tracking-widest text-primary">
              A taste of the pack
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none text-navy text-balance sm:text-5xl">
              Steal these prompts
            </h2>
          </div>
          <a
            href="#get"
            className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wide text-primary hover:underline"
          >
            Get all 10 free <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {samples.map((s) => (
            <article
              key={s.title}
              className="flex flex-col border-2 border-navy bg-card p-6 shadow-hard-sm"
            >
              <span className="mb-4 inline-block w-fit border-2 border-navy bg-secondary px-2 py-1 font-display text-xs uppercase tracking-widest text-secondary-foreground">
                {s.tag}
              </span>
              <h3 className="font-display text-2xl uppercase leading-none text-navy text-balance">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">{s.body}</p>
              <a
                href="#get"
                className="mt-5 inline-flex items-center gap-1 font-display text-sm uppercase tracking-wide text-primary hover:underline"
              >
                Unlock it <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
