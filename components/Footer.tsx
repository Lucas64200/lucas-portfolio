export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 text-sm text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} Lucas Monvoisin
      </div>
    </footer>
  );
}
