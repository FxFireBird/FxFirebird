"use client"

import { ToolPageTemplate } from "@/components/tool-page-template"

export default function RiskCalculatorPage() {
  return (
    <ToolPageTemplate
      title="Risk Calculator"
      description="Calculate optimal position sizes and risk-to-reward ratios for your trades. Make informed decisions with precise lot size calculations based on your account balance and risk tolerance."
      howItWorks={[
        "Enter your account balance and the percentage of capital you are willing to risk per trade.",
        "Input your entry price, stop loss, and take profit levels for the trade.",
        "The calculator instantly computes the optimal lot size and displays your potential profit/loss.",
        "Review the risk-to-reward ratio and adjust your parameters as needed before executing the trade.",
      ]}
      downloadUrl="#"
      guideUrl="#"
    />
  )
}
