import { ParticleEffect } from '@/Effect/modules/ParticleEffect'
import type { Effect } from '@/Effect/Effect'
import { DisplayEffect } from '@/Effect/modules/DisplayEffect'

export class Application {
  private root: HTMLDivElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private raiId?: number

  private effects: Effect[] = []

  private tickIndex = 0

  constructor(selector: string) {
    this.root = document.querySelector<HTMLDivElement>(selector)!
    this.canvas = document.createElement('canvas')
    this.root.appendChild(this.canvas)
    this.context = this.canvas.getContext('2d')!

    this.init()
  }

  private init() {
    this.resize()
    window.addEventListener('resize', () => this.resize())

    this.effects.push(new ParticleEffect(this.canvas.width, this.canvas.height))
    this.effects.push(new DisplayEffect(this.canvas.width, this.canvas.height))

    this.effects.forEach(effect => effect.init())
  }

  private resize() {
    this.canvas.width = this.root.clientWidth
    this.canvas.height = this.root.clientHeight
  }

  private update() {
    this.tickIndex += 1

    this.effects.forEach((effect) => {
      effect.tick(this.tickIndex)
      effect.update()
    })
  }

  private animate() {
    this.effects.forEach((effect) => {
      effect.render(this.context)
    })
  }

  private tick() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.update()
    this.animate()

    this.raiId = requestAnimationFrame(this.tick.bind(this))
  }

  public run() {
    this.tick()
  }

  public destroy() {
    if (this.raiId)
      cancelAnimationFrame(this.raiId)

    window.removeEventListener('resize', () => this.resize())
  }
}
