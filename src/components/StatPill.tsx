type StatPillProps = {
  icon: React.ReactNode;
  label: string;
};

export default function StatPill({ icon, label }: StatPillProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blood-600/25 bg-ink-850/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ivory/80 shadow-[0_0_0_1px_rgba(0,100,0,0.12)]">
      <span className="text-blood-600">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

