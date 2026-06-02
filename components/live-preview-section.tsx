"use client"

import { motion } from "framer-motion"
import { Activity, Shield, Zap, Globe, TrendingUp, Lock, Cloud, BarChart3 } from "lucide-react"

const floatingCards = [
  {
    icon: TrendingUp,
    title: "Adaptive Risk Allocation",
    description: "The system adjusts exposure according to account size and market conditions.",
  },
  {
    icon: BarChart3,
    title: "Dynamic Market Selection",
    description: "Only markets suitable for current account conditions are activated.",
  },
  {
    icon: Shield,
    title: "Capital Protection",
    description: "Built-in controls help reduce excessive exposure.",
  },
  {
    icon: Globe,
    title: "Multi-Market Infrastructure",
    description: "Forex, Gold and Synthetic Indices managed from one ecosystem.",
  },
]

const markets = [
  { name: "EURUSD", status: "active" },
  { name: "GBPJPY", status: "active" },
  { name: "XAUUSD", status: "active" },
  { name: "Volatility 75", status: "active" },
  { name: "Boom 1000", status: "active" },
]

function AnimatedChart() {
  return (
    <div className="h-16 flex items-end gap-1">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-gradient-to-t from-orange-500/60 to-orange-400/30 rounded-t"
          initial={{ height: "20%" }}
          animate={{ 
            height: [`${20 + Math.random() * 30}%`, `${40 + Math.random() * 40}%`, `${20 + Math.random() * 30}%`]
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )
}

function PulsingDot({ color = "bg-green-500" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} />
    </span>
  )
}

function RiskGauge({ value }: { value: number }) {
  return (
    <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  )
}

export function LivePreviewSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <Activity className="w-3.5 h-3.5" />
            Live System Preview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            See Bagayoda In Action
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A visual representation of how the system adapts risk, selects markets and manages exposure automatically.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          {/* Live Monitoring Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-sm font-medium text-white shadow-lg">
              <PulsingDot color="bg-green-500" />
              Live Monitoring
            </span>
          </div>

          {/* Main Dashboard */}
          <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl p-6 md:p-8 shadow-2xl overflow-hidden">
            {/* Orange glow effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Bagayoda System</h3>
                  <p className="text-sm text-neutral-400">Trading Infrastructure</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <PulsingDot color="bg-green-500" />
                <span className="text-sm font-medium text-green-400">System Active</span>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative z-10">
              {/* Account Balance */}
              <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-neutral-400 mb-1">Account Balance</p>
                <p className="text-2xl md:text-3xl font-bold text-white">$5,430</p>
              </div>

              {/* Current Risk */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-neutral-400 mb-1">Current Risk</p>
                <p className="text-2xl font-bold text-orange-400">0.8%</p>
                <div className="mt-2">
                  <RiskGauge value={8} />
                </div>
              </div>

              {/* Account Mode */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-neutral-400 mb-1">Account Mode</p>
                <p className="text-xl font-semibold text-white">Balanced</p>
              </div>

              {/* Market Capacity */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-neutral-400 mb-1">Market Capacity</p>
                <p className="text-xl font-semibold text-white">8 / 20</p>
                <p className="text-xs text-neutral-500">Markets</p>
              </div>
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 relative z-10">
              {/* Active Markets */}
              <div className="md:col-span-2 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-neutral-400 mb-3">Active Markets</p>
                <div className="flex flex-wrap gap-2">
                  {markets.map((market) => (
                    <span
                      key={market.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-sm font-medium text-white"
                    >
                      <PulsingDot color="bg-green-500" />
                      {market.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exposure */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-neutral-400 mb-2">Exposure</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-bold text-white">23%</p>
                  <p className="text-sm text-neutral-500 mb-1">of capital</p>
                </div>
                <div className="mt-3">
                  <AnimatedChart />
                </div>
              </div>
            </div>

            {/* Status Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">System Status</p>
                  <p className="text-sm font-medium text-white">Adaptive Engine Active</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Drawdown Protection</p>
                  <p className="text-sm font-medium text-white">Enabled</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Cloud License</p>
                  <p className="text-sm font-medium text-white">Connected</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Security</p>
                  <p className="text-sm font-medium text-white">Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm hover:border-orange-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:border-orange-500/40 transition-colors">
                <card.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
