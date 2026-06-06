// src/features/chart.tsx
import type { TTurrets } from '@/turrets'

export function Chart({ selectedTurrets }: { selectedTurrets: TTurrets[] }) {
  return (
    <div className="border-border flex min-h-12 w-full flex-wrap gap-2 rounded-lg border bg-white/2 p-2 shadow-md backdrop-blur-md">
      {selectedTurrets.map((turret) => (
        <span key={turret.name} className="text-sm leading-7" style={{ color: turret.color }}>
          {turret.name}
        </span>
      ))}
    </div>
  )
}
