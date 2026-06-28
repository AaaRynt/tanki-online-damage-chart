// src/layout/header.tsx
export function Header() {
  return (
    <header className="border-border font-heading flex h-10 w-full items-center border-b-2 bg-cover px-4">
      <h1 className="text-lg font-semibold">
        <a href="/" className="underline-offset-4 hover:underline" target="_self">
          Tanki Online Damage Chart
        </a>
      </h1>
    </header>
  )
}
