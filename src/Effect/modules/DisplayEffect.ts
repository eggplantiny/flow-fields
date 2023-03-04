import { Effect } from '@/Effect/Effect'
import { DisplayEntity } from '@/Entity/modules/Display'

export class DisplayEffect extends Effect {
  init() {
    this.entities = Array(this.cols * this.rows).fill(0).map((_, index) => new DisplayEntity(this, index))
  }
}
