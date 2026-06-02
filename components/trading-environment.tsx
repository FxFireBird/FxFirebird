"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const brokers = [
  {
    name: "Deriv",
    description: "Synthetic indices and forex trading",
    href: "#",
  },
  {
    name: "StarTrader",
    description: "Premium forex and CFD broker",
    href: "#",
  },
  {
    name: "Govpsfx",
    description: "Low latency VPS hosting",
    href: "#",
  },
]

export function TradingEnvironment() {
  return (
    <section className="relative border-t border-border/50 bg-secondary/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recommended Trading Environment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Optimize your trading setup with our recommended partners.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {brokers.map((broker, index) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={broker.href}
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card px-6 py-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-foreground">
                  {broker.name[0]}
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    {broker.name}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-muted-foreground">{broker.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Recommended but not required.
        </motion.p>
      </div>
    </section>
  )
}
