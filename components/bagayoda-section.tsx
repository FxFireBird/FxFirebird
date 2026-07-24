"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Globe, Cloud, TrendingDown } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const features = [
  {
    icon: ShieldCheck,
    titleKey: "bagayodaFeatures.adaptiveRisk.title",
    descriptionKey: "bagayodaFeatures.adaptiveRisk.desc",
  },
  {
    icon: Globe,
    titleKey: "bagayodaFeatures.multiMarket.title",
    descriptionKey: "bagayodaFeatures.multiMarket.desc",
  },
  {
    icon: Cloud,
    titleKey: "bagayodaFeatures.cloudLicensing.title",
    descriptionKey: "bagayodaFeatures.cloudLicensing.desc",
  },
  {
    icon: TrendingDown,
    titleKey: "bagayodaFeatures.drawdownProtection.title",
    descriptionKey: "bagayodaFeatures.drawdownProtection.desc",
  },
]

export function BagayodaSection() {
  const { t } = useTranslation()

  return (
    <section id="bagayoda" className="relative py-20 lg:py-24 bg-background dark:bg-black">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#FF6B00]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("bagayodaFeatures.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t("bagayodaFeatures.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-[#FF6B00]/20"
            >
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B00]/10">
                  <feature.icon className="h-6 w-6 text-[#FF6B00]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{t(feature.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(feature.descriptionKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}