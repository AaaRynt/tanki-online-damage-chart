# 3D坦克炮塔伤害图表

[English](./README.md) │ [简体中文](./README_zh.md) │ [Русский](./README_ru.md)

一个用于在固定10秒时间窗口内比较3D坦克炮塔伤害的小型 React 工具。

图表使用本地数据模型中真实的炮塔攻击时间，而不是按照固定时间间隔对伤害进行采样。用户可以同时选择多个炮塔，每个选中的炮塔都会以阶梯式累计伤害折线显示。

## 功能

- 同时选择多个炮塔并比较累计伤害。
- 使用 `turrets` 查询参数，将选中的炮塔保存在 URL 中。
- 显示真实的攻击事件时间，包括 `1.1s`、`2.2s` 和 `3.3s` 等时间点。
- 使用 `-1` 和 `-2` 标记支持重复装填时间模式。
- 通过 `add` 支持独立的附加伤害事件。
- 开启或关闭图表 Tooltip。
- 使用防抖机制应用伤害倍率。
- 显示轻型、中型和重型底盘防护值的参考线。

## 技术栈

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Recharts
- Radix UI

## 开始使用

安装依赖：

```bash
pnpm install
```

启动本地开发服务器：

```bash
pnpm dev
```

在浏览器中打开 Vite 输出的本地 URL。

## 可用命令

```bash
pnpm dev
```

启动 Vite 开发服务器。

```bash
pnpm lint
```

运行 ESLint。

```bash
pnpm build
```

构建 TypeScript 代码和 Vite 生产环境产物。

```bash
pnpm preview
```

在本地预览生产环境构建结果。

## 伤害模型

炮塔数据位于 `src/turrets.ts`。

每个炮塔都有一个 `reloadTime` 数组。数组中的值表示每次攻击前相对于上一次攻击的时间间隔，而不是绝对时间点。

示例：

```ts
[0, 1.1, -1]
```

第一次攻击发生在 `0s`，之后永远重复最后一个普通间隔，攻击时间依次为 `1.1s`、`2.2s`、`3.3s`，以此类推。

```ts
[1.2, 3.7, -1]
```

第一次攻击发生在 `1.2s`，之后永远重复 `3.7s` 的攻击间隔。

```ts
[0, 1, 2, -2]
```

初始序列结束后，重复整个时间间隔循环。如果序列以 `0` 开头，第一个 `0` 表示炮塔初始处于已装填状态，不会在之后的循环中重复。

`add` 用于定义独立的附加伤害事件：

```ts
add: [intervalPattern, additionalDamage]
```

`intervalPattern` 遵循与 `reloadTime` 相同的 `-1` 和 `-2` 规则。每次附加伤害事件发生时，累计伤害都会增加 `additionalDamage`。

## 项目结构

```txt
src/
  features/
    chart.tsx       图表渲染与伤害数据生成
    control.tsx     Tooltip 和伤害倍率控制
    grid.tsx        炮塔选择网格
  layout/
    main.tsx        应用主要状态和 URL 映射
  turrets.ts        炮塔伤害、攻击时间和显示数据
```

## 数据来源

当前数值基于 [Tanki维基](https://en.tankiwiki.com/) 在 `2026-06-04` 的数据，对应 `Update 832`。

## 许可证

[MIT](./LICENSE)
