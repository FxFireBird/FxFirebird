"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function FinalCtaSection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-background dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background dark:from-neutral-950 dark:to-black" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#FF6B00]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("finalCta.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#license">
            <Button className="group h-12 px-6 bg-[#FF6B00] hover:bg-[#CC5500] text-white text-base font-medium rounded-lg">
              {t("finalCta.getLicense")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="#downloads">
            <Button variant="outline" className="h-12 px-6 border-border bg-transparent hover:bg-muted/50 text-foreground text-base font-medium rounded-lg">
              <Download className="mr-2 h-5 w-5" />
              {t("finalCta.downloadNow")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}