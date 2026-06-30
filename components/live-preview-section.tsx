"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

function PulsingDot({ color = "bg-green-500" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} />
    </span>
  )
}

const markets = [
  { name: "EURUSD", status: "active" },
  { name: "GBPJPY", status: "active" },
  { name: "XAUUSD", status: "active" },
  { name: "Volatility 75", status: "active" },
]

export function LivePreviewSection() {
  return (
    <section id="preview" className="relative py-20 lg:py-24 overflow-hidden bg-background dark:bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            System Preview
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Real-time adaptive risk management in action.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Dashboard */}
          <div className="relative rounded-2xl border border-border bg-card p-6 md:p-10 shadow-2xl overflow-hidden">
            {/* Orange glow effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Bagayoda System</h3>
                  <p className="text-sm text-muted-foreground">Trading Infrastructure</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <PulsingDot color="bg-green-500" />
                <span className="text-sm font-medium text-green-400">Active</span>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative z-10">
              {/* Account Balance */}
              <div className="p-5 rounded-xl bg-muted/30 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Balance</p>
                <p className="text-2xl font-bold text-foreground">$5,430</p>
              </div>

              {/* Current Risk */}
              <div className="p-5 rounded-xl bg-muted/30 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Risk</p>
                <p className="text-2xl font-bold text-[#FF6B00]">0.8%</p>
              </div>

              {/* Mode */}
              <div className="p-5 rounded-xl bg-muted/30 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Mode</p>
                <p className="text-lg font-semibold text-foreground">Balanced</p>
              </div>

              {/* Markets */}
              <div className="p-5 rounded-xl bg-muted/30 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Markets</p>
                <p className="text-lg font-semibold text-foreground">8 / 20</p>
              </div>
            </div>

            {/* Active Markets */}
            <div className="p-5 rounded-xl bg-muted/30 border border-border relative z-10">
              <p className="text-sm text-muted-foreground mb-4">Active Markets</p>
              <div className="flex flex-wrap gap-3">
                {markets.map((market) => (
                  <span
                    key={market.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium text-foreground"
                  >
                    <PulsingDot color="bg-green-500" />
                    {market.name}
                  </span>
                ))}
                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-background border border-border text-sm text-muted-foreground">
                  +4 more
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
