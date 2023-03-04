import { Entity } from '@/Entity/Entity'
import type { Effect } from '@/Effect/Effect'

export class DisplayEntity extends Entity {
  constructor(effect: Effect, index: number) {
    const x = (index % effect.cols) * effect.cellSize
    const y = Math.floor(index / effect.cols) * effect.cellSize

    super(effect, x, y)
  }

  public update() {

  }

  public draw(context: CanvasRenderingContext2D) {
    // draw a cell with number of flow field text and border
    // text is center of cell
    const x = Math.floor(this.x / this.effect.cellSize)
    const y = Math.floor(this.y / this.effect.cellSize)
    const index = y * this.effect.cols + x

    context.fillStyle = '#f2f2f2'
    context.strokeStyle = '#f2f2f2'
    context.font = '8px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    context.fillText(this.effect.flowField[index].toFixed(1), this.x + this.effect.cellSize / 2, this.y + this.effect.cellSize / 2)
    context.strokeRect(this.x, this.y, this.effect.cellSize, this.effect.cellSize)
  }
}
