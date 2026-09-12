import { IndustryBar } from '@/components/industry-bar'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { PromptsSection } from '@/components/prompts-section'
import { VideoSection } from '@/components/video-section'
import { MobileTruckPhoto, PhotoStrip } from '@/components/photo-strip'
import { ClosingCta } from '@/components/closing-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-full bg-cream font-sans text-navy">
      <IndustryBar />
      <header>
        <SiteNav />
      </header>
      <main>
        <Hero />
        <PromptsSection />
        <MobileTruckPhoto />
        <VideoSection />
        <PhotoStrip />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
