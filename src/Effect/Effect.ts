import type { Entity } from '@/Entity/Entity'

export abstract class Effect {
  private readonly _width: number
  private readonly _height: number

  private readonly _cellSize = 20
  private _cols: number
  private _rows: number
  public flowField: number[] = []

  protected entities: Entity[] = []

  constructor(width: number, height: number) {
    this._width = width
    this._height = height
    this._cols = Math.floor(width / this.cellSize)
    this._rows = Math.floor(height / this.cellSize)

    this._init()
  }

  public update() {
    this.entities.forEach((entity) => {
      entity.update()
    })
  }

  private _init() {
    this.flowField = []

    for (let y = 0; y < this.rows; y += 1) {
      for (let x = 0; x < this.cols; x += 1) {
        const angle = Math.cos(x) + Math.sin(y)
        this.flowField.push(angle)
      }
    }

    console.log(this.flowField)
  }

  public abstract init(): void

  public render(context: CanvasRenderingContext2D) {
    this.entities.forEach((entity) => {
      entity.draw(context)
    })
  }

  public get cellSize() {
    return this._cellSize
  }

  public get width() {
    return this._width
  }

  public get height() {
    return this._height
  }

  public get cols() {
    return this._cols
  }

  public get rows() {
    return this._rows
  }
}
