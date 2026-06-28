// src/features/TTK.tsx
// TTK: Time to Kill

export function TTK({ showTTK }: { showTTK: boolean }) {
  const hulls = ['Light Hulls', 'Medium Hulls', 'Heavy Hulls']
  if (!showTTK) return ''

  return (
    <section className="bg-cover">
      <table>
        <thead>
          <th></th>
          {hulls.map((hull) => (
            <th key={hull}>{hull}</th>
          ))}
        </thead>
      </table>
    </section>
  )
}
