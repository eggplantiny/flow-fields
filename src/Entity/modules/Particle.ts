import type { Effect } from '@/Effect/Effect'
import { Entity } from '@/Entity/Entity'
import { randomRangeFloat, randomRangeInt } from '@/Utils/random'

export class Particle extends Entity {
  private width = 1
  private height = 1

  private hue: number
  private deltaX: number
  private deltaY: number

  private speed: number
  private angle: number

  private maxLength = 50

  constructor(effect: Effect, index: number) {
    const x = randomRangeInt(0, effect.width)
    const y = randomRangeInt(0, effect.height)

    super(effect, index, x, y)
    this.hue = randomRangeInt(0, 360)
    this.speed = randomRangeFloat(5, 15)
    this.deltaX = 1
    this.deltaY = 1
    this.angle = 0
  }

  public update() {
    const x = Math.floor(this.x / this.effect.cellSize)
    const y = Math.floor(this.y / this.effect.cellSize)
    const index = y * this.effect.cols + x

    this.angle = this.effect.flowField[index]

    this.deltaX = Math.cos(this.angle) * this.speed
    this.deltaY = Math.sin(this.angle) * this.speed
    this.x += this.deltaX
    this.y += this.deltaY
    this.hue = 180 - (this.history.length / this.maxLength) * 360

    if (this.isInBounds())
      this.history.push({ x: this.x, y: this.y })
    else
      this.history.shift()

    if (this.history.length > this.maxLength)
      this.history.shift()
  }

  public draw(context: CanvasRenderingContext2D) {
    // context.fillStyle = '#f2f2f2'
    // context.fillRect(this.x, this.y, this.width, this.height)
    context.strokeStyle = `hsl(${this.hue}, 50%, 50%)`
    const first = this.history.first()
    // const first = this.history[0]

    if (!first)
      return

    context.beginPath()
    context.moveTo(first.x, first.y)
    for (const { x, y } of this.history)
      context.lineTo(x, y)

    context.stroke()
  }
}
