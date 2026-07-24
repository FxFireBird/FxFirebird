
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'FxFirebird | Professional Trading Infrastructure',
  description:
    'Adaptive risk management, automated execution and professional trading tools designed for serious traders. The Bagayoda System for multi-market trading.',

  generator: 'FxFirebird',

  keywords: [
    'trading infrastructure',
    'automated trading',
    'risk management',
    'forex tools',
    'Bagayoda System',
  ],

  authors: [{ name: 'FxFirebird' }],

  icons: {
    icon: '/logo1.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
  },

  openGraph: {
    title: 'FxFirebird | Professional Trading Infrastructure',
    description:
      'Adaptive risk management, automated execution and professional trading tools designed for serious traders.',
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
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
