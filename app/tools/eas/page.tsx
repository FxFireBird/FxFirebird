"use client"

import { ToolPageTemplate } from "@/components/tool-page-template"

export default function EAsPage() {
  return (
    <ToolPageTemplate
      title="ICT UNO EA v2"
      description="Welcome to your ICT UNO V2 Expert Advisor (EA) for MetaTrader 4. This EA is designed to automate specific trading strategies based on concepts often associated with Inner Circle Trader (ICT) methodologies, alongside other quantitative approaches."
      howItWorks={[
        "ICT UNO V2 is an automated trading system. It monitors market price action according to the selected strategy (UNO Enhanced, ICT KillZone, Gold UNO, or all combined) and executes trades when specific conditions are met. It also includes features for risk management, trade management (Stop Loss, Take Profit, Break Even, Trailing Stop), and optional loss recovery.",
        "This EA is intended for Forex traders who: Are familiar with the MetaTrader 4 platform. Understand basic trading concepts like pips, spread, leverage, Stop Loss, Take Profit, and order types. Have some understanding of technical analysis concepts (Highs, Lows, Moving Averages, RSI, ADX). Familiarity with ICT concepts is beneficial but not strictly required to operate the EA. Understand the inherent risks involved in automated trading.",
        "Key Features: Multiple Trading Strategies: UNO Enhanced, ICT KillZone, Gold UNO. Option to trade all strategies concurrently. Integrated Dashboard Panel for monitoring and control. Flexible Risk Management: Fixed Lot Size or % Risk per trade. Advanced Stop Loss Options: Fixed Pips, Smart Levels (based on strategy logic), ATR-based volatility stops. Advanced Take Profit Options: Fixed Pips, Risk/Reward Ratio (Smart TP), ATR-based volatility targets. Trade Management: Break Even, Trailing Stop (with delay option). Optional Second Target: UNO RR Ratio feature for potential scaling out. Optional Loss Recovery System (Use with Caution!). Filters: ADX Trend Filter, RSI Filter (for Gold UNO), Spread Filter, Trading Time Filter.",
        "Installation Steps: Open your MetaTrader 4 terminal. Go to File > Open Data Folder. Navigate to MQL4 > Experts and paste the EA file. Navigate to MQL4 > Files and ensure your logo, OPTIONAL is present for the interface to display correctly. Return to MT4, right-click Experts in the Navigator window, and select Refresh. Drag the EA onto any single chart (timeframe does not matter).",
      ]}
      photoUploads={[
        { label: "Photo 1", description: "Upload your first photo (ict_uno_photo1.jpg)" },
        { label: "Photo 2", description: "Upload your second photo (ict_uno_photo2.jpg)" },
        { label: "Photo 3", description: "Upload your third photo (ict_uno_photo3.jpg)" },
        { label: "Photo 4", description: "Upload your fourth photo (ICT_UNO_PHOTO4.png)" },
      ]}
      youtubeUrl="https://youtu.be/kK8TzHq-EnM"
      downloadUrl="/downloads/SetFiles_and_EA.zip"
      guideUrl="/downloads/ICT_UNO_UserGuide.pdf"
    />
  )
}