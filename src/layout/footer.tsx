// src/layout/footer.tsx
export function Footer() {
  return (
    <footer className="border-border w-full border-t-2 bg-cover p-4 text-center">
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
