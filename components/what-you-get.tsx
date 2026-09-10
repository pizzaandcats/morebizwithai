import { Megaphone, MessageSquareReply, Star, Clock } from 'lucide-react'

const items = [
  {
    icon: Megaphone,
    title: 'Fill your pipeline',
    body: 'Generate a month of marketing, offers, and outreach that actually sound like you — in minutes, not weekends.',
  },
  {
    icon: MessageSquareReply,
    title: 'Reply like a pro',
    body: 'Follow-ups, quotes, and objection-handlers that close. Never stare at a blank reply box again.',
  },
  {
    icon: Star,
    title: 'Earn more 5-stars',
    body: 'Turn happy customers into reviews and referrals with warm, ready-to-send messages.',
  },
  {
    icon: Clock,
    title: 'Buy back your time',
    body: 'Draft SOPs, job posts, and newsletters in one pass so you can get back to running the business.',
  },
]

export function WhatYouGet() {
  return (
    <section id="inside" className="border-b-2 border-navy bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="font-display text-sm uppercase tracking-widest text-primary">
            What&apos;s inside the pack
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none text-navy text-balance sm:text-5xl">
            AI that pulls its weight
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-3 border-2 border-navy bg-card p-6 shadow-hard-sm"
            >
              <span className="flex size-12 items-center justify-center border-2 border-navy bg-primary text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl uppercase leading-none text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-navy/75">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
