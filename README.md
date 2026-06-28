# Tanki Online Damage Chart

[English](./README.md) │ [简体中文](./README_zh.md) │ [Русский](./README_ru.md)

A small React tool for comparing Tanki Online turret damage over a fixed 10-second window.

The chart uses real turret attack timings from the local data model instead of sampling damage at fixed intervals. Multiple turrets can be selected at once, and each selected turret is rendered as a stepped cumulative-damage line.

## Features

- Select multiple turrets and compare their cumulative damage.
- Preserve selected turrets in the URL with the `turrets` query parameter.
- Render real attack event timings, including timings such as `1.1s`, `2.2s`, and `3.3s`.
- Support repeated reload patterns with `-1` and `-2` markers.
- Support independent additional damage events through `add`.
- Toggle chart tooltips.
- Apply a debounced damage factor multiplier.
- Show reference lines for light, medium, and heavy hull protection values.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Recharts
- Radix UI

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

```bash
pnpm dev
```

Runs the Vite development server.

```bash
pnpm lint
```

Runs ESLint.

```bash
pnpm build
```

Builds the TypeScript and Vite production output.

```bash
pnpm preview
```

Previews the production build locally.

## Damage Model

Turret data lives in `src/turrets.ts`.

Each turret has a `reloadTime` array. The values are interpreted as relative intervals before each attack, not absolute timestamps.

Examples:

```ts
;[0, 1.1, -1]
```

Attacks at `0s`, then repeats the last normal interval forever: `1.1s`, `2.2s`, `3.3s`, and so on.

```ts
;[1.2, 3.7, -1]
```

The first attack happens after `1.2s`, then repeats `3.7s`.

```ts
;[0, 1, 2, -2]
```

Repeats the whole interval cycle after the initial sequence. If the sequence starts with `0`, that first `0` means the turret is initially loaded and is not repeated in later cycles.

`add` defines independent additional damage events:

```ts
add: [intervalPattern, additionalDamage]
```

The `intervalPattern` follows the same `-1` and `-2` rules as `reloadTime`. Every additional event increases cumulative damage by `additionalDamage`.

## Project Structure

```txt
src/
  features/
    chart.tsx       Chart rendering and damage data generation
    control.tsx     Tooltip and damage factor controls
    grid.tsx        Turret selection grid
  layout/
    main.tsx        Main app state and URL mapping
  turrets.ts        Turret damage, timing, and display data
```

## Data Source

The current values are based on [Encyclopedia of the game «Tanki Online»](https://en.tankiwiki.com/) data for June 4th, 2026 (Update 832).

## License

[MIT](./LICENSE)
