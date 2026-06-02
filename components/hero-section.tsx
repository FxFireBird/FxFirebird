"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const trustItems = [
  "Multi-Broker",
  "Cloud Licensing",
  "Adaptive Risk",
  "Professional Support",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background gradient effects - Orange glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
            >
              Adaptive Trading Infrastructure
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Trade Smarter.
              <br />
              <span className="text-primary">Scale Safer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              Bagayoda automatically adapts risk, selects markets, and manages execution based on account size, market conditions and portfolio exposure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link href="#pricing">
                <Button size="lg" className="group h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Get Bagayoda
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#tools">
                <Button size="lg" variant="outline" className="h-12 px-8 border-border/50 text-foreground hover:bg-secondary/50 hover:border-border">
                  Explore Free Tools
                </Button>
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
            >
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Futuristic Trading OS Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main glow effect */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" />
              
              {/* Dashboard container with glassmorphism */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                {/* Dashboard header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                      <div className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground">Bagayoda OS</span>
                      <p className="text-xs text-muted-foreground">Trading Infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-green-500">Live</span>
                  </div>
                </div>

                {/* Main stats grid - glassmorphism cards */}
                <div className="mb-4 grid grid-cols-2 gap-3">
                  {/* Account Balance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Account Balance</p>
                    <p className="mt-2 text-2xl font-bold text-foreground">$124,850</p>
                    <p className="mt-1 text-xs text-green-500">+2.4% today</p>
                  </motion.div>

                  {/* Current Risk */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Current Risk</p>
                    <p className="mt-2 text-2xl font-bold text-foreground">0.8%</p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "16%" }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400" 
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Active Markets */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mb-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Active Markets</p>
                    <span className="text-xs text-primary">8 pairs</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["EUR/USD", "GBP/JPY", "XAU/USD", "USD/JPY"].map((pair, i) => (
                      <div 
                        key={pair}
                        className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5"
                      >
                        <div className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-primary' : 'bg-blue-500'}`} />
                        <span className="text-xs font-medium text-foreground">{pair}</span>
                      </div>
                    ))}
                    <div className="flex items-center rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5">
                      <span className="text-xs text-muted-foreground">+4 more</span>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom row - Portfolio Exposure & Performance */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Portfolio Exposure */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Portfolio Exposure</p>
                    <p className="mt-2 text-2xl font-bold text-foreground">23%</p>
                    <p className="mt-1 text-xs text-muted-foreground">of max allocation</p>
                  </motion.div>

                  {/* Performance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">This Month</p>
                    <p className="mt-2 text-2xl font-bold text-green-500">+8.2%</p>
                    <p className="mt-1 text-xs text-muted-foreground">32 trades closed</p>
                  </motion.div>
                </div>

                {/* Subtle orange glow at bottom */}
                <div className="absolute -bottom-2 left-1/2 h-1 w-1/2 -translate-x-1/2 rounded-full bg-primary/50 blur-xl" />
              </motion.div>

              {/* Floating mini cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl"
                >
                  <p className="text-xs text-muted-foreground">Risk adjusted</p>
                  <p className="text-sm font-semibold text-green-500">Optimal</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4 hidden lg:block"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl"
                >
                  <p className="text-xs text-muted-foreground">Execution</p>
                  <p className="text-sm font-semibold text-primary">Automated</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
