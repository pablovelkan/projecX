type VineDividerProps = {
  className?: string;
};

export default function VineDivider({ className }: VineDividerProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 1200 64" className="h-8 w-full">
        <defs>
          <linearGradient id="vine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(0,100,0,0)" />
            <stop offset="0.18" stopColor="rgba(0,100,0,0.9)" />
            <stop offset="0.82" stopColor="rgba(0,100,0,0.9)" />
            <stop offset="1" stopColor="rgba(0,100,0,0)" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-300%" width="160%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M18 34 C120 10, 180 58, 300 34 S480 10, 600 34 720 58, 900 34 1080 10, 1182 34"
          fill="none"
          stroke="url(#vine)"
          strokeWidth="2"
          filter="url(#glow)"
          strokeLinecap="round"
        />
        <path
          d="M206 26 l10 6 -12 4 z M360 40 l12 -6 -4 12 z M522 24 l10 6 -12 4 z M702 40 l12 -6 -4 12 z M868 26 l10 6 -12 4 z"
          fill="rgba(0,100,0,0.85)"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}

