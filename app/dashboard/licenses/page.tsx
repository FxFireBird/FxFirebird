"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Key, Shield, Monitor, Copy, Check, RefreshCw, ArrowUpCircle, CreditCard, Trash2 } from "lucide-react"

const connectedDevices = [
  { name: "MacBook Pro M3", location: "New York, US", lastActive: "Active now", current: true },
  { name: "Windows Desktop", location: "London, UK", lastActive: "2 hours ago", current: false },
  { name: "VPS Server", location: "Frankfurt, DE", lastActive: "1 day ago", current: false },
]

export default function LicensesPage() {
  const [copied, setCopied] = useState(false)
  const licenseKey = "FXFB-XXXX-XXXX-XXXX-XXXX"

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">License Management</h1>
        <p className="text-muted-foreground mt-1">Manage your licenses and connected devices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Key className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">License Key</h2>
              <p className="text-sm text-muted-foreground">Your unique activation key</p>
            </div>
          </div>
          <div className="bg-background/50 border border-border rounded-xl p-4 flex items-center justify-between">
            <code className="text-foreground font-mono text-sm">{licenseKey}</code>
            <button onClick={handleCopy} className="p-2 text-muted-foreground hover:text-orange-500 transition-colors">
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-background/30 rounded-xl p-4">
              <p className="text-sm text-muted-foreground">Status</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-foreground font-medium">Active</span>
              </div>
            </div>
            <div className="bg-background/30 rounded-xl p-4">
              <p className="text-sm text-muted-foreground">Devices</p>
              <p className="text-foreground font-medium mt-1">3 / 5</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Subscription</h2>
              <p className="text-sm text-muted-foreground">Current plan details</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border/50"><span className="text-muted-foreground">Current Plan</span><span className="text-foreground font-medium">Full Suite</span></div>
            <div className="flex items-center justify-between py-3 border-b border-border/50"><span className="text-muted-foreground">Billing Cycle</span><span className="text-foreground font-medium">Annual</span></div>
            <div className="flex items-center justify-between py-3 border-b border-border/50"><span className="text-muted-foreground">Renewal Date</span><span className="text-foreground font-medium">Jan 15, 2025</span></div>
            <div className="flex items-center justify-between py-3"><span className="text-muted-foreground">Price</span><span className="text-foreground font-medium">$299/year</span></div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Connected Devices</h2>
              <p className="text-sm text-muted-foreground">Devices using your license</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">3 of 5 slots used</span>
        </div>
        <div className="space-y-3">
          {connectedDevices.map((device, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl border ${device.current ? "bg-orange-500/5 border-orange-500/20" : "bg-background/30 border-border/50"}`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${device.current ? "bg-orange-500/20" : "bg-card"}`}>
                  <Monitor className={`w-5 h-5 ${device.current ? "text-orange-500" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <p className="text-foreground font-medium flex items-center gap-2">
                    {device.name}
                    {device.current && <span className="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded-full">This device</span>}
                  </p>
                  <p className="text-sm text-muted-foreground">{device.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{device.lastActive}</span>
                {!device.current && <button className="p-2 text-muted-foreground hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all">
          <Shield className="w-4 h-4" />Manage Subscription
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-card/80 hover:border-orange-500/30 transition-all">
          <ArrowUpCircle className="w-4 h-4" />Upgrade Plan
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-card/80 hover:border-orange-500/30 transition-all">
          <RefreshCw className="w-4 h-4" />Renew Subscription
        </button>
      </motion.div>
    </div>
  )
}