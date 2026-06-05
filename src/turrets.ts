// src/turrets.ts
// https://en.tankiwiki.com/Turrets
// [June 4th (Update 832)](https://en.tankiwiki.com/Updates)

export type turrets = {
  damage: number
  critical?: number
  add?: number[]
  reloadTime: number[]
  range?: number
  maxRange?: number
  isBurst: boolean
}
// https://en.tankiwiki.com/Firebird#Characteristics
export const Firebird: turrets = {
  damage: 300,
  critical: 385,
  add: [4, 150],
  reloadTime: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.375], // 12 shoots in 3s
  range: 25,
  maxRange: 10,
  isBurst: true,
}
// https://en.tankiwiki.com/Freeze#Characteristics
export const Freeze: turrets = {
  damage: 300,
  critical: 760,
  reloadTime: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.375], // 16 shoots in 4s
  range: 25,
  maxRange: 10,
  isBurst: true,
}
// https://en.tankiwiki.com/Isida#Characteristics
export const Isida: turrets = {
  damage: 260,
  critical: 300,
  reloadTime: [0.25],
  range: 25,
  maxRange: 25,
  isBurst: false,
}
// https://en.tankiwiki.com/Scatter#Characteristics
export const Tesla: turrets = {
  damage: 400,
  critical: 1160,
  reloadTime: [0, 1],
  range: 25,
  maxRange: 25,
  isBurst: false,
}
// https://en.tankiwiki.com/Hammer#Characteristics
export const Hammer: turrets = {
  damage: 920,
  critical: 1160,
  reloadTime: [0, 0.7, 0.7, 2.5],
  range: 40,
  maxRange: 25,
  isBurst: false,
}
// https://en.tankiwiki.com/Flare#Characteristics
export const Twins: turrets = {
  damage: 240,
  critical: 480,
  reloadTime: [0, 0.26],
  range: 125,
  maxRange: 60,
  isBurst: false,
}
// https://en.tankiwiki.com/Ricochet#Characteristics
export const Ricochet: turrets = {
  damage: 340,
  critical: 480,
  reloadTime: [0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.67, 0.78], // 15 shoots in 7.5s
  range: 125,
  maxRange: 90,
  isBurst: true,
}
// https://en.tankiwiki.com/Smoky#Characteristics
export const Smoky: turrets = {
  damage: 700,
  critical: 900,
  reloadTime: [0, 1.1],
  maxRange: 60,
  isBurst: false,
}
// https://en.tankiwiki.com/Quake#Characteristics
export const Striker: turrets = {
  damage: 900,
  critical: 1160,
  reloadTime: [0, 1.7],
  isBurst: false,
}
// https://en.tankiwiki.com/Vulcan#Characteristics
export const Vulcan: turrets = {
  damage: 100,
  critical: 120,
  reloadTime: [
    0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 1,
  ], // 60 shoots in 6s
  maxRange: 90,
  isBurst: false,
}
// https://en.tankiwiki.com/Thunder#Characteristics
export const Thunder: turrets = {
  damage: 900,
  critical: 1160,
  reloadTime: [0, 2],
  maxRange: 90,
  isBurst: false,
}
// https://en.tankiwiki.com/Smoky#Characteristics
export const Tsunami: turrets = {
  damage: 700,
  critical: 1160,
  add: [2, 400],
  reloadTime: [0, 1, 2],
  isBurst: false,
}
// https://en.tankiwiki.com/Smoky#Characteristics
export const Scorpion: turrets = {
  damage: 1160,
  critical: 1400,
  reloadTime: [0, 2.7],
  maxRange: 120,
  isBurst: false,
}
// https://en.tankiwiki.com/Smoky#Characteristics
export const Railgun: turrets = {
  damage: 1400,
  critical: 1740,
  reloadTime: [1.2, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7],
  maxRange: 180,
  isBurst: false,
}
// https://en.tankiwiki.com/Smoky#Characteristics
export const Magnum: turrets = {
  damage: 1400,
  critical: 1740,
  reloadTime: [0, 2.5],
  isBurst: false,
}
// https://en.tankiwiki.com/Smoky#Characteristics
export const Gauss: turrets = {
  damage: 700,
  critical: 900,
  reloadTime: [0, 1.3],
  maxRange: 90,
  isBurst: false,
}
// https://en.tankiwiki.com/Smoky#Characteristics
export const Shaft: turrets = {
  damage: 700,
  critical: 900,
  reloadTime: [0, 1.8],
  maxRange: 120,
  isBurst: false,
}
