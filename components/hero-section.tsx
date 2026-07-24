"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 bg-background dark:bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#FF6B00]/10 blur-[150px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-48">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {t("hero.title")}
            <br />
            <span className="text-[#FF6B00]">Scale Safer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="#license">
              <Button className="group h-14 px-8 bg-[#FF6B00] text-white text-base font-medium hover:bg-[#CC5500] rounded-lg">
                {t("nav.getLicense")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#downloads">
              <Button variant="outline" className="h-14 px-8 border-border bg-transparent text-foreground text-base font-medium hover:bg-muted/50 rounded-lg">
                {t("nav.downloads")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}