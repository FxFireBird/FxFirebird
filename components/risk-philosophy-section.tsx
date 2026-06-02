"use client"

import { motion } from "framer-motion"
import { Shield, Target, TrendingUp } from "lucide-react"

const cards = [
  {
    icon: Shield,
    title: "Adaptive Exposure",
    description: "The system continuously adjusts market participation according to account size and current exposure."
  },
  {
    icon: Target,
    title: "Market Intelligence",
    description: "Supported markets are activated dynamically based on account capacity and system rules."
  },
  {
    icon: TrendingUp,
    title: "Capital Preservation",
    description: "Risk allocation is designed to help prevent excessive concentration and uncontrolled growth."
  }
]

export function RiskPhilosophySection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
            Trusted Trading Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Built Around Risk, Not Hype
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto text-balance">
            Most trading systems focus on finding entries. Bagayoda focuses on protecting capital, adapting exposure and supporting long-term account growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-orange-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-neutral-900/90">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center">
                    <card.icon className="w-7 h-7 text-orange-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Quote glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 rounded-2xl blur-xl" />
          
          <div className="relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-10 text-center">
            {/* Quote mark */}
            <div className="absolute top-4 left-6 text-6xl text-orange-500/20 font-serif leading-none">
              &ldquo;
            </div>
            
            <blockquote className="relative">
              <p className="text-2xl md:text-3xl font-medium text-white mb-4 italic">
                Survival comes first. Growth comes second.
              </p>
              <footer className="text-sm text-neutral-500">
                Bagayoda was designed around account longevity before profit maximization.
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
