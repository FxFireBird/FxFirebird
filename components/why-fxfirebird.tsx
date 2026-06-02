"use client"

import { motion } from "framer-motion"
import { Server, Shield, Layers } from "lucide-react"

const reasons = [
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Built on enterprise-grade infrastructure designed for reliability, speed, and scale. Our systems are engineered to handle the demands of professional trading.",
    features: ["99.9% Uptime", "Low Latency", "Global Servers"],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Advanced risk management algorithms that adapt to market conditions in real-time. Protect your capital with intelligent position sizing and dynamic stop-loss systems.",
    features: ["Adaptive Sizing", "Dynamic Stops", "Drawdown Control"],
  },
  {
    icon: Layers,
    title: "Ecosystem",
    description:
      "A complete ecosystem of tools and utilities designed to work together seamlessly. From analysis to execution, everything you need in one place.",
    features: ["Integrated Tools", "Unified Dashboard", "API Access"],
  },
]

export function WhyFxFirebird() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why FxFirebird
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            We&apos;re not another forex robot seller. We build professional trading infrastructure for serious traders.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{reason.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              <div className="flex flex-wrap gap-2">
                {reason.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
