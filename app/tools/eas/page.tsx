"use client"

import { ToolPageTemplate } from "@/components/tool-page-template"

export default function EAsPage() {
  return (
    <ToolPageTemplate
      title="MT5/MT4 Expert Advisors"
      description="Professional-grade Expert Advisors for MetaTrader platforms. Automate your trading strategies with our collection of tested and optimized EAs."
      howItWorks={[
        "Download the EA file compatible with your MetaTrader platform (MT4 or MT5).",
        "Open your MetaTrader platform and navigate to File > Open Data Folder > MQL4/MQL5 > Experts.",
        "Copy the EA file into the Experts folder and restart MetaTrader.",
        "Attach the EA to your desired chart and configure the input parameters according to your trading strategy.",
      ]}
      photoUploads={[
        { label: "Screenshot 1", description: "Upload your first screenshot" },
        { label: "Screenshot 2", description: "Upload your second screenshot" },
        { label: "Screenshot 3", description: "Upload your third screenshot" },
        { label: "Screenshot 4", description: "Upload your fourth screenshot" },
        { label: "Screenshot 5", description: "Upload your fifth screenshot" },
      ]}
      youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      downloadUrl="/downloads/BAGAYODA_NoDLL.ex5"
      guideUrl="/downloads/USER_GUIDE_3Pages.pdf"
    />
  )
}