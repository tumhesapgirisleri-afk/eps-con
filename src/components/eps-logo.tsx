/**
 * EPS — Engineering Process Solutions
 * Fully vector, resolution-independent logo. The star rotates into place and
 * twinkles; the three beams grow up from the apex in harmony with the star.
 */
export function EpsLogo({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  const a = (base: string, anim: string) => (animated ? `${base} ${anim}` : base);

  return (
    <svg
      viewBox="0 0 880 240"
      className={className}
      role="img"
      aria-label="EPS — Engineering Process Solutions"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="eps-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef2f6" />
          <stop offset="28%" stopColor="#c3ccd6" />
          <stop offset="50%" stopColor="#828d99" />
          <stop offset="72%" stopColor="#c8d0d9" />
          <stop offset="100%" stopColor="#6a737d" />
        </linearGradient>
        <linearGradient id="eps-beam-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f7fa" />
          <stop offset="55%" stopColor="#c9d0d8" />
          <stop offset="100%" stopColor="#8b939d" />
        </linearGradient>
        <linearGradient id="eps-beam-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5d7fc0" />
          <stop offset="100%" stopColor="#3f5da3" />
        </linearGradient>
        <radialGradient id="eps-bead" cx="42%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#5a626c" />
          <stop offset="55%" stopColor="#2b3038" />
          <stop offset="100%" stopColor="#05070a" />
        </radialGradient>
        <radialGradient id="eps-star-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#eaf2ff" />
          <stop offset="100%" stopColor="#9fbdf2" />
        </radialGradient>
      </defs>

      {/* ---- MARK ---- */}
      <g>
        {/* Blue open ring (two symmetric arcs) */}
        <path
          className={a("eps-mark-arc", "eps-mark-arc-l")}
          d="M56.1 164.7 A78 78 0 0 1 95.9 45.8"
          fill="none"
          stroke="#4666ad"
          strokeWidth="15"
          strokeLinecap="round"
          style={{ ["--dash" as string]: "300", strokeDasharray: 300 }}
        />
        <path
          className={a("eps-mark-arc", "eps-mark-arc-r")}
          d="M183.9 164.7 A78 78 0 0 0 144.1 45.8"
          fill="none"
          stroke="#4666ad"
          strokeWidth="15"
          strokeLinecap="round"
          style={{ ["--dash" as string]: "300", strokeDasharray: 300 }}
        />

        {/* Three converging beams (roads) */}
        <polygon
          className={a("eps-mark-beam", "eps-mark-beam-l")}
          points="106,100 116,100 96,222 66,222"
          fill="url(#eps-beam-silver)"
        />
        <polygon
          className={a("eps-mark-beam", "eps-mark-beam-r")}
          points="124,100 134,100 174,222 144,222"
          fill="url(#eps-beam-silver)"
        />
        <polygon
          className={a("eps-mark-beam", "eps-mark-beam-c")}
          points="114,100 126,100 136,222 104,222"
          fill="url(#eps-beam-blue)"
        />

        {/* Metal bead + star */}
        <circle cx="120" cy="78" r="25" fill="url(#eps-bead)" />
        <circle
          className={a("", "eps-mark-glow")}
          cx="120"
          cy="78"
          r="20"
          fill="url(#eps-star-core)"
          opacity="0.6"
        />
        <path
          className={a("", "eps-mark-star")}
          d="M120 54 L124.5 73.5 L144 78 L124.5 82.5 L120 102 L115.5 82.5 L96 78 L115.5 73.5 Z"
          fill="url(#eps-star-core)"
          stroke="#ffffff"
          strokeWidth="0.5"
        />
      </g>

      {/* Divider */}
      <line x1="252" y1="42" x2="252" y2="198" stroke="#4666ad" strokeWidth="5" strokeLinecap="round" />

      {/* ---- WORDMARK ---- */}
      <text
        x="288"
        y="151"
        fontFamily="'Sora', system-ui, sans-serif"
        fontSize="166"
        fontWeight="800"
        letterSpacing="-3"
        fill="url(#eps-steel)"
      >
        EPS
      </text>
      <text
        x="292"
        y="195"
        fontFamily="'Sora', system-ui, sans-serif"
        fontSize="26.5"
        fontWeight="600"
        letterSpacing="4.7"
        fill="#4f6fb0"
        textLength="556"
        lengthAdjust="spacingAndGlyphs"
      >
        ENGINEERING PROCESS SOLUTIONS
      </text>
    </svg>
  );
}
