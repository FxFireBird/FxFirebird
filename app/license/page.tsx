"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check, Upload, Send, Coins, TrendingUp, Layers, MessageCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const plans = [
  { id: "forex-gold", name: "Forex & Gold", price: 49, icon: Coins },
  { id: "synthetic", name: "Synthetic Indices", price: 79, icon: TrendingUp, popular: true },
  { id: "full-suite", name: "Full Suite", price: 129, icon: Layers },
]

const paymentMethods = [
  { id: "usdt-trc20", name: "USDT TRC20", icon: "/crypto-usdt.svg" },
  { id: "usdt-bep20", name: "USDT BEP20", icon: "/crypto-usdt.svg" },
  { id: "binance-pay", name: "Binance Pay", icon: "/binance.svg" },
  { id: "perfect-money", name: "Perfect Money", icon: "/perfect-money.svg" },
  { id: "bank-transfer", name: "Bank Transfer", icon: "/bank.svg" },
]

const supportChannels = [
  { id: "telegram", name: "Telegram", icon: MessageCircle },
  { id: "whatsapp", name: "WhatsApp", icon: MessageCircle },
  { id: "email", name: "Email", icon: Send },
]

export default function LicensePage() {
  const { t } = useTranslation()
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [selectedPayment, setSelectedPayment] = useState<string>("")
  const [selectedSupport, setSelectedSupport] = useState<string>("telegram")
  const [transactionId, setTransactionId] = useState("")
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background dark:bg-black flex flex-col">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B00]/10 blur-[150px]" />
        </div>

        <header className="relative z-10 px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {t("nav.backToHome")}
          </Link>
        </header>

        <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-3">Verification Request Submitted</h1>
            <p className="text-muted-foreground mb-8">
              {t("licensePage.processing")}
            </p>
            <Link href="/">
              <Button className="bg-[#FF6B00] text-white hover:bg-[#CC5500]">
                {t("nav.backToHome")}
              </Button>
            </Link>
          </motion.div>
        </main>
      </div>
    )
  }

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

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("licensePage.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("licensePage.subtitle")}
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Select Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF6B00] text-white text-sm flex items-center justify-center">1</span>
                {t("licensePage.selectPlan")}
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative flex flex-col items-center p-6 rounded-xl border transition-all ${
                      selectedPlan === plan.id
                        ? "border-[#FF6B00] bg-[#FF6B00]/5"
                        : "border-border bg-card hover:border-border/80"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-2 right-4 px-2 py-0.5 text-[10px] font-semibold bg-[#FF6B00] text-white rounded-full">
                        Popular
                      </span>
                    )}
                    <plan.icon className={`w-8 h-8 mb-3 ${selectedPlan === plan.id ? "text-[#FF6B00]" : "text-muted-foreground"}`} />
                    <h3 className="text-sm font-semibold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-2xl font-bold text-foreground">${plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                    {selectedPlan === plan.id && (
                      <div className="absolute top-3 left-3 w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF6B00] text-white text-sm flex items-center justify-center">2</span>
                {t("licensePage.paymentMethod")}
              </h2>
              <div className="grid gap-3 md:grid-cols-5">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedPayment(method.id)}
                    className={`relative flex flex-col items-center p-4 rounded-xl border transition-all ${
                      selectedPayment === method.id
                        ? "border-[#FF6B00] bg-[#FF6B00]/5"
                        : "border-border bg-card hover:border-border/80"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">{method.name.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">{method.name}</span>
                    {selectedPayment === method.id && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#FF6B00] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Upload Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF6B00] text-white text-sm flex items-center justify-center">3</span>
                {t("licensePage.uploadScreenshot")}
              </h2>
              <div className="rounded-xl border border-dashed border-border bg-card p-8">
                <label className="flex flex-col items-center cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
                    <Upload className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground mb-1">
                    {screenshot ? screenshot.name : "Click to upload"}
                  </span>
                  <span className="text-xs text-muted-foreground">PNG, JPG up to 10MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </motion.div>

            {/* Step 4: Transaction ID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF6B00] text-white text-sm flex items-center justify-center">4</span>
                {t("licensePage.transactionId")}
              </h2>
              <Input
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder={t("licensePage.transactionIdPlaceholder")}
                className="h-12 bg-card border-border"
              />
            </motion.div>

            {/* Step 5: Support Channel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF6B00] text-white text-sm flex items-center justify-center">5</span>
                {t("licensePage.supportDestination")}
              </h2>
              <div className="grid gap-3 md:grid-cols-3">
                {supportChannels.map((channel) => (
                  <button
                    key={channel.id}
                    type="button"
                    onClick={() => setSelectedSupport(channel.id)}
                    className={`relative flex items-center gap-3 p-4 rounded-xl border transition-all ${
                      selectedSupport === channel.id
                        ? "border-[#FF6B00] bg-[#FF6B00]/5"
                        : "border-border bg-card hover:border-border/80"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <channel.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{channel.name}</span>
                    {selectedSupport === channel.id && (
                      <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#FF6B00] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                type="submit"
                disabled={!selectedPlan || !selectedPayment || !transactionId || isSubmitting}
                className="w-full h-14 text-base font-medium bg-[#FF6B00] text-white hover:bg-[#CC5500] rounded-xl disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : t("licensePage.submitVerification")}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                {t("licensePage.processing")}
              </p>
            </motion.div>
          </form>
        </div>
      </main>
    </div>
  )
}
