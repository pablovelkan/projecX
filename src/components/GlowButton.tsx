import { ArrowRight } from "lucide-react";

type GlowButtonProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
};

export default function GlowButton({ children, href, target, rel, className }: GlowButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-blood-600 to-blood-700 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-glowRedStrong transition duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-600 focus-visible:ring-offset-0 " +
        (className ? className : "")
      }
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute -inset-y-10 -left-24 w-40 rotate-12 bg-white/15 blur-md opacity-60 transition duration-200 group-hover:opacity-90 motion-reduce:hidden animate-shimmer"
      />
      <ArrowRight className="relative z-10 h-4 w-4" />
    </a>
  );
}

