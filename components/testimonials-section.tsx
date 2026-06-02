"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "James K.",
    market: "Forex",
    review: "The adaptive risk engine completely changed how I manage exposure.",
  },
  {
    name: "Michael T.",
    market: "Gold",
    review: "Position sizing and market selection removed a lot of emotional decisions.",
  },
  {
    name: "David R.",
    market: "Synthetic Indices",
    review: "The system helped me maintain consistency during volatile periods.",
  },
  {
    name: "Sarah M.",
    market: "Forex",
    review: "Simple setup. Professional execution.",
  },
  {
    name: "Alex P.",
    market: "Boom & Crash",
    review: "Much more structured than traditional trading robots.",
  },
  {
    name: "Chris L.",
    market: "Multi Market",
    review: "The Full Suite gives me everything in one ecosystem.",
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-6">
            Community Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Trusted By Traders Across Multiple Markets
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-pretty">
            From Forex and Gold to Synthetic Indices, traders use Bagayoda to manage risk and scale efficiently.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Star Rating */}
                <StarRating />
                
                {/* Review */}
                <p className="text-neutral-300 mt-4 mb-6 flex-grow leading-relaxed">
                  &quot;{testimonial.review}&quot;
                </p>
                
                {/* Trader Info */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center">
                      <span className="text-orange-500 font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{testimonial.name}</p>
                      <p className="text-neutral-500 text-xs">{testimonial.market}</p>
                    </div>
                  </div>
                  
                  {/* Verified badge */}
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
