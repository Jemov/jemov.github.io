import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tiny5 } from 'next/font/google'
import './globals.css'

const tiny5 = Tiny5({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-tiny5',
})

const siteUrl = 'https://jemov.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jemov — Игры, мемы и переводы',
  description: 'Игры, мемы и переводы — всё в одном хлебном месте. Twitch, YouTube, Telegram, Boosty и русификации игр от Jemov.',
  keywords: ['Jemov', 'джемов', 'хлебные угодья', 'игры', 'мемы', 'переводы', 'русификации', 'Twitch', 'стримы', 'BreadBredni'],
  generator: 'v0.app',
  openGraph: {
    title: 'Jemov — Игры, мемы и переводы',
    description: 'Игры, мемы и переводы — всё в одном хлебном месте. Twitch, YouTube, Telegram, Boosty и русификации игр от Jemov.',
    url: siteUrl,
    siteName: 'Jemov',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jemov — Игры, мемы и переводы',
    description: 'Игры, мемы и переводы — всё в одном хлебном месте. Twitch, YouTube, Telegram, Boosty и русификации игр от Jemov.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
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
