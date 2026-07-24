"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Download, TrendingUp, Coins, Layers, Shield } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

interface Plan {
  nameKey: string
  descKey: string
  monthlyPrice: number
  annualPrice: number
  icon: typeof Coins
  features: string[]
  popular: boolean
}

const plans: Plan[] = [
  {
    nameKey: "license.forexGold.name",
    descKey: "license.forexGold.desc",
    monthlyPrice: 29,
    annualPrice: 199,
    icon: Coins,
    features: [
      "license.forexGold.f1",
      "license.forexGold.f2",
      "license.forexGold.f3",
      "license.forexGold.f4",
      "license.forexGold.f5",
      "license.forexGold.f6",
    ],
    popular: false,
  },
  {
    nameKey: "license.synthetic.name",
    descKey: "license.synthetic.desc",
    monthlyPrice: 29,
    annualPrice: 199,
    icon: TrendingUp,
    features: [
      "license.synthetic.f1",
      "license.synthetic.f2",
      "license.synthetic.f3",
      "license.synthetic.f4",
      "license.synthetic.f5",
      "license.synthetic.f6",
    ],
    popular: true,
  },
  {
    nameKey: "license.fullSuite.name",
    descKey: "license.fullSuite.desc",
    monthlyPrice: 49,
    annualPrice: 299,
    icon: Layers,
    features: [
      "license.fullSuite.f1",
      "license.fullSuite.f2",
      "license.fullSuite.f3",
      "license.fullSuite.f4",
      "license.fullSuite.f5",
      "license.fullSuite.f6",
    ],
    popular: false,
  },
]

export function LicenseSection() {
  const { t } = useTranslation()
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  const getPrice = (monthlyPrice: number, annualPrice: number) => {
    return billingPeriod === "annual" ? annualPrice : monthlyPrice
  }

  const getPeriodLabel = () => {
    return billingPeriod === "monthly" ? t("license.perMonth") : t("license.perYear")
  }

  return (
    <section id="license" className="relative py-20 lg:py-24 bg-background dark:bg-black">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#FF6B00]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("license.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("license.subtitle")}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-xl bg-muted/50 border border-border">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("license.monthly")}
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all relative ${
                billingPeriod === "annual"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("license.annual")}
              <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-semibold bg-green-500 text-white rounded-full">
                -30%
              </span>
            </button>
          </div>

          {billingPeriod === "annual" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-green-500 font-medium"
            >
              {t("license.saveAnnually")}
            </motion.p>
          )}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.popular
                  ? "border-[#FF6B00] bg-[#FF6B00]/5"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF6B00] text-xs font-semibold text-white">
                  {t("license.mostPopular")}
                </div>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-[#FF6B00]/20" : "bg-muted"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-[#FF6B00]" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t(plan.nameKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(plan.descKey)}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">${getPrice(plan.monthlyPrice, plan.annualPrice)}</span>
                <span className="text-muted-foreground">{getPeriodLabel()}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00]/10 shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#FF6B00]" />
                    </div>
                    {t(featureKey)}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link href="/license" className="block">
                  <Button
                    className={`w-full h-12 font-medium rounded-lg ${
                      plan.popular
                        ? "bg-[#FF6B00] text-white hover:bg-[#CC5500]"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {t("license.generateLicense")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#downloads" className="block">
                  <Button
                    variant="ghost"
                    className="w-full h-10 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t("license.downloadSoftware")}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Risk-Free Trial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 rounded-2xl border border-green-500/20 bg-green-500/5 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-green-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t("license.riskFreeTitle")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("license.riskFreeDesc")}
              </p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm font-semibold text-green-500">
                {t("license.moneyBackGuarantee")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          {t("license.allLicensesInclude")}
        </motion.p>
      </div>
    </section>
  )
}
