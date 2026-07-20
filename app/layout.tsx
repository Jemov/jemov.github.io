import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
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
  verification: {
    google: 'siWhxVgJTWMEx8ogLMf2nWCfy_XvYNhVliq_PxxDITM',
    yandex: '8de0564ce44b3bfc',
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
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MMQGWPD300"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MMQGWPD300');`}
        </Script>
      </body>
    </html>
  )
}
