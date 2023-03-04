import type { Effect } from '@/Entity/Effect'

export abstract class Entity {
  protected effect: Effect
  protected constructor(effect: Effect) {
    this.effect = effect
  }
  public abstract update(): void
  public abstract draw(context: CanvasRenderingContext2D): void
}
