// src/features/TTK.tsx
// TTK: Time to Kill
import { ScrollArea } from 'radix-ui'
import { useMemo, useState } from 'react'
import { DURATION, HULL_REFERENCE_LINES, buildTurretDamageEvents } from '@/features/chart-data'
import { type TTurrets, sort } from '@/turrets'

type THullProtection = (typeof HULL_REFERENCE_LINES)[number]['protection']

type TTTKRow = {
  turret: TTurrets
  timeToKill: Record<THullProtection, number | null>
}

const DEFAULT_SORT_PROTECTION = 3000
const turretSortIndex = new Map(sort.map((turretName, index) => [turretName, index]))

function getTimeToKill(turret: TTurrets, factor: number, protection: number) {
  const damageEvents = buildTurretDamageEvents(turret, factor)
  let cumulativeDamage = 0

  for (const event of damageEvents) {
    cumulativeDamage += event.damage

    if (cumulativeDamage >= protection) {
      return event.time
    }
  }

  return null
}

function buildTTKRows(selectedTurrets: TTurrets[], factor: number): TTTKRow[] {
  return selectedTurrets.map((turret) => ({
    turret,
    timeToKill: Object.fromEntries(
      HULL_REFERENCE_LINES.map(({ protection }) => [protection, getTimeToKill(turret, factor, protection)]),
    ) as Record<THullProtection, number | null>,
  }))
}

function sortTTKRows(rows: TTTKRow[], sortProtection: THullProtection) {
  return [...rows].sort((firstRow, secondRow) => {
    const firstTime = firstRow.timeToKill[sortProtection] ?? Number.POSITIVE_INFINITY
    const secondTime = secondRow.timeToKill[sortProtection] ?? Number.POSITIVE_INFINITY
    const timeDiff = firstTime - secondTime

    if (timeDiff !== 0) {
      return timeDiff
    }

    return (turretSortIndex.get(firstRow.turret.name) ?? 0) - (turretSortIndex.get(secondRow.turret.name) ?? 0)
  })
}

function formatTimeToKill(timeToKill: number | null) {
  if (timeToKill === null) {
    return `>${DURATION}s`
  }

  return `${Number(timeToKill.toFixed(3))}s`
}

export function TTK({
  showTTK,
  selectedTurrets,
  factor,
}: {
  showTTK: boolean
  selectedTurrets: TTurrets[]
  factor: number
}) {
  const [sortProtection, setSortProtection] = useState<THullProtection>(DEFAULT_SORT_PROTECTION)
  const rows = useMemo(
    () => sortTTKRows(buildTTKRows(selectedTurrets, factor), sortProtection),
    [factor, selectedTurrets, sortProtection],
  )

  if (!showTTK) return null

  return (
    <section className="border-border flex h-full min-h-0 w-136 min-w-120 flex-col overflow-hidden rounded-lg border bg-(--color-cover) shadow-md backdrop-blur-md">
      <div className="border-border border-b px-3 py-2">
        <h2 className="text-foreground text-sm font-semibold">TTK</h2>
      </div>
      <ScrollArea.Root className="min-h-0 flex-1 overflow-hidden">
        <ScrollArea.Viewport className="h-full w-full">
          <table className="w-full border-separate border-spacing-0 text-left text-sm">
            <thead className="bg-background sticky top-0">
              <tr>
                <th scope="col" className="border-border border-b px-3 py-2 font-medium">
                  Turret
                </th>
                {HULL_REFERENCE_LINES.map(({ protection, label }) => {
                  const isActive = protection === sortProtection

                  return (
                    <th
                      key={protection}
                      scope="col"
                      aria-sort={isActive ? 'ascending' : 'none'}
                      className="border-border border-b p-0 font-medium hover:cursor-pointer"
                      onClick={() => setSortProtection(protection)}
                    >
                      <button
                        type="button"
                        className={`h-full w-full px-3 py-2 text-left transition-colors hover:cursor-pointer hover:bg-white/2 ${
                          isActive ? 'text-primary-foreground' : 'text-foreground'
                        }`}
                        onClick={(event) => {
                          event.stopPropagation()
                          setSortProtection(protection)
                        }}
                      >
                        <span>{label}</span>
                      </button>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={HULL_REFERENCE_LINES.length + 1} className="text-muted-foreground px-3 py-6 text-center">
                    Select turrets to show TTK
                  </td>
                </tr>
              ) : (
                rows.map(({ turret, timeToKill }) => (
                  <tr key={turret.name} className="hover:bg-white/2">
                    <th scope="row" className="border-border border-b px-3 py-2 font-medium">
                      <div className="flex items-center gap-2">
                        <span style={{ color: turret.color }}>{turret.name}</span>
                      </div>
                    </th>
                    {HULL_REFERENCE_LINES.map(({ protection }) => (
                      <td key={protection} className="border-border border-b px-3 py-2 tabular-nums">
                        {formatTimeToKill(timeToKill[protection])}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" className="flex w-2 touch-none bg-transparent p-0.5 select-none">
          <ScrollArea.Thumb className="bg-border relative flex-1 rounded-full" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </section>
  )
}
