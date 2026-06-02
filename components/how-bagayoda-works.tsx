"use client"

import { motion } from "framer-motion"
import { Radar, Target, Shield, Zap, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Analyze Account",
    description: "Evaluates account size, balance, broker environment and available capital.",
    icon: Radar,
  },
  {
    number: "02",
    title: "Select Markets",
    description: "Automatically determines which markets can be traded safely according to account capacity.",
    icon: Target,
  },
  {
    number: "03",
    title: "Manage Risk",
    description: "Dynamic lot sizing and adaptive risk allocation based on current exposure.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Execute Trades",
    description: "Precise execution and position management through the Bagayoda engine.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Scale Capital",
    description: "Trading activity expands progressively as account size grows.",
    icon: TrendingUp,
  },
]

export function HowBagayodaWorks() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            How Bagayoda Works
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A complete trading infrastructure designed to adapt, protect and execute.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Process */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Icon container */}
                  <div className="relative mx-auto w-[120px] h-[120px] mb-6">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Card */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative w-full h-full rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm flex items-center justify-center group cursor-default"
                    >
                      {/* Inner glow on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <step.icon className="w-10 h-10 text-accent relative z-10 transition-transform duration-300 group-hover:scale-110" />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <span className="text-xs font-medium text-accent">{step.number}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text content */}
                  <div className="text-center px-2">
                    <h3 className="text-foreground font-medium text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector (not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-[60px] -right-2 transform translate-x-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                        className="text-accent/50"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Process */}
        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            {/* Vertical connection line */}
            <div className="absolute top-0 bottom-0 left-[30px] w-px bg-gradient-to-b from-border via-accent/30 to-border" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <span className="text-[10px] font-medium text-accent">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-foreground font-medium text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
