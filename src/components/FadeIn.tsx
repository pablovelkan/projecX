import { useEffect, useId, useMemo, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
};

export default function FadeIn({ children, className, delayMs = 0, once = true }: FadeInProps) {
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style = useMemo<React.CSSProperties>(() => ({ transitionDelay: `${delayMs}ms` }), [delayMs]);

  return (
    <div
      ref={ref}
      data-fadein={id}
      style={style}
      className={
        "transform-gpu transition-all duration-700 ease-out motion-reduce:transition-none " +
        (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
}

