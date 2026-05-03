export default function Header() {
  const logoSrc = `${import.meta.env.BASE_URL}images/logotipook.png`;

  return (
    <header className="sticky top-0 z-30 border-b border-emerald-800/20 bg-ink-950/75 backdrop-blur">
      <div className="container flex items-center justify-center px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="New Empire Legacy"
            className="h-12 w-12 select-none object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.75)] drop-shadow-[0_0_28px_rgba(0,100,0,0.28)]"
            draggable={false}
          />
          <div className="font-display text-lg font-semibold tracking-[0.18em] text-emerald-800 sm:text-xl">NEW EMPIRE LEGACY</div>
        </a>
      </div>
    </header>
  );
}
