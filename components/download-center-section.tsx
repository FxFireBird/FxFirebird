"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Clock, FileText, BookOpen } from "lucide-react"

const downloads = [
  {
    logo: "/logos/mt5.png",
    title: "Bagayoda For MT5",
    description:
      "Full-featured expert advisor for MetaTrader 5 platform with cloud integration.",
    version: "v1.0.0",
    size: "336 KB",
    available: true,
    buttonText: "Download for MT5",
  },
  {
    logo: "/logos/mt4.png",
    title: "Bagayoda For MT4",
    description:
      "Expert advisor optimized for MetaTrader 4 platform compatibility.",
    version: "Coming Soon",
    size: "-",
    available: false,
    buttonText: "Coming Soon",
  },
]

const guides = [
  {
    icon: BookOpen,
    title: "MT5 Integration And Risk Management Guide",
    description:
      "Step-by-step instructions for installing, configuring and managing risk settings with Bagayoda.",
    type: "PDF",
    pages: "3 pages",
    buttonText: "Download Guide",
  },
]

export function DownloadCenterSection() {
  return (
    <section
      id="downloads"
      className="relative py-20 lg:py-24 bg-card dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Download Center
          </h2>

          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Get the Bagayoda software and documentation.
          </p>
        </motion.div>

        {/* SOFTWARE */}

        <div className="mb-16">

          <h3 className="text-lg font-semibold text-foreground mb-6">
            Software
          </h3>

          <div className="grid gap-4 md:grid-cols-2">

            {downloads.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  item.available
                    ? "border-[#FF6B00]/20 bg-background"
                    : "border-border bg-background opacity-75"
                }`}
              >

                <div className="flex items-start gap-4 mb-4">

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                      item.available ? "bg-[#FF6B00]/10" : "bg-muted"
                    }`}
                  >
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="h-9 w-9 object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">

                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">

                  <span
                    className={`px-2 py-1 rounded-md ${
                      item.available
                        ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                        : "bg-muted"
                    }`}
                  >
                    {item.version}
                  </span>

                  {item.available && (
                    <span>{item.size}</span>
                  )}

                </div>

                <Button
                  className={`w-full h-11 font-medium rounded-lg ${
                    item.available
                      ? "bg-[#FF6B00] text-white hover:bg-[#CC5500]"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!item.available}
                >
                  {item.available ? (
                    <Download className="mr-2 h-4 w-4" />
                  ) : (
                    <Clock className="mr-2 h-4 w-4" />
                  )}

                  {item.buttonText}
                </Button>

              </motion.div>

            ))}

          </div>

        </div>

        {/* USER MANUAL */}

        <div className="mb-16">

          <h3 className="text-lg font-semibold text-foreground mb-6">
            User Manual
          </h3>

          <div className="max-w-2xl">

            {guides.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="relative flex flex-col rounded-2xl border border-border bg-background p-6"
              >

                <div className="flex items-start gap-4 mb-4">

                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-muted-foreground" />
                  </div>

                  <div className="flex-1 min-w-0">

                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">

                  <span className="px-2 py-1 rounded-md bg-muted flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    {item.type}
                  </span>

                  <span>{item.pages}</span>

                </div>

                <Button
                  variant="outline"
                  className="w-full h-11 font-medium rounded-lg border-border hover:bg-muted/50"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {item.buttonText}
                </Button>

              </motion.div>

            ))}

          </div>

        </div>

        {/* RECOMMENDED PARTNERS */}

        <div>

          <h3 className="text-2xl font-bold text-center text-foreground mb-10">
            Recommended Partners
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <a
              href="https://track.deriv.com/_lUPrAuH_5BW2vdm9PpHVCmNd7ZgqdRLk/1/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-background p-8 text-center hover:shadow-md transition"
            >
              <img
                src="/logos/deriv.png"
                alt="Deriv"
                className="h-12 mx-auto object-contain"
              />

              <p className="mt-4 text-sm text-muted-foreground">
                Recommended Broker
              </p>
            </a>

            <a
              href="https://strex.live/la-com/DAzs7d0x"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-background p-8 text-center hover:shadow-md transition"
            >
              <img
                src="/logos/startrader.png"
                alt="StarTrader"
                className="h-12 mx-auto object-contain"
              />

              <p className="mt-4 text-sm text-muted-foreground">
                Professional Trading Broker
              </p>
            </a>

            <a
              href="https://my.govpsfx.com/?ref=MzU3NjQ6OkVO"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-background p-8 text-center hover:shadow-md transition"
            >
              <img
                src="/logos/govpsfx.png"
                alt="GoVPSFX"
                className="h-12 mx-auto object-contain"
              />

              <p className="mt-4 text-sm text-muted-foreground">
                Recommended VPS Provider
              </p>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}