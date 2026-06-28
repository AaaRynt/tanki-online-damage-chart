// src/ui/mySwitch.tsx
import { Switch } from 'radix-ui'

export function MySwitch({
  name,
  boolean,
  handle,
}: {
  name: string
  boolean: boolean
  handle: (boolean: boolean) => void
}) {
  return (
    <div className="border-border flex items-center gap-1 rounded-lg border bg-(--color-cover) px-3 py-2 shadow-md backdrop-blur-md">
      <label id={`show-${name}-label`} htmlFor={`show-${name}`} className="text-foreground text-sm font-medium">
        {name}
      </label>
      <Switch.Root
        id={`show-${name}`}
        checked={boolean}
        onCheckedChange={handle}
        aria-labelledby={`show-${name}-label`}
        className="border-border data-[state=checked]:bg-primary-foreground/20 data-[state=checked]:border-primary-foreground/50 focus-visible:ring-primary-foreground/60 relative h-6 w-11 rounded-full border bg-(--color-cover) shadow-inner transition-colors outline-none hover:cursor-pointer focus-visible:ring-2"
      >
        <Switch.Thumb className="bg-foreground data-[state=checked]:bg-primary-foreground block size-5 translate-x-0.5 rounded-full shadow transition-transform data-[state=checked]:translate-x-5" />
      </Switch.Root>
    </div>
  )
}
