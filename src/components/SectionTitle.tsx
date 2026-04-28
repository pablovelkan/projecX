type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-ivory/60">{eyebrow}</div>
      ) : null}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-ivory/70">{subtitle}</p> : null}
    </div>
  );
}

