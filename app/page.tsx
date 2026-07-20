import { Hero } from '@/components/hero'
import { LinkHub } from '@/components/link-hub'

export default function Page() {
  return (
    <main className="pixel-grid min-h-dvh w-full">
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
