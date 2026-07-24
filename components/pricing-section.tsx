"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Forex & Gold",
    monthlyPrice: 29,
    annualPrice: 199,
    description: "Designed for traders focused on traditional markets.",
    features: [
      "Forex Pairs",
      "Gold (XAUUSD)",
      "Adaptive Risk Management",
      "Dynamic Lot Sizing",
      "Cloud Licensing",
      "Updates Included",
      "Support Included",
    ],
    cta: "Get Access",
    highlighted: false,
    badge: null,
  },
  {
    name: "Synthetic Indices",
    monthlyPrice: 29,
    annualPrice: 199,
    description: "Built for traders focused on Deriv synthetic markets.",
    features: [
      "Boom & Crash",
      "Volatility Indices",
      "Jump Indices",
      "Step Index",
      "Adaptive Risk Management",
      "Cloud Licensing",
      "Updates Included",
      "Support Included",
    ],
    cta: "Get Access",
    highlighted: false,
    badge: "Most Popular",
  },
  {
    name: "Full Suite",
    monthlyPrice: 49,
    annualPrice: 299,
    description: "Complete access to the Bagayoda ecosystem.",
    features: [
      "Forex Pairs",
      "Gold (XAUUSD)",
      "All Synthetic Indices",
      "Adaptive Risk Management",
      "Dynamic Lot Sizing",
      "Intelligent Market Selection",
      "Cloud Licensing",
      "Updates Included",
      "Priority Support",
    ],
    cta: "Get Full Access",
    highlighted: true,
    badge: "Best Value",
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Choose Your Trading Environment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Select the version that matches the markets you trade.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative h-7 w-14 rounded-full transition-colors ${
              isAnnual ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
                isAnnual ? "left-8" : "left-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual
          </span>
          {isAnnual && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Save 20%
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className={`relative ${plan.highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Highlighted card outer glow */}
              {plan.highlighted && (
                <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary via-primary/50 to-primary/20 blur-sm" />
              )}
              
              <div
                className={`relative h-full overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-primary/50 shadow-lg shadow-primary/20"
                    : "border-border/50 hover:border-border"
                }`}
              >
                {/* Inner glow for highlighted */}
                {plan.highlighted && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                )}

                <div className="relative p-8">
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        plan.highlighted
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}

                  {/* Plan name */}
                  <h3 className={`${plan.badge ? "mt-4" : ""} text-xl font-bold text-foreground`}>
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight text-foreground">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.highlighted ? "bg-primary/20" : "bg-primary/10"
                          }`}
                        >
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href="#" className="mt-8 block">
                    <Button
                      className={`w-full py-6 text-base transition-all ${
                        plan.highlighted
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-6 py-3">
            <Shield className="h-5 w-5 text-primary" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">30-Day Money Back Guarantee</p>
              <p className="text-xs text-muted-foreground">
                Try Bagayoda risk-free. If the system is not the right fit for your trading style, contact us within 30 days.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Start Trading With Adaptive Intelligence
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join traders using Bagayoda across Forex, Gold and Synthetic Indices.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#">
              <Button className="bg-primary px-8 py-6 text-base text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
                Get Bagayoda
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#tools">
              <Button variant="outline" className="border-border/50 px-8 py-6 text-base hover:bg-muted">
                Explore Free Tools
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
