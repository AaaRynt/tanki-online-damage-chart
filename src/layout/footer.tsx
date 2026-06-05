// src/layout/footer.tsx
export function Footer() {
  return (
    <footer className="border-border w-full border-t-2 p-4 text-center">
      <p className="text-sm">
        Base on{' '}
        <a
          href="https://en.tankiwiki.com/Updates"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground text-[#46df11] transition-colors duration-300"
        >
          June 4th (Update 832)
        </a>
      </p>
    </footer>
  )
}
