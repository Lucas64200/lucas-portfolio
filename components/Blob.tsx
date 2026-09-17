export default function Blob({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        fill="currentColor"
        d="M141.5,-158.5 C193.5,-133.5 253.5,-100.5 271.5,-52.5 C289.5,-4.5 265.5,58.5 228.5,105.5 C191.5,152.5 141.5,183.5 87,199.5 C32.5,215.5 -26.5,216.5 -76.5,196.5 C-126.5,176.5 -167.5,135.5 -195.5,86 C-223.5,36.5 -238.5,-21.5 -220.5,-68.5 C-202.5,-115.5 -151.5,-151.5 -99,-176.5 C-46.5,-201.5 7.5,-215.5 58,-206.5 C108.5,-197.5 89.5,-183.5 141.5,-158.5 Z"
        transform="translate(200 200)"
      />
    </svg>
  );
}
