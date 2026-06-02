import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'FxFirebird | Professional Trading Infrastructure',
  description: 'Adaptive risk management, automated execution and professional trading tools designed for serious traders. The Bagayoda System for multi-market trading.',
  generator: 'FxFirebird',
  keywords: ['trading infrastructure', 'automated trading', 'risk management', 'forex tools', 'Bagayoda System'],
  authors: [{ name: 'FxFirebird' }],
  openGraph: {
    title: 'FxFirebird | Professional Trading Infrastructure',
    description: 'Adaptive risk management, automated execution and professional trading tools designed for serious traders.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
