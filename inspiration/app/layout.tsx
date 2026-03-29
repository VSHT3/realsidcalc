import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sebastián Kováč | Finanční poradce | SMS Finance',
  description: 'Profesionální finanční poradenství s osobním přístupem. Sebastián Kováč - váš důvěryhodný partner pro finanční plánování a investice.',
  generator: 'v0.app',
  keywords: ['finanční poradce', 'SMS Finance', 'investice', 'finanční plánování', 'Sebastián Kováč'],
  authors: [{ name: 'Sebastián Kováč' }],
  icons: {
    icon: 'https://assets.kovacsebastian.com/transpfavicon.png',
    apple: 'https://assets.kovacsebastian.com/transpfavicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1419',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
