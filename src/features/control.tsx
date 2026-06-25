// src/features/control.tsx
import { MySwitch } from '@/ui/mySwitch'

type TControlProps = {
  showTooltip: boolean
  handleShowTooltip: (showTooltip: boolean) => void
}

export function Control({ showTooltip, handleShowTooltip }: TControlProps) {
  return (
    <section className="flex w-full items-center justify-end gap-4">
      <MySwitch boolean={showTooltip} handle={handleShowTooltip} />
    </section>
  )
}
