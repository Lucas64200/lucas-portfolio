function KetchupBottle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 170" className={className} aria-hidden>
      <rect x="30" y="4" width="40" height="22" rx="9" fill="#f8f3e8" />
      <rect x="34" y="22" width="32" height="30" rx="11" fill="#c22a20" />
      <rect x="12" y="46" width="76" height="112" rx="30" fill="#e63328" />
      <circle cx="36" cy="92" r="6" fill="#15120e" />
      <circle cx="64" cy="92" r="6" fill="#15120e" />
      <path
        d="M 34 112 Q 50 126 66 112"
        stroke="#15120e"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="30" cy="80" rx="7" ry="4" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}

function MayoBottle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 170" className={className} aria-hidden>
      <rect x="30" y="4" width="40" height="22" rx="9" fill="#e63328" />
      <rect x="34" y="22" width="32" height="30" rx="11" fill="#d9ad14" />
      <rect x="12" y="46" width="76" height="112" rx="30" fill="#f5c518" />
      <circle cx="36" cy="92" r="6" fill="#15120e" />
      <circle cx="64" cy="92" r="6" fill="#15120e" />
      <path
        d="M 34 108 Q 50 122 66 108"
        stroke="#15120e"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="30" cy="80" rx="7" ry="4" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}

export default function MascotDuo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-2 ${className}`} aria-hidden>
      <KetchupBottle className="bob h-32 w-auto sm:h-40" />
      <MayoBottle className="bob h-28 w-auto [animation-delay:0.4s] sm:h-36" />
    </div>
  );
}
