// src/features/control.tsx
import { type ChangeEvent, useEffect, useMemo, useState } from 'react'
import { MySwitch } from '@/ui/mySwitch'

const FACTOR_DEBOUNCE_DELAY = 300
const MIN_FACTOR = 0.1
const MAX_FACTOR = 10

type TControlProps = {
  factor: number
  setFactor: (factor: number) => void
  showTooltip: boolean
  setShowTooltip: (showTooltip: boolean) => void
  showTTK: boolean
  setShowTTK: (showTooltip: boolean) => void
}

type TFactorProps = {
  factor: number
  setFactor: (factor: number) => void
}

type TDebouncedFunction<TArgs extends unknown[]> = ((...args: TArgs) => void) & {
  cancel: () => void
}

function clampFactor(factor: number) {
  return Math.min(MAX_FACTOR, Math.max(MIN_FACTOR, factor))
}

function debounce<TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  delay: number,
): TDebouncedFunction<TArgs> {
  let timeoutId: number | undefined

  const debounced = ((...args: TArgs) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => callback(...args), delay)
  }) as TDebouncedFunction<TArgs>

  debounced.cancel = () => {
    window.clearTimeout(timeoutId)
  }

  return debounced
}

export function Control({ factor, setFactor, showTooltip, setShowTooltip, showTTK, setShowTTK }: TControlProps) {
  return (
    <section className="flex w-full items-center justify-end gap-4">
      <Factor factor={factor} setFactor={setFactor} />
      <MySwitch name="Tooltip" boolean={showTooltip} handle={setShowTooltip} />
      <MySwitch name="TTK" boolean={showTTK} handle={setShowTTK} />
    </section>
  )
}

export function Factor({ factor, setFactor }: TFactorProps) {
  const [factorValue, setFactorValue] = useState(String(factor))
  const debouncedsetFactor = useMemo(
    () =>
      debounce((nextFactor: number) => {
        const clampedFactor = clampFactor(nextFactor)

        setFactorValue(String(clampedFactor))
        setFactor(clampedFactor)
      }, FACTOR_DEBOUNCE_DELAY),
    [setFactor],
  )

  useEffect(() => {
    return () => {
      debouncedsetFactor.cancel()
    }
  }, [debouncedsetFactor])

  function setFactorChange(event: ChangeEvent<HTMLInputElement>) {
    const nextFactorValue = event.target.value
    const nextFactor = Number(nextFactorValue)

    setFactorValue(nextFactorValue)

    if (nextFactorValue.trim() === '') {
      debouncedsetFactor.cancel()
      return
    }

    if (!Number.isFinite(nextFactor)) {
      debouncedsetFactor.cancel()
      return
    }

    debouncedsetFactor(nextFactor)
  }

  return (
    <div className="flex flex-row gap-2">
      <label htmlFor="factor" id="factor-label" className="text-foreground cursor-help text-sm font-medium">
        Factor
      </label>
      <input
        id="factor"
        type="number"
        value={factorValue}
        onChange={setFactorChange}
        className="border-foreground focus-visible:ring-primary-foreground/60 w-20 rounded-md border bg-(--color-cover) pl-2 text-sm font-medium outline-none focus-visible:ring-2"
        step={0.1}
        min={MIN_FACTOR}
        max={MAX_FACTOR}
        aria-labelledby="factor-label"
      />
    </div>
  )
}
