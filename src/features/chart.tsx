// src/features/chart.tsx
//https://recharts.github.io/en-US/guide/
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { TTurrets } from '@/turrets'

const DURATION = 10
const X_AXIS_TICK_INTERVAL = 0.5
const X_AXIS_TICKS = Array.from(
  { length: DURATION / X_AXIS_TICK_INTERVAL + 1 },
  (_, index) => index * X_AXIS_TICK_INTERVAL,
)
const HULL_REFERENCE_LINES = [
  { protection: 2000, label: 'Light Hulls' },
  { protection: 3000, label: 'Medium Hulls' },
  { protection: 4000, label: 'Heavy Hulls' },
]
const TIME_PRECISION = 3
const DAMAGE_PRECISION = 3
const EPSILON = 0.0001

type TDamageEvent = {
  time: number
  damage: number
}

type TChartPoint = {
  time: number
  [turretName: string]: number
}

function roundTime(value: number) {
  const roundedTime = Number(value.toFixed(TIME_PRECISION))

  return Object.is(roundedTime, -0) ? 0 : roundedTime
}

function scaleDamage(damage: number, factor: number) {
  return Number((damage * factor).toFixed(DAMAGE_PRECISION))
}

function getPatternIntervals(pattern: number[]) {
  const repeatModeIndex = pattern.findIndex((interval) => interval === -1 || interval === -2)

  if (repeatModeIndex === -1) {
    return {
      intervals: pattern.filter((interval) => interval >= 0),
      repeatMode: undefined,
    }
  }

  return {
    intervals: pattern.slice(0, repeatModeIndex).filter((interval) => interval >= 0),
    repeatMode: pattern[repeatModeIndex],
  }
}

function getRepeatIntervals(intervals: number[], repeatMode?: number) {
  if (repeatMode === -1) {
    const lastInterval = intervals[intervals.length - 1]

    return lastInterval === undefined ? [] : [lastInterval]
  }

  if (repeatMode === -2) {
    return intervals[0] === 0 ? intervals.slice(1) : intervals
  }

  return []
}

function expandIntervals(pattern: number[], duration: number): number[] {
  const { intervals, repeatMode } = getPatternIntervals(pattern)
  const times: number[] = []
  let currentTime = 0

  for (const interval of intervals) {
    currentTime = roundTime(currentTime + interval)

    if (currentTime > duration + EPSILON) {
      return times
    }

    times.push(currentTime)
  }

  const repeatIntervals = getRepeatIntervals(intervals, repeatMode)

  if (repeatIntervals.length === 0 || repeatIntervals.every((interval) => interval === 0)) {
    return times
  }

  let repeatIndex = 0

  while (true) {
    currentTime = roundTime(currentTime + repeatIntervals[repeatIndex])

    if (currentTime > duration + EPSILON) {
      break
    }

    times.push(currentTime)
    repeatIndex = (repeatIndex + 1) % repeatIntervals.length
  }

  return times
}

function buildTurretDamageEvents(turret: TTurrets, factor = 1, duration = DURATION): TDamageEvent[] {
  const baseDamageEvents = expandIntervals(turret.reloadTime, duration).map((time) => ({
    time,
    damage: scaleDamage(turret.damage, factor),
  }))

  if (!turret.add) {
    return baseDamageEvents
  }

  const [additionalDamagePattern, additionalDamage] = turret.add
  const additionalDamageEvents = expandIntervals(additionalDamagePattern, duration).map((time) => ({
    time,
    damage: scaleDamage(additionalDamage, factor),
  }))

  return [...baseDamageEvents, ...additionalDamageEvents].sort(
    (firstEvent, secondEvent) => firstEvent.time - secondEvent.time,
  )
}

function buildChartData(selectedTurrets: TTurrets[], factor = 1, duration = DURATION): TChartPoint[] {
  const damageEventsByTurret = new Map(
    selectedTurrets.map((turret) => [turret.name, buildTurretDamageEvents(turret, factor, duration)]),
  )
  const eventIndexesByTurret = new Map(selectedTurrets.map((turret) => [turret.name, 0]))
  const cumulativeDamageByTurret = new Map(selectedTurrets.map((turret) => [turret.name, 0]))
  const times = new Set([0, duration])

  damageEventsByTurret.forEach((events) => {
    events.forEach((event) => times.add(event.time))
  })

  return [...times]
    .sort((firstTime, secondTime) => firstTime - secondTime)
    .map((time) => {
      const chartPoint: TChartPoint = { time }

      selectedTurrets.forEach((turret) => {
        const events = damageEventsByTurret.get(turret.name) ?? []
        let eventIndex = eventIndexesByTurret.get(turret.name) ?? 0
        let cumulativeDamage = cumulativeDamageByTurret.get(turret.name) ?? 0

        while (eventIndex < events.length && events[eventIndex].time <= time + EPSILON) {
          cumulativeDamage += events[eventIndex].damage
          eventIndex += 1
        }

        eventIndexesByTurret.set(turret.name, eventIndex)
        cumulativeDamageByTurret.set(turret.name, cumulativeDamage)
        chartPoint[turret.name] = cumulativeDamage
      })

      return chartPoint
    })
}

export function Chart({
  selectedTurrets,
  showTooltip = true,
  factor = 1,
}: {
  selectedTurrets: TTurrets[]
  showTooltip?: boolean
  factor?: number
}) {
  if (selectedTurrets.length === 0) {
    return (
      <div className="border-border text-muted-foreground flex h-80 w-full items-center justify-center rounded-xl border">
        Select turrets to show damage chart
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%" className="[&_.recharts-surface:focus]:outline-none">
      <LineChart data={buildChartData(selectedTurrets, factor)} margin={{ top: 16, right: 24, bottom: 16, left: 8 }}>
        <CartesianGrid stroke="var(--color-border)" vertical={false} />
        <XAxis
          dataKey="time"
          type="number"
          domain={[0, DURATION]}
          ticks={X_AXIS_TICKS}
          tickFormatter={(value) => `${value}s`}
          tickMargin={8}
        />
        <YAxis tickMargin={8} />
        {HULL_REFERENCE_LINES.map(({ protection, label }) => (
          <ReferenceLine
            key={protection}
            y={protection}
            stroke="var(--color-foreground)"
            ifOverflow="extendDomain"
            label={{
              value: label,
              position: 'insideTopRight',
              fill: 'var(--color-foreground)',
              fontSize: 12,
            }}
          />
        ))}
        {showTooltip && (
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
        )}

        {selectedTurrets.map((turret) => (
          <Line
            key={turret.name}
            type="stepAfter"
            dataKey={turret.name}
            name={turret.name}
            stroke={turret.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 2 }}
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
