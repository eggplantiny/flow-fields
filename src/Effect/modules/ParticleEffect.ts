import { Effect } from '@/Effect/Effect'
import { Particle } from '@/Entity/modules/Particle'

export class ParticleEffect extends Effect {
  init() {
    this.entities = Array(1000).fill(0).map(() => new Particle(this))
  }
}
