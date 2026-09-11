import { getYouTubeEmbedUrl } from '@/lib/youtube'

type YouTubeEmbedProps = {
  url: string | undefined | null
  title: string
}

export function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  const embedUrl = getYouTubeEmbedUrl(url)

  return (
    <div className="relative aspect-video overflow-hidden rounded-[12px] border-2 border-navy">
      {embedUrl ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-prompt px-6 text-center">
          <span className="font-display text-[18px] text-navy">Video coming soon</span>
          <span className="max-w-[42ch] text-[14px] leading-[1.5] text-ink">
            Set <code className="font-mono text-[13px]">LANDSCAPING_ESTIMATES_YOUTUBE_URL</code> in{' '}
            <code className="font-mono text-[13px]">lib/config.ts</code> to a valid YouTube URL to
            embed the walkthrough here.
          </span>
        </div>
      )}
    </div>
  )
}
