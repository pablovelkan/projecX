import { ShieldCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import LeadForm from "@/components/LeadForm";

export default function ApplySection() {
  return (
    <section id="apply" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/95 to-ink-950" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(0,100,0,1) 0.5px, transparent 0.5px), radial-gradient(circle at 70% 68%, rgba(243,235,221,1) 0.5px, transparent 0.5px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="relative container px-6 py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-5xl">
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-ivory/60">Mentoria individual. Vagas limitadas.</div>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">Falar no WhatsApp agora</h3>
                <p className="mt-4 text-sm leading-7 text-ivory/75">
                  Quero começar agora
                </p>
                <div className="mt-9 rounded-2xl border border-blood-600/20 bg-ink-900/55 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-blood-600/25 bg-blood-600/10 p-2 text-blood-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-ivory/60">Aviso</div>
                      <div className="mt-1 font-display text-lg font-semibold text-ivory">Mentoria individual. Vagas limitadas.</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-ivory/70">
                    Preencha e eu te chamo no WhatsApp.
                  </p>
                </div>
              </div>

              <div>
                <LeadForm />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

