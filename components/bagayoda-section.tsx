"use client"

import { motion } from "framer-motion"
import { Target, ShieldCheck, Zap, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Smart Market Selection",
    description: "Intelligent algorithms identify optimal trading opportunities across multiple markets and timeframes.",
  },
  {
    icon: ShieldCheck,
    title: "Adaptive Risk Control",
    description: "Dynamic position sizing and stop-loss management that adapts to changing market volatility.",
  },
  {
    icon: Zap,
    title: "Automated Execution",
    description: "Lightning-fast order execution with precise entry and exit points, removing emotional decisions.",
  },
  {
    icon: TrendingUp,
    title: "Capital Scaling",
    description: "Sophisticated capital management that scales your positions based on account performance.",
  },
]

export function BagayodaSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Bagayoda System
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One System. Multiple Markets.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            The Bagayoda System is a comprehensive trading infrastructure designed to handle the complexities of modern markets.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
