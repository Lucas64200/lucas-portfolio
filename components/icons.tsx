type IconProps = { className?: string };

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5l8.5 7 8.5-7" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3.5 9.5h3v11h-3v-11zM9.5 9.5h2.9v1.5h.04c.4-.76 1.4-1.56 2.86-1.56 3.06 0 3.6 2 3.6 4.6v6.46h-3v-5.73c0-1.37-.02-3.13-1.9-3.13-1.9 0-2.2 1.5-2.2 3.03v5.83h-3v-11z" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12c0 4.2 2.73 7.77 6.51 9.03.48.09.65-.21.65-.46 0-.23-.01-.83-.01-1.63-2.65.58-3.21-1.28-3.21-1.28-.43-1.1-1.06-1.39-1.06-1.39-.87-.6.07-.58.07-.58.96.07 1.46.99 1.46.99.85 1.46 2.24 1.04 2.78.79.09-.62.34-1.04.61-1.28-2.11-.24-4.34-1.06-4.34-4.72 0-1.04.37-1.9.98-2.56-.1-.24-.42-1.22.09-2.54 0 0 .8-.26 2.62.98a9 9 0 0 1 4.78 0c1.82-1.24 2.62-.98 2.62-.98.51 1.32.19 2.3.09 2.54.61.66.98 1.52.98 2.56 0 3.67-2.23 4.48-4.35 4.72.35.3.65.89.65 1.79 0 1.29-.01 2.33-.01 2.65 0 .25.17.56.66.46A9.51 9.51 0 0 0 21.5 12c0-5.25-4.25-9.5-9.5-9.5z"
      />
    </svg>
  );
}
