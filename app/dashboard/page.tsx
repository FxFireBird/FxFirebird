"use client"

import { motion } from "framer-motion"
import { 
  CreditCard, 
  Activity, 
  Shield, 
  Calendar,
  CheckCircle2,
  Download,
  Bell,
  Monitor,
  Zap,
  TrendingUp
} from "lucide-react"

const topCards = [
  { 
    label: "Subscription Plan", 
    value: "Full Suite", 
    icon: CreditCard, 
    accent: "from-orange-500 to-orange-600" 
  },
  { 
    label: "Active Markets", 
    value: "Forex & Synthetics", 
    icon: Activity, 
    accent: "from-green-500 to-emerald-600" 
  },
  { 
    label: "License Status", 
    value: "Active", 
    icon: Shield, 
    accent: "from-blue-500 to-cyan-600" 
  },
  { 
    label: "Next Billing", 
    value: "Jan 15, 2025", 
    icon: Calendar, 
    accent: "from-purple-500 to-violet-600" 
  },
]

const accountStatus = [
  { label: "License Connected", status: true },
  { label: "Forex & Gold Enabled", status: true },
  { label: "Synthetic Indices Enabled", status: true },
]

const recentActivity = [
  { text: "License activated on new device", time: "2 hours ago", icon: Shield },
  { text: "Bagayoda v3.2.1 update installed", time: "1 day ago", icon: Download },
  { text: "New device connected: MacBook Pro", time: "3 days ago", icon: Monitor },
]

const quickActions = [
  { label: "Download MT5 Version", icon: Download, href: "/dashboard/downloads" },
  { label: "Download MT4 Version", icon: Download, href: "/dashboard/downloads" },
  { label: "Download Trade Manager", icon: TrendingUp, href: "/dashboard/downloads" },
  { label: "Risk Reward Calculator", icon: Zap, href: "/dashboard/downloads" },
  { label: "Position Size Calculator", icon: Activity, href: "/dashboard/downloads" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back to your FxFirebird portal</p>
      </div>

      {/* Top Stats Cards */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {topCards.map((card) => (
          <motion.div
            key={card.label}
            variants={item}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-orange-500/30 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{card.label}</p>
                <p className="text-xl font-semibold text-foreground mt-1">{card.value}</p>
              </div>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Account Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
        >
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-500" />
            Account Status
          </h2>
          <div className="mt-4 space-y-3">
            {accountStatus.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <div className={`flex items-center gap-1.5 text-sm ${item.status ? "text-green-500" : "text-red-500"}`}>
                  <CheckCircle2 className="w-4 h-4" />
                  {item.status ? "Enabled" : "Disabled"}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
        >
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Bell className="w-5 h-5 text-orange-500" />
            Recent Activity
          </h2>
          <div className="mt-4 space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <activity.icon className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
        >
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            Quick Actions
          </h2>
          <div className="mt-4 space-y-2">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-500/10 text-muted-foreground hover:text-orange-500 transition-all group"
              >
                <action.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{action.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* System Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <div>
            <p className="text-foreground font-medium">All Systems Operational</p>
            <p className="text-sm text-muted-foreground">Last checked: 2 minutes ago</p>
          </div>
        </div>
        <a
          href="https://status.fxfirebird.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-500 hover:text-green-400 transition-colors"
        >
          View Status Page &rarr;
        </a>
      </motion.div>
    </div>
  )
}
