// src/layout/main.tsx
import { useEffect, useState } from 'react'
import { Chart, Control, Grid, TTK } from '@/features/index'
import { allTurrets, longRangeTurrets, mediumRangeTurrets, meleeRangeTurrets, sort } from '@/turrets'

const SELECTED_TURRETS_PARAM = 'turrets'
const turretByName = new Map(allTurrets.map((turret) => [turret.name, turret]))

function normalizeSelectedTurretNames(turretNames: string[]) {
  return sort.filter((name) => turretNames.includes(name))
}

function getSelectedTurretNamesFromUrl() {
  if (typeof window === 'undefined') {
    return []
  }

  const selectedTurretSlugs = new Set(
    new URLSearchParams(window.location.search)
      .get(SELECTED_TURRETS_PARAM)
      ?.split(',')
      .map((turretSlug) => turretSlug.trim().toLowerCase())
      .filter(Boolean) ?? [],
  )

  return sort.filter((name) => selectedTurretSlugs.has(name.toLowerCase()))
}

function updateSelectedTurretsUrl(turretNames: string[], mode: 'push' | 'replace') {
  const url = new URL(window.location.href)
  const selectedTurretSlugs = normalizeSelectedTurretNames(turretNames).map((name) => name.toLowerCase())

  if (selectedTurretSlugs.length === 0) {
    url.searchParams.delete(SELECTED_TURRETS_PARAM)
  } else {
    url.searchParams.set(SELECTED_TURRETS_PARAM, selectedTurretSlugs.join(','))
  }
  const nextUrl = `${url.pathname}${url.search}${url.hash}`

  if (nextUrl === `${window.location.pathname}${window.location.search}${window.location.hash}`) {
    return
  }

  if (mode === 'replace') window.history.replaceState(null, '', nextUrl)
  else window.history.pushState(null, '', nextUrl)
}

export function Main() {
  const [selected, setSelected] = useState<string[]>(getSelectedTurretNamesFromUrl)
  const [factor, setFactor] = useState<number>(1)
  const [showTooltip, setShowTooltip] = useState(true)
  const [showTTK, setShowTTK] = useState(false)

  const selectedTurrets = sort.flatMap((name) => {
    const turret = turretByName.get(name)
    return turret && selected.includes(name) ? [turret] : []
  })

  useEffect(() => {
    updateSelectedTurretsUrl(getSelectedTurretNamesFromUrl(), 'replace')
    function handlePopState() {
      setSelected(getSelectedTurretNamesFromUrl())
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  function handleSelected(turretName: string) {
    const nextSelected = normalizeSelectedTurretNames(
      selected.includes(turretName)
        ? selected.filter((currentTurretName) => currentTurretName !== turretName)
        : [...selected, turretName],
    )
    setSelected(nextSelected)
    updateSelectedTurretsUrl(nextSelected, 'push')
  }
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col items-center gap-2 overflow-hidden px-12 py-4">
      <Grid
        meleeRangeTurrets={meleeRangeTurrets}
        mediumRangeTurrets={mediumRangeTurrets}
        longRangeTurrets={longRangeTurrets}
        selected={selected}
        handleSelected={handleSelected}
      />
      <div className="flex min-h-0 w-full flex-1 flex-row gap-2 overflow-hidden">
        <Chart selectedTurrets={selectedTurrets} showTooltip={showTooltip} factor={factor} />
        <TTK showTTK={showTTK} selectedTurrets={selectedTurrets} factor={factor} />
      </div>
      <Control
        factor={factor}
        setFactor={setFactor}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
        showTTK={showTTK}
        setShowTTK={setShowTTK}
      />
    </main>
  )
}
