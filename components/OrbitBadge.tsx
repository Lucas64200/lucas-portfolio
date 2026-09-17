export default function OrbitBadge() {
  const label = "AUTOMATISATION • IA APPLIQUÉE • FREELANCE • ";

  return (
    <div className="badge-in relative flex h-40 w-40 shrink-0 items-center justify-center sm:h-48 sm:w-48">
      <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0">
        <defs>
          <path
            id="orbit-path"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <text fill="var(--neon)" fontSize="11" letterSpacing="2">
          <textPath href="#orbit-path" startOffset="0%">
            {label.repeat(2)}
          </textPath>
        </text>
      </svg>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neon sm:h-28 sm:w-28">
        <span className="font-display text-3xl font-semibold italic text-neon-foreground">
          IA
        </span>
      </div>
    </div>
  );
}
