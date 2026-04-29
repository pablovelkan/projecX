import { Sparkles } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GlowButton from "@/components/GlowButton";
import SectionTitle from "@/components/SectionTitle";
import { whatsappLink } from "@/utils/whatsapp";

export default function RitualSection() {
  return (
    <section className="container px-6 py-16 sm:py-20">
      <FadeIn>
        <SectionTitle
          eyebrow="PRA QUEM É"
          title="Para homens e mulheres que querem sair do zero e construir algo próprio."
          subtitle="Para quem precisa de direção e está pronto para executar."
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <FadeIn className="lg:col-span-12" delayMs={80}>
          <div className="rounded-3xl border border-ivory/10 bg-ink-900/55 p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-emerald-800/25 bg-emerald-800/10 p-2 text-emerald-800">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ivory/60">NEW EMPIRE LEGACY</div>
                <div className="mt-1 font-display text-xl font-semibold text-ivory">Mentoria Individual · Vagas Limitadas</div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm leading-7 text-ivory/70">
              {["Mentoria individual. Vagas limitadas."].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-800/25 bg-emerald-800/10 text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-800" />
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <GlowButton
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full"
                >
                  Falar no WhatsApp agora
                </GlowButton>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-full border border-emerald-800/30 bg-ink-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ivory/90 shadow-[0_0_0_1px_rgba(0,77,0,0.18)] transition hover:bg-ink-850 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
                >
                  Quero começar agora
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

