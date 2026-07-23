"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, Check, ArrowUpCircle, FileText, Download, Calendar } from "lucide-react"

const plans = [
  { name: "Forex & Gold", oldPrice: "$99", price: "$29", period: "/year", features: ["Forex Markets", "Gold/XAUUSD", "5 Device Slots", "Email Support"], current: false },
  { name: "Synthetic Indices", oldPrice: "$99", price: "$29", period: "/year", features: ["Synthetic Markets", "Volatility Indices", "5 Device Slots", "Email Support"], current: false },
  { name: "Full Suite", oldPrice: "$199", price: "$49", period: "/year", features: ["All Markets", "Priority Support", "10 Device Slots", "Free Updates"], current: true, popular: true },
]
const invoices = [
  { id: "INV-2024-001", date: "Jan 15, 2024", amount: "$299.00", status: "Paid" },
  { id: "INV-2023-012", date: "Jan 15, 2023", amount: "$249.00", status: "Paid" },
  { id: "INV-2022-012", date: "Jan 15, 2022", amount: "$199.00", status: "Paid" },
]

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Billing</h1>
        <p className="text-muted-foreground mt-1">Manage your subscription and payment history</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Plan</p>
              <p className="text-xl font-semibold text-foreground">Full Suite - Annual</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next billing</p>
              <p className="text-foreground font-medium">Jan 15, 2025</p>
            </div>
            <Calendar className="w-5 h-5 text-orange-500" />
          </div>
        </div>
      </motion.div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Available Plans</h2>
          <div className="flex items-center gap-2 bg-card/50 border border-border rounded-xl p-1">
            <button onClick={() => setBillingCycle("monthly")} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${billingCycle === "monthly" ? "bg-orange-500 text-white" : "text-muted-foreground hover:text-foreground"}`}>Monthly</button>
            <button onClick={() => setBillingCycle("annual")} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${billingCycle === "annual" ? "bg-orange-500 text-white" : "text-muted-foreground hover:text-foreground"}`}>
              Annual<span className="text-xs px-1.5 py-0.5 bg-green-500/20 text-green-500 rounded">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, idx) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className={`relative bg-card/50 backdrop-blur-sm border rounded-2xl p-6 ${plan.current ? "border-orange-500/50 ring-1 ring-orange-500/20" : "border-border hover:border-orange-500/30"} transition-all`}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium rounded-full">Current Plan</span>}
              <h3 className="text-lg font-semibold text-foreground mt-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mt-2">
                {plan.oldPrice && (
                  <span className="text-lg font-semibold text-muted-foreground line-through opacity-70">
                    {plan.oldPrice}
                  </span>
                )}
                <span className="text-3xl font-bold text-orange-500">{plan.price}</span>
                <span className="text-sm font-medium text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-orange-500" />{feature}
                  </li>
                ))}
              </ul>
              <button disabled={plan.current} className={`w-full mt-6 py-3 rounded-xl font-medium transition-all ${plan.current ? "bg-card border border-border text-muted-foreground cursor-not-allowed" : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"}`}>
                {plan.current ? "Current Plan" : "Upgrade"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Payment History</h2>
            <p className="text-sm text-muted-foreground">Your recent invoices</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Invoice</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-border/50 last:border-0">
                  <td className="py-4 px-4 text-sm text-foreground font-medium">{invoice.id}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{invoice.date}</td>
                  <td className="py-4 px-4 text-sm text-foreground">{invoice.amount}</td>
                  <td className="py-4 px-4"><span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">{invoice.status}</span></td>
                  <td className="py-4 px-4 text-right"><button className="text-orange-500 hover:text-orange-400 transition-colors"><Download className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Need more device slots?</h3>
          <p className="text-sm text-muted-foreground mt-1">Contact us to discuss enterprise plans with unlimited devices.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-500 transition-all whitespace-nowrap">
          <ArrowUpCircle className="w-4 h-4" />Contact Sales
        </button>
      </motion.div>
    </div>
  )
}