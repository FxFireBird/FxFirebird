"use client"

import { ToolPageTemplate } from "@/components/tool-page-template"

export default function TradeManagerPage() {
  return (
    <ToolPageTemplate
      title="Trade Manager"
      description="Manage all your active trades from a single, intuitive interface. Set take-profit and stop-loss levels, move stops to break-even, and close partial positions with ease."
      howItWorks={[
        "Install the Trade Manager EA on your MetaTrader platform following the standard EA installation process.",
        "Open the Trade Manager panel on any chart. It will automatically detect all open positions across all symbols.",
        "Use the one-click buttons to modify stop loss, take profit, or close positions partially or fully.",
        "Enable auto-break-even or trailing stop features to protect your profits automatically.",
      ]}
      photoUploads={[
        { label: "Screenshot 1", description: "Upload your first screenshot" },
        { label: "Screenshot 2", description: "Upload your second screenshot" },
        { label: "Screenshot 3", description: "Upload your third screenshot" },
        { label: "Screenshot 4", description: "Upload your fourth screenshot" },
        { label: "Screenshot 5", description: "Upload your fifth screenshot" },
      ]}
      youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      downloadUrl="#"
      guideUrl="#"
    />
  )
}