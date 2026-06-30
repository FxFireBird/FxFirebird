"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, ExternalLink } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

interface ToolPageProps {
  title: string
  description: string
  imageSrc?: string
  howItWorks: string[]
  downloadUrl?: string
  guideUrl?: string
  externalUrl?: string
}

export function ToolPageTemplate({
  title,
  description,
  imageSrc,
  howItWorks,
  downloadUrl,
  guideUrl,
  externalUrl,
}: ToolPageProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background dark:bg-black">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B00]/10 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <Link href="/#tools" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Free Tools
        </Link>
      </header>

      {/* Main */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6B00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">FxFirebird</span>
            </Link>
          </div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Tool Image */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="aspect-video relative bg-muted">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">How It Works</h2>
            <div className="space-y-4">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0 text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {downloadUrl && (
              <Button
                asChild
                className="h-12 px-6 bg-[#FF6B00] text-white hover:bg-[#CC5500] rounded-lg"
              >
                <a href={downloadUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Tool
                </a>
              </Button>
            )}
            {guideUrl && (
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 border-border rounded-lg"
              >
                <a href={guideUrl} download>
                  <FileText className="mr-2 h-4 w-4" />
                  Download User Guide
                </a>
              </Button>
            )}
            {externalUrl && (
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 border-border rounded-lg"
              >
                <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Tool
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
