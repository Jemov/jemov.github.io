export function Hero() {
  return (
    <header className="flex flex-col items-center text-center">
      {/* Logo mark */}
      <div className="mb-6 flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center border-2 border-bread-blue bg-primary text-2xl text-primary-foreground pixel-shadow-sm"
          aria-hidden="true"
        >
          J
        </div>
        <span className="text-2xl uppercase tracking-widest text-foreground">Jemov</span>
      </div>

      <h1 className="text-balance text-4xl leading-tight sm:text-5xl md:text-6xl">
        <span className="headline-white block">{"ИГРЫ, МЕМЫ И"}</span>
        <span className="headline-orange mt-2 block">{"ПЕРЕВОДЫ"}</span>
      </h1>

      <p className="mt-6 text-base uppercase tracking-widest text-accent sm:text-lg">
        {"всё в одном хлебном месте"}
        <span className="cursor-blink ml-1 inline-block h-4 w-3 translate-y-0.5 bg-accent" aria-hidden="true" />
      </p>
    </header>
  )
}
