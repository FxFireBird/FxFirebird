"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, ExternalLink, Upload } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

interface ToolPageProps {
  title: string
  description: string
  imageSrc?: string
  howItWorks: string[]
  downloadUrl?: string
  guideUrl?: string
  externalUrl?: string
  youtubeUrl?: string
  photoUploads?: { label: string; description: string }[]
}

function getEmbedUrl(url: string): string {
  let embedUrl = url
  if (embedUrl.includes("youtube.com/watch?v=")) {
    embedUrl = embedUrl.replace("youtube.com/watch?v=", "youtube.com/embed/")
  } else if (embedUrl.includes("youtu.be/")) {
    embedUrl = embedUrl.replace("youtu.be/", "youtube.com/embed/")
  } else if (!embedUrl.includes("youtube.com/embed/")) {
    return embedUrl
  }
  const sep = embedUrl.includes("?") ? "&" : "?"
  return embedUrl + sep + "autoplay=1"
}

export function ToolPageTemplate({
  title,
  description,
  imageSrc,
  howItWorks,
  downloadUrl,
  guideUrl,
  externalUrl,
  youtubeUrl,
  photoUploads,
}: ToolPageProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background dark:bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B00]/10 blur-[150px]" />
      </div>

      <header className="relative z-10 px-6 py-6">
        <Link href="/#tools" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          {t("freeTools.accessTool")}
        </Link>
      </header>

      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="FxFirebird" className="h-10 w-10 object-contain" />
              <span className="text-xl font-semibold text-foreground tracking-tight">FxFirebird</span>
            </Link>
          </div>

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

          {youtubeUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-12 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="aspect-video relative">
                <iframe
                  src={getEmbedUrl(youtubeUrl)}
                  title={title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          )}

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">{t("howItWorks.title")}</h2>
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

          {photoUploads && photoUploads.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t("toolPage.uploadPhotos")}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {photoUploads.map((upload, index) => (
                  <div key={index} className="rounded-xl border border-dashed border-border bg-card p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground mb-1">{upload.label}</p>
                    <p className="text-xs text-muted-foreground">{upload.description}</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id={`photo-upload-${index}`}
                    />
                    <label
                      htmlFor={`photo-upload-${index}`}
                      className="mt-3 inline-block cursor-pointer text-sm text-[#FF6B00] hover:underline"
                    >
                      {t("toolPage.uploadLabel")}
                    </label>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

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
                  {t("toolPage.download")}
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
                  {t("toolPage.guide")}
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
                  {t("toolPage.open")}
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}