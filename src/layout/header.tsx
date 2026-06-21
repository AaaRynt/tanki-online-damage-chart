// src/layout/header.tsx
export function Header() {
  return (
    <header className="border-border font-heading w-full border-b-2 bg-cover p-4">
      <h1 className="text-xl font-semibold">
        <a href="/" className="underline-offset-4 hover:underline" target="_self">
          Tanki Online Damage Chart
        </a>
      </h1>
    </header>
  )
}
