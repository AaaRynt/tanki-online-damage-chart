// src/layout/footer.tsx
export function Footer() {
  return (
    <footer className="border-border flex h-8 w-full items-center justify-center border-t-2 bg-cover">
      <p className="text-sm">
        Base on{' '}
        <a
          href="https://en.tankiwiki.com/Updates"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground text-primary-foreground transition-colors duration-300 hover:underline"
        >
          June 4th, 2026 (Update 832)
        </a>
      </p>
    </footer>
  )
}
