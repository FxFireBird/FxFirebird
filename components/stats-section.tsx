"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  {
    title: "Adaptive Risk Engine",
    value: "100",
    suffix: "%",
    description: "Every trade is evaluated through dynamic risk management logic.",
  },
  {
    title: "Supported Markets",
    value: "20",
    suffix: "+",
    description: "Forex, Gold, Indices, Synthetic Indices and additional assets.",
  },
  {
    title: "Execution Monitoring",
    value: "24/7",
    suffix: "",
    isText: true,
    description: "Continuous market monitoring and automated execution management.",
  },
  {
    title: "Account Scaling",
    value: "Dynamic",
    suffix: "",
    isText: true,
    description: "Exposure automatically adapts according to account size.",
  },
]

const features = [
  "Adaptive Lot Sizing",
  "Market Selection",
  "Drawdown Protection",
  "Multi Broker Support",
  "Cloud Licensing",
  "Lifetime Updates",
]

function AnimatedNumber({ value, suffix, isText }: { value: string; suffix: string; isText?: boolean }) {
  const [displayValue, setDisplayValue] = useState(isText ? "" : "0")
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    if (isText) {
      // For text values, just reveal after a short delay
      const timeout = setTimeout(() => setDisplayValue(value), 200)
      return () => clearTimeout(timeout)
    }

    const numValue = parseInt(value)
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.round(easeOutQuart * numValue)
      setDisplayValue(currentValue.toString())

      if (currentStep >= steps) {
        clearInterval(interval)
        setDisplayValue(value)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isInView, value, isText])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Orange glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-[#F97316]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Built For Serious Traders
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete ecosystem trusted by traders across multiple markets.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#F97316]/30 hover:bg-white/[0.04]">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#F97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative">
                  <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider font-medium">
                    {stat.title}
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isText={stat.isText} />
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 py-6 px-4 rounded-2xl border border-white/[0.06] bg-white/[0.01]">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
              >
                <svg
                  className="w-4 h-4 text-[#F97316] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
