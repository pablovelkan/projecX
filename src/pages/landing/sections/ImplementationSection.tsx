import { Handshake } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ImplementationSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,100,0,0.22)_0%,rgba(0,26,11,0)_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
      </div>

      <div className="relative container px-6 py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-ivory/60">COMO FUNCIONA</div>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
                  Mentoria individual.
                </h3>
                <p className="mt-4 text-sm leading-7 text-ivory/75">
                  Eu guio. Você executa.
                </p>
                <div className="mt-8 space-y-4 text-sm leading-7 text-ivory/75">
                  <p>
                    Eu poderia montar tudo pra você…
                    <br />
                    mas sem execução, você não aprende
                    <br />e não consegue repetir o processo.
                  </p>
                  <p className="font-semibold text-ivory">Aqui você constrói de verdade.</p>
                  <p>
                    Sem teoria inútil.
                    <br />
                    Sem curso gravado que você abandona.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-blood-600/25 bg-ink-850/70 p-7 shadow-glowRed">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-blood-600/25 bg-blood-600/10 p-2 text-blood-600">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-ivory/60">MÉTODO</div>
                    <div className="mt-1 font-display text-xl font-semibold text-ivory">Passo a passo</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {[
                    { n: "Caixa", t: "Geração de receita", d: "MicroSaaS e leads qualificados" },
                    { n: "Estrutura", t: "Construção", d: "site, funil e captação" },
                    { n: "Escala", t: "Tráfego pago", d: "recorrência e crescimento" },
                  ].map((s) => (
                    <div key={s.n} className="rounded-2xl border border-ivory/10 bg-ink-900/60 p-5">
                      <div className="flex items-start gap-4">
                        <div className="font-display text-2xl font-semibold text-blood-600">{s.n}</div>
                        <div>
                          <div className="font-display text-lg font-semibold text-ivory">{s.t}</div>
                          <div className="mt-1 text-sm leading-6 text-ivory/70">{s.d}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

