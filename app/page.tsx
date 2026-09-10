import { AnnouncementBar } from '@/components/announcement-bar'
import { Hero } from '@/components/hero'
import { WhatYouGet } from '@/components/what-you-get'
import { PromptSamples } from '@/components/prompt-samples'
import { HowItWorks } from '@/components/how-it-works'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      {/* AnnouncementBar hidden for now — kept available for future use */}
      {/* <AnnouncementBar /> */}
      {/* Logo now lives inside the hero panel, so the separate header is not rendered */}
      <main>
        <Hero />
        <WhatYouGet />
        <PromptSamples />
        <HowItWorks />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
