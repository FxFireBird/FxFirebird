"use client"

import { motion } from "framer-motion"
import { Shield, Server, Cloud, Cpu, Headphones } from "lucide-react"

const indicators = [
  {
    icon: Shield,
    title: "Adaptive Risk Engine",
    description: "Dynamic risk adjustment based on market conditions",
  },
  {
    icon: Server,
    title: "Multi Broker Support",
    description: "Compatible with major brokers worldwide",
  },
  {
    icon: Cloud,
    title: "Cloud Licensing",
    description: "Access your system from anywhere",
  },
  {
    icon: Cpu,
    title: "Automated Execution",
    description: "Precise order execution without emotions",
  },
  {
    icon: Headphones,
    title: "Professional Support",
    description: "Dedicated support for all users",
  },
]

export function TrustIndicators() {
  return (
    <section className="relative border-y border-border/50 bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <indicator.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-foreground">{indicator.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{indicator.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
