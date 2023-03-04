import type { Effect } from '@/Effect/Effect'
import { Entity } from '@/Entity/Entity'

export class Particle extends Entity {
  private width = 1
  private height = 1
  private speedX = Math.random() * 2 - 1
  private speedY = Math.random() * 2 - 1
  private angle = Math.random() * Math.PI * 2

  private maxLength = Math.floor(Math.random() * 200 + 10)

  constructor(effect: Effect, index: number) {
    const x = Math.floor(Math.random() * effect.width)
    const y = Math.floor(Math.random() * effect.height)

    super(effect, index, x, y)
  }

  public update() {
    const x = Math.floor(this.x / this.effect.cellSize)
    const y = Math.floor(this.y / this.effect.cellSize)
    const index = y * this.effect.cols + x

    this.angle = this.effect.flowField[index]

    this.speedX = Math.cos(this.angle)
    this.speedY = Math.sin(this.angle)
    this.x += this.speedX
    this.y += this.speedY

    if (this.isInBounds())
      this.history.push({ x: this.x, y: this.y })
    else
      this.history.shift()

    if (this.history.length > this.maxLength)
      this.history.shift()
  }

  public draw(context: CanvasRenderingContext2D) {
    context.fillStyle = '#f2f2f2'
    context.strokeStyle = '#f2f2f2'

    context.fillRect(this.x, this.y, this.width, this.height)

    context.beginPath()
    context.moveTo(this.history[0].x, this.history[0].y)
    for (const { x, y } of this.history)
      context.lineTo(x, y)

    context.stroke()
  }
}
