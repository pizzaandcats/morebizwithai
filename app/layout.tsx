import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'More Business with AI — Free Prompt Pack for Business Owners',
  description:
    'The battle-tested AI prompts that help you win more customers, save hours every week, and grow your business. Drop your email and download the pack free.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e32119',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${anton.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
