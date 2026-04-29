import { useMemo, useState } from "react";
import { BadgeCheck } from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";

type LeadFormData = {
  nome: string;
  email: string;
  whatsapp: string;
  objetivo: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function LeadForm() {
  const [data, setData] = useState<LeadFormData>({ nome: "", email: "", whatsapp: "", objetivo: "" });
  const [touched, setTouched] = useState<Record<keyof LeadFormData, boolean>>({
    nome: false,
    email: false,
    whatsapp: false,
    objetivo: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const errors = useMemo(() => {
    const next: Partial<Record<keyof LeadFormData, string>> = {};
    if (!data.nome.trim()) next.nome = "Informe seu nome.";
    if (!data.email.trim()) next.email = "Informe seu e-mail.";
    else if (!isValidEmail(data.email.trim())) next.email = "E-mail inválido.";
    if (!data.whatsapp.trim()) next.whatsapp = "Informe seu WhatsApp.";
    return next;
  }, [data]);

  const hasErrors = Object.keys(errors).length > 0;

  function setField<K extends keyof LeadFormData>(key: K, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function markTouched<K extends keyof LeadFormData>(key: K) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ nome: true, email: true, whatsapp: true, objetivo: true });
    if (hasErrors) return;

    setStatus("submitting");
    window.setTimeout(() => {
      const storageKey = "theEmpireLegacyLeads";
      const legacyStorageKey = "aristocrataClubLeads";
      const payload = { ...data, createdAt: new Date().toISOString() };
      const raw = localStorage.getItem(storageKey) ?? localStorage.getItem(legacyStorageKey);
      const prev = raw ? (JSON.parse(raw) as unknown[]) : [];
      localStorage.setItem(storageKey, JSON.stringify([payload, ...prev].slice(0, 50)));
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
      setStatus("success");
    }, 750);
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-blood-600/25 bg-ink-850/80 p-8 shadow-glowRed">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl border border-blood-600/30 bg-blood-600/10 p-2 text-blood-600">
            <BadgeCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-ivory">Contato enviado.</div>
            <p className="mt-2 text-sm leading-6 text-ivory/70">
              Se fizer sentido para o seu momento, você recebe o próximo passo no seu WhatsApp/e-mail.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#top"
                className="inline-flex items-center justify-center rounded-full border border-blood-600/30 bg-ink-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory/85 transition hover:bg-ink-850 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-600"
              >
                Voltar ao topo
              </a>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setData({ nome: "", email: "", whatsapp: "", objetivo: "" });
                  setTouched({ nome: false, email: false, whatsapp: false, objetivo: false });
                }}
                className="inline-flex items-center justify-center rounded-full bg-blood-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-glowRed transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-600"
              >
                Enviar outra mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-blood-600/25 bg-ink-850/80 p-8 shadow-glowRed">
      <div className="font-display text-2xl font-semibold text-ivory">Quero começar agora</div>
      <p className="mt-2 text-sm leading-6 text-ivory/70">
        Preencha para eu entender seu momento e te orientar no próximo passo.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <div className="text-xs font-semibold uppercase tracking-wider text-ivory/70">Nome</div>
          <input
            value={data.nome}
            onChange={(e) => setField("nome", e.target.value)}
            onBlur={() => markTouched("nome")}
            placeholder="Seu nome"
            className="mt-2 w-full rounded-xl border border-ivory/10 bg-ink-900 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)] outline-none transition focus:border-blood-600/50 focus:shadow-[0_0_0_3px_rgba(0,100,0,0.18)]"
          />
          {touched.nome && errors.nome ? <div className="mt-2 text-xs text-ember">{errors.nome}</div> : null}
        </label>

        <label className="block">
          <div className="text-xs font-semibold uppercase tracking-wider text-ivory/70">E-mail</div>
          <input
            value={data.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => markTouched("email")}
            placeholder="voce@exemplo.com"
            className="mt-2 w-full rounded-xl border border-ivory/10 bg-ink-900 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)] outline-none transition focus:border-blood-600/50 focus:shadow-[0_0_0_3px_rgba(0,100,0,0.18)]"
          />
          {touched.email && errors.email ? <div className="mt-2 text-xs text-ember">{errors.email}</div> : null}
        </label>

        <label className="block">
          <div className="text-xs font-semibold uppercase tracking-wider text-ivory/70">WhatsApp</div>
          <input
            value={data.whatsapp}
            onChange={(e) => setField("whatsapp", e.target.value)}
            onBlur={() => markTouched("whatsapp")}
            placeholder="(11) 99999-9999"
            className="mt-2 w-full rounded-xl border border-ivory/10 bg-ink-900 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)] outline-none transition focus:border-blood-600/50 focus:shadow-[0_0_0_3px_rgba(0,100,0,0.18)]"
          />
          {touched.whatsapp && errors.whatsapp ? <div className="mt-2 text-xs text-ember">{errors.whatsapp}</div> : null}
        </label>

        <label className="block sm:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-ivory/70">Seu objetivo (opcional)</div>
          <textarea
            value={data.objetivo}
            onChange={(e) => setField("objetivo", e.target.value)}
            onBlur={() => markTouched("objetivo")}
            rows={4}
            placeholder="Em 2–3 linhas, onde você quer chegar e o que trava hoje."
            className="mt-2 w-full resize-none rounded-xl border border-ivory/10 bg-ink-900 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)] outline-none transition focus:border-blood-600/50 focus:shadow-[0_0_0_3px_rgba(0,100,0,0.18)]"
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs leading-5 text-ivory/55">Ao enviar, você concorda em ser contatado(a) por e-mail/WhatsApp.</div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-blood-600 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-glowRedStrong transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-600"
        >
          {status === "submitting" ? "Enviando..." : "Falar no WhatsApp Agora"}
        </button>
      </div>
    </form>
  );
}

