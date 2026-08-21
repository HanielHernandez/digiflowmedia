export function AboutComputerGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>Computer</title>

      {/* Monitor body */}
      <rect
        x="18"
        y="16"
        width="184"
        height="128"
        rx="14"
        className="fill-primary/10 stroke-primary/35"
        strokeWidth="2"
      />

      {/* Screen */}
      <rect
        x="32"
        y="30"
        width="156"
        height="92"
        rx="6"
        className="fill-background stroke-primary/20"
        strokeWidth="1.5"
      />

      {/* Screen content — window chrome */}
      <circle cx="44" cy="42" r="3" className="fill-brand-pink/80" />
      <circle cx="56" cy="42" r="3" className="fill-primary/40" />
      <circle cx="68" cy="42" r="3" className="fill-secondary/50" />
      <rect
        x="80"
        y="39"
        width="70"
        height="6"
        rx="3"
        className="fill-primary/20"
      />

      {/* Chart bars on screen */}
      <rect x="48" y="78" width="14" height="30" rx="2" className="fill-primary/35" />
      <rect x="72" y="66" width="14" height="42" rx="2" className="fill-secondary/55" />
      <rect x="96" y="72" width="14" height="36" rx="2" className="fill-brand-pink/70" />
      <rect x="120" y="58" width="14" height="50" rx="2" className="fill-primary/50" />
      <rect x="144" y="70" width="14" height="38" rx="2" className="fill-secondary/40" />

      {/* Sparkline */}
      <path
        d="M48 88 C62 84, 70 74, 84 72 C98 70, 106 82, 120 78 C132 75, 140 64, 156 62"
        className="stroke-primary/60"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="156" cy="62" r="3" className="fill-brand-pink" />

      {/* Stand neck */}
      <rect
        x="100"
        y="144"
        width="20"
        height="18"
        rx="3"
        className="fill-primary/25"
      />

      {/* Stand base */}
      <path
        d="M64 178 H156 C164 178, 168 172, 164 166 H56 C52 172, 56 178, 64 178 Z"
        className="fill-primary/30 stroke-primary/40"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
