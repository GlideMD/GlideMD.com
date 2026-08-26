type GlideArcProps = {
  className?: string;
  /** Show the small dot that travels to the end of the path, like a glider's position. */
  showMarker?: boolean;
};

/**
 * The signature element of the GlideMD visual system: a single continuous
 * arc that eases downward and levels out, the way a glider catches a
 * thermal and settles into smooth, sustained flight. It opens the hero and
 * reappears, unbroken, threading through the "how it works" steps — the
 * same line represents the whole patient journey rather than a decorative
 * flourish repeated per-section.
 */
export default function GlideArc({ className, showMarker = true }: GlideArcProps) {
  return (
    <svg
      viewBox="0 0 960 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 24 C 260 24, 420 190, 700 196 S 900 150, 952 96"
        stroke="var(--color-gold)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
        className="glide-path"
      />
      {showMarker && (
        <circle r="7" fill="var(--color-clay)" className="glide-marker">
          <animateMotion
            dur="2.4s"
            begin="0.3s"
            fill="freeze"
            path="M8 24 C 260 24, 420 190, 700 196 S 900 150, 952 96"
          />
        </circle>
      )}
      <style>{`
        .glide-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: glide-draw 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }
        .glide-marker {
          opacity: 0;
          animation: glide-fade 0.4s ease 0.2s forwards;
        }
        @keyframes glide-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes glide-fade {
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .glide-path { stroke-dashoffset: 0; animation: none; }
          .glide-marker { opacity: 1; }
          .glide-marker animateMotion { display: none; }
        }
      `}</style>
    </svg>
  );
}
