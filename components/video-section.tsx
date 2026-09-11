import { LANDSCAPING_ESTIMATES_YOUTUBE_URL } from '@/lib/config'
import { YouTubeEmbed } from './youtube-embed'

export function VideoSection() {
  return (
    <section id="video" className="border-b-2 border-navy px-5 py-11 sm:px-10 sm:py-[60px]">
      <div className="mx-auto flex max-w-[860px] flex-col gap-5">
        <h2 className="m-0 text-balance font-display text-[27px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[clamp(24px,3.1vw,32px)] sm:leading-normal">
          Video: How to Use AI to Price Landscaping Jobs
        </h2>
        <YouTubeEmbed
          url={LANDSCAPING_ESTIMATES_YOUTUBE_URL}
          title="How to Use AI to Price Landscaping Jobs"
        />
      </div>
    </section>
  )
}
