// src/features/grid.tsx
// https://en.tankiwiki.com/Turrets
import type { CSSProperties } from 'react'
import type { TTurrets } from '@/turrets'

type TTurretName = TTurrets['name']
type TCheckboxStyle = {
  '--turret-background': string
  '--turret-border': string
  '--turret-hover': string
} & CSSProperties

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
      <Row turretArr={meleeRangeTurrets} selected={selected} handleSelected={handleSelected} />
      <Row turretArr={mediumRangeTurrets} selected={selected} handleSelected={handleSelected} />
      <Row turretArr={longRangeTurrets} selected={selected} handleSelected={handleSelected} />
    </div>
  )
}

function Row({
  turretArr,
  selected,
  handleSelected,
}: {
  turretArr: TTurrets[]
  selected: TTurretName[]
  handleSelected: (turretName: TTurretName) => void
}) {
  return (
    <div className="flex gap-2">
      {turretArr.map((turret) => (
        <Checkbox
          key={turret.name}
          turret={turret}
          checked={selected.includes(turret.name)}
          handleSelected={handleSelected}
        />
      ))}
    </div>
  )
}

function Checkbox({
  turret,
  checked,
  handleSelected,
}: {
  turret: TTurrets
  checked: boolean
  handleSelected: (turretName: TTurretName) => void
}) {
  return (
    <button
      aria-pressed={checked}
      className="size-12 rounded-lg border border-(--turret-border) bg-(--turret-background) p-1 shadow-lg backdrop-blur-sm transition-colors select-none hover:cursor-pointer hover:bg-(--turret-hover)"
      style={
        {
          '--turret-background': checked ? turret.color + '10' : '#ffffff05',
          '--turret-border': checked ? turret.color + 'd0' : 'var(--color-border)',
          '--turret-hover': turret.color + '20',
        } as TCheckboxStyle
      }
      onClick={() => handleSelected(turret.name)}
    >
      <img src={`icon/${turret.name}.svg`} alt={turret.name} />
    </button>
  )
}
