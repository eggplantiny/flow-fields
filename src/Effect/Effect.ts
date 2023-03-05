import type { Entity } from '@/Entity/Entity'

export abstract class Effect {
  public width: number
  public height: number

  private readonly _cellSize = 20
  private _cols: number
  private _rows: number
  private _curve: number
  private _zoom: number
  public flowField: number[] = []

  protected entities: Entity[] = []

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this._curve = 2.1
    this._zoom = 0.13
    this._cols = Math.floor(width / this.cellSize)
    this._rows = Math.floor(height / this.cellSize)
  }

  public abstract tick(tickIndex: number): void

  public update() {
    this.entities.forEach((entity) => {
      entity.update()
    })

    this.entities = this.entities.filter(entity => entity.isInBounds() || entity.hasHistory)
  }

  protected reflowField() {
    this.flowField = []
    for (let y = 0; y < this.rows; y += 1) {
      for (let x = 0; x < this.cols; x += 1) {
        const angle = ((Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve + Math.PI / 4)
        this.flowField.push(angle)
      }
    }
  }

  public abstract init(): void

  private drawGrid(context: CanvasRenderingContext2D) {
    context.save()
    context.strokeStyle = '#f2f2f2'
    context.lineWidth = 0.5

    for (let y = 0; y < this.height; y += this.cellSize) {
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(this.width, y)
      context.stroke()
    }

    // vertical lines
    for (let x = 0; x < this.width; x += this.cellSize) {
      context.beginPath()
      context.moveTo(x, 0)
      context.lineTo(x, this.height)
      context.stroke()
    }
    context.restore()
  }

  private drawFlowField(context: CanvasRenderingContext2D) {
    // draw flow filed in center of each cell not using p5
    context.save()
    context.strokeStyle = '#f2f2f2'
    context.lineWidth = 0.5
    context.translate(this.cellSize / 2, this.cellSize / 2)

    for (let y = 0; y < this.rows; y += 1) {
      for (let x = 0; x < this.cols; x += 1) {
        const index = x + y * this.cols
        const angle = this.flowField[index]

        context.save()
        context.translate(x * this.cellSize, y * this.cellSize)
        context.rotate(angle)
        context.beginPath()
        context.moveTo(0, 0)
        context.lineTo(this.cellSize / 2, 0)
        context.stroke()
        context.restore()
      }
    }
    context.restore()
  }

  public render(context: CanvasRenderingContext2D) {
    // this.drawGrid(context)
    // this.drawFlowField(context)
    this.entities.forEach((entity) => {
      entity.draw(context)
    })
  }

  public get curve() {
    return this._curve
  }

  public get zoom() {
    return this._zoom
  }

  public get cellSize() {
    return this._cellSize
  }

  public get cols() {
    return this._cols
  }

  public get rows() {
    return this._rows
  }
}
