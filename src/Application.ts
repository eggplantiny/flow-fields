export class Application {

  private root: HTMLDivElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

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
  }

  private resize() {
    this.canvas.width = this.root.clientWidth
    this.canvas.height = this.root.clientHeight
  }

  public destroy() {
    window.removeEventListener('resize', () => this.resize())
  }
}
