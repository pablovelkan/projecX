import { Check, Flame, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export default function EnemySection() {
  return (
    <section id="inimigo" className="container px-6 py-16 sm:py-20">
      <FadeIn>
        <SectionTitle
          eyebrow="O JOGO REAL"
          title="O Caminho Errado vs O Caminho Certo"
          subtitle="A maioria perde tempo tentando crescer em rede social e aprendendo conteúdo solto no YouTube."
        />
      </FadeIn>

      <FadeIn delayMs={80}>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-7 text-ivory/75">
          <p>
            Sem direção, você tenta de tudo…
            <br />e nada realmente funciona.
          </p>
          <p>Eu sei porque já passei por isso.</p>
          <p>
            Você não precisa de mais informação.
            <br />
            Você precisa de alguém que te guie
            <br />
            até validar um sistema que gera dinheiro.
          </p>
          <p className="font-semibold text-ivory">Aqui, você constrói um sistema que vende.</p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <FadeIn delayMs={120}>
          <div className="h-full rounded-2xl border border-ivory/10 bg-ink-900/60 p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-ivory/10 bg-ink-850 p-2 text-ivory/75">
                <Flame className="h-5 w-5" />
              </div>
              <div className="font-display text-xl font-semibold">Caminho errado</div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-ivory/70">
              {[
                "Depende de audiência",
                "Trabalha o dia inteiro criando conteúdo",
                "Vive de comissão única",
                "Algoritmo controla tudo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-ivory/10 bg-ink-850 text-ivory/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-ivory/60" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delayMs={180}>
          <div className="h-full rounded-2xl border border-blood-600/25 bg-ink-850/65 p-7 shadow-glowRed">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-blood-600/25 bg-blood-600/10 p-2 text-blood-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="font-display text-xl font-semibold">Caminho certo</div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              {[
                "Sistema vende por você",
                "Páginas sem exposição",
                "Comissão recorrente (todo mês)",
                "Tráfego pago = controle e escala",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-blood-600/25 bg-blood-600/10 text-blood-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

