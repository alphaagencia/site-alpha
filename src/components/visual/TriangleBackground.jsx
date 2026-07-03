export default function TriangleBackground({ variant = "hero", className = "" }) {
  if (variant === "hero") {
    return (
      <svg
        className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g opacity="0.14" stroke="#C8A45D" fill="none" strokeWidth="1">
          <polygon points="1550,120 1900,120 1725,420" />
          <polygon points="1590,170 1860,170 1725,410" />
          <polygon points="1630,220 1820,220 1725,400" />
        </g>
        <g opacity="0.10" stroke="#C8A45D" fill="none" strokeWidth="1">
          <polygon points="60,1080 420,1080 240,760" />
          <polygon points="110,1080 370,1080 240,800" />
        </g>
        <polygon
          points="1300,860 1780,860 1540,440"
          opacity="0.05"
          stroke="#E8D7A8"
          fill="none"
          strokeWidth="1"
        />
      </svg>
    );
  }

  // variant="corner" — versão discreta para CTA final / rodapé
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width="420"
      height="420"
      viewBox="0 0 420 420"
      aria-hidden="true"
    >
      <g opacity="0.08" stroke="#C8A45D" fill="none" strokeWidth="1">
        <polygon points="420,0 420,300 180,0" />
        <polygon points="420,40 420,270 210,40" />
      </g>
    </svg>
  );
}
