"use client"

import { motion } from "framer-motion"
import { Calculator, Settings2, TrendingUp, Copy, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function FreeToolsSection() {
  const { t } = useTranslation()

  const tools = [
    {
      icon: Calculator,
      title: t("freeTools.riskCalculator.title"),
      description: t("freeTools.riskCalculator.desc"),
      href: "/tools/risk-calculator",
    },
    {
      icon: Settings2,
      title: t("freeTools.eas.title"),
      description: t("freeTools.eas.desc"),
      href: "/tools/eas",
    },
    {
      icon: TrendingUp,
      title: t("freeTools.tradeManager.title"),
      description: t("freeTools.tradeManager.desc"),
      href: "/tools/trade-manager",
    },
    {
      icon: Copy,
      title: t("freeTools.tradeCopier.title"),
      description: t("freeTools.tradeCopier.desc"),
      href: "/tools/trade-copier",
    },
  ]
  return (
    <section id="tools" className="relative py-20 lg:py-24 bg-card dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("freeTools.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t("freeTools.subtitle")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link
                href={tool.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:border-[#FF6B00]/20"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-[#FF6B00]/10">
                  <tool.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-[#FF6B00]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{tool.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                <div className="mt-4 flex items-center text-sm text-[#FF6B00] opacity-0 transition-opacity group-hover:opacity-100">
                  <span>{t("freeTools.accessTool")}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
