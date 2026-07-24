"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check, Upload, Send, Coins, TrendingUp, Layers, MessageCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const plans = [
  {
    id: "forex-gold",
    name: "Forex & Gold",
    oldPrice: 79,
    price: 49,
    annualOldPrice: 799,
    annualPrice: 499,
    icon: Coins,
    detail: "Forex, gold and major pairs",
  },
  {
    id: "synthetic",
    name: "Synthetic Indices",
    oldPrice: 99,
    price: 79,
    annualOldPrice: 999,
    annualPrice: 799,
    icon: TrendingUp,
    popular: true,
    detail: "Crash, Boom, Volatility and Jump indices",
  },
  {
    id: "full-suite",
    name: "Full Suite",
    oldPrice: 179,
    price: 129,
    annualOldPrice: 1799,
    annualPrice: 1299,
    icon: Layers,
    detail: "Full access to all markets and tools",
  },
]

const paymentMethods = [
  { 
    id: "usdt-trc20", 
    name: "USDT TRC20", 
    icon: "/crypto-usdt.svg",
    address: "TLQg9MvM4G2ycMDsnzQJPh6nXzdJ75WerL",
    network: "Tron (TRC20)",
    qrCode: "/qr-usdt-trc20.png" // Place tes images QR dans le dossier public/
  },
  { 
    id: "usdt-bep20", 
    name: "USDT BEP20", 
    icon: "/crypto-usdt.svg",
    address: "0x0350b1cd8913F2faeA1bb929b64e0cD02Aeeb094",
    network: "BNB Smart Chain (BEP20)",
    qrCode: "/qr-usdt-bep20.png"
  },
  { 
    id: "solana", 
    name: "Solana", 
    icon: "/crypto-solana.svg",
    address: "5g2BudMwMFvHJcxETyrpLwrMJVbCn23vbwpjQhSvRoTp",
    network: "Solana (SOL)",
    qrCode: "/qr-solana.png"
  },
  ]

const supportChannels = [
  {
    id: "telegram",
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/Anka_Oscar",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/447441422111",
  },
  {
    id: "email",
    name: "Email",
    icon: Send,
    href: "mailto:site.fxfirebird@gmail.com",
  },
]

export default function LicensePage() {
  const { t } = useTranslation()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [selectedPayment, setSelectedPayment] = useState<string>("")
  const [selectedSupport, setSelectedSupport] = useState<string>("telegram")
  const [transactionId, setTransactionId] = useState("")
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan)
  const selectedPaymentDetails = paymentMethods.find((method) => method.id === selectedPayment)
  const selectedSupportDetails = supportChannels.find((channel) => channel.id === selectedSupport)

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    setScreenshot(file)

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
    }

    setPreviewUrl(URL.createObjectURL(file))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!screenshot) {
      setSubmitError("Veuillez télécharger la capture de paiement.")
      return
    }

    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("proof", screenshot)
    formData.append("transactionId", transactionId)
    formData.append("selectedPlan", selectedPlan)
    formData.append("selectedPayment", selectedPayment)

    const response = await fetch("/api/license", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()
    setIsSubmitting(false)

    if (!response.ok) {
      setSubmitError(result?.error ?? "Erreur lors de l’envoi de la preuve.")
      return
    }

    if (selectedSupportDetails?.href) {
      window.location.href = selectedSupportDetails.href
      return
    }

    setIsSubmitted(true)
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

            {previewUrl && (
              <div className="mb-8 rounded-xl border border-border/70 bg-card p-4 text-left">
                <p className="text-sm font-medium text-foreground mb-3">Proof of payment preview</p>
                <img
                  src={previewUrl}
                  alt="Proof of payment preview"
                  className="w-full max-h-72 object-contain rounded-lg"
                />
                {transactionId && (
                  <p className="mt-3 text-sm text-muted-foreground break-all">
                    Transaction hash: <span className="font-medium text-foreground">{transactionId}</span>
                  </p>
                )}
              </div>
            )}

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
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${billingCycle === "monthly" ? "border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00]" : "border-border bg-card text-muted-foreground"}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("annual")}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${billingCycle === "annual" ? "border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00]" : "border-border bg-card text-muted-foreground"}`}
                >
                  Annual
                </button>
                {billingCycle === "annual" && (
                  <span className="rounded-full bg-[#FF6B00]/10 px-3 py-1 text-xs font-semibold text-[#FF6B00]">
                    Save 30%
                  </span>
                )}
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {plans.map((plan) => {
                  const displayPrice = billingCycle === "monthly" ? plan.price : plan.annualPrice
                  const displayOldPrice = billingCycle === "monthly" ? plan.oldPrice : plan.annualOldPrice
                  const billingLabel = billingCycle === "monthly" ? "/mo" : "/year"

                  return (
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
                      <p className="text-xs text-muted-foreground mb-3">{plan.detail}</p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold text-foreground">${displayPrice}</span>
                        <span className="text-sm text-muted-foreground">{billingLabel}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-through mt-2">${displayOldPrice}</p>
                      {selectedPlan === plan.id && (
                        <div className="absolute top-3 left-3 w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  )
                })}
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
                    <div className="w-12 h-12 mb-3 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                      <img src={method.icon} alt={method.name} className="max-h-8 max-w-full object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-foreground text-center">{method.name}</span>
                    <p className="text-xs text-muted-foreground text-center mt-1">{method.network}</p>
                    {selectedPayment === method.id && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#FF6B00] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {selectedPaymentDetails && (
                <div className="mt-6 rounded-3xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold text-foreground mb-3">Détails de paiement sélectionnés</p>
                  <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Réseau</p>
                      <p className="text-sm font-medium text-foreground mb-3">{selectedPaymentDetails.network}</p>
                      <p className="text-sm text-muted-foreground mb-1">Adresse</p>
                      <p className="break-words text-sm font-medium text-foreground">{selectedPaymentDetails.address}</p>
                    </div>
                    <div className="rounded-3xl border border-border bg-[#090a0b] p-4">
                      <p className="text-sm text-muted-foreground mb-3">QR code</p>
                      <img
                        src={selectedPaymentDetails.qrCode}
                        alt={`QR ${selectedPaymentDetails.name}`}
                        className="h-44 w-full object-contain rounded-2xl border border-border bg-white p-2"
                      />
                    </div>
                  </div>
                </div>
              )}
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

                {previewUrl && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-foreground mb-3">Preview</p>
                    <img
                      src={previewUrl}
                      alt="Selected proof of payment"
                      className="w-full max-h-72 object-contain rounded-lg border border-border"
                    />
                  </div>
                )}
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
              {transactionId && (
                <p className="mt-3 text-sm text-muted-foreground break-all">
                  Transaction hash: <span className="font-medium text-foreground">{transactionId}</span>
                </p>
              )}
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
                {isSubmitting
                  ? "Submitting..."
                  : selectedSupportDetails
                    ? `Continue with ${selectedSupportDetails.name}`
                    : t("licensePage.submitVerification")}
              </Button>
              {submitError && (
                <p className="text-center text-sm text-destructive mt-4">{submitError}</p>
              )}
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
