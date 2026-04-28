import { Globe, Server, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import StatPill from "@/components/StatPill";

export default function SetupSection() {
  return (
    <section className="container px-6 py-16 sm:py-20">
      <div className="rounded-3xl border border-emerald-800/20 bg-ink-900/60 p-8 shadow-[0_0_0_1px_rgba(0,77,0,0.18),_0_0_26px_rgba(0,77,0,0.16)] sm:p-10">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-ivory/60">PRIMEIRO PASSO: CAIXA</div>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
              Antes de escalar, você precisa gerar caixa.
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-ivory/75">Você começa assim:</p>
            <div className="mx-auto mt-6 grid max-w-2xl gap-3 text-left text-sm text-ivory/75 sm:grid-cols-2">
              {[
                "Afiliando-se a MicroSaaS internacionais",
                "Recebendo em dólar",
                "Trabalhando com leads já interessados",
                "Foco em conversão direta",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 rounded-2xl border border-ivory/10 bg-ink-950/25 p-4">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-blood-600/25 bg-blood-600/10 text-blood-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blood-600" />
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ivory/75">
              Objetivo: gerar dinheiro rápido
              <br />
              para sustentar o crescimento.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <StatPill icon={<ShieldCheck className="h-4 w-4" />} label="Caixa antes de escalar" />
              <StatPill icon={<Globe className="h-4 w-4" />} label="MicroSaaS" />
              <StatPill icon={<Server className="h-4 w-4" />} label="Leads qualificados" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
