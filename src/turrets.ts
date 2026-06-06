// src/turrets.ts
// https://en.tankiwiki.com/Turrets
// [June 4th (Update 832)](https://en.tankiwiki.com/Updates)

export type TTurrets = {
  name: string
  color: string
  damage: number
  critical?: number
  add?: number[]
  reloadTime: number[]
  range?: number
  maxRange?: number
  isBurst: boolean
}
// https://en.tankiwiki.com/Firebird#Characteristics
const Firebird: TTurrets = {
  name: 'Firebird',
  color: '#FF6600',
  damage: 300,
  critical: 385,
  add: [4, 150],
  reloadTime: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.375], // 12 shoots in 3s
  range: 25,
  maxRange: 10,
  isBurst: true,
}
// https://en.tankiwiki.com/Freeze#Characteristics
const Freeze: TTurrets = {
  name: 'Freeze',
  color: '#0080FF',
  damage: 300,
  critical: 760,
  reloadTime: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.375], // 16 shoots in 4s
  range: 25,
  maxRange: 10,
  isBurst: true,
}
// https://en.tankiwiki.com/Isida#Characteristics
const Isida: TTurrets = {
  name: 'Isida',
  color: '#13BF4C',
  damage: 260,
  critical: 300,
  reloadTime: [0.25],
  range: 25,
  maxRange: 25,
  isBurst: false,
}
// https://en.tankiwiki.com/Tesla#Characteristics
const Tesla: TTurrets = {
  name: 'Tesla',
  color: '#00D4FF',
  damage: 400,
  critical: 1160,
  reloadTime: [0, 1],
  range: 25,
  maxRange: 25,
  isBurst: false,
}
// https://en.tankiwiki.com/Hammer#Characteristics
const Hammer: TTurrets = {
  name: 'Hammer',
  color: '#609FBF',
  damage: 920,
  critical: 1160,
  reloadTime: [0, 0.7, 0.7, 2.5],
  range: 40,
  maxRange: 25,
  isBurst: false,
}
// https://en.tankiwiki.com/Twins#Characteristics
const Twins: TTurrets = {
  name: 'Twins',
  color: '#55FF00',
  damage: 240,
  critical: 480,
  reloadTime: [0, 0.26],
  range: 125,
  maxRange: 60,
  isBurst: false,
}
// https://en.tankiwiki.com/Ricochet#Characteristics
const Ricochet: TTurrets = {
  name: 'Ricochet',
  color: '#FFE57F',
  damage: 340,
  critical: 480,
  reloadTime: [0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.67, 0.78], // 15 shoots in 7.5s
  range: 125,
  maxRange: 90,
  isBurst: true,
}
// https://en.tankiwiki.com/Smoky#Characteristics
const Smoky: TTurrets = {
  name: 'Smoky',
  color: '#FFCC00',
  damage: 700,
  critical: 900,
  reloadTime: [0, 1.1],
  maxRange: 60,
  isBurst: false,
}
// https://en.tankiwiki.com/Striker#Characteristics
const Striker: TTurrets = {
  name: 'Striker',
  color: '#9999FF',
  damage: 900,
  critical: 1160,
  reloadTime: [0, 1.7],
  isBurst: false,
}
// https://en.tankiwiki.com/Vulcan#Characteristics
const Vulcan: TTurrets = {
  name: 'Vulcan',
  color: '#609FBF',
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
const Thunder: TTurrets = {
  name: 'Thunder',
  color: '#FF8800',
  damage: 900,
  critical: 1160,
  reloadTime: [0, 2],
  maxRange: 90,
  isBurst: false,
}
// https://en.tankiwiki.com/Tsunami#Characteristics
const Tsunami: TTurrets = {
  name: 'Tsunami',
  color: '#FFCC00',
  damage: 700,
  critical: 1160,
  add: [2, 400],
  reloadTime: [0, 1, 2],
  isBurst: false,
}
// https://en.tankiwiki.com/Scorpion#Characteristics
const Scorpion: TTurrets = {
  name: 'Scorpion',
  color: '#FF4040',
  damage: 1160,
  critical: 1400,
  reloadTime: [0, 2.7],
  maxRange: 120,
  isBurst: false,
}
// https://en.tankiwiki.com/Railgun#Characteristics
const Railgun: TTurrets = {
  name: 'Railgun',
  color: '#FFAA00',
  damage: 1400,
  critical: 1740,
  reloadTime: [1.2, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7],
  maxRange: 180,
  isBurst: false,
}
// https://en.tankiwiki.com/Magnum#Characteristics
const Magnum: TTurrets = {
  name: 'Magnum',
  color: '#FF5500',
  damage: 1400,
  critical: 1740,
  reloadTime: [0, 2.5],
  isBurst: false,
}
// https://en.tankiwiki.com/Gauss#Characteristics
const Gauss: TTurrets = {
  name: 'Gauss',
  color: '#00FFAA',
  damage: 700,
  critical: 900,
  reloadTime: [0, 1.3],
  maxRange: 90,
  isBurst: false,
}
// https://en.tankiwiki.com/Shaft#Characteristics
const Shaft: TTurrets = {
  name: 'Shaft',
  color: '#FF4040',
  damage: 700,
  critical: 900,
  reloadTime: [0, 1.8],
  maxRange: 120,
  isBurst: false,
}

export const meleeRangeTurrets: TTurrets[] = [Firebird, Freeze, Isida, Tesla, Hammer]
export const mediumRangeTurrets: TTurrets[] = [Twins, Ricochet, Vulcan, Smoky, Striker, Thunder]
export const longRangeTurrets: TTurrets[] = [Tsunami, Scorpion, Magnum, Railgun, Gauss, Shaft]
export const allTurrets: TTurrets[] = [...meleeRangeTurrets, ...mediumRangeTurrets, ...longRangeTurrets]
export const sort: string[] = allTurrets.map((turret) => turret.name)
