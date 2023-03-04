import type { Entity } from '@/Entity/Entity'

export abstract class Effect {
  private readonly _width: number
  private readonly _height: number

  protected entities: Entity[] = []

  constructor(width: number, height: number) {
    this._width = width
    this._height = height
  }

  public update() {
    this.entities.forEach((entity) => {
      entity.update()
    })
  }

  public abstract init(): void

  public render(context: CanvasRenderingContext2D) {
    this.entities.forEach((entity) => {
      entity.draw(context)
    })
  }

  protected get width() {
    return this._width
  }

  protected get height() {
    return this._height
  }
}
