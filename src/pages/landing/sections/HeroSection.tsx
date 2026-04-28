import { EyeOff, Lock, Repeat, VideoOff } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GlowButton from "@/components/GlowButton";
import StatPill from "@/components/StatPill";
import VineDivider from "@/components/VineDivider";

type HeroSectionProps = {
  heroBg: string;
};

export default function HeroSection({ heroBg }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Fundo cinematográfico escuro" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/25 via-ink-950/70 to-ink-950" />
      </div>

      <div className="relative container px-6 py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <StatPill icon={<EyeOff className="h-4 w-4" />} label="Anônimo" />
              <StatPill icon={<Repeat className="h-4 w-4" />} label="Recorrência" />
              <StatPill icon={<Lock className="h-4 w-4" />} label="Sistema" />
            </div>

            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ivory drop-shadow-[0_0_18px_rgba(0,100,0,0.28)] sm:text-5xl">
              AVISO: Não tente criar uma “marca pessoal” antes de entender o método.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-ivory/75 drop-shadow-[0_0_14px_rgba(0,100,0,0.18)]">
              Como construir um <span className="text-ivory">Império SaaS Invisível</span> e capturar comissões recorrentes — sem postar vídeos, sem
              aparecer e sem depender de seguidores.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlowButton href="#apply">Quero me candidatar</GlowButton>
              <a
                href="#inclusos"
                className="inline-flex items-center justify-center rounded-full border border-blood-600/25 bg-ink-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ivory/85 transition hover:bg-ink-850 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-600"
              >
                Ver o que está incluso
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ivory/55">Vagas limitadas para manter a execução 1-para-1</p>
          </div>
        </FadeIn>

        <div className="mt-14">
          <VineDivider className="opacity-90" />
        </div>

        <FadeIn delayMs={120}>
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-blood-600/20 bg-ink-850/65 p-6 shadow-glowRed">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blood-600/25 bg-blood-600/10 text-blood-600">
                  <VideoOff className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ivory/60">O atalho do algoritmo é uma armadilha</div>
                  <div className="mt-1 font-display text-lg font-semibold text-ivory">Dinheiro sem fama. Lucro sem vaidade.</div>
                </div>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-blood-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-glowRed transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-600"
              >
                Quero acesso
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

