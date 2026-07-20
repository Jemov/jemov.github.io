import { Radio, Clapperboard, Scissors, Camera, Music2, Send, Heart, Languages, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type LinkItem = {
  label: string
  sub: string
  href: string
  icon: LucideIcon
  primary?: boolean
}

const links: LinkItem[] = [
  {
    label: 'Twitch',
    sub: 'Прямые эфиры — jemov',
    href: 'https://twitch.tv/jemov',
    icon: Radio,
    primary: true,
  },
  {
    label: 'YouTube — Видео',
    sub: 'Полноценные видосы — @BreadBredni',
    href: 'https://www.youtube.com/@BreadBredni',
    icon: Clapperboard,
  },
  {
    label: 'YouTube — Нарезки',
    sub: 'Нарезки стримов — @BreadStreamBredni',
    href: 'https://www.youtube.com/@BreadStreamBredni',
    icon: Scissors,
  },
  {
    label: 'Instagram',
    sub: 'Рилсы и вертикалки — @jemovbread',
    href: 'https://instagram.com/jemovbread',
    icon: Camera,
  },
  {
    label: 'TikTok',
    sub: 'Обрезки стримов — @jemov00',
    href: 'https://www.tiktok.com/@jemov00',
    icon: Music2,
  },
  {
    label: 'Telegram',
    sub: 'Хлебные угодья — @jemovbred',
    href: 'https://t.me/jemovbred',
    icon: Send,
  },
  {
    label: 'Boosty',
    sub: 'Поддержать автора',
    href: 'https://boosty.to/jemov',
    icon: Heart,
  },
  {
    label: 'Nexus Mods',
    sub: 'Русификации игр',
    href: 'https://www.nexusmods.com/profile/Jemov/mods',
    icon: Languages,
  },
]

export function LinkHub() {
  return (
    <nav aria-label="Ссылки Jemov" className="mt-10 w-full">
      <ul className="flex flex-col gap-4">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 border-2 px-5 py-4 transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none pixel-shadow-sm ${
                item.primary
                  ? 'border-bread-blue bg-primary text-primary-foreground'
                  : 'border-bread-orange bg-card text-card-foreground'
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center border-2 ${
                  item.primary
                    ? 'border-primary-foreground/60 bg-primary-foreground/10'
                    : 'border-bread-orange bg-primary/10'
                }`}
                aria-hidden="true"
              >
                <item.icon className={`h-5 w-5 ${item.primary ? 'text-primary-foreground' : 'text-bread-amber'}`} />
              </span>

              <span className="flex flex-1 flex-col text-left">
                <span className="text-lg uppercase tracking-wide leading-none">{item.label}</span>
                <span
                  className={`mt-1.5 text-xs uppercase tracking-wide ${
                    item.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
                >
                  {item.sub}
                </span>
              </span>

              <ArrowUpRight
                className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  item.primary ? 'text-primary-foreground' : 'text-bread-blue'
                }`}
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
