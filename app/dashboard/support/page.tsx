"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HelpCircle, MessageCircle, FileText, Send, ChevronDown, ExternalLink, BookOpen, Headphones } from "lucide-react"

const supportOptions = [
  { name: "Create Ticket", description: "Submit a support request", icon: MessageCircle, accent: "from-orange-500 to-orange-600", action: "ticket" },
  { name: "Telegram Support", description: "Chat with our team", icon: Send, accent: "from-blue-500 to-cyan-600", href: "https://t.me/Anka_Oscar" },
  { name: "Documentation", description: "Read guides and tutorials", icon: BookOpen, accent: "from-purple-500 to-violet-600", href: "/docs" },
  { name: "Live Support", description: "Schedule a call", icon: Headphones, accent: "from-green-500 to-emerald-600", action: "call" },
]

const faqs = [
  { question: "How do I activate my license on a new device?", answer: "To activate your license on a new device, download the software from the Downloads Center, run the installer, and enter your license key when prompted. The activation is automatic if you're connected to the internet." },
  { question: "Can I transfer my license to a different account?", answer: "License transfers are handled on a case-by-case basis. Please contact our support team with your request and we'll assist you with the process." },
  { question: "What happens when my subscription expires?", answer: "When your subscription expires, the software will continue to function but you won't receive new updates. You can renew your subscription at any time from the Billing page to restore full access." },
  { question: "How do I request a refund?", answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team within 30 days of your purchase date and we'll process your refund." },
  { question: "Is there a limit to how many accounts I can use?", answer: "Yes, the accounts limit depends on your plan. Forex & Gold and Synthetic Indices plans include 1 account slot, while the Full Suite plan includes 2 account slots. You can manage connected accounts from the Licenses page." },
]

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [ticketSubject, setTicketSubject] = useState("")
  const [ticketMessage, setTicketMessage] = useState("")

  const handleSupportAction = (option: typeof supportOptions[0]) => {
    if (option.href) window.open(option.href, "_blank")
    else if (option.action === "ticket") setShowTicketForm(true)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Support Center</h1>
        <p className="text-muted-foreground mt-1">Get help and find answers to your questions</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {supportOptions.map((option, idx) => (
          <motion.button key={option.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} onClick={() => handleSupportAction(option)} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-left hover:border-orange-500/30 transition-all group">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <option.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              {option.name}{option.href && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
          </motion.button>
        ))}
      </div>

      {showTicketForm && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Create Support Ticket</h2>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
              </div>
            </div>
            <button onClick={() => setShowTicketForm(false)} className="text-muted-foreground hover:text-foreground transition-colors">&times;</button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input type="text" value={ticketSubject} onChange={(e) => setTicketSubject(e.target.value)} placeholder="Brief description of your issue" className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea value={ticketMessage} onChange={(e) => setTicketMessage(e.target.value)} placeholder="Describe your issue in detail..." rows={5} className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none" />
            </div>
            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setShowTicketForm(false)} className="px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-card/80 transition-all">Cancel</button>
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all flex items-center gap-2">
                <Send className="w-4 h-4" />Submit Ticket
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Frequently Asked Questions</h2>
            <p className="text-sm text-muted-foreground">Quick answers to common questions</p>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border/50 rounded-xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-4 text-left hover:bg-card/50 transition-colors">
                <span className="text-foreground font-medium">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="px-4 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Need more help?</h3>
            <p className="text-sm text-muted-foreground">Email us at support@fxfirebird.com</p>
          </div>
        </div>
        <a href="mailto:support@fxfirebird.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap">
          <Send className="w-4 h-4" />Send Email
        </a>
      </motion.div>
    </div>
  )
}