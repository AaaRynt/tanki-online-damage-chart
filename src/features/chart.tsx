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
import { DURATION, HULL_REFERENCE_LINES, buildChartData } from '@/features/chart-data'
import type { TTurrets } from '@/turrets'

const X_AXIS_TICK_INTERVAL = 0.5
const X_AXIS_TICKS = Array.from(
  { length: DURATION / X_AXIS_TICK_INTERVAL + 1 },
  (_, index) => index * X_AXIS_TICK_INTERVAL,
)

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
