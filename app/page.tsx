import { Hero } from '@/components/hero'
import { LinkHub } from '@/components/link-hub'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jemov',
  alternateName: ['Хлебные угодья', 'BreadBredni', 'Джемов'],
  description: 'Игры, мемы и переводы — всё в одном хлебном месте.',
  url: 'https://jemov.github.io',
  sameAs: [
    'https://twitch.tv/jemov',
    'https://youtube.com/@BreadBredni',
    'https://t.me/jemovbred',
    'https://boosty.to/jemov',
    'https://instagram.com/jemovbread',
  ],
}

export default function Page() {
  return (
    <main className="pixel-grid min-h-dvh w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex min-h-dvh w-full max-w-xl flex-col items-center px-5 py-16 sm:py-20">
        <Hero />
        <LinkHub />

        <footer className="mt-14 flex flex-col items-center gap-2 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {"© Jemov — хлебные угодья"}
          </p>
        </footer>
      </div>
    </main>
  )
}
