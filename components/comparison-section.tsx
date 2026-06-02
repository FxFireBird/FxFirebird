"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    title: "Manual Trading",
    highlighted: false,
    items: [
      { text: "Emotional decisions", positive: false },
      { text: "Fixed lot sizing", positive: false },
      { text: "Manual market selection", positive: false },
      { text: "Difficult scaling", positive: false },
      { text: "Requires constant monitoring", positive: false },
    ],
  },
  {
    title: "Traditional EA",
    highlighted: false,
    items: [
      { text: "Automated entries", positive: true },
      { text: "Static risk model", positive: false },
      { text: "Limited market adaptability", positive: false },
      { text: "Same settings for all accounts", positive: false },
      { text: "High risk during changing conditions", positive: false },
    ],
  },
  {
    title: "Bagayoda System",
    highlighted: true,
    badge: "Recommended",
    items: [
      { text: "Adaptive risk management", positive: true },
      { text: "Dynamic lot sizing", positive: true },
      { text: "Intelligent market selection", positive: true },
      { text: "Account-size adaptation", positive: true },
      { text: "Multi-market infrastructure", positive: true },
      { text: "Cloud licensing", positive: true },
      { text: "Designed for long-term scalability", positive: true },
    ],
  },
]

export function ComparisonSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Bagayoda Is Different
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Most trading solutions focus on entries. Bagayoda focuses on account survival, capital growth and risk adaptation.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
          {comparisonData.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columnIndex * 0.15 }}
              className="relative"
            >
              {/* Recommended badge */}
              {column.badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                >
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-accent text-accent-foreground shadow-lg shadow-orange-500/20">
                    {column.badge}
                  </span>
                </motion.div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-2xl border transition-all duration-300 ${
                  column.highlighted
                    ? "bg-gradient-to-b from-card/80 to-card border-orange-500/50 shadow-xl shadow-orange-500/10"
                    : "bg-card/50 border-border/50 hover:border-border hover:bg-card/70"
                }`}
              >
                {/* Glow effect for highlighted card */}
                {column.highlighted && (
                  <>
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-orange-500/20 via-orange-500/10 to-transparent blur-sm -z-10" />
                    <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent blur-md -z-20" />
                  </>
                )}

                <div className="p-6 lg:p-8">
                  {/* Column title */}
                  <h3
                    className={`text-xl font-semibold mb-6 text-center ${
                      column.highlighted ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {column.title}
                  </h3>

                  {/* Items list */}
                  <ul className="space-y-4">
                    {column.items.map((item, itemIndex) => (
                      <motion.li
                        key={item.text}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: columnIndex * 0.15 + itemIndex * 0.05 + 0.3,
                        }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`flex-shrink-0 mt-0.5 ${
                            item.positive
                              ? column.highlighted
                                ? "text-accent"
                                : "text-green-500"
                              : "text-muted-foreground/50"
                          }`}
                        >
                          {item.positive ? (
                            <Check className="w-5 h-5" strokeWidth={2.5} />
                          ) : (
                            <X className="w-5 h-5" strokeWidth={2.5} />
                          )}
                        </span>
                        <span
                          className={`text-sm ${
                            item.positive
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA for highlighted column */}
                  {column.highlighted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="mt-8 pt-6 border-t border-border/50"
                    >
                      <a
                        href="#pricing"
                        className="block w-full py-3 px-4 text-center text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                      >
                        Get Started
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
