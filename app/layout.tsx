import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, DM_Mono, Lilita_One } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const lilitaOne = Lilita_One({
  subsets: ['latin'],
  variable: '--font-lilita',
  weight: '400',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'More Business with AI — Price Landscaping Jobs & Protect Your Profit',
  description:
    'Two free AI prompts built for landscaping business owners. Use the customer request, photos, and your real costs to build better estimates and protect your profit.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#17803f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${lilitaOne.variable} ${dmMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
