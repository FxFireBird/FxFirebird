"use client"

import { motion } from "framer-motion"
import { User, Key, Globe, Calendar, Shield, Zap, TrendingUp, Clock } from "lucide-react"

// Placeholder data - would come from API in real app
const accountData = {
  name: "John Doe",
  email: "john@example.com",
  memberSince: "January 2024",
}

const licenseData = {
  status: "Active",
  plan: "Full Suite",
  accountNumber: "MT5-123456789",
  broker: "IC Markets",
}

const marketsData = {
  forex: ["EURUSD", "GBPUSD", "USDJPY", "GBPJPY"],
  gold: ["XAUUSD"],
  synthetic: ["Volatility 75", "Crash 1000", "Boom 1000"],
}

const expiryData = {
  date: "July 15, 2026",
  daysRemaining: 42,
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-semibold text-foreground">My Account</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your license and trading settings.
        </p>
      </motion.div>

      {/* Dashboard Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Account Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Account</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Name</p>
              <p className="text-sm text-foreground font-medium">{accountData.name}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="text-sm text-foreground font-medium">{accountData.email}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Member Since</p>
              <p className="text-sm text-foreground font-medium">{accountData.memberSince}</p>
            </div>
          </div>
        </motion.div>

        {/* License Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
              <Key className="w-5 h-5 text-[#FF6B00]" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">License Status</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Status</p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-xs font-medium text-green-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {licenseData.status}
              </span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Plan</p>
              <p className="text-sm text-foreground font-medium">{licenseData.plan}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Trading Account</p>
              <p className="text-sm text-foreground font-medium">{licenseData.accountNumber}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Broker</p>
              <p className="text-sm text-foreground font-medium">{licenseData.broker}</p>
            </div>
          </div>
        </motion.div>

        {/* Active Markets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Globe className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Active Markets</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" />
                Forex
              </p>
              <div className="flex flex-wrap gap-2">
                {marketsData.forex.map((market) => (
                  <span
                    key={market}
                    className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-foreground"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                <Shield className="w-3 h-3" />
                Gold
              </p>
              <div className="flex flex-wrap gap-2">
                {marketsData.gold.map((market) => (
                  <span
                    key={market}
                    className="px-2.5 py-1 rounded-md bg-[#FF6B00]/10 text-xs font-medium text-[#FF6B00]"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3" />
                Synthetic
              </p>
              <div className="flex flex-wrap gap-2">
                {marketsData.synthetic.map((market) => (
                  <span
                    key={market}
                    className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-foreground"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expiry Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Expiry Date</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">License Expires</p>
              <p className="text-2xl font-bold text-foreground">{expiryData.date}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{expiryData.daysRemaining} days remaining</span>
            </div>
            <div className="pt-2">
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div 
                  className="h-full bg-[#FF6B00] rounded-full"
                  style={{ width: `${Math.min((expiryData.daysRemaining / 30) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
