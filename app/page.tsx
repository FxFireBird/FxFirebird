import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { LivePreviewSection } from "@/components/live-preview-section"
import { WhatIsBagayodaSection } from "@/components/what-is-bagayoda-section"
import { BagayodaSection } from "@/components/bagayoda-section"
import { ComparisonSection } from "@/components/comparison-section"
import { LicenseSection } from "@/components/license-section"
import { DownloadCenterSection } from "@/components/download-center-section"
import { FreeToolsSection } from "@/components/free-tools-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <LivePreviewSection />
      <WhatIsBagayodaSection />
      <BagayodaSection />
      <ComparisonSection />
      <LicenseSection />
      <DownloadCenterSection />
      <FreeToolsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
