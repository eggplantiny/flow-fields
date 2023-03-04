import type { Effect } from '@/Effect/Effect'

export interface Position {
  x: number
  y: number
}

export abstract class Entity {
  protected effect: Effect
  protected history: Position[] = []

  protected x: number
  protected y: number

  protected constructor(effect: Effect, x: number, y: number) {
    this.effect = effect
    this.x = x
    this.y = y

    this.history.push({ x, y })
  }

  public abstract update(): void
  public abstract draw(context: CanvasRenderingContext2D): void
}
