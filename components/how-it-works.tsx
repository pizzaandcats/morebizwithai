const steps = [
  {
    n: '01',
    title: 'Drop your email',
    body: 'Tell us where to send it. The pack downloads instantly — no course, no upsell wall.',
  },
  {
    n: '02',
    title: 'Paste into any AI',
    body: 'Works in ChatGPT, Claude, Gemini, or Copilot. Swap the brackets for your details.',
  },
  {
    n: '03',
    title: 'Ship it today',
    body: 'Send the email, post the content, close the lead. Real output you can use before lunch.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-b-2 border-navy bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="font-display text-sm uppercase tracking-widest text-primary">
            Dead simple
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none text-cream text-balance sm:text-5xl">
            From email to output in 3 steps
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t-4 border-primary pt-4">
              <p className="font-display text-5xl leading-none text-primary">{s.n}</p>
              <h3 className="mt-3 font-display text-2xl uppercase leading-none text-cream">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
