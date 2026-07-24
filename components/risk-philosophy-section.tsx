"use client"

import { motion } from "framer-motion"
import { Shield, Target, TrendingUp } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const cards = [
  {
    icon: Shield,
    titleKey: "riskPhilosophy.adaptiveExposure.title",
    descriptionKey: "riskPhilosophy.adaptiveExposure.desc",
  },
  {
    icon: Target,
    titleKey: "riskPhilosophy.marketIntelligence.title",
    descriptionKey: "riskPhilosophy.marketIntelligence.desc",
  },
  {
    icon: TrendingUp,
    titleKey: "riskPhilosophy.capitalPreservation.title",
    descriptionKey: "riskPhilosophy.capitalPreservation.desc",
  },
]

export function RiskPhilosophySection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
            {t("riskPhilosophy.trusted")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t("riskPhilosophy.title")}
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto text-balance">
            {t("riskPhilosophy.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-orange-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-neutral-900/90">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center">
                    <card.icon className="w-7 h-7 text-orange-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(card.titleKey)}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {t(card.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 rounded-2xl blur-xl" />

          <div className="relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-10 text-center">
            <div className="absolute top-4 left-6 text-6xl text-orange-500/20 font-serif leading-none">
              &ldquo;
            </div>

            <blockquote className="relative">
              <p className="text-2xl md:text-3xl font-medium text-white mb-4 italic">
                {t("riskPhilosophy.quote")}
              </p>
              <footer className="text-sm text-neutral-500">
                {t("riskPhilosophy.quoteFooter")}
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}