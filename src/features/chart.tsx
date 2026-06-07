// src/features/chart.tsx
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { TTurrets } from '@/turrets'

const DURATION = 10
const EPSILON = 0.01

type TDamagePoint = {
  time: number
  damage: number
}

function roundTime(value: number) {
  return Number(value.toFixed(2))
}

function buildTurretDamagePoints(turret: TTurrets): TDamagePoint[] {
  const [firstShotTime, reloadTime] = turret.reloadTime

  if (reloadTime <= 0) {
    return [
      {
        time: firstShotTime,
        damage: turret.damage,
      },
    ]
  }

  const points: TDamagePoint[] = []
  let shotIndex = 0

  while (true) {
    const time = roundTime(firstShotTime + shotIndex * reloadTime)

    if (time > DURATION + EPSILON) break

    points.push({
      time,
      damage: (shotIndex + 1) * turret.damage,
    })

    shotIndex += 1
  }

  return points
}

export function Chart({ selectedTurrets }: { selectedTurrets: TTurrets[] }) {
  if (selectedTurrets.length === 0) {
    return (
      <div className="border-border text-muted-foreground flex h-80 w-full items-center justify-center rounded-xl border">
        Select turrets to show damage chart
      </div>
    )
  }
  return (
    <>
      <div className="border-border flex w-full gap-2 rounded-lg border bg-white/2 p-4 shadow-xl backdrop-blur-sm">
        {selectedTurrets.map((turret) => (
          <span key={turret.name} className="text-sm" style={{ color: turret.color }}>
            {turret.name}
          </span>
        ))}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart margin={{ top: 16, right: 24, bottom: 16, left: 8 }}>
          <CartesianGrid strokeDasharray="4 12" />
          <XAxis dataKey="time" type="number" domain={[0, DURATION]} tickFormatter={(value) => `${value}s`} />
          <YAxis />
          <Tooltip labelFormatter={(value) => `${value}s`} formatter={(value, name) => [value, name]} />
          {selectedTurrets.map((turret) => (
            <Line
              key={turret.name}
              data={buildTurretDamagePoints(turret)}
              type="stepAfter"
              dataKey="damage"
              name={turret.name}
              dot={false}
              stroke={turret.color}
              strokeWidth={2}
              activeDot={{ r: 2 }}
              isAnimationActive={true}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
