import type { Effect } from '@/Effect/Effect'
import { Entity } from '@/Entity/Entity'

export class Particle extends Entity {
  private x: number
  private y: number
  private width = 10
  private height = 10
  private speedX = 1
  private speedY = 1

  constructor(effect: Effect) {
    super(effect)

    this.x = Math.floor(Math.random() * this.effect.width)
    this.y = Math.floor(Math.random() * this.effect.height)
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
    context.fillRect(this.x, this.y, this.width, this.height)
    context.fillStyle = '#f2f2f2'
    context.closePath()
  }
}
