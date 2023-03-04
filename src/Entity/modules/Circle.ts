import { Entity } from '@/Entity/Entity'
import type { Effect } from '@/Effect/Effect'

export class Circle extends Entity {
  private radius = 10
  private speedX = Math.random() * 2 - 1
  private speedY = Math.random() * 2 - 1

  constructor(effect: Effect) {
    const x = Math.floor(Math.random() * effect.width)
    const y = Math.floor(Math.random() * effect.height)

    super(effect, x, y)
  }

  public update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x < 0 || this.x > this.effect.width)
      this.speedX *= -1

    if (this.y < 0 || this.y > this.effect.height)
      this.speedY *= -1
  }

  public draw(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    context.fillStyle = '#f2f2f2'
    context.fill()
    context.closePath()
  }
}
