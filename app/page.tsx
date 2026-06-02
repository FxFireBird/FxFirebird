import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LivePreviewSection } from "@/components/live-preview-section"
import { RiskPhilosophySection } from "@/components/risk-philosophy-section"
import { HowBagayodaWorks } from "@/components/how-bagayoda-works"
import { StatsSection } from "@/components/stats-section"
import { TrustIndicators } from "@/components/trust-indicators"
import { ComparisonSection } from "@/components/comparison-section"
import { BagayodaSection } from "@/components/bagayoda-section"
import { FreeToolsSection } from "@/components/free-tools-section"
import { WhyFxFirebird } from "@/components/why-fxfirebird"
import { TradingEnvironment } from "@/components/trading-environment"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LivePreviewSection />
      <RiskPhilosophySection />
      <HowBagayodaWorks />
      <StatsSection />
      <TrustIndicators />
      <ComparisonSection />
      <BagayodaSection />
      <FreeToolsSection />
      <WhyFxFirebird />
      <TradingEnvironment />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
