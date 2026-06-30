"use client"

import { ToolPageTemplate } from "@/components/tool-page-template"

export default function TradeCopierPage() {
  return (
    <ToolPageTemplate
      title="FxF Trade Copier"
      description="Copy trades across multiple accounts instantly with our reliable trade copying solution. Perfect for managing multiple accounts or following signal providers."
      howItWorks={[
        "Install the Trade Copier on both your master (source) and slave (destination) MetaTrader platforms.",
        "Configure the master account to send trade signals by entering the license key and enabling transmission.",
        "On the slave accounts, enter the master account connection details and set your copying preferences (lot multiplier, symbol mapping, etc.).",
        "All trades from the master account will be automatically replicated on the slave accounts in real-time.",
      ]}
      downloadUrl="#"
      guideUrl="#"
    />
  )
}
