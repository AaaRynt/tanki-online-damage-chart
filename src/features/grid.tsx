// src/features/grid.tsx
// https://en.tankiwiki.com/Turrets
import type { TTurrets } from '@/turrets'

type TTurretName = TTurrets['name']

export function Grid({
  meleeRangeTurrets,
  mediumRangeTurrets,
  longRangeTurrets,
  selected,
  handleSelected,
}: {
  meleeRangeTurrets: TTurrets[]
  mediumRangeTurrets: TTurrets[]
  longRangeTurrets: TTurrets[]
  selected: TTurretName[]
  handleSelected: (turretName: TTurretName) => void
}) {
  return (
    <div className="flex flex-row gap-5">
      <Row turretArr={meleeRangeTurrets} selected={selected} onToggleTurret={handleSelected} />
      <Row turretArr={mediumRangeTurrets} selected={selected} onToggleTurret={handleSelected} />
      <Row turretArr={longRangeTurrets} selected={selected} onToggleTurret={handleSelected} />
    </div>
  )
}

function Row({
  turretArr,
  selected,
  onToggleTurret,
}: {
  turretArr: TTurrets[]
  selected: TTurretName[]
  onToggleTurret: (turretName: TTurretName) => void
}) {
  return (
    <div className="flex gap-2">
      {turretArr.map((turret) => (
        <Checkbox
          key={turret.name}
          turret={turret}
          checked={selected.includes(turret.name)}
          onToggleTurret={onToggleTurret}
        />
      ))}
    </div>
  )
}

function Checkbox({
  turret,
  checked,
  onToggleTurret,
}: {
  turret: TTurrets
  checked: boolean
  onToggleTurret: (turretName: TTurretName) => void
}) {
  return (
    <button
      aria-pressed={checked}
      className={`hover:bg-primary-foreground/8 size-12 rounded-lg border bg-white/2 p-2 shadow-md backdrop-blur-md transition-colors hover:cursor-pointer ${
        checked ? 'border-primary-foreground/80' : 'border-border'
      }`}
      onClick={() => onToggleTurret(turret.name)}
    >
      <img src={`icon/${turret.name}_logo.png`} alt={turret.name} />
    </button>
  )
}
