"use client"

import { motion } from "framer-motion"
import { Radar, Target, Shield, Zap, TrendingUp } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const steps = [
  {
    number: "01",
    titleKey: "howItWorks.step1.title",
    descriptionKey: "howItWorks.step1.desc",
    icon: Radar,
  },
  {
    number: "02",
    titleKey: "howItWorks.step2.title",
    descriptionKey: "howItWorks.step2.desc",
    icon: Target,
  },
  {
    number: "03",
    titleKey: "howItWorks.step3.title",
    descriptionKey: "howItWorks.step3.desc",
    icon: Shield,
  },
  {
    number: "04",
    titleKey: "howItWorks.step4.title",
    descriptionKey: "howItWorks.step4.desc",
    icon: Zap,
  },
  {
    number: "05",
    titleKey: "howItWorks.step5.title",
    descriptionKey: "howItWorks.step5.desc",
    icon: TrendingUp,
  },
]

export function HowBagayodaWorks() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            {t("howItWorks.title")}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative mx-auto w-[120px] h-[120px] mb-6">
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative w-full h-full rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm flex items-center justify-center group cursor-default"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <step.icon className="w-10 h-10 text-accent relative z-10 transition-transform duration-300 group-hover:scale-110" />

                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <span className="text-xs font-medium text-accent">{step.number}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="text-center px-2">
                    <h3 className="text-foreground font-medium text-base mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute top-[60px] -right-2 transform translate-x-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                        className="text-accent/50"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            <div className="absolute top-0 bottom-0 left-[30px] w-px bg-gradient-to-b from-border via-accent/30 to-border" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <span className="text-[10px] font-medium text-accent">{step.number}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-foreground font-medium text-base mb-1">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}