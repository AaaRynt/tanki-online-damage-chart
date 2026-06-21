// src/features/chart.tsx
import { Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { TTurrets } from '@/turrets'

const DURATION = 10
const X_AXIS_TICK_INTERVAL = 0.5
const X_AXIS_TICKS = Array.from(
  { length: DURATION / X_AXIS_TICK_INTERVAL + 1 },
  (_, index) => index * X_AXIS_TICK_INTERVAL,
)
const EPSILON = 0.01

type TDamagePoint = {
  time: number
  damage: number
}

function roundTime(value: number) {
  return Number(value.toFixed(2))
}

function extendDamagePointsToDuration(points: TDamagePoint[]) {
  const lastPoint = points[points.length - 1]

  if (!lastPoint || lastPoint.time >= DURATION) {
    return points
  }

  return [...points, { time: DURATION, damage: lastPoint.damage }]
}

function buildTurretDamagePoints(turret: TTurrets): TDamagePoint[] {
  const [firstShotTime, reloadTime] = turret.reloadTime

  if (reloadTime <= 0) {
    return extendDamagePointsToDuration([
      {
        time: firstShotTime,
        damage: turret.damage,
      },
    ])
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

  return extendDamagePointsToDuration(points)
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
    <ResponsiveContainer width="100%" height="100%">
      <LineChart margin={{ top: 16, right: 24, bottom: 16, left: 8 }}>
        <XAxis
          dataKey="time"
          type="number"
          domain={[0, DURATION]}
          ticks={X_AXIS_TICKS}
          tickFormatter={(value) => `${value}s`}
          tickMargin={8}
        />
        <YAxis tickMargin={8} />
        {[2000, 3000, 4000].map((damage) => (
          <ReferenceLine key={damage} y={damage} stroke="#ffffff80" ifOverflow="extendDomain" />
        ))}
        <Tooltip
          cursor={false}
          contentStyle={{
            color: 'var(--foreground)',
            backgroundColor: 'color-mix(in srgb, var(--color-cover) 90%, transparent)',
            border: '1px solid var(--color-cover)',
            borderRadius: '0.2rem',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
          labelFormatter={(value) => `${value}s`}
          formatter={(value, name) => [value, name]}
        />
        {selectedTurrets.map((turret) => (
          <Line
            key={turret.name}
            type="stepAfter"
            dataKey="damage"
            name={turret.name}
            stroke={turret.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 2 }}
            data={buildTurretDamagePoints(turret)}
            isAnimationActive={true}
          />
        ))}
        <Legend content={() => <TurretLegend selectedTurrets={selectedTurrets} />} />
      </LineChart>
    </ResponsiveContainer>
  )
}

function TurretLegend({ selectedTurrets }: { selectedTurrets: TTurrets[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {selectedTurrets.map((turret) => (
        <div key={turret.name} className="flex items-center gap-1 text-sm">
          <span className="h-0.5 w-4" style={{ backgroundColor: turret.color }} />
          <span>{turret.name}</span>
        </div>
      ))}
    </div>
  )
}

// function TTK({ selectedTurrets }: { selectedTurrets: TTurrets[] }) {
//   return <section className="bg-cover"></section>
// }
