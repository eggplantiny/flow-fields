import { Effect } from '@/Effect/Effect'
import { Circle } from '@/Entity/modules/Circle'

export class CircleEffect extends Effect {
  init() {
    this.entities = Array(100).fill(0).map(() => new Circle(this))
  }
}
