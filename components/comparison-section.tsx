"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

type FeatureStatus = "full" | "partial" | "none"

interface ComparisonFeature {
  nameKey: string
  manual: FeatureStatus
  traditional: FeatureStatus
  indicators: FeatureStatus
  bagayoda: FeatureStatus
}

const features: ComparisonFeature[] = [
  {
    nameKey: "comparison.riskControl",
    manual: "partial",
    traditional: "partial",
    indicators: "none",
    bagayoda: "full",
  },
  {
    nameKey: "comparison.cloudManagement",
    manual: "none",
    traditional: "none",
    indicators: "none",
    bagayoda: "full",
  },
  {
    nameKey: "comparison.multiMarket",
    manual: "partial",
    traditional: "partial",
    indicators: "partial",
    bagayoda: "full",
  },
  {
    nameKey: "comparison.licenseControl",
    manual: "none",
    traditional: "none",
    indicators: "none",
    bagayoda: "full",
  },
  {
    nameKey: "comparison.drawdownProtection",
    manual: "none",
    traditional: "partial",
    indicators: "none",
    bagayoda: "full",
  },
  {
    nameKey: "comparison.centralizedUpdates",
    manual: "none",
    traditional: "none",
    indicators: "none",
    bagayoda: "full",
  },
  {
    nameKey: "comparison.accountPermissions",
    manual: "none",
    traditional: "none",
    indicators: "none",
    bagayoda: "full",
  },
]

function StatusIcon({ status }: { status: FeatureStatus }) {
  if (status === "full") {
    return (
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
        <Check className="w-4 h-4 text-green-500" />
      </div>
    )
  }
  if (status === "partial") {
    return (
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20">
        <Minus className="w-4 h-4 text-yellow-500" />
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
      <X className="w-4 h-4 text-muted-foreground" />
    </div>
  )
}

export function ComparisonSection() {
  const { t } = useTranslation()

  const columns = [
    { key: "manual", labelKey: "comparison.manual" },
    { key: "traditional", labelKey: "comparison.traditional" },
    { key: "indicators", labelKey: "comparison.indicators" },
    { key: "bagayoda", labelKey: "comparison.bagayoda", highlight: true },
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-card dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("comparison.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t("comparison.subtitle")}
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block overflow-hidden rounded-2xl border border-border bg-background"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-foreground">
                    {t("comparison.feature")}
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`px-6 py-5 text-center text-sm font-semibold ${
                        col.highlight
                          ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                          : "text-foreground"
                      }`}
                    >
                      {t(col.labelKey)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.nameKey}
                    className={index !== features.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="px-6 py-4 text-sm text-foreground font-medium">
                      {t(feature.nameKey)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <StatusIcon status={feature.manual} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <StatusIcon status={feature.traditional} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <StatusIcon status={feature.indicators} />
                      </div>
                    </td>
                    <td className="px-6 py-4 bg-[#FF6B00]/5">
                      <div className="flex justify-center">
                        <StatusIcon status={feature.bagayoda} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-border bg-background p-4"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {t(feature.nameKey)}
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {columns.map((col) => (
                  <div key={col.key} className="flex flex-col items-center gap-2">
                    <StatusIcon
                      status={feature[col.key as keyof typeof feature] as FeatureStatus}
                    />
                    <span
                      className={`text-xs text-center ${
                        col.highlight ? "text-[#FF6B00] font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {t(col.labelKey).split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
              <Check className="w-3 h-3 text-green-500" />
            </div>
            <span>{t("comparison.fullSupport")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20">
              <Minus className="w-3 h-3 text-yellow-500" />
            </div>
            <span>{t("comparison.partialSupport")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted">
              <X className="w-3 h-3 text-muted-foreground" />
            </div>
            <span>{t("comparison.notAvailable")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
