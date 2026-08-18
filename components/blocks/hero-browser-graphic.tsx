export function HeroBrowserGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>Abstract analytics browser window</title>

      {/* Window chrome */}
      <rect
        x="1"
        y="1"
        width="418"
        height="278"
        rx="16"
        className="fill-card stroke-border"
        strokeWidth="2"
      />
      <rect x="1" y="1" width="418" height="44" rx="16" className="fill-muted" />
      <rect x="1" y="29" width="418" height="16" className="fill-muted" />

      {/* Traffic lights */}
      <circle cx="28" cy="23" r="6" className="fill-brand-pink" />
      <circle cx="48" cy="23" r="6" className="fill-primary/70" />
      <circle cx="68" cy="23" r="6" className="fill-success" />

      {/* URL bar */}
      <rect
        x="96"
        y="14"
        width="250"
        height="18"
        rx="9"
        className="fill-background stroke-border"
        strokeWidth="1"
      />
      <circle cx="110" cy="23" r="3" className="fill-muted-foreground/40" />
      <rect
        x="120"
        y="20"
        width="120"
        height="6"
        rx="3"
        className="fill-muted-foreground/25"
      />

      {/* Chart card — line */}
      <rect
        x="28"
        y="68"
        width="230"
        height="140"
        rx="12"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="44"
        y="84"
        width="72"
        height="8"
        rx="4"
        className="fill-muted-foreground/30"
      />
      <rect
        x="44"
        y="98"
        width="44"
        height="6"
        rx="3"
        className="fill-muted-foreground/15"
      />

      {/* Grid lines */}
      <path
        d="M44 180 H234 M44 156 H234 M44 132 H234"
        className="stroke-border"
        strokeWidth="1"
      />

      {/* Line chart */}
      <path
        d="M48 168 C78 160, 96 148, 120 136 C144 124, 156 118, 180 108 C204 98, 220 92, 236 84"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 168 C78 160, 96 148, 120 136 C144 124, 156 118, 180 108 C204 98, 220 92, 236 84 V180 H48 Z"
        className="fill-primary/10"
      />
      <circle cx="120" cy="136" r="4" className="fill-primary" />
      <circle cx="180" cy="108" r="4" className="fill-brand-pink" />
      <circle cx="236" cy="84" r="4" className="fill-secondary" />

      {/* Bar chart card */}
      <rect
        x="274"
        y="68"
        width="118"
        height="140"
        rx="12"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="290"
        y="84"
        width="56"
        height="7"
        rx="3.5"
        className="fill-muted-foreground/30"
      />

      {/* Bars */}
      <rect x="292" y="160" width="14" height="28" rx="3" className="fill-primary/40" />
      <rect x="312" y="140" width="14" height="48" rx="3" className="fill-secondary" />
      <rect x="332" y="124" width="14" height="64" rx="3" className="fill-primary" />
      <rect x="352" y="148" width="14" height="40" rx="3" className="fill-brand-pink" />

      {/* Bottom metric chips */}
      <rect
        x="28"
        y="224"
        width="118"
        height="36"
        rx="10"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="42"
        y="236"
        width="40"
        height="6"
        rx="3"
        className="fill-muted-foreground/25"
      />
      <rect x="42" y="246" width="28" height="5" rx="2.5" className="fill-success/70" />

      <rect
        x="158"
        y="224"
        width="118"
        height="36"
        rx="10"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="172"
        y="236"
        width="40"
        height="6"
        rx="3"
        className="fill-muted-foreground/25"
      />
      <rect x="172" y="246" width="36" height="5" rx="2.5" className="fill-primary/70" />

      <rect
        x="288"
        y="224"
        width="104"
        height="36"
        rx="10"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="302"
        y="236"
        width="40"
        height="6"
        rx="3"
        className="fill-muted-foreground/25"
      />
      <rect
        x="302"
        y="246"
        width="24"
        height="5"
        rx="2.5"
        className="fill-brand-pink/80"
      />
    </svg>
  );
}
