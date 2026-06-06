// src/features/chart.tsx
import type { TTurrets } from '@/turrets'

export function Chart({ selectedTurrets }: { selectedTurrets: TTurrets[] }) {
  return (
    <div className="border-border flex w-full gap-2 rounded-lg border bg-white/2 p-4 shadow-xl backdrop-blur-sm">
      {selectedTurrets.map((turret) => (
        <span key={turret.name} className="text-sm" style={{ color: turret.color }}>
          {turret.name}
        </span>
      ))}
    </div>
  )
}
