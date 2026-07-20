import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tiny5 } from 'next/font/google'
import './globals.css'

const tiny5 = Tiny5({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-tiny5',
})

export const metadata: Metadata = {
  title: 'Jemov — Игры, мемы и переводы',
  description: 'Игры, мемы и переводы — всё в одном хлебном месте. Twitch, YouTube, Telegram, Boosty и русификации игр от Jemov.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1C1C1C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${tiny5.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
