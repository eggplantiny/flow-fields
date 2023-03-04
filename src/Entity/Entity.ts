import type { Effect } from '@/Effect/Effect'

export interface Position {
  x: number
  y: number
}

export abstract class Entity {
  protected index: number
  protected effect: Effect
  protected history: Position[] = []

  protected x: number
  protected y: number

  protected constructor(effect: Effect, index: number, x: number, y: number) {
    this.effect = effect
    this.x = x
    this.y = y
    this.index = index

    this.history.push({ x, y })
  }

  public isInBounds(): boolean {
    return this.x >= 0 && this.x <= this.effect.width && this.y >= 0 && this.y <= this.effect.height
  }

  public abstract update(): void
  public abstract draw(context: CanvasRenderingContext2D): void

  public get hasHistory() {
    return this.history.length >= 0
  }
}
