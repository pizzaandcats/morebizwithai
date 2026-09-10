import { Zap } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center font-display text-xs uppercase tracking-widest sm:text-sm">
        <Zap className="size-4 shrink-0 fill-current" aria-hidden="true" />
        <span>Free download — 10 AI prompts to grow your business</span>
        <Zap className="size-4 shrink-0 fill-current" aria-hidden="true" />
      </div>
    </div>
  )
}
