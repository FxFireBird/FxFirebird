"use client"

import { motion } from "framer-motion"
import { Server, Terminal, Wallet, ArrowDown, Shield } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function WhatIsBagayodaSection() {
  const { t } = useTranslation()

  const bagayodaFeatures = [
    "Risk allocation",
    "Market activation",
    "Position sizing",
    "Drawdown protection",
    "Execution permissions",
  ]

  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-background dark:bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B00]/5 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("whatIsBagayoda.title")}
          </h2>

          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t("whatIsBagayoda.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground font-medium">
                {t("whatIsBagayoda.title")} {t("nav.bagayoda")}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t("whatIsBagayoda.subtitle")}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t("whatIsBagayoda.step3.desc")}
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm font-semibold text-[#FF6B00] mb-4 uppercase tracking-wide">
                {t("bagayodaFeatures.title")}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bagayodaFeatures.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#FF6B00]/10">
                      <Shield className="h-3.5 w-3.5 text-[#FF6B00]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-border bg-card p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-[100px]" />

              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="w-full max-w-xs">
                  <div className="flex flex-col items-center p-6 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                    <div className="w-14 h-14 rounded-xl bg-[#FF6B00]/20 flex items-center justify-center mb-4">
                      <Server className="w-7 h-7 text-[#FF6B00]" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {t("whatIsBagayoda.step1.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("whatIsBagayoda.step1.desc")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center py-2">
                  <div className="w-px h-8 bg-gradient-to-b from-[#FF6B00] to-[#FF6B00]/30" />
                  <div className="p-2 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                    <ArrowDown className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <div className="w-px h-8 bg-gradient-to-b from-[#FF6B00]/30 to-[#FF6B00]" />
                </div>

                <div className="w-full max-w-xs">
                  <div className="flex flex-col items-center p-6 rounded-xl bg-muted/50 border border-border">
                    <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
                      <Terminal className="w-7 h-7 text-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {t("whatIsBagayoda.step2.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("whatIsBagayoda.step2.desc")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center py-2">
                  <div className="w-px h-8 bg-gradient-to-b from-border to-green-500/30" />
                  <div className="p-2 rounded-full bg-green-500/10 border border-green-500/20">
                    <ArrowDown className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="w-px h-8 bg-gradient-to-b from-green-500/30 to-green-500" />
                </div>

                <div className="w-full max-w-xs">
                  <div className="flex flex-col items-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                    <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                      <Wallet className="w-7 h-7 text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {t("whatIsBagayoda.step3.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("whatIsBagayoda.step3.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}