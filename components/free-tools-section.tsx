"use client"

import { motion } from "framer-motion"
import { Calculator, Ruler, Settings2, BookOpen, Hash, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    icon: Calculator,
    title: "Risk Reward Calculator",
    description: "Calculate optimal risk-to-reward ratios for your trades with precision.",
    href: "#",
  },
  {
    icon: Ruler,
    title: "Position Size Calculator",
    description: "Determine the perfect position size based on your account and risk tolerance.",
    href: "#",
  },
  {
    icon: Settings2,
    title: "Trade Manager",
    description: "Manage all your active trades from a single, intuitive interface.",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "Trading Journal",
    description: "Track, analyze, and improve your trading performance over time.",
    href: "#",
  },
  {
    icon: Hash,
    title: "Lot Size Calculator",
    description: "Quickly calculate the appropriate lot size for any currency pair.",
    href: "#",
  },
  {
    icon: Wrench,
    title: "Trading Utilities",
    description: "A collection of essential tools for day-to-day trading operations.",
    href: "#",
  },
]

export function FreeToolsSection() {
  return (
    <section id="tools" className="relative border-t border-border/50 bg-secondary/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
            Free for Everyone
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Free Tools Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Professional-grade trading tools available at no cost. Empower your trading with our comprehensive toolkit.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link
                href={tool.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/10">
                  <tool.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{tool.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                <div className="mt-4 flex items-center text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
