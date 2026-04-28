import { Bot, Coins, Flame, LayoutTemplate, ShieldCheck, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export default function IncludesSection() {
  const items = [
    {
      icon: <Coins className="h-5 w-5" />,
      title: "Site estruturado para conversão",
      desc: "Execução real. Do zero ao funcionamento.",
    },
    {
      icon: <LayoutTemplate className="h-5 w-5" />,
      title: "Funil simples e direto",
      desc: "Próximo passo claro.",
    },
    {
      icon: <Flame className="h-5 w-5" />,
      title: "Página sem exposição",
      desc: "Sem aparecer.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Tráfego pago validado",
      desc: "Controle e escala.",
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "Leads organizados",
      desc: "Base limpa para vender.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Base pronta para escalar",
      desc: "Direção clara para crescer.",
    },
  ];

  return (
    <section id="inclusos" className="container px-6 py-16 sm:py-20">
      <FadeIn>
        <SectionTitle
          eyebrow="O QUE VOCÊ VAI CONSTRUIR"
          title="Execução real. Do zero ao funcionamento."
          subtitle="Base pronta para escalar."
        />
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <FadeIn key={item.title} delayMs={idx * 80}>
            <div className="h-full rounded-2xl border border-ivory/10 bg-ink-900/55 p-6 transition hover:border-emerald-800/30 hover:bg-ink-850/60">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-800/25 bg-emerald-800/10 text-emerald-800">
                {item.icon}
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-ivory">{item.title}</div>
              <p className="mt-2 text-sm leading-6 text-ivory/70">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-emerald-800/20 bg-ink-900/55 p-7 text-center">
        <div className="text-sm font-semibold text-ivory/85">Hospedagem inclusa.</div>
        <div className="mt-2 text-sm font-semibold text-ivory/85">Você investe apenas no domínio.</div>
      </div>
    </section>
  );
}
