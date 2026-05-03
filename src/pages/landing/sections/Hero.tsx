import FadeIn from "@/components/FadeIn";
import VineDivider from "@/components/VineDivider";
import { whatsappLink } from "@/utils/whatsapp";

export default function Hero() {
  const logoSrc = `${import.meta.env.BASE_URL}images/logotipook.png`;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,100,0,0.35)_0%,rgba(0,26,11,0)_55%)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/70 to-ink-950" />
      </div>

      <div className="relative container px-6 py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <img
              src={logoSrc}
              alt="New Empire Legacy"
              className="mx-auto h-40 w-40 select-none object-contain drop-shadow-[0_18px_55px_rgba(0,0,0,0.9)] drop-shadow-[0_0_44px_rgba(0,100,0,0.35)] sm:h-48 sm:w-48"
              draggable={false}
            />
            <div className="mt-6 font-display text-2xl font-semibold tracking-[0.18em] text-emerald-800 sm:text-3xl">NEW EMPIRE LEGACY</div>
            <div className="mt-3 text-sm font-semibold text-ivory/85">Seja bem-vindo(a)</div>

            <h1 className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight text-ivory drop-shadow-[0_2px_26px_rgba(0,0,0,0.78)] sm:text-5xl">
              Enquanto você dorme, seu{" "}
              <span className="font-wedding normal-case align-baseline text-[1.12em] font-normal tracking-normal text-emerald-800 drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]">
                império digital
              </span>{" "}
              trabalha por você.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-ivory/85 drop-shadow-[0_2px_22px_rgba(0,0,0,0.72)]">
              Você vai aprender a construir:
              <br />
              <span className="font-semibold text-ivory">sites, funis e páginas que convertem.</span>
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-ivory/80">Na prática. Sem enrolação.</p>
            <div className="mx-auto mt-6 max-w-3xl space-y-2 text-base leading-7 text-ivory/85">
              <div>Sem aparecer.</div>
              <div>Sem depender de seguidores.</div>
              <div>Sem refém de algoritmo.</div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-emerald-800 to-[#004d00] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_0_1px_rgba(0,77,0,0.35),_0_0_40px_rgba(0,77,0,0.25)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
              >
                <span className="relative z-10">Quero começar agora</span>
                <span
                  aria-hidden="true"
                  className="absolute -inset-y-10 -left-24 w-40 rotate-12 bg-white/15 blur-md opacity-60 transition group-hover:opacity-90 motion-reduce:hidden animate-shimmer"
                />
              </a>
              <a
                href="#inimigo"
                className="inline-flex items-center justify-center rounded-full border border-emerald-800/30 bg-ink-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ivory/90 shadow-[0_0_0_1px_rgba(0,77,0,0.18)] transition hover:bg-ink-850 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
              >
                O JOGO REAL
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ivory/60">
              Mentoria individual · Vagas limitadas
            </p>
          </div>
        </FadeIn>

        <div className="mt-14">
          <VineDivider className="opacity-90" />
        </div>
      </div>
    </section>
  );
}
