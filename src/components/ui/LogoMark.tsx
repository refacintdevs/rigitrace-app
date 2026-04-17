type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 32, className = "" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RIGITRACE"
    >
      {/* Hexagonal shield */}
      <path
        d="M20 2 L35 10 L35 26 L20 38 L5 26 L5 10 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner lock body */}
      <rect
        x="14"
        y="18"
        width="12"
        height="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Lock shackle */}
      <path
        d="M16 18 L16 15 A4 4 0 0 1 24 15 L24 18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Keyhole */}
      <circle cx="20" cy="22" r="1.2" fill="currentColor" />
      <rect x="19.4" y="22" width="1.2" height="3" fill="currentColor" />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={28} />
      <span className="font-display text-xl font-bold tracking-tight">
        RIGI<span className="font-extrabold">TRACE</span>
      </span>
    </div>
  );
}