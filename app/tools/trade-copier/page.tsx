"use client"

import { ToolPageTemplate } from "@/components/tool-page-template"

export default function TradeCopierPage() {
  return (
    <ToolPageTemplate
      title="FxF Trade Copier"
      description="The FxF MT5 Copier V10 is a high-performance local trade copier designed specifically for MetaTrader 5. It allows for instant synchronization of trading activity between two or more MT5 terminals running on the same computer or VPS."
      howItWorks={[
        "The FxF MT5 Copier V10 is a high-performance local trade copier designed specifically for MetaTrader 5. It allows for instant synchronization of trading activity between two or more MT5 terminals running on the same computer or VPS.",
        "Whether you are managing multiple accounts or mirroring a professional strategy, FxF Copier provides the tools to manage risk and entry quality with precision.",
        "The UltraSync interface is divided into two primary modes. You must select the appropriate role for each terminal.",
        "The Master terminal is the source of the trades. When active, the EA monitors all open positions and pending orders on the account. It writes trade data to a secure local bridge file every tick. Multiple Slave terminals can follow a single Master.",
        "The Slave terminal is the receiver. It reads the bridge file and replicates the Master's actions. It provides a dedicated control panel to customize how trades are received.",
      ]}
      photoUploads={[
        { label: "Photo 1", description: "Upload your first photo (fxf_copier_photo1.png)" },
        { label: "Photo 2", description: "Upload your second photo (fxf_copier_photo2.png)" },
        { label: "Photo 3", description: "Upload your third photo (fxf_copier_photo3.png)" },
        { label: "Photo 4", description: "Upload your fourth photo (fxf_copier_photo4.png)" },
      ]}
      youtubeUrl="https://youtu.be/tclxMnjKl7k"
      downloadUrl="/downloads/FxF_Copier.ex5"
      guideUrl="/downloads/FxF_Copier_Guide.pdf"
    />
  )
}