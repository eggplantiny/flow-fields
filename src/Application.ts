import { ParticleEffect } from '@/Effect/modules/ParticleEffect'
import type { Effect } from '@/Effect/Effect'
import { CircleEffect } from '@/Effect/modules/CircleEffect'

export class Application {
  private root: HTMLDivElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private raiId?: number

  private effects: Effect[] = []

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
    this.effects.push(new CircleEffect(this.canvas.width, this.canvas.height))
    this.effects.forEach(effect => effect.init())
  }

  private resize() {
    this.canvas.width = this.root.clientWidth
    this.canvas.height = this.root.clientHeight
  }

  public run() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.effects.forEach((effect) => {
      effect.update()
      effect.render(this.context)
    })

    this.raiId = requestAnimationFrame(() => this.run())
  }

  public destroy() {
    if (this.raiId)
      cancelAnimationFrame(this.raiId)

    window.removeEventListener('resize', () => this.resize())
  }
}
