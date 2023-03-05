import { Effect } from '@/Effect/Effect'
import { Particle } from '@/Entity/modules/Particle'

const ENTITY_COUNT = 1000

export class ParticleEffect extends Effect {
  init() {
    this.reflowField()
    this.entities = Array(ENTITY_COUNT).fill(0).map((_, index) => new Particle(this, index))
  }

  tick() {
    const destroyedCount = ENTITY_COUNT - this.entities.length
    this.entities.push(...Array(destroyedCount).fill(0).map((_, index) => new Particle(this, index)))
  }
}
