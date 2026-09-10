import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Archivo_Black } from 'next/font/google'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', weight: ['400', '500', '600', '700', '800'] })
const archivoBlack = Archivo_Black({ subsets: ['latin'], variable: '--font-archivo-black', weight: '400' })

export const metadata: Metadata = { title: 'Free AI Landscaping Estimate Prompts | More Business with AI', description: 'Get two free AI prompts that help landscapers prepare better job estimates using their real rates, costs, and expenses.' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#e32119' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`}><body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
