import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="container px-6 py-16 sm:py-20">
      <FadeIn>
        <SectionTitle
          eyebrow="FOCO"
          title="Dinheiro sem exposição. Lucro sem vaidade."
          subtitle="Você constrói um sistema que funciona, mesmo no anonimato."
        />
      </FadeIn>

      <FadeIn delayMs={120}>
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-emerald-800/20 bg-ink-900/55 p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-ivory/60">RESULTADO</div>
          <div className="mt-3 font-display text-3xl font-semibold text-ivory">Você sai com:</div>
          <div className="mt-6 space-y-3 text-sm text-ivory/75">
            {["Caixa inicial gerado", "Site publicado", "Funil rodando", "Leads qualificados", "Direção clara para escalar"].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-800/25 bg-emerald-800/10 text-emerald-800">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

