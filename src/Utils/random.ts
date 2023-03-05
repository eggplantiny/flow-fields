export function randomRangeInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomRangeFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min
}
