import { Effect } from '@/Effect/Effect'
import { Particle } from '@/Entity/modules/Particle'

export class ParticleEffect extends Effect {
  init() {
    this.entities = Array(10000).fill(0).map((_, index) => new Particle(this, index))
  }

  tick(tickIndex: number) {
    if (tickIndex % 10 === 0)
      this.reflowField()
  }
}
