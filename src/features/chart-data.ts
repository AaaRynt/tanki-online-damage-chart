// src/features/chart-data.ts
import type { TTurrets } from '@/turrets'

export const DURATION = 10
const TOOLTIP_INTERVAL = 0.1
const TIME_PRECISION = 3
const DAMAGE_PRECISION = 3
const EPSILON = 0.0001

export const HULL_REFERENCE_LINES = [
  { protection: 2000, label: 'Light Hulls' },
  { protection: 3000, label: 'Medium Hulls' },
  { protection: 4000, label: 'Heavy Hulls' },
] as const

export type TDamageEvent = {
  time: number
  damage: number
}

export type TChartPoint = {
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

function buildTimeTicks(interval: number, duration: number) {
  return Array.from({ length: duration / interval + 1 }, (_, index) => roundTime(index * interval))
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

export function expandIntervals(pattern: number[], duration: number): number[] {
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

export function buildTurretDamageEvents(turret: TTurrets, factor = 1, duration = DURATION): TDamageEvent[] {
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

export function buildChartData(selectedTurrets: TTurrets[], factor = 1, duration = DURATION): TChartPoint[] {
  const damageEventsByTurret = new Map(
    selectedTurrets.map((turret) => [turret.name, buildTurretDamageEvents(turret, factor, duration)]),
  )
  const eventIndexesByTurret = new Map(selectedTurrets.map((turret) => [turret.name, 0]))
  const cumulativeDamageByTurret = new Map(selectedTurrets.map((turret) => [turret.name, 0]))
  const times = new Set(buildTimeTicks(TOOLTIP_INTERVAL, duration))

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
