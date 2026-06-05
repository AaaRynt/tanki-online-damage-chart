// src/features/grid.tsx
// https://en.tankiwiki.com/Turrets
import { useState } from 'react'
import type { TTurrets } from '@/turrets'
import {
  Firebird,
  Freeze,
  Gauss,
  Hammer,
  Isida,
  Magnum,
  Railgun,
  Ricochet,
  Scorpion,
  Shaft,
  Smoky,
  Striker,
  Tesla,
  Thunder,
  Tsunami,
  Twins,
  Vulcan,
} from '@/turrets'

type TTurretName = TTurrets['name']

const meleeRangeTurrets: TTurrets[] = [Firebird, Freeze, Isida, Tesla, Hammer]
const mediumRangeTurrets: TTurrets[] = [Twins, Ricochet, Vulcan, Smoky, Striker, Thunder]
const longRangeTurrets: TTurrets[] = [Tsunami, Scorpion, Magnum, Railgun, Gauss, Shaft]
const sort: TTurrets[] = [...meleeRangeTurrets, ...mediumRangeTurrets, ...longRangeTurrets]

export function Grid() {
  const [selectedTurretNames, setSelectedTurretNames] = useState<TTurretName[]>([])
  const selectedTurrets = sort.filter((turret) => selectedTurretNames.includes(turret.name))

  function toggleTurret(turretName: TTurretName) {
    setSelectedTurretNames((currentTurretNames) =>
      currentTurretNames.includes(turretName)
        ? currentTurretNames.filter((currentTurretName) => currentTurretName !== turretName)
        : [...currentTurretNames, turretName],
    )
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <Row turretArr={meleeRangeTurrets} selectedTurretNames={selectedTurretNames} onToggleTurret={toggleTurret} />
      <Row turretArr={mediumRangeTurrets} selectedTurretNames={selectedTurretNames} onToggleTurret={toggleTurret} />
      <Row turretArr={longRangeTurrets} selectedTurretNames={selectedTurretNames} onToggleTurret={toggleTurret} />
      <div className="border-border flex min-h-12 w-full flex-wrap gap-2 rounded-lg border bg-white/2 p-2 shadow-md backdrop-blur-md">
        {selectedTurrets.map((turret) => (
          <span key={turret.name} className="text-sm leading-7">
            {turret.name}
          </span>
        ))}
      </div>
    </div>
  )
}

function Row({
  turretArr,
  selectedTurretNames,
  onToggleTurret,
}: {
  turretArr: TTurrets[]
  selectedTurretNames: TTurretName[]
  onToggleTurret: (turretName: TTurretName) => void
}) {
  return (
    <div className="flex w-full gap-2">
      {turretArr.map((turret) => (
        <Checkbox
          key={turret.name}
          turret={turret}
          checked={selectedTurretNames.includes(turret.name)}
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
