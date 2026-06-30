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
    question: "What is the Bagayoda System?",
    answer:
      "Bagayoda is a cloud-controlled execution framework that connects licensed trading accounts to the FxFirebird infrastructure. It provides adaptive risk management, automated position sizing, and centralized control over your trading activities.",
  },
  {
    question: "Is Bagayoda an EA or indicator?",
    answer:
      "Bagayoda is not a traditional EA. It is a comprehensive trading infrastructure with cloud-based licensing. The software is free to download, but trading access requires an active monthly license for authorization.",
  },
  {
    question: "What brokers does the system support?",
    answer:
      "The system supports most MetaTrader 4 and MetaTrader 5 compatible brokers. We recommend certain brokers for optimal performance.",
  },
  {
    question: "Do I need programming knowledge?",
    answer:
      "No programming knowledge is required. The system includes a user-friendly interface for configuration, and all risk parameters are managed through the cloud dashboard.",
  },
  {
    question: "What support do you provide?",
    answer:
      "All license holders receive priority support via email and our private community, including setup assistance and regular system updates.",
  },
  {
    question: "How does the licensing work?",
    answer:
      "One license equals one trading account. You choose a plan based on the markets you want to trade (Forex & Gold, Synthetic Indices, or Full Suite), and your account is authorized through our cloud licensing server.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 lg:py-24 bg-background dark:bg-black">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-[#FF6B00]/20"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline [&[data-state=open]>svg]:text-[#FF6B00]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed">
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
