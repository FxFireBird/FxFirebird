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
      photoUploads={[
        { label: "Photo 1", description: "Upload your first photo (calculator_photo1.png)" },
        { label: "Photo 2", description: "Upload your second photo (calculator_photo2.png)" },
        { label: "Photo 3", description: "Upload your third photo (calculator_photo3.png)" },
        { label: "Photo 4", description: "Upload your fourth photo (calculator_photo4.png)" },
      ]}
      youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      downloadUrl="/downloads/BAGAYODA_NoDLL.ex5"
      guideUrl="/downloads/USER_GUIDE_3Pages.pdf"
    />
  )
}