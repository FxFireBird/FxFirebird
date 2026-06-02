"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What exactly is the Bagayoda System?",
    answer:
      "The Bagayoda System is a comprehensive trading infrastructure that includes adaptive risk management, automated execution, and professional trading tools. It's designed for serious traders who want to automate their trading with intelligent risk controls.",
  },
  {
    question: "Is FxFirebird a forex broker or signal provider?",
    answer:
      "No. FxFirebird is a trading infrastructure company. We don't provide trading signals, manage your funds, or act as a broker. We build professional tools that help traders execute their own strategies more effectively.",
  },
  {
    question: "What brokers does the system support?",
    answer:
      "The Bagayoda System supports most MetaTrader 4 and MetaTrader 5 compatible brokers. We recommend certain brokers for optimal performance, but you can use any broker that supports MT4/MT5.",
  },
  {
    question: "Do I need programming knowledge to use the system?",
    answer:
      "No programming knowledge is required. The system comes with a user-friendly interface for configuration. However, advanced users can access deeper customization options if desired.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "All license holders receive priority support via email and our private community. We provide setup assistance, troubleshooting help, and regular updates to the system.",
  },
  {
    question: "Is there a monthly subscription?",
    answer:
      "No. The Bagayoda System is a one-time purchase that includes lifetime access to the system, all future updates, and support. There are no recurring fees.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative border-t border-border/50 bg-secondary/20 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Everything you need to know about FxFirebird and the Bagayoda System.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="py-4 text-left text-base font-medium text-foreground hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
