"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, MessageCircle, Mail, Phone, ExternalLink } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const contactMethods = [
  {
    id: "telegram",
    nameKey: "contact.telegram",
    icon: MessageCircle,
    value: "@Anka_Oscar",
    href: "https://t.me/Anka_Oscar",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "whatsapp",
    nameKey: "contact.whatsapp",
    icon: MessageCircle,
    value: "+44 74 4142 2111",
    href: "https://wa.me/447441422111",
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: "email",
    nameKey: "contact.emailUs",
    icon: Mail,
    value: "site.fxfirebird@gmail.com",
    href: "mailto:site.fxfirebird@gmail.com",
    color: "bg-[#FF6B00]/10 text-[#FF6B00]",
  },
  {
    id: "phone",
    nameKey: "contact.phone",
    icon: Phone,
    value: "+44 74 4142 2111",
    href: "tel:+447441422111",
    color: "bg-purple-500/10 text-purple-500",
  },
]

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background dark:bg-black">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B00]/10 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          {t("nav.backToHome")}
        </Link>
      </header>

      {/* Main */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo1.png" alt="FxFirebird" className="h-12 w-12 object-contain" />
              <span className="text-xl font-semibold text-foreground tracking-tight">FxFirebird</span>
            </Link>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("contact.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-[#FF6B00]/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.color}`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground mb-1">{t(method.nameKey)}</h3>
                  <p className="text-sm text-muted-foreground truncate">{method.value}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Support Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Support hours: Monday - Friday, 9:00 AM - 6:00 PM (UTC)
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Average response time: {"<"} 24 hours
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
