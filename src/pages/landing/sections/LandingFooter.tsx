export default function LandingFooter() {
  return (
    <footer className="border-t border-blood-600/15 bg-ink-950">
      <div className="container px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-ivory/70">
            <div className="font-display text-base font-semibold text-ivory">New Empire Legacy</div>
            <div className="mt-2 text-xs uppercase tracking-[0.28em]">Mentoria Individual · Execução real · Vagas limitadas.</div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-ivory/60">
            <a href="#top" className="transition hover:text-ivory">
              Topo
            </a>
            <a href="#inimigo" className="transition hover:text-ivory">
              Caminho
            </a>
            <a href="#inclusos" className="transition hover:text-ivory">
              Módulos
            </a>
            <a href="#apply" className="transition hover:text-ivory">
              Começar
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs leading-6 text-ivory/45">NEW EMPIRE LEGACY · Criação de sites · Mentoria individual.</div>
      </div>
    </footer>
  );
}

